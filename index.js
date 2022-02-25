const TelegramBot = require('node-telegram-bot-api')

const token = '5123754827:AAE7vxN3iJkxppAg6FtGJIzEW8M6W2Up6IQ'

const bot = new TelegramBot(token, {polling: true});
