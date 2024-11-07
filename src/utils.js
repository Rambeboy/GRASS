require('colors');

const delay = async (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function displayHeader() {
    process.stdout.write('\x1Bc');
    console.log('=================================='.cyan);
    console.log('=        GRASS AIRDROP BOT       ='.cyan);
    console.log('=       Author: Nofan Rambe      ='.cyan);
    console.log('=        Github: Rambeboy        ='.cyan);
    console.log('=================================='.cyan);
    console.log();
  }

module.exports = { delay, displayHeader };
