const prompts = require('prompts');


async function initialChoice() {
  const { mode } = await prompts({
    type: 'select',
    name: 'mode',
    message: 'Generate assets...',
    choices: [
      { title: 'Icon and Splash', description: 'Create icon and splash', value: 0 },
      { title: 'Icon', description: 'Create icon only', value: 1 },
      { title: 'Splash', description: 'Create splash only', value: 2 }
    ],

    initial: 0
  });

  return mode;
}

async function platformChoice() {
  const { mode } = await prompts({
    type: 'select',
    name: 'mode',
    message: 'Generate icons for ...',
    choices: [
      { title: 'Android e IOS', description: 'Create icon for android and ios', value: 0 },
      { title: 'Android', description: 'Create icon only android', value: 1 },
      { title: 'IOS', description: 'Create icon only ios', value: 2 }
    ],

    initial: 0
  });

  return mode;
}

async function choiceColor() {
  const { color } = await prompts({
    type: 'text',
    name: 'color',
    message: 'what is the background color?',
    initial: '#FFFFFF',
    validate: value => !value.match(/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/) ? `Only hexadecimal colors are accepted` : true
  });

  return color;
}

async function choicePosition() {
  const { position } = await prompts({
    type: 'select',
    name: 'position',
    message: 'Device position',
    choices: [
      { title: 'Large margin', description: 'Large margin top', value: 1 },
      { title: 'Medium margin', description: 'Midium margin at the top', value: 1.5 },
      { title: 'Small margin', description: 'Small margin at the top', value: 1.8 },
      { title: 'Center', description: 'Centralized device', value: 2 },
    ],
    initial: 2
  });

  return position;
}

async function enterText() {
  const { value } = await prompts({
    type: 'list',
    name: 'value',
    message: 'separate the texts of each image with a semicolon',
    initial: '',
    separator: ';'
  });

  return value;

}

module.exports.initialChoice = initialChoice;
module.exports.choiceColor = choiceColor;
module.exports.choicePosition = choicePosition;
module.exports.enterText = enterText;