 if (message.content === `${prefix}lowpressure`) {
   const embed = new Discord.RichEmbed()
   .setTitle('Definiton of a Low Pressure:')
   .setColor('c8b16b')
   .setDescription('A low-pressure area, low, or depression, is a region on the topographic map where the atmospheric pressure is lower than that of surrounding locations. Low-pressure systems form under areas of wind divergence that occur in the upper levels of the troposphere. The formation process of a low-pressure area is known as cyclogenesis. Within the field of meteorology, atmospheric divergence aloft occurs in two areas. The first area is on the east side of upper troughs, which form half of a Rossby wave within the Westerlies (a trough with large wavelength that extends through the troposphere). A second area of wind divergence aloft occurs ahead of embedded shortwave troughs, which are of smaller wavelength. Diverging winds aloft ahead of these troughs cause atmospheric lift within the troposphere below, which lowers surface pressures as upward motion partially counteracts the force of gravity.')
   message.channel.send(embed);
  message.react("?");
