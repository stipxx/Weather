if (message.content === `${prefix}tornado`) {
    const embed = new Discord.RichEmbed()
   .setTitle('Definiton of a Tornado:')
	 .setColor('cac640')
   .setDescription('A tornado is a rapidly rotating column of air that is in contact with both the surface of the Earth and a cumulonimbus cloud or, in rare cases, the base of a cumulus cloud. The windstorm is often referred to as a twister, whirlwind or cyclone. Although the word cyclone is used in meteorology to name a weather system with a low-pressure area in the center around which winds blow counterclockwise in the Northern Hemisphere and clockwise in the Southern.Tornadoes come in many shapes and sizes, and they are often visible in the form of a condensation funnel originating from the base of a cumulonimbus cloud, with a cloud of rotating debris and dust beneath it. Most tornadoes have wind speeds less than 110 miles per hour (180 km/h), are about 250 feet (80 m) across, and travel a few miles (several kilometers) before dissipating.')
   message.channel.send(embed);
  message.react("✅");
