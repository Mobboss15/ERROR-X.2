require("./database/module")

//GLOBAL PAYMENT
global.storename = "ERROR-X.2 "
global.dana = "-"
global.qris = "https://a.top4top.io/p_319465f4i0.jpeg"


// GLOBAL SETTING
global.owner = "27623649420" //masukin no lu
global.namabot = "ERROR-X.2 V4"
global.nomorbot = "27623649420" //masukin no lu
global.namaCreator = "ERROR-X.2 "
global.linkyt = "-"
global.autoJoin = false
global.antilink = false
global.versisc = '4.0.0'

// DELAY JPM
global.delayjpm = 5500

// SETTING PANEL
global.apikey = 'PLTC'
global.capikey = 'PLTA'
global.domain = 'https://domain.com'
global.eggsnya = '15'
global.location = '1'



//GLOBAL THUMB

global.codeInvite = ""
global.imageurl = 'https://i.ibb.co/nBJY4Ny/IMG-20241017-WA0195-1.jpg'
global.isLink = 'https://whatsapp.com/channel/0029VangYOt96H4JhFarL10C'
global.packname = "ERROR-X.2"
global.author = "ERROR-X.2"
global.jumlah = "5"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})