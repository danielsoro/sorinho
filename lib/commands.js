const commands = [
	{
		name: "!aloha",
		func: function (nick, channel) {
			object = {
				channel: channel,
				msg: nick + " Aloha!!! _m/"
            }
            return object;
		}
	},
	{
		name: "!opa",
		func: function (nick, channel) {
			object = {
				channel: channel,
				msg: nick + " Opa! :)"
            }
            return object;
		}
	}
];

module.exports = {
    findMessage: (text, nick, channel) => {
        for (index in commands) {
            cmd = commands[index];
            if (text.startsWith(cmd.name)) {
                return cmd.func(nick, channel);
            }
        }
    }
}