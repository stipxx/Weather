if (message.content === `${prefix}highpressure`) {
   const embed = new Discord.RichEmbed()
   .setTitle('Just like a low pressure; ')
   .setColor('c41023')
   .setDescription('A high-pressure area, high or anticyclone is a region where the atmospheric pressure at the surface of the planet is greater than its surrounding environment. Winds within high-pressure areas flow outward from the higher pressure areas near their centers towards the lower pressure areas further from their centers. Gravity adds to the forces causing this general movement, because the higher pressure compresses the column of air near the center of the area into greater density – and so greater weight compared to lower pressure, lower density, and lower weight of the air outside the center. ')
 message.channel.send(embed);
 message.react("?");
