if (message.content === `${prefix}hurricane`) {
		const embed = new Discord.RichEmbed()
		.setTitle('Definition of a Hurricane:')
		.setColor('47cc48')
		.setDescription('A tropical cyclone is a rapidly rotating storm system characterized by a low-pressure center, a closed low-level atmospheric circulation, strong winds, and a spiral arrangement of thunderstorms that produce heavy rain. A hurricane is a tropical cyclone that occurs in the Atlantic Ocean and northeastern Pacific Ocean, and a typhoon occurs in the northwestern Pacific Ocean; while in the south Pacific or Indian Ocean, comparable storms are referred to simply as "tropical cyclones" or "severe cyclonic storms".');
  message.channel.send(embed);
    message.react("?");
