const commands = [
  {
    name: '!aloha',
    func: (nick, channel) => {
      const object = {
        channel: channel,
        msg: nick + ' Aloha!!! _m/'
      }
      return object
    }
  },
  {
    name: '!opa',
    func: (nick, channel) => {
      const object = {
        channel: channel,
        msg: nick + ' Opa! :)'
      }
      return object
    }
  }
]

module.exports = {
  findMessage: (text, nick, channel) => {
    for (const index in commands) {
      const cmd = commands[index]
      if (text.startsWith(cmd.name)) {
        return cmd.func(nick, channel)
      }
    }
  }
}
