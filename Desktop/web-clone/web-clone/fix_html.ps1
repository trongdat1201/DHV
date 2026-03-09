$file = 'C:\Users\Acer\Desktop\web-clone\web-clone\web-clone\src\main\resources\templates\news-event\news-detail.html'
$content = [System.IO.File]::ReadAllText($file, [System.Text.Encoding]::UTF8)

$oldPattern = 'onerror="this.setAttributeonerror=" this.setAttribute(''data-error'', 1)"'
$newPattern = 'onerror="this.src=''/images/placeholder.jpg''"'

$count = 0
while ($content.IndexOf($oldPattern) -ge 0) {
    $content = $content.Replace($oldPattern, $newPattern)
    $count++
}

[System.IO.File]::WriteAllText($file, $content, [System.Text.Encoding]::UTF8)
Write-Host "Replaced $count occurrences"
