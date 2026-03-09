import re

file_path = r'C:\Users\Acer\Desktop\web-clone\web-clone\web-clone\src\main\resources\templates\news-event\news-detail.html'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Simple string replacement
old_text = 'onerror="this.setAttributeonerror=" this.setAttribute(\'data-error\', 1)"'
new_text = 'onerror="this.src=\'/images/placeholder.jpg\'"'

count = content.count(old_text)
content = content.replace(old_text, new_text)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print(f"Fixed {count} onerror attributes")
