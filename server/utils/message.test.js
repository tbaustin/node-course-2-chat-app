var expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message.js');

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

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var lat = 1;
    var long = 1;
    var from = 'taylor';
    var url = `https://www.google.com/maps?q=${lat},${long}`
    var message = generateLocationMessage(from, lat, long);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, url});
    expect(message.url).toBe(`https://www.google.com/maps?q=1,1`)
  });
});
