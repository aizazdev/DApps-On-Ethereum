const { create } = require('ipfs-http-client')
const client = create(new URL('http://127.0.0.1:5002'))
const { cid } = await client.add('Hello world!')
console.log(cid);