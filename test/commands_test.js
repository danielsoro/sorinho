const assert = require('assert');
const commands = require('../lib/commands');

describe('!aloha', () => {
    it('should reply @nick Aloha!!! _m/', () => {
        let result  = commands.findMessage("!aloha", "soro", "#linuxers");
        let expected = {
            channel: '#linuxers',
            msg: 'soro Aloha!!! _m/'
        }
        assert.equal(JSON.stringify(expected), JSON.stringify(result));
    });
});

describe('!opa', () => {
    it('should reply @nick Opa! :)', () => {
        let result  = commands.findMessage("!opa", "soro", "#linuxers");
        let expected = {
            channel: '#linuxers',
            msg: 'soro Opa! :)'
        }
       assert.equal(JSON.stringify(expected), JSON.stringify(result));
    });
});