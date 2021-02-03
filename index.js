#!/usr/bin/env node
const { initialChoice} = require('./lib/prompts')
const {generateAssets} = require('./lib')

async function main() {
 
  const answer = await initialChoice()

  await generateAssets(answer)

}


main();