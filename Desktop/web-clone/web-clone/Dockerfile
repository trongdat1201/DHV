# MINIMAL TEST - Just echo and stay alive
FROM alpine:latest

ENV PORT=8080

CMD sh -c 'echo "========================================"; echo "CONTAINER STARTED SUCCESSFULLY!"; echo "PORT=$PORT"; echo "This container will stay alive and log every 5 seconds"; echo "========================================"; while true; do echo "[$(date)] ALIVE - Container is running on PORT $PORT"; sleep 5; done'
