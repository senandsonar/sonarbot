module.exports = {
	name: 'emo',
	description: 'emo!',
	execute(message, args) {
        var s = args;
		message.channel.send(args);
	},
};