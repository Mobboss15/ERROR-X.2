require("./global")

const mess = {
   wait: "`[ # ] wait for the process to complete`",
   success: "`[ # ] completed`",
   on: "*`[ On Feature ]` - on*", 
   off: "*`[ Off Feature ]` - Off*",
   query: {
       text: "`[ # ] wheres the text?`",
       link: "`[ # ] whers the link??`",
   },
   error: {
       fitur: "`[ # ] Talk to my owner`"charlie or mr smile boss,
   },
   only: {
       group: "`[ # ] group`",
       private: "`[ # ] private`",
       owner: "`[ # ] owner`2349135615687",
       admin: "`[ # ] admin`",
       badmin: "`[ # ] bot must be admin`",
       premium: "`[ # ] sorry 😂you not a premium user`",
   }
}

global.mess = mess

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
