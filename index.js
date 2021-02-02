#!/usr/bin/env node
const { initialChoice} = require('./lib/prompts')


async function main() {
 
  switch (await initialChoice()) {
    case 0:
      
      break;
    case 1:
      
      break;
    case 2:
      
      break;
    default:
      console.info('nothing')
  }


}


main();