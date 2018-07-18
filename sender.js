let $ = require('jquery')
let messages = require('./lib/messages');
let radius = require('./lib/radius');
let dgram = require('dgram');
let client = dgram.createSocket("udp4");
let address = (process.env.AAA_HOST || '0.0.0.0');
let aaa_port = (process.env.AAA_PORT || 1815);
let udp_port = (process.env.UDP_PORT || 49002);
client.bind({
    address: address,
    port: udp_port
});

$('#send-acct-msg').on('click', () => {

    let ip = $('#ip').val();
    let id = $('#id').val();
    let msg_index = $('#msg_index').val();

    sendRadiusMessage(msg_index, ip, id);
})

function sendRadiusMessage(msg_index, ip, id) {
    let message = messages[msg_index];
    message.attributes[1] = ['Framed-IP-Address', ip];
    message.attributes[2] = ['3GPP-IMEISV', id];
    let encoded = radius.encode(message);

    let sent_packets = {};
    sent_packets[message.identifier] = {
        raw_packet: encoded,
        secret: message.secret
    };
    window.alert('Send RADIUS to: ' + address+':'+aaa_port);

    client.send(encoded, 0, encoded.length, aaa_port, address, (err, bytes) => {
        if (err) window.alert(err);
        else window.alert('Accounting Message sent')
    });
}