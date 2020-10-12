const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});

app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://dark-six.glitch.me/`);
}, 280000);



const Discord = require("discord.js");
const { Client, RichEmbed } = require('discord.js');  
var { Util } = require('discord.js');
const fs = require("fs");
const pg = require("pg");
const client = new Discord.Client();
const bot = new Discord.Client();
const botname = "Earth Bot";
const ms = require("ms");
const cd = require('countdown');
const db = require('to-time');
const moment = require("moment");
const bettersqlitepool = require('better-sqlite-pool');
const jimp = require ("jimp");
const pretty = require("pretty-ms");
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const simpleytapi = require('simple-youtube-api')
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const util = require("util");
const queue = new Map();
const enmap = require('enmap');
const ytdl = require("ytdl-core");
const xp = JSON.parse(fs.readFileSync("./xp.json", "utf8"));
const profile = JSON.parse(fs.readFileSync("profile.json", "utf8"));
var prefix = "#";
var prfs = "#";
function forEachObject(obj, func) {
  Object.keys(obj).forEach(function(key) {
    func(key, obj[key]);
var dat = JSON.parse("{}");
  });
}

client["on"]('message', message => {
if(message["author"]["bot"]) return undefined;
let args = message["content"]["split"](" ");
if(args[0]["toLowerCase"]() == prefix + `allbots`) {
var n = 1;
let e = new Discord.RichEmbed()
.setAuthor(message["author"]["username"],message["author"]["avatarURL"])
.setColor("BLACK")
.setDescription(`**Found ${message["guild"]["members"]["filter"](e => e["user"]["bot"])["size"] || "0"} bots in this Server**
${message["guild"]["members"]["filter"](e => e["user"]["bot"])["map"](e => `${n++} ${e.user}` || "No Bots")["join"]("\n")}`)
.setFooter(client["user"]["username"],client["user"]["avatarURL"])
.setTimestamp()
message["channel"]["send"](e)
}
})

client.on('ready', () => {
    console.log('I am work');
    console.log(`Logged in as ${client.user.tag}!`);
  client.user.setGame("type #help", "https://www.twitch.tv/alpha");
});



const credits = JSON.parse(fs.readFileSync("./credits.json"));
var time = require("./time.json");

client.on('message', message => {
    let author = message.author.id;
  let args = message.content.split(" ");

  if (!credits[author])
  if (message.author.bot) return;
    credits[author].credits = Math.floor(credits[author].credits + 1);
  
  });
         fs.writeFileSync("./credits.json", JSON.stringify(credits, null, 4));



client.on("message", async message => {
  if (message.author.bot || message.channel.type === "dm") return;
  let args = message.content.split(" ");
  let author = message.author.id;
  if (!credits[author])
    credits[author] = {
      credits: 0
    };


  
  fs.writeFileSync("./credits.json", JSON.stringify(credits, null, 4));
if (args[0].toLowerCase() == `${prefix}credits` ||
args[0].toLowerCase() === `${prefix}credit` ||
args[0].toLowerCase() === `c`

) {
    const mention = message.mentions.users.first() || message.author;
    const mentionn = message.mentions.users.first();
    if (!args[2]) {
      message.channel.send(
        `**:bank: | ${mention.username}, Your :credit_card: balance is \`$${credits[mention.id].credits}\`**`
      );
    } else if (mentionn && args[2]) {
      if (isNaN(args[2])) return message.channel.send(`** :interrobang: | ${message.author.username}, i can't find it!**`);
      if (args[2] < 1) return message.channel.send(`** :interrobang: | ${message.author.username}, type the credit you need to transfer!**`);
      if (mention.bot) return message.channel.send(`**:thinking: | ${message.author.username}, bots do not have credits**`);
      if (mentionn.id === message.author.id)
        return message.channel.send(`**:interrobang: | ${message.author.username}, I can't find User **`);
      if (args[2] > credits[author].credits)
        return message.channel.send(
          `**:thinking: | ${message.author.username}, Your balance is not enough for that!**`
        );
      if (args[2].includes("-")) return message.channel.send(`**:interrobang: | ${message.author.username}, type the credit you need to transfer!**`);
      //let resulting = Math.floor(args[2] - args[2] * (5 / 100));
      let tax = Math.floor(args[2] * (5 / 100));
      let first = Math.floor(Math.random() * 10);
      let second = Math.floor(Math.random() * 10);
      let third = Math.floor(Math.random() * 10);
      let fourth = Math.floor(Math.random() * 10);
      let num = `${ first }${ second }${ third }${ fourth }`;
      let canvas = Canvas.createCanvas(100, 50);
      let ctx = canvas.getContext("2d");
 //let tax = message.content.split(" ")[1]
let Price = message.content.split(" ")[2];
 //tax = tax.replace(/%5/g,"");
let resulting = Math.floor(Price-(Price*(5/100)));      const background = await Canvas.loadImage(
        "https://cdn.discordapp.com/attachments/365219235288317962/656362038884565014/captcha.png"
      );
      ctx.drawImage(background, 6, 3, canvas.width, canvas.height);
      ctx.font = "25px Tahoma";
          ctx.fontSize = "7px";
          ctx.fillStyle = "Yellow";
message.delete();
     //let resulting = Math.floor(Price-(Price*(5/100)));
      message.channel.send(`**${message.author.username}, Transfer Fees \`${tax}\`, Amount :\`${resulting}\` **
   type these numbers to confirm : `
).then(m => {

          ctx.fillText(num, canvas.width / 4.8, canvas.height / 1.5);
          message.channel.sendFile(canvas.toBuffer()).then(s => {
            message.channel
              .awaitMessages(r => r.author.id === message.author.id, {
                max: 1,
                time: 20000,
                errors: ["time"]
              
              }) 

              .then(collected => {

                if (collected.first().content === num) {

                  message.channel.send(
                    `**:moneybag: | ${
                      message.author.username
                    }, has transferred \`$${resulting}\` to ${mentionn}**`
                  );           m.delete();
s.delete();
                  mention.send(
                    `**:atm: | Transfer Receipt**\`\`\`You Have Received \$${resulting}\ From User ${message.author.username}; (ID ${    message.author.id     })\`\`\``);
  m.delete();
s.delete();

                  credits[author].credits += Math.floor(
                    -resulting
                  );
                  credits[mentionn.id].credits += Math.floor(
                    +resulting
                  );
                  fs.writeFileSync(
                    "./credits.json",
                    JSON.stringify(credits, null, 4)
                  );
                } else {
                  m.delete();
                }
              });
          });
        });
    } 
  }
  
  if (args[0].toLowerCase() === `${prefix}daily` ||
 args[0].toLowerCase() === `d`
) {
    let cooldown = 8.64e7;
    let Daily = time[message.author.id];
    if (Daily !== null && cooldown - (Date.now() - Daily) > 0) {
      let times = cooldown - (Date.now() - Daily);
      message.channel.send( `**:rolling_eyes: | ${ message.author.username }, your daily credits refreshes in \'${pretty(times, { verbose: true })}'.\**`);
      fs.writeFile("./time.json", JSON.stringify(time), function(e) {
        if (e) throw e;
      });
    } else {
      let ammount = (300, 500, 100, 200, 120, 150, 350, 320, 220, 250);
      credits[author].credits += ammount;
      time[message.author.id] = Date.now();
      message.channel.send(
        `**:moneybag: ${message.author.username}, You got :dollar: ${ammount} daily credits!**`
      );
      fs.writeFile("./credits.json", JSON.stringify(credits), function(e) {
        if (e) throw e;
      });
    }
  }
});

client.on("message", async message => {
    if (!profile[message.author.id]) 
      profile[message.author.id] = { points: 0, level: 1, rep: 0, tite: "No Title", nextLvlXp: 500 };
    if (message.author.bot) return;
   
  
    profile[message.author.id].points = Math.floor(profile[message.author.id].points + 1);

    if (profile[message.author.id].nextLvlXp <= profile[message.author.id].points) {

        profile[message.author.id].level = Math.floor(profile[message.author.id].level + 1);

        profile[message.author.id].nextLvlXp = Math.floor(profile[message.author.id].points * 2);

        message.channel.send(`**${message.author.username}, You leveld up to __${profile[message.author.id].level}__**`);
    };

    fs.writeFile('profile.json', JSON.stringify(profile), (err) => {
        if (err) console.error(err);
    });
});
 
    client.on('message', message => {
        let mention = message.mentions.users.first() || message.author;
        let tit = message.content.split(" ").slice(1).join(" ");
        if(message.content.startsWith(prefix + "title")) {
        if(!profile[message.author.id].tite) profile[message.author.id].tite = "Hey im using Super"
        if(!tit) {
            message.channel.send("**Usage: <title <something>**");
        } else {
            profile[message.author.id].tite = tit
            message.channel.send(`:white_check_mark:  set title has been changed to ${profile[mention.id].tite}!`)
        }
        }
        fs.writeFile('profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
    })
 
client.on('message', message => {
 
    if(message.content.startsWith(prefix + 'rep')) {
      if(!message.channel.guild) return;
                    moment.locale('en');
                  var getvalueof = message.mentions.users.first()
                    if(!getvalueof) return message.channel.send(`**:mag: |  ${message.author.username}, the user could not be found.    **`);
                       if(getvalueof.id == message.author.id) return message.channel.send(`**${message.author.username}, you cant give yourself a reputation !**`)
    if(profile[message.author.id].reps != moment().format('L')) {
            profile[message.author.id].reps = moment().format('L');
            profile[getvalueof.id].rep = Math.floor(profile[getvalueof.id].rep+1);
         message.channel.send(`** :up:  |  ${message.author.username} has given ${getvalueof} a reputation point!**`)
        } else {
         message.channel.send(`**:stopwatch: |  ${message.author.username}, you can raward more reputation  ${moment().endOf('day').fromNow()} **`)
        }
       }
       fs.writeFile('profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
});

    client.on("message", message => {
  if (message.author.bot) return;
    if(!message.channel.guild) return;
if (message.content.startsWith(prefix + "profile")) {
                               let user = message.mentions.users.first();
         var men = message.mentions.users.first();
            var heg;
            if(men) {
                heg = men
            } else {
                heg = message.author
            }
          var mentionned = message.mentions.members.first();
             var h;
            if(mentionned) {
                h = mentionned
            } else {
                h = message.member
            }
            var ment = message.mentions.users.first();
            var getvalueof;
            if(ment) {
              getvalueof = ment;
            } else {
              getvalueof = message.author;
            }
   var mentionned = message.mentions.users.first();
  let mention = message.mentions.users.first() || message.author;
 
    var client;
      if(mentionned){
          var client = mentionned;
      } else {
          var client = message.author;
 
      }
if (!profile[getvalueof.id]) profile[getvalueof.id] = {points: 0,reps: "No Reps", credits: 1, level: 1,tite: "Earth Bot User", rep: 0, lastDaily: "NOT COLLECTED"};
            let Image = Canvas.Image,
            canvas = new Canvas.createCanvas(300, 300),
            ctx = canvas.getContext('2d');
            fs.readFile("Pic.jpg", function (err, Background) { //امتداد الصورة
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 300, 300); // حجم الصورة
 
})
 
 
 
 
                let url = getvalueof.displayAvatarURL.endsWith(".webp") ? getvalueof.displayAvatarURL.slice(5, -20) + ".png" : getvalueof.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
 
                        //ur name
                        ctx.font = 'bold 16px kathen'; // حجم الخط و نوعه
                        ctx.fontSize = '40px'; // عرض الخط
                        ctx.fillStyle = "#000000"; // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${getvalueof.username}`, 153, 104) // احداثيات اسمك
 
                        //ur name
                        ctx.font = 'bold 16px kathen'; // حجم الخط و نوعه
                        ctx.fontSize = '40px'; // عرض الخط
                        ctx.fillStyle = "#f1f1f1"; // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${getvalueof.username}`, 151, 102) // احداثيات اسمك
 
                        //credit
                        ctx.font = "bold 10px kathen" // نوع الخط وحجمه
                        ctx.fontSize = '10px'; // عرض الخط
                        ctx.fillStyle = "#f1f1f1" // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`$${credits[mention.id].credits}`, 230, 182) // احداثيات المصاري
 

                        ctx.font = "bold 14px kathen" // نوع الخط وحجمه
                        ctx.fontSize = '12px'; // عرض الخط
                        ctx.fillStyle = "#f1f1f1" // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${profile[mention.id].tite}`, 150, 130) // احداثيات المصاري
 
                        //Level
                        ctx.font = "bold 24px kathen" // نوع الخط و حجمه
                        ctx.fontSize = '10px'; // عرض الخط
                        ctx.fillStyle = "#f1f1f1" // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${profile[getvalueof.id].level}`, 70, 78) // احداثيات اللفل
 
                         //info
                        ctx.font = "bold 12px kathen" // ن
                        ctx.fontSize = '15px'; // عرض الخطوع الخط وحجمه
                        ctx.fillStyle = "#000000" // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${profile[getvalueof.id].points}/ ${profile[getvalueof.id].nextLvlXp}  `, 150, 232) // احداثيات النقاط
 
               
                        // REP
                        ctx.font = "bold 20px  kathen";
                        ctx.fontSize = "50px";
                        ctx.fillStyle = "#f1f1f1";
                        ctx.textAlign = "center";
                        ctx.fillText(`+${profile[mention.id].rep}`, 225, 76)
 
                        let Avatar = Canvas.Image;
                        let ava = new Avatar;
 
ava.src = buf;
                        ctx.beginPath();
                        ctx.arc(75, 100, 780, 0, Math.PI*2, true);
                        ctx.closePath();
                        ctx.clip();
                        ctx.drawImage(ava, 110, 29, 82, 60);
 
message.channel.startTyping()
message.channel.sendFile(canvas.toBuffer())
message.channel.stopTyping()
})
})
}
});




const dateFormat = require('dateformat');



client.login(process.env.BOT_TOKEN);

