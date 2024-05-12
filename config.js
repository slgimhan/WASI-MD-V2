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
global.sudo = process.env.SUDO || "94713317339,94713317339";
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
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://wasimdscanner-68feefafb737.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID |eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY1BtckExeGJmZm1qaTZ6YWVWM043OW82RGFYb01aWFNEeHhtTDZ1YktVRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicmNtQjYya1FJb0xxWVRkNWxtZFJYckJ0cjdOVlZqV2w1ekQ3UVpuSHdEVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyRVYvR3E1WHk3ekxOWEc3dnlXR1M2b2VkeHRWaXd4NjRHODIvQmZnUUhVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVVzVjWWVqOVlUbmtxQmxzNXp3VHpqa096cFdoUmpyNjRHWjB5emcybHpBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1OcHBQUlVGYmk3MmVoQjM3UHhyYjFIU0M4MDdxRnJuOUp3eCtJSUJRRVE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdrNkNJV0lSR2puakpIRXlYKzBFeHV6M0NNQmcyZXUwZGFxU0hiVlUxWFU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNExTY0VLZVJubzJKM1JVSFVhMGtzMkxoeDkzNGNqWkQzc010c2JLRVBVcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidXdUWm5Pa3B2VkN0QW8rOCtwbnNOYWp5QU1oZ1V2c0NtM2hSTUhSUWNqVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdGVHpvUzRnb3RqRXptb2dhbC9ZenJvKytsZEhnQzdmamZxR2syK3pXVHZ0K3RVZDZDaFJjUjNiQmNaVFIvdG5lelBKNE4wNEk5ejJkc2JXRUJQNGdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk4LCJhZHZTZWNyZXRLZXkiOiJ3cDYxT29yTlNFb000VE55MUVOTHJ2RUN5T1AyZFFUcCtyMkdJaDQzZkNJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJNTTh1d2Y1MFJSYWttdXVTeF9TLUJBIiwicGhvbmVJZCI6ImUwYTE3OTBlLTRmY2MtNGZiOS1iNDY1LTY4YjUyY2RiYTFjZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjaTBYc0k1aktCNWRvN1RwWnlMUW9nV213L3c9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0VPZjNuUHVNWEIvSCtodkZYTTBSUE9YMTZvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjlIOFpHMzExIiwibWUiOnsiaWQiOiI5NDcxMzMxNzMzOTo1M0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiItIOG0rvCdmbvwnZmw8J2ZsvCdmbogfCB8IPCdmb/wnZmw8J2ZvfCdmoPwnZm38J2ZtPCdmoEgOuODpCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTy9qbmIwRkVMdnZnTElHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiY1c2ZmZWQVhQc0hRL1RTZE92WElRM2J1enBhbytaQmxRa3pBSHhpMDFXST0iLCJhY2NvdW50U2lnbmF0dXJlIjoidk5RNDZ6MXhSWnhLTGJtRVI2cTBGMmUvSG14ZEtWZXV2WlpKVXRtdzBQSm40Tnk2LzRoelBKa0lLc241RFFPcm9YVFg4UWttZlJJTEtSSjI1WmZoQ1E9PSIsImRldmljZVNpZ25hdHVyZSI6InRKRnpJMlZ2NmVPSklBTk50d000Yk1TNGl0aWlMQVcxVm51aFEwd3BNK0FkMlFtcnNadWRVU2tFS0NBZDNCVEFYc1EyYkROdldQa0prYTU1ZVhvNWhRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MTMzMTczMzk6NTNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWEZ1bjMxUUZ6N0IwUDAwblRyMXlFTjI3czZXcVBtUVpVSk13QjhZdE5WaSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxNTQ4NDYxNSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQQkgifQ==|
  ""
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
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
