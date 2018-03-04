class Command {
  constructor (name, callback) {
    this.name = name
    this.callback = callback
  }
}

const commands = [
  new Command('!opa', (nick, channel) => {
    const object = {
      channel: channel,
      msg: nick + ' Opa! :)'
    }
    return object
  }),
  new Command('!aloha', (nick, channel) => {
    const object = {
      channel: channel,
      msg: nick + ' Aloha!!! _m/'
    }
    return object
  })
]

module.exports = {
  findMessage: (text, nick, channel) => {
    for (const index in commands) {
      const cmd = commands[index]
      if (text.startsWith(cmd.name)) {
        return cmd.callback(nick, channel)
      }
    }
  }
}
