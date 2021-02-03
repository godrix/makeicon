#!/usr/bin/env node
const { initialChoice} = require('./lib/prompts')
const {generateAssets} = require('./lib')

async function main() {
 
  const awnser = await initialChoice()

  await generateAssets(awnser)

}


main();