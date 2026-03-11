const fs = require('fs');
const path = require('path');

const splitDir = path.join('C:\\Users\\beryl\\Documents\\Code\\PKM_GFT', 'PKM_GFT_Split');
const outputFile = path.join('C:\\Users\\beryl\\Documents\\Code\\PKM_GFT', 'Daftar_Kutipan_Referensi.md');

function walk(dir) {
    let results = [];
    if (!fs.existsSync(dir)) return results;
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

// Perbaikan Regex: 
// Harus diawali tanda kurung buka '(' 
// Boleh ada huruf, titik atau koma (misal untuk author), tapi BUKAN cuma angka/strip saja (seperti 2025-2045).
// Biasanya referensi ada koma (misal "Heeks, 2003") atau "&", atau "et al.", atau setidaknya huruf alfabet nama orang di dalam kurung atau sebelum tahun.
// Kutipan 1: (Author, 202X) atau (Author et al., 202X) atau (Author dkk., 202X)
const citationRegex = /\([a-zA-Z\s.,&]+(?:19|20)\d{2}[a-z]?\)/g;

// Kutipan 2: Author (202X)
const authorYearRegex = /[A-Z][a-zA-Z]+(?: dkk\.| et al\.)?(?: dan [A-Z][a-zA-Z]+)? \((?:19|20)\d{2}[a-z]?\)/g;

let outputMarkdown = '# Daftar Kalimat dengan Referensi\n\n';

for (const file of allFiles) {
    if (file.includes('DAFTAR PUSTAKA') || file.includes('LAMPIRAN') || file.includes('00_Depan')) {
        continue;
    }

    const content = fs.readFileSync(file, 'utf-8');
    const lines = content.split('\n');

    let fileHasCitation = false;
    let fileOutput = `## File: ${path.relative(splitDir, file).replace(/\\/g, '/')}\n\n`;

    for (const paragraph of lines) {
        if (paragraph.trim().length === 0) continue;

        let foundCitations = [];

        const matches1 = paragraph.match(citationRegex);
        // exclude mere year-ranges that slipped through if any
        if (matches1) {
            matches1.forEach(m => {
                // If it's literally just a year or year range like (2024), we should skip unless there's an author name.
                // We'll trust the regex `[a-zA-Z\s.,&]+` part ensured there is some text.
                if (!m.match(/^\(\d{4}[-\s\d]*\)$/)) {
                    foundCitations.push(m);
                }
            });
        }

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
console.log('Ekstraksi referensi diperbarui. Tersimpan di Daftar_Kutipan_Referensi.md');
