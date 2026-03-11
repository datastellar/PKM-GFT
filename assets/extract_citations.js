const fs = require('fs');
const path = require('path');

const splitDir = path.join(__dirname, 'PKM_GFT_Split');
const outputFile = path.join(__dirname, 'Daftar_Kutipan_Referensi.md');

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
const authorYearRegex = /[A-Z][a-zA-Z]+(?: dkk\.)? \((?:19|20)\d{2}[a-z]?\)/g;

let outputMarkdown = '# Daftar Kalimat dengan Referensi\n\n';

for (const file of allFiles) {
    if (file.includes('DAFTAR PUSTAKA') || file.includes('LAMPIRAN') || file.includes('00_Depan')) {
        continue;
    }

    const content = fs.readFileSync(file, 'utf-8');
    // Split by sentences using simple dot, but wait! Sentences in indonesian might contain "dkk." "e.g."
    // Let's just split by sentences roughly or keep the whole paragraph (line).
    // The markdown lines are usually paragraphs.
    const lines = content.split('\n');

    let fileHasCitation = false;
    let fileOutput = `## File: ${path.relative(splitDir, file).replace(/\\/g, '/')}\n\n`;

    for (const paragraph of lines) {
        if (paragraph.trim().length === 0) continue;

        let foundCitations = [];

        const matches1 = paragraph.match(citationRegex);
        if (matches1) foundCitations.push(...matches1);

        const matches2 = paragraph.match(authorYearRegex);
        if (matches2) foundCitations.push(...matches2);

        if (foundCitations.length > 0) {
            fileHasCitation = true;
            fileOutput += `- **Kutipan:** ${paragraph.trim()}\n`;
            fileOutput += `  - **Referensi:** ${foundCitations.join(', ')}\n\n`;
        }
    }

    if (fileHasCitation) {
        outputMarkdown += fileOutput;
    }
}

fs.writeFileSync(outputFile, outputMarkdown);
console.log('Ekstraksi referensi selesai. Tersimpan di assets/Daftar_Kutipan_Referensi.md');
