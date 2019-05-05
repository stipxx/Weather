if (message.content === `${prefix}atlanticsatellite`) {
  const embed = new Discord.RichEmbed()
  .setTitle('Atlantic Ocean Satellite from the Weather Center/NHC:')
  .setColor('62e55c')
  .setDescription('https://weather.com/maps/satellite/atlanticoceanweathermap')
  message.channel.send(embed);
 message.react("?");
