const fs = require('fs');

const file = 'C:\\Users\\Acer\\Desktop\\web-clone\\web-clone\\web-clone\\src\\main\\resources\\templates\\news-event\\news-detail.html';
let content = fs.readFileSync(file, 'utf8');

const oldText = 'onerror="this.setAttributeonerror=" this.setAttribute(\'data-error\', 1)"';
const newText = 'onerror="this.src=\'/images/placeholder.jpg\'"';

let count = 0;
while (content.includes(oldText)) {
    content = content.replace(oldText, newText);
    count++;
}

fs.writeFileSync(file, content, 'utf8');
console.log(`Fixed ${count} onerror attributes`);
