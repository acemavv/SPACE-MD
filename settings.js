require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAKFo8lpxLDEzUgQAAHAHAAAKAAAAY3JlZHMuanNvbpVV25KiSBD9l3rVGEG5GtERi+AFBUUFATfmoYQCSqCgoQTpCf99gr5Mz8PubC9PRVbGyZOZJ7N+AFLgGm1QB6Y*QFnhBlLUH2lXIjAFs1sUoQoMQQgpBFOgbmeS8KJ5RLi1Pl8rByN01UurC6K7bjG6LRK0tEp2ImbFE3gMQXm7ZDj4AyA0F+NApFbOH1R5V10F59Il+3lcERZJ7D3b8ZJFu*Fyj80n8OgRIa4wiedlgnJUwWyDOgvi6mv0dYO5WHuierbcrs31dS5Wi91iVI12YkGW*FGsFyNl2YbSyvwa*fLmrQa7c7meOVmG0nytz7N0t1PYNk7srbewr+rI1D1I5+*0axwTFOohIhTT7st191ebzJkFxiRmIu94UnFFtycjFcaW4p+hqYRZF11NGyEn*RpxfZ4g6kVVfDTcRnOOs4ZsJwnHF7ljku0AbsS6SY4ybx3S34lb1YdW0v9T93heJOVktG90+y6GqW7Axb30ZcGSzw0bcVstk5k169HTMvga*ePzmmnLdOni*CDXB630nUQanbRn5HetqdvcTro02st83Aaf9CG9VX9iqbmcsGJN02tSW99mG7TX1MU4OfH3nZhJ19rsSiOZD5b328a2Pctx9WI*NgpDkuMXx*bFYuUt3KugKP7hMri2ZGA7wWz*9JpRijo9BFP2MQQVinFNK0hxQXrbWBgCGDZHFFSIvlYXdDe1WeBJoHmIX8waT7vby9WZcehJjw1mn0vzdERdDvFR+gSGoKyKANU1Cle4pkXVmaiuYYxqMP37+xAQdKdvfeujTdghiHBVU4fcyqyA4UdTPy5hEBQ3Qo8dCdT+gCowZT7NiFJM4rov443AKkhwg9QE0hpMI5jV6FeCqEIhmNLqhn4NrVqEfd2PGrvfmJ4BhiB*7QcOwRSMeU4cCxIviDI*FcS*6m9tDwvL8htBFAxB9ubGsBOWFQSGk3iG6x17++MXwR4vRBTirH7dV27QbIPZ3HJNITCXy1kaK2qsgM+EPoTxVnliGDxN19HmYJGs4aT2dLqqKntZ+Qt2ZY07dvt88skh15b+0z+AgCng1slYC9BuresHcrUcPoqbQuSvR44axGgKFkrF6MbUz4ElS5kvS4qpYSTwIh5Zdu4e7Vyxqce025cRNz8sPbFjd0r81EcLUYMD9Hsw5spW2jP1GScvdHcw62jpzI7HIJpIJeEWYUBsxY3oltvaTZ3tHBRtuqL2aK5xsrXRLs8T3gya9UQaYKwo3pptz*6HZF9HJntfVfhVTX2r+t8Io9fJJ7Bv4H+37o14rzDmMfwN432X*Ms8zs5dN7icVa9LbZ6*DCxzcfLbmLr38Sw8vMg1tWHmrplzfM*B4*F9CMoM0qio8v5hIWFV4BAMQVXcesnqJCr+9LIpjq69Z57BmiqfY2DjHNUU5iWYsiI*lriJJMtvXlZVlCtYJ2AKJgf5PJF7TXdKWR4ppB9TBZT+U9MZePwEUEsBAhQDFAAACAgAoWjyWnEsMTNSBAAAcAcAAAoAAAAAAAAAAAAAAKSBAAAAAGNyZWRzLmpzb25QSwUGAAAAAAEAAQA4AAAAegQAAAAA',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '254726856795',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'acemavv',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 161250,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 161250,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
PREFIX: process.env.PREFIX || '#',
  MODE: process.env.MODE || 'private',
SUDO: process.env.SUDO || '3197010238621',
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || 'false',
AUTO_VIEW_STATUS: process.env.AUTO_VIEW_STATUS || 'true',
BOT_NAME: process.env.BOT_NAME || '𒋨🏴‍☠️⃝𝘼𝘾𝙀☠️𝘽𝙊𝙏⃝𒋨🉑',
OWNER_NAME: process.env.OWNER_NAME || '🏴‍☠️⃝🅐ϲԑ 𝚔𝖎𝐫қ ❬𝕯❭',
OWNER_NUMBER: process.env.OWNER_NUMBER || '254726856795',
STICKER_AUTHOR: process.env.STICKER_AUTHOR || 'ค̡҃сɛ ӄ𝖎𝐫қ ❬𝕯❭',
STICKER_PACKNAME: process.env.STICKER_PACKNAME || '𝙸 αɱ ค̡ƈє™⟬𝟭⟭',

  STARTING_BOT_MESSAGE: process.env.STARTING_BOT_MESSAGE || 'false',
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
