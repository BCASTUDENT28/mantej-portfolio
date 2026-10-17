// Adds the Neki Ki Diwar political reel (new "Political Reels" filter). Run once, then reorder_projects.js.
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const FILE = path.join(ROOT, 'public', 'landing-pages', 'kage.html');
let html = fs.readFileSync(FILE, 'utf8');
const ID = 'political-neki-ki-diwar';
if (html.includes(`/videos/work/${ID}.mp4`)) { console.log('already applied'); process.exit(0); }

const s = parseFloat(execSync(`ffprobe -v error -show_entries format=duration -of csv=p=0 "${path.join(ROOT, 'public', 'videos', 'work', ID + '.mp4')}"`).toString());
const dur = `${Math.floor(s / 60)}:${String(Math.round(s % 60)).padStart(2, '0')}`;
const title = 'Neki Ki Diwar — Clothes Donation Drive';
const card = `
      <div class="proj-card" data-cat="political" onclick="openVideoModal('/videos/work/${ID}.mp4', '${title}')" data-rv="up">
        <div class="proj-thumb-wrap vertical">
          <img class="proj-thumb" src="/images/work/${ID}.jpg" alt="${title}" loading="lazy">
          <div class="proj-badge-row">
            <span class="proj-cat-badge">Political Reel</span>
            <span class="proj-dur-badge">${dur} · 9:16</span>
          </div>
          <div class="proj-play-overlay"><div class="proj-play-btn"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M4 2.5L11 7L4 11.5V2.5Z" fill="#fff"/></svg></div></div>
        </div>
        <div class="proj-body">
          <div class="proj-title">${title}</div>
          <p class="proj-desc">Hindi campaign reel for a clothes-donation wall in Rewari (18 October): red hook card with a B/W cutout, Hinglish captions with yellow key words, a calendar beat and a title end card.</p>
          <div class="proj-tools">
            <span class="tool-pill">Cutout Hook</span>
            <span class="tool-pill">Hinglish Captions</span>
            <span class="tool-pill">End Card</span>
          </div>
        </div>
      </div>`;

const anchor = '\n    </div>\n    <div style="margin-top:36px;display:flex;justify-content:center;"';
const i = html.indexOf(anchor);
if (i < 0) throw new Error('grid end not found');
html = html.slice(0, i) + card + html.slice(i);

const cats = [...html.matchAll(/<div class="proj-card" data-cat="(\w+)"/g)].map((m) => m[1]);
html = html.replace(/All Work \(\d+\)/, `All Work (${cats.length})`)
  .replace(/(Event Reels \(\d+\)<\/button>)/, `$1
        <button class="filter-btn" onclick="filterProjects('political', this)">Political Reels (${cats.filter((c) => c === 'political').length})</button>`)
  .replace(/<div><b>\d+<\/b><span>Featured Edits<\/span><\/div>/, `<div><b>${cats.length}</b><span>Featured Edits</span></div>`);
fs.writeFileSync(FILE, html);
console.log('added', ID, dur, '— grid now', cats.length);
