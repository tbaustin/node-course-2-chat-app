var expect = require('expect');
var {generateMessage} = require('./message.js');

describe('generateMessage', () => {
  it('should generate the correct message Object', () => {
    var message = generateMessage('tbaustin', 'how are you doing today');

    expect(message).toInclude({
      from: message.from,
      text: message.text
    });
    expect(message.createdAt).toBeA('number');

  });
});
