if (message.content === `${prefix}hurricane`) {
		const embed = new Discord.RichEmbed()
		.setTitle('Definition of a Hurricane:')
		.setColor('47cc48')
		.setDescription('A tropical cyclone is a rapidly rotating storm system characterized by a low-pressure center, a closed low-level atmospheric circulation, strong winds, and a spiral arrangement of thunderstorms that produce heavy rain. A hurricane is a tropical cyclone that occurs in the Atlantic Ocean and northeastern Pacific Ocean, and a typhoon occurs in the northwestern Pacific Ocean; while in the south Pacific or Indian Ocean, comparable storms are referred to simply as "tropical cyclones" or "severe cyclonic storms".');
  message.channel.send(embed);
    message.react("?");
}
if (message.content === `${prefix}tornado`) {
    const embed = new Discord.RichEmbed()
   .setTitle('Definiton of a Tornado:')
	 .setColor('cac640')
   .setDescription('A tornado is a rapidly rotating column of air that is in contact with both the surface of the Earth and a cumulonimbus cloud or, in rare cases, the base of a cumulus cloud. The windstorm is often referred to as a twister, whirlwind or cyclone. Although the word cyclone is used in meteorology to name a weather system with a low-pressure area in the center around which winds blow counterclockwise in the Northern Hemisphere and clockwise in the Southern.Tornadoes come in many shapes and sizes, and they are often visible in the form of a condensation funnel originating from the base of a cumulonimbus cloud, with a cloud of rotating debris and dust beneath it. Most tornadoes have wind speeds less than 110 miles per hour (180 km/h), are about 250 feet (80 m) across, and travel a few miles (several kilometers) before dissipating.')
   message.channel.send(embed);
  message.react("?");
}
 if (message.content === `${prefix}lowpressure`) {
   const embed = new Discord.RichEmbed()
   .setTitle('Definiton of a Low Pressure:')
   .setColor('c8b16b')
   .setDescription('A low-pressure area, low, or depression, is a region on the topographic map where the atmospheric pressure is lower than that of surrounding locations. Low-pressure systems form under areas of wind divergence that occur in the upper levels of the troposphere. The formation process of a low-pressure area is known as cyclogenesis. Within the field of meteorology, atmospheric divergence aloft occurs in two areas. The first area is on the east side of upper troughs, which form half of a Rossby wave within the Westerlies (a trough with large wavelength that extends through the troposphere). A second area of wind divergence aloft occurs ahead of embedded shortwave troughs, which are of smaller wavelength. Diverging winds aloft ahead of these troughs cause atmospheric lift within the troposphere below, which lowers surface pressures as upward motion partially counteracts the force of gravity.')
   message.channel.send(embed);
  message.react("?");
 }
 if (message.content === `${prefix}highpressure`) {
   const embed = new Discord.RichEmbed()
   .setTitle('Just like a low pressure; ')
   .setColor('c41023')
   .setDescription('A high-pressure area, high or anticyclone is a region where the atmospheric pressure at the surface of the planet is greater than its surrounding environment. Winds within high-pressure areas flow outward from the higher pressure areas near their centers towards the lower pressure areas further from their centers. Gravity adds to the forces causing this general movement, because the higher pressure compresses the column of air near the center of the area into greater density – and so greater weight compared to lower pressure, lower density, and lower weight of the air outside the center. ')
 message.channel.send(embed);
 message.react("?");
}
if (message.content === `${prefix}active hurricanes`) {
    message.channel.send('There is 1 hurricane in the Atlantic, Leslie. pulled from: https://www.nhc.noaa.gov/gtwo.php?basin=epac&fdays=2')
     message.react("?");
}
if (message.content === `${prefix}ats`) {
  message.channel.send('There are 3 tropical storms. 2 in the Atlantic, Micheal and Nadine, and 1 in the Pacific, Serigo. Data pulled from: https://www.nhc.noaa.gov/gtwo.php?basin=epac&fdays=2')
    message.react("?");
}
if (message.content === `${prefix}aod`) {
 message.channel.send ('There are 1 areas of development, 1 in the Atlantic, with a 30% chance of development in the next 5 days. And 1 in the Pacific that has a 20% of development in the next 5 days. Data pulled from: https://www.nhc.noaa.gov/gtwo.php?basin=epac&fdays=2')
   message.react("?");
}
if (message.content === `${prefix}pacificsatellite`) {
const embed = new Discord.RichEmbed()
 .setTitle('Pacific Ocean Satellite from the Weather Center/NHC:')
 .setColor('62e55c')
 .setDescription('https://weather.com/maps/satellite/pacificoceanweathermap')
message.channel.send(embed);
message.react("?");
}
if (message.content === `${prefix}atlanticsatellite`) {
  const embed = new Discord.RichEmbed()
  .setTitle('Atlantic Ocean Satellite from the Weather Center/NHC:')
  .setColor('62e55c')
  .setDescription('https://weather.com/maps/satellite/atlanticoceanweathermap')
  message.channel.send(embed);
 message.react("?");
}
 if (message.content === `${prefix}hurricanenames`) {
   const embed = new Discord.RichEmbed()
   .setTitle('Current hurricane names:')
   .setColor('cf3d3a')
   .setDescription('Fun fact: You cant request to get your name, or any name, a hurricane. List of all the names, and next years names in the Atlantic: https://www.nhc.noaa.gov/aboutnames.shtml')
   message.channel.send(embed);
   message.react("?");
}
if (message.content === `${prefix}retirednames`) {
  message.channel.send('Here is a current list of retired hurricane names in the ATLANTIC only: https://www.wunderground.com/hurricane/retired.asp - i think this might be a little outdated, but its from the weather center.')
}

if (message.content === `${prefix}support`) {
  message.channel.send('JOIN THE WORLD WEATHER BOT SUPPORT SERVER. FIRST ONE TO JOIN AND BE ACTIVE AND FOLLOWING THE RULES FOR 20 MINS, GETS MODERATOR! This will be disabled once we get people joining: https://discord.gg/Muzcqxv https://discord.gg/Muzcqxv https://discord.gg/Muzcqxvhttps://discord.gg/Muzcqxv ')
  message.channel.send('**incase you need it again** https://discord.gg/Muzcqxv')
  message.react("?");
