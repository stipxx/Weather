if (message.content === `${prefix}hurricanenames`) {
   const embed = new Discord.RichEmbed()
   .setTitle('Current hurricane names:')
   .setColor('RANDOM')
   .setDescription('Fun fact: You cant request to get your name, or any name, a hurricane. List of all the names, and next years names in the Atlantic: https://www.nhc.noaa.gov/aboutnames.shtml')
   message.channel.send(embed);
   message.react("?");
