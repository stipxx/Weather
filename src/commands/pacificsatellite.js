if (message.content === `${prefix}pacificsatellite`) {
const embed = new Discord.RichEmbed()
 .setTitle('Pacific Ocean Satellite from the Weather Center/NHC:')
 .setColor('62e55c')
 .setDescription('https://weather.com/maps/satellite/pacificoceanweathermap')
message.channel.send(embed);
message.react("?");
