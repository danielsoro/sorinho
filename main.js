const irc = require('irc')
const commands = require('./lib/commands')

const client = new irc.Client('irc.freenode.net', 'sorinho', {
  channels: ['#linuxers-test'],
  userName: 'sorinho',
  realName: "Soro's son",
  autoConnect: true
})

client.addListener('message', function (nick, to, text, message) {
  let result = commands.findMessage(text, nick, to)
  if (result) {
    client.say(result.channel, result.msg)
  }
})

client.addListener('error', function (from, to, text, message) {
  client.action(from, 'Me deu dor de barriga, volto depois.')
})
