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
    
    
    r_text[0] =
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption:


*Gɪᴛ Lɪɴᴋs* : https://github.com/AMRUSIR/AMRU_SER-V1

`}) 

}));
