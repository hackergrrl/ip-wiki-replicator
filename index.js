var swarm = require('webrtc-swarm')
var signalhub = require('signalhub')

if (process.argv.length !== 3) {
  console.log("USAGE: ip-wiki-replicator /ipfs/Qmfoobaripwikiroothash")
  process.exit(1)
}

var root = process.argv[2]
var wiki = 'ip-wiki'

var sw = swarm(signalhub(wiki, ['https://signalhub.mafintosh.com']))

sw.on('peer', function (peer, id) {
  peer.send(root)
  console.log('got peer.. wrote!')
})

console.log('ready')
