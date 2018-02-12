const irc = require('irc');

const commands = [
	{
		name: "!aloha",
		func: function (nick, channel) {
			client.say(channel, nick + " Aloha!!! _m/");
		}
	},
	{
		name: "!opa",
		func: function (nick, channel) {
			client.say(channel, nick + " Opa! :)");
		}
	}
];

const client = new irc.Client('irc.freenode.net', 'sorinho', {
	channels: ['#linuxers-test'],
	userName: 'sorinho',
	realName: "Soro's son",
	autoConnect: true
});

client.addListener('message', function (nick, to, text, message) {
	for (index in commands) {
		cmd = commands[index];
		channel = message.args[0];

		if (text.startsWith(cmd.name)) {
			cmd.func(nick, channel);
		}
	}
});

client.addListener('error', function (from, to, text, message) {
	client.action(from, "Me deu dor de barriga, volto depois.");
});
