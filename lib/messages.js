const messages = [{
    code: "Accounting-Request",
    secret: 'radius_secret',
    identifier: 0,
    attributes: [
      ['Acct-Status-Type', 1],
      ['Framed-IP-Address', 'ABC'],
      ['User-Name', 'empty']
    ]
  },
  {
    code: "Accounting-Request",
    secret: 'radius_secret',
    identifier: 0,
    attributes: [
      ['Acct-Status-Type', 2],
      ['Framed-IP-Address', 'ABC'],
      ['User-Name', 'empty']
    ]
  }
];

module.exports = messages;