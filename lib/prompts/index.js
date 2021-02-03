const prompts = require('prompts');

const { FOLDER_ICON_MOTHER } = require('../constants')

async function initialChoice() {
    const { mode } = await prompts({
        type: 'select',
        name: 'mode',
        message: 'Generate assets...',
        choices: [
            { title: 'Icon and Splash', description: 'Create icon and splash', value: 0, disabled: true },
            { title: 'Icon', description: 'Create icon only', value: 1, },
            { title: 'Splash', description: 'Create splash only', value: 2, disabled: true }
        ],

        initial: 1
    });

    return mode;
}

async function selectImage(images) {

    const canditeImages = images.map((image, index) => { return { title: image, description: `${FOLDER_ICON_MOTHER}/${image}`, value: index } })
    const { mode } = await prompts({
        type: 'select',
        name: 'mode',
        message: 'Select the image that will be the base of the icons',
        choices: canditeImages,

        initial: 0
    });

    return mode;
}

async function choicePlatform() {
    const { mode } = await prompts({
        type: 'select',
        name: 'mode',
        message: 'Generate assets for...',
        choices: [
            { title: 'Android and IOS', value: 0 },
            { title: 'Android', value: 1 },
            { title: 'IOS', value: 2 }
        ],

        initial: 1
    });

    return mode;
}

module.exports.initialChoice = initialChoice;
module.exports.selectImage = selectImage;
module.exports.choicePlatform = choicePlatform;