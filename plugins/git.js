/* Copyright (C) Aᴊx-Aʙᴜ
Mwonu credits kalayalle
Sana-Aᴊx-Aʙᴜ
*/

const Sana = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Sana.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://i.imgur.com/71Jt8W3.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `◄━⦁💝 𝐒𝐀𝐍𝐀 𝐌𝐖𝐎𝐋💝⦁━►


*Oᴡɴᴇʀ number Amruthesh* :https://wa.me/917025631103.
            

*Oᴡɴᴇʀ number Abu* :https://wa.me/917025994178.


*Wʜᴀᴛsᴀᴘᴘ Gʀᴏᴜᴘ Sᴀɴᴀ Mᴡᴏʟ* :https://chat.whatsapp.com/DnHJu25Ccss7zn72nPhL8z.


*Gɪᴛ Lɪɴᴋs* : https://github.com/AMRUSIR/AMRU_SER-V1.


*Aᴜᴅɪᴏ ᴄᴏᴍᴍᴀɴᴅs* :https://github.com/AMRUSIR/Amru-Media/tree/main/bgm.


*sᴛɪᴄᴋᴇʀ ᴄᴏᴍᴍᴀɴᴅs* :https://github.com/AMRUSIR/Amru-Media/tree/main/stickers.

☢️AMRU_SER-V1☢️
■□ ~💙 AMRU ❤️I💙 ABU ❤️~■□ 

`}) 

}));
