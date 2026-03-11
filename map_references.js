const fs = require('fs');
const path = require('path');

const citationsFile = path.join(__dirname, 'Daftar_Kutipan_Referensi.md');
const bibliographyFile = path.join(__dirname, 'PKM_GFT_Split', 'DAFTAR PUSTAKA', '00_Pengantar.md');
const outputFile = path.join(__dirname, 'Mapping_Referensi.md');

const citationsContent = fs.readFileSync(citationsFile, 'utf-8');
const biblioContent = fs.readFileSync(bibliographyFile, 'utf-8');

// Parse Bibliography
const biblioLines = biblioContent.split('\n').filter(line => line.trim().length > 0 && !line.startsWith('#'));
const biblioItems = [];
let currentItem = "";
const yearPattern = /\b(19|20)\d{2}\b/;

for (const line of biblioLines) {
    if (yearPattern.test(line) && currentItem !== "") {
        if (currentItem.trim() !== "") biblioItems.push(currentItem.trim());
        currentItem = line;
    } else {
        currentItem += " " + line.trim();
    }
}
if (currentItem.trim() !== "") biblioItems.push(currentItem.trim());

biblioItems.length = 0;
for (const line of biblioLines) {
    if (line.trim().length > 5 && !line.startsWith('#')) {
        biblioItems.push(line.trim());
    }
}

const lines = citationsContent.split('\n');
let outputMarkdown = '# Hasil Mapping Kutipan ke Daftar Pustaka\n\n*(Gunakan tanda centang [x] di bawah ini untuk menandai referensi yang sudah diverifikasi manual)*\n\n';
let currentFile = '';

for (const line of lines) {
    if (line.startsWith('## File:')) {
        currentFile = line;
        outputMarkdown += `\n${currentFile}\n\n`;
    } else if (line.startsWith('- **Kutipan:**')) {
        outputMarkdown += `${line}\n`;
    } else if (line.startsWith('  - **Referensi:**')) {
        const refString = line.replace('  - **Referensi:** ', '').trim();
        const refsMatches = refString.split(/,(?![^()]*\))/).map(r => r.replace(/[()]/g, '').trim());

        outputMarkdown += `  - **Kutipan Ditemukan:** ${refString}\n`;

        for (let refToken of refsMatches) {
            let searchAuthor = "";
            let searchYear = "";

            const matchYear = refToken.match(/\b(?:19|20)\d{2}[a-z]?\b/);
            if (matchYear) {
                searchYear = matchYear[0];
                searchAuthor = refToken.replace(searchYear, '').replace(/,/g, '').trim();
                searchAuthor = searchAuthor.replace('dkk.', '').replace('&', '').trim();
            } else {
                searchAuthor = refToken;
            }

            let matchedEntries = [];
            for (const item of biblioItems) {
                const itemDatalower = item.toLowerCase();
                let isMatch = false;

                if (searchYear && searchAuthor) {
                    const authorParts = searchAuthor.split(' ').filter(p => p.length > 2);
                    let authorMatched = authorParts.length > 0 ? true : false;
                    for (const part of authorParts) {
                        if (!itemDatalower.includes(part.toLowerCase())) {
                            authorMatched = false;
                            break;
                        }
                    }
                    if (authorMatched && itemDatalower.includes(searchYear.toLowerCase())) {
                        isMatch = true;
                    }
                } else if (searchYear && !searchAuthor) {
                    if (itemDatalower.includes(searchYear.toLowerCase())) {
                        isMatch = true;
                    }
                } else if (!searchYear && searchAuthor) {
                    const authorParts = searchAuthor.split(' ').filter(p => p.length > 2);
                    let authorMatched = authorParts.length > 0 ? true : false;
                    for (const part of authorParts) {
                        if (!itemDatalower.includes(part.toLowerCase())) {
                            authorMatched = false;
                            break;
                        }
                    }
                    if (authorMatched) isMatch = true;
                }

                if (isMatch) {
                    matchedEntries.push(item);
                }
            }

            if (matchedEntries.length > 0) {
                outputMarkdown += `  - [ ] **Daftar Pustaka Terkait [${refToken}] (${matchedEntries.length} referensi potensial):**\n`;
                for (let i = 0; i < matchedEntries.length; i++) {
                    outputMarkdown += `      - ${matchedEntries[i]}\n`;
                }
            } else {
                outputMarkdown += `  - [ ] **Daftar Pustaka Terkait [${refToken}]**: ❌ TIDAK DITEMUKAN PADA DAFTAR PUSTAKA\n`;
            }
        }
        outputMarkdown += '\n';
    }
}

fs.writeFileSync(outputFile, outputMarkdown);
console.log('Mapping referensi selesai. Checklist ditambahkan.');
