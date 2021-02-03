const jimp = require('jimp');
const path = require('path')
const { log } = require('./log-util');
const fs = require('fs/promises');
const { selectImage, choicePlatform } = require('./prompts')
const { getFilesPath, imageSize } = require('./helpers')
const { androidIcons, iosIcons } = require('./content/sizes')
const { FOLDER_ICON_MOTHER, PATH_RESULT, ANDROID_STRUCTURE, IOS_STRUCTURE, } = require('./constants');
const Contentsjon = require('./content/Contents.json')

async function generateAssets(type = 0) {

    try {
        log('Searching for images that are at the ideal specifications');

        const imagesInDirectory = await getFilesPath(FOLDER_ICON_MOTHER);
        if (imagesInDirectory.length === 0) {
            throw "images not found ";
        }

        const iconCandidates = imagesInDirectory.filter((image) => {
            const dimensions = imageSize(`${FOLDER_ICON_MOTHER}/${image}`);

            return dimensions.width === 1024 && dimensions.height === 1024;
        });

        if (!(!!iconCandidates.length)) {
            throw "No 1024 x 1024 image was found";
        }
        const chosenIcon = await selectImage(iconCandidates);
        console.log(iconCandidates[chosenIcon]);

        const targetPlatform = await choicePlatform();

        switch (targetPlatform) {
            case 0:
                generateIconsIOS(iconCandidates[chosenIcon])
                generateIconsAndroid(iconCandidates[chosenIcon]);
                break;
            case 1:
                generateIconsAndroid(iconCandidates[chosenIcon]);
                break;
            case 2:
                generateIconsIOS(iconCandidates[chosenIcon]);
                break;

            default:
                console.log('nothing')
                break;
        }


    } catch (error) {
        log(error, 'error')
    }

}

async function generateIconsAndroid(icon) {
    try {
        log('creating icons for android');
        const motherIcon = await jimp.read(`${FOLDER_ICON_MOTHER}/${icon}`);

        log('creating icon for PlayStore');
        const iconStore = motherIcon.clone();
        iconStore.resize(512,512);
        iconStore.write(`${PATH_RESULT}/playstore.png`)

        for (const iconConfig of androidIcons) {
            const newIcon = motherIcon.clone();
            newIcon.resize(iconConfig.size, iconConfig.size)
            newIcon.write(`${PATH_RESULT}/${ANDROID_STRUCTURE}/${iconConfig.name}.png`);
        }
    } catch (error) {
        
    }
}

async function generateIconsIOS(icon) {
    try {
        log('creating icons for IOS');
        const motherIcon = await jimp.read(`${FOLDER_ICON_MOTHER}/${icon}`);

        log('creating icon for AppStore');
        const iconStore = motherIcon.clone();
        iconStore.resize(1024,1024);
        iconStore.write(`${PATH_RESULT}/appstore.png`)


        for (const iconConfig of iosIcons) {
            const newIcon = motherIcon.clone();
            newIcon.resize(iconConfig.size, iconConfig.size)
            newIcon.write(`${PATH_RESULT}/${IOS_STRUCTURE}/${iconConfig.name}.png`);
        }

        log('creating file Contents.json');
        await fs.writeFile(`${PATH_RESULT}/${IOS_STRUCTURE}/Contents.json`, JSON.stringify(Contentsjon), 'utf8');

        
    } catch (error) {
        log(error, 'error');
    }
}

module.exports.generateAssets = generateAssets;