//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/fee7af11b4edf8eb7c272.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923135673658,923192173398";
global.owner = process.env.OWNER_NUMBER || "94713317339";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "true";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://wasimdscanner-68feefafb737.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID |eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0VXME56WTVkdFp0QXlZU1dMT0dYWHB3NHJGcEhhSHpjYXZ6U1JRNWsxUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNE1DZGlrc3FXZ0diNWthb201dUFKaHYvdWRwdzdGNEJ1bVFOSjdySEh4dz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzSEF4RFVZMXVOZlFnZzVJQWU1eWhXbFFHZFZFQUZweU9YY0IxeU9yU0c4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnYjlzNGZSZEN6WmhjZ0h0bUtPbUwxSE1RV21TWlNPT2hWbnFIMlM0R2pVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdPSktBY0FKL1lMZm9lWDBqRm5hc0RRU2F3K3AvNGg5OWhQMkhLeHRFM0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJqTW11ZGFSMXgyYm9xUmRwUHJUdHpvUGJxOTFoRldUOUY5ZU44ZzA3QjA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0FrZmxFc3VMSEZWL1I1V09wRHdvVm9pUlRFQXliVUlBbi8yTjE0cTJrST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidG55cG5LRVZqUU1qWU45UlRqdXB1MlRtMHpRZXZkY05CSmI1ZGZvb2RtOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InprVVM2VTVQalBIUTgvdU9WRGkyNmovSEN1OVdqMkMzbkdDWEFVRUNXQXUwK1RZcnYrK0xkdDNkcVNJdzMxK3V5RTFoNXBNUXdVNGVSMFN4aW5SbkJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTcwLCJhZHZTZWNyZXRLZXkiOiJ4U1ZtZU5DWTlHM3g4V2dRL2k4R3c3cnFGeEtsMlBsNXJpdUhaZzRiaWxZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJlZk1ZSmtTbVItR1ZSNGJrUU9rbURRIiwicGhvbmVJZCI6IjhiZjgzOTI0LWVlMjYtNGQ1NS1iMzk0LTljYTNkOGFiYzgzMiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiTGoxdnhIS253TGNRbGZoTkdJZkVRS1crY0E9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidSs2MSt0REk4NWpWdlVqSlBKRm1hR3czVGpvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjNRU1NCRU5GIiwibWUiOnsiaWQiOiI5NDcxMzMxNzMzOTo3MEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiItIOG0rvCdmbvwnZmw8J2ZsvCdmbogfCB8IPCdmb/wnZmw8J2ZvfCdmoPwnZm38J2ZtPCdmoEgOuODpCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUExqbmIwRkVQYWRnN0lHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiY1c2ZmZWQVhQc0hRL1RTZE92WElRM2J1enBhbytaQmxRa3pBSHhpMDFXST0iLCJhY2NvdW50U2lnbmF0dXJlIjoiUm44cUFpOHQyZHlRWmtsRlFTVFhVdTdNM3dvNUdPbU9adE5PZmZlTmdNVEJyQkRkcXNZOU4xZ3pCYzczOXRwSFRoRWErVXMva3V3WEhyTnNWRkpiQUE9PSIsImRldmljZVNpZ25hdHVyZSI6InowMXFWOHU2N254cFhobUhLbFhjenFQdGFmVGV5M1pjN2s3MWhpOUl5ZENJd1pDeERLTlJZNkJ2ZTZPWGlMTGc5TURLNXJrRzVsUnRPUlhlOG9EekNnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MTMzMTczMzk6NzBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWEZ1bjMxUUZ6N0IwUDAwblRyMXlFTjI3czZXcVBtUVpVSk13QjhZdE5WaSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxNTUyMzMzMiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQQkkifQ==|
  ""
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐆𝐈𝐌𝐇𝐀𝐍-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐆𝐈𝐌𝐇𝐀𝐍-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
