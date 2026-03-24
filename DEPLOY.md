# Deployment Guide — iatai.dhv.edu.vn

## Architecture

```
GitHub (push to main)
  → GitHub Actions (build Docker image)
    → GHCR (store image)
      → Ubuntu Server (docker compose pull & up)
        → Nginx (reverse proxy, SSL)
          → https://iatai.dhv.edu.vn
```

## Files Overview

| File | Purpose |
|------|---------|
| `Dockerfile` | Multi-stage build (Java 21) |
| `docker-compose.yml` | Run app + MySQL together (used on server) |
| `.github/workflows/deploy.yml` | CI/CD pipeline |
| `.env.example` | Environment variable reference |
| `nginx/dhv-web.conf` | Nginx site config |

---

## 1. Server Setup (One-time)

### 1.1 Install Docker

```bash
sudo apt update
sudo apt install -y docker.io docker-compose-plugin
sudo systemctl enable docker && sudo systemctl start docker
sudo usermod -aG docker $USER
# Log out and back in for group change to take effect
```

### 1.2 Create app directory

```bash
sudo mkdir -p /opt/dhv
sudo chown $USER:$USER /opt/dhv
```

### 1.3 Install & Configure Nginx

```bash
sudo apt install -y nginx
sudo cp nginx/dhv-web.conf /etc/nginx/sites-available/dhv-web
sudo ln -sf /etc/nginx/sites-available/dhv-web /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t && sudo systemctl restart nginx
```

### 1.4 SSL Certificate (Let's Encrypt)

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d iatai.dhv.edu.vn
```

Certbot auto-renews via systemd timer. Verify with:

```bash
sudo certbot renew --dry-run
```

### 1.5 Firewall

```bash
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
```

---

## 2. GitHub Setup

### 2.1 Add Repository Secrets

Go to **Settings > Secrets and variables > Actions > New repository secret** and add:

| Secret | Value | Example |
|--------|-------|---------|
| `SERVER_HOST` | Server IP | `103.176.179.81` |
| `SERVER_USER` | SSH username | `ubuntu` |
| `SERVER_SSH_KEY` | Full private SSH key content | Contents of `~/.ssh/id_ed25519` |
| `GHCR_USERNAME` | Your GitHub username | `kieutv` |
| `GHCR_TOKEN` | GitHub PAT with `read:packages` scope | `ghp_xxxx` |
| `DB_PASSWORD` | Database password | `YOUR_SECURE_PASSWORD` |

### 2.2 Create the GHCR Token

1. Go to **GitHub > Settings > Developer settings > Personal access tokens > Tokens (classic)**
2. Click **Generate new token (classic)**
3. Select scopes: `read:packages`, `write:packages`
4. Copy the token and save it as `GHCR_TOKEN` secret

### 2.3 Make GHCR Package Public (Optional)

After the first deploy, go to your **GitHub profile > Packages > Package settings** and set visibility to **Public** to skip GHCR login on the server.

---

## 3. Deploy

### Automatic (CI/CD)

Every push to `main` triggers the pipeline automatically:

```bash
git add .
git commit -m "deploy changes"
git push origin main
```

The pipeline will:
1. Build Docker image and push to GHCR
2. Copy `docker-compose.yml` to server at `/opt/dhv/`
3. Create `.env` with secrets
4. Pull latest image and restart with `docker compose up -d`

Monitor at: **GitHub repo > Actions tab**

### Manual Deploy on Server

```bash
cd /opt/dhv

# Login to GHCR
echo "YOUR_GHCR_TOKEN" | docker login ghcr.io -u YOUR_GITHUB_USERNAME --password-stdin

# Pull and restart
docker compose pull app
docker compose up -d
```

---

## 4. Local Development

```bash
# Copy env example
cp .env.example .env
# Edit with your local MySQL credentials
nano .env

# Run with Maven
./mvnw spring-boot:run
```

Uploads are saved to `./uploads/` by default (configurable via `UPLOAD_DIR` env var).

---

## 5. Maintenance

### View Logs

```bash
cd /opt/dhv
docker compose logs -f app
```

### Restart Application

```bash
cd /opt/dhv
docker compose restart app
```

### Check Status

```bash
docker compose ps
curl -I http://localhost:8080
```

### Database Backup

```bash
cd /opt/dhv
docker compose exec mysql mysqldump -u root -p DHV > backup_$(date +%Y%m%d).sql
```

### Database Restore

```bash
cd /opt/dhv
docker compose exec -T mysql mysql -u root -p DHV < backup_20260323.sql
```

### Update SSL Certificate

Certbot handles this automatically. To force renewal:

```bash
sudo certbot renew --force-renewal
```

---

## 6. Data Persistence

| Data | Stored in | Survives redeploy? |
|------|-----------|-------------------|
| Database | Docker volume `dhv_mysql_data` | Yes |
| Uploaded images | Docker volume `dhv_upload_data` | Yes |
| App code | Docker image (rebuilt each deploy) | N/A |

To back up Docker volumes:

```bash
# Database
docker run --rm -v dhv_mysql_data:/data -v $(pwd):/backup alpine tar czf /backup/mysql_backup.tar.gz /data

# Uploads
docker run --rm -v dhv_upload_data:/data -v $(pwd):/backup alpine tar czf /backup/uploads_backup.tar.gz /data
```

---

## 7. Troubleshooting

| Problem | Solution |
|---------|----------|
| App won't start | `docker compose logs app` — check DB connection |
| 502 Bad Gateway | Check if container is running: `docker compose ps` |
| Can't connect to MySQL | `docker compose logs mysql` — check if healthy |
| GHCR pull fails | Check `GHCR_TOKEN` has `read:packages` scope |
| SSH deploy fails | Verify `SERVER_SSH_KEY` is the **private** key, not public |
| Port conflict | Check nothing else uses 8080: `sudo lsof -i :8080` |
| Uploads missing after deploy | Check volume exists: `docker volume ls \| grep upload` |
