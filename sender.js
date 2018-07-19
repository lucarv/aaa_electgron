let $ = require('jquery');
let dgram = require('dgram');
let messages = require('./lib/messages');
let radius = require('./lib/radius');
let address = process.env.AAA_HOST || '192.168.1.11';
let client = dgram.createSocket('udp4');
client.bind(1815);

$('#send-acct-msg').on('click', () => {
	let ip = $('#ip').val();
	let id = $('#id').val();
	let msg_index = $('#msg_index').val();

	sendRadiusMessage(msg_index, ip, id);
});

function sendRadiusMessage(msg_index, ip, id) {
	let message = messages[msg_index];
	message.attributes[1] = ['Framed-IP-Address', ip];
	message.attributes[2] = ['3GPP-IMEISV', id];
	let encoded = radius.encode(message);
	console.log(encoded.toString());

	client.send(encoded, 1815, address, err => {
		if (err) window.alert(err);
	});
}
