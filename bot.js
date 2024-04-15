const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs');
const path = require('path');

const token = '<YOUR_BOT_TOKEN>';
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
    const chatId = msg.chat.id;

    if (msg.document) {
        const fileId = msg.document.file_id;
        const fileName = msg.document.file_name;
        const downloadsDir = path.join(__dirname, 'downloads');
        if (!fs.existsSync(downloadsDir)) {
            fs.mkdirSync(downloadsDir, { recursive: true });
        }

        bot.downloadFile(fileId, downloadsDir).then(filePath => {
            const newPath = path.join(downloadsDir, fileName);

            fs.rename(filePath, newPath, (err) => {
                if (err) {
                    console.log('Error renaming the file:', err);
                    bot.sendMessage(chatId, 'Sorry, there was an error processing your file.');
                    return;
                }

                bot.sendVideo(chatId, newPath).then(() => {
                    fs.unlink(newPath, (err) => {
                        if (err) console.log('Error deleting the file:', err);
                    });
                }).catch((err) => {
                    console.log('Error sending the file:', err);
                    bot.sendMessage(chatId, 'Sorry, there was an error sending your file back.');
                });
            });
        }).catch((err) => {
            console.log('Error downloading the file:', err);
            bot.sendMessage(chatId, 'Sorry, there was an error downloading your file.');
        });
    }
});
