import {connect} from 'cloudflare:sockets';

async function readStreamAsString(readableStream) {
    const reader = readableStream.getReader();
    const decoder = new TextDecoder('utf-8');
    let result = '';
    let done, value;
    try {
        while (true) {
            ({done, value} = await reader.read());
            if (done) {
                break;
            }
            result += decoder.decode(value, {stream: true});
        }
        result += decoder.decode();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    } finally {
        reader.releaseLock();
    }

    return result;
}

async function connectAndReadString(hostname, domain) {
    const tcpAddress = {hostname: hostname, port: 43};
    try {
        const socket = connect(tcpAddress);
        const writer = socket.writable.getWriter()
        const encoder = new TextEncoder();
        const encoded = encoder.encode(domain + "\r\n");
        await writer.write(encoded);
        return socket.readable
    } catch (error) {
        console.log("Error", error)
    }
}

export const whois = async (c) => {
    const {domain} = c.req.query()

    let socketReadable = await connectAndReadString("whois.internic.net", domain)

    let internicWhois = await readStreamAsString(socketReadable)

    let regex = /Registrar WHOIS Server: (\S+)/
    let match = internicWhois.match(regex)

    let result;
    if (match) {
        socketReadable = await connectAndReadString(match[1], domain)
        result = await readStreamAsString(socketReadable)

    } else {
        result = internicWhois
    }
    return c.text(result)
}
