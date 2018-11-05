if (message.content === `${prefix}serverinfo`) {
 const serverembed = new Discord.RichEmbed()
 .setColor("#7289DA")
 .addField("Server Stats/Information:")
 .addField("Guild ID", message.guild.id, true)
 .addField("Guild Name", message.guild.name, true)
 .addField("Server Owner", message.guild.owner.user.tag, true)
 .addField("Region", message.guild.region, true)
 .addField("Channels", message.guild.channels.size, true)
 .addField("Members", message.guild.memberCount, true)
 .addField("Humans", message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size, true)
 .addField("Bots", message.guild.members.filter(m => m.user.bot).size, true)
 .addField("Guild Roles", message.guild.roles.size, true);
 message.channel.send(serverembed);
  message.react("✅");
