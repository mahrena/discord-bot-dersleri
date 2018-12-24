const Discord = require("discord.js"); // discord.js kütüphanemizi (library) kodumuzda "Discord" değişkenine atıyoruz,
const client = new Discord.Client(); // discord.js kütüphanesindeki "Client" objesini "client" değişkenine atıyoruz,
const ayarlar = require("./ayarlar.json");

var prefix = ayarlar.prefix;

client.on('ready', () => { // client (botumuz) hazır olduğunda
    client.user.setActivity(`Discord Bot Dersleri ${prefix}ping`, {type: "WATCHING" })
  console.log(`BOT Giriş Yaptı! Giriş Yapılan Bot: ${client.user.tag}`); // konsola "Hazırım" yazsın
});

client.on('message', async mesaj => { // client (botumuz) mesaj aldığında, bu mesaj "mesaj" değişkenine atansın,
  if (mesaj.content === prefix + 'ping') { // eğer "mesaj"'ın içeriği prefiximiz ile "ping" ise
const msg = await mesaj.channel.send("Bekle biraz. Gerekli verileri hesaplıyorum... 🤔");
  var ping = Math.round(mesaj.createdTimestamp - msg.createdTimestamp)

  if(ping < 0) {
      var ping = Math.round(msg.createdTimestamp - mesaj.createdTimestamp)
    mesaj.reply(`Pingim: ${client.ping} Mesaj Gecikme Sürem: ${ping}`); // botumuz mesaja "Pong!" cevabını versin.
  }
}
});

client.on('message', mesaj => {
    if (mesaj.content === prefix + 'sahibim') {
        mesaj.reply(`Sahip İsim+Discrim: ${client.users.get(ayarlar.sahip).tag} \nSahip:<@${ayarlar.sahip}>(${ayarlar.sahip})`)
    }
});

client.on('message', mesaj => {
    if(mesaj.content === 'sa') {
        mesaj.reply("Aleyküm Selam Hoşgeldin!")
    }
})

client.on('message', mesaj => {
    if(mesaj.content === 'sea') {
        mesaj.reply("Aleyküm Selam Hoşgeldin!")
    }
})


client.login(ayarlar.token); // botumuzun tokeni (kimliği) ile giriş yapalım