require('colors');

const delay = async (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function displayHeader() {
    process.stdout.write('\x1Bc');
    console.log('========================================'.cyan);
    console.log('=        GRASS AIRDROP BOT             ='.cyan);
    console.log('=      Created by Nofan Rambe          ='.cyan);
    console.log('=    https://github.com/Rambeboy       ='.cyan);
    console.log('========================================'.cyan);
    console.log();
  }

module.exports = { delay, displayHeader };
