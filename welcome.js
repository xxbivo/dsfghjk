var Discord = require('discord.js');
var fs = require('fs');
var client = new Discord.Client();
client.on("guildMemberAdd", member => {
        if(member.guild.id === "441615240006729728") { 
  const channel = member.guild.channels.find('id', '617008886796517377'); 
if (!channel) return;
channel.send(`**<@${member.user.id}> Welcome To __Gate Server__  ** ❤️ `)  
}});
client.on("guildMemberRemove", member => {
        if(member.guild.id === "441615240006729728") { 
  const channel = member.guild.channels.find('id', '617008886796517377'); 
if (!channel) return;
  channel.send(`**${member.user.tag} Left The Server  ** 😭 `) 
}});
client.login('Token');