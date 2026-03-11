const fs = require('fs');
const path = require('path');

const splitDir = path.join(__dirname, 'PKM_GFT_Split');
const outputFile = path.join(__dirname, 'Daftar_Kutipan_Referensi.md');

// Simple recursive directory reader
function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else {
            if (file.endsWith('.md')) {
                results.push(file);
            }
        }
    });
    return results;
}

const allFiles = walk(splitDir);
const citationRegex = /\([^)]*(?:19|20)\d{2}[a-z]?[^)]*\)/g;
let outputMarkdown = '# Daftar Kalimat dengan Referensi\n\n';

for (const file of allFiles) {
    // Skip DAFTAR PUSTAKA and LAMPIRAN if we just want content chapters
    if (file.includes('DAFTAR PUSTAKA') || file.includes('LAMPIRAN') || file.includes('00_Depan')) {
        continue;
    }

    const content = fs.readFileSync(file, 'utf-8');
    const lines = content.split('\n');
    let fileHasCitation = false;
    let fileOutput = `## File: ${path.relative(splitDir, file).replace(/\\/g, '/')}\n\n`;

    for (const line of lines) {
        if (line.trim().length === 0) continue;

        const citations = line.match(citationRegex);
        if (citations) {
            fileHasCitation = true;
            fileOutput += `- **Kutipan:** ${line.trim()}\n`;
            fileOutput += `  - **Referensi:** ${citations.join(', ')}\n\n`;
        } else {
            // Sometimes citations are not in parentheses, but let's stick to standard (Author, Year) format for now
            // Another common citation is Author (Year)
            const authorYearRegex = /[A-Z][a-zA-Z]+(?: dkk\.)? \((?:19|20)\d{2}[a-z]?\)/g;
            const altCitations = line.match(authorYearRegex);
            if (altCitations) {
                fileHasCitation = true;
                fileOutput += `- **Kutipan:** ${line.trim()}\n`;
                fileOutput += `  - **Referensi:** ${altCitations.join(', ')}\n\n`;
            }
        }
    }

    if (fileHasCitation) {
        outputMarkdown += fileOutput;
    }
}

fs.writeFileSync(outputFile, outputMarkdown);
console.log('Ekstraksi referensi selesai. Tersimpan di Daftar_Kutipan_Referensi.md');
