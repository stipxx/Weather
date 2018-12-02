if (message.content === `${prefix}help`) {
      const Embed = new Discord.RichEmbed()
          .setColor('#0099ff')
          .setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdnwt36ZjUGckF5b0VWMdpxwq82Xooxn2Au_0KoEsWUMxes7ZP')
          .setURL('')
          .setAuthor('World Weather Help Menu', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdnwt36ZjUGckF5b0VWMdpxwq82Xooxn2Au_0KoEsWUMxes7ZP0', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdnwt36ZjUGckF5b0VWMdpxwq82Xooxn2Au_0KoEsWUMxes7ZP')
          .setDescription('This help menu gives you a list of commands, and some things to note about the bot.')
          .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdnwt36ZjUGckF5b0VWMdpxwq82Xooxn2Au_0KoEsWUMxes7ZP')
          .addField('Working Commands:', 'help,  hurricane, ats, aod, active hurricanes, tornado, pacificsatellite, atlanticsatellie, tornado, lowpressure, highpressure, hurricanenames, retirednames, support, ping, botinfo, and serverinfo. More coming soon!')
          .addBlankField()
          .addField('Notes: ', 'Data for active hurricanes and anything real time, is likely false. The information gets pulled here every 2-7 hours. Most of it will likely be false, and is updated, handmade whenver im online. However, most of the time this IS real. ill try to fix this some other time.', true)
          .addField('If you run into any issues or have ideas:', 'Please join the support server: https://discord.gg/2yNVb8y. Give me ideas there. You can DM me, but I likely wont get to them because I have notifs off and will be too much to handle.', true)
          .addField('Bot website:', ': https://twitter.com/WorldWeatherDev', true)
          .setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdnwt36ZjUGckF5b0VWMdpxwq82Xooxn2Au_0KoEsWUMxes7ZP')
          .setTimestamp()
          .setFooter('Bot Message', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdnwt36ZjUGckF5b0VWMdpxwq82Xooxn2Au_0KoEsWUMxes7ZP');
      message.channel.send(Embed);
