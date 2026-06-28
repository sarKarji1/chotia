/*
   ✦ ✦ ✦   S M D - M I N I   ✦ ✦ ✦

─────────────────────────────────────────────────────────────
📛 Project   : SMD-MiNi
👤 Creator   : MRSHABAN
🌐 GitHub    : https://github.com/iTx-Sarkar
📱 Contact   : https://t.me/@bandaheali
📢 Channel   : https://whatsapp.com/channel/0029VaDaBJGJUM2jS0z59S3s
🗓 Release   : 12 • Aprail • 2026 | 12:00 PM
─────────────────────────────────────────────────────────────

//   ⭐ PROUDLY MADE IN PAKISTAN ⭐
*/

// Bnao Dost Aur Dushman Ko Dhnwan Tb Hoja Asli Ke Pehchan
import axios from "axios";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(import.meta.url);

const LOCAL_FILE = path.join(__dirname, "cdn-smd-mini.js");

// Self-executing async function
(async () => {
  try {
    const url = `https://bandaheali-cdn.koyeb.app/smd/smd-mini-v5.js`;
    
    const { data } = await axios.get(url, {
      timeout: 15000
    });

    if (!data) throw new Error("Empty script received");
    fs.writeFileSync(LOCAL_FILE, data);
    
    // Dynamic import for ESM
    await import(`${LOCAL_FILE}?update=${Date.now()}`);

  } catch (err) {
    console.error("❌ CDN Loader Error:", err.message);
    if (fs.existsSync(LOCAL_FILE)) {
      // Fallback to local file
      await import(`${LOCAL_FILE}?update=${Date.now()}`);
    }
  }
})();
