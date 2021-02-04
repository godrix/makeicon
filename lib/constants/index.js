const path = require('path');
const process = require('process');

const FOLDER_ICON_MOTHER = process.env.NODE_ENV === 'development' ? `${path.join(__dirname, '..', '..', 'assets')}` : `${process.cwd()}`;
const PATH_RESULT = process.env.NODE_ENV === 'development' ? `${path.join(__dirname, '..', '..', 'assets', 'poweredByMakeIcon')}` : `${path.join(process.cwd(), 'poweredByMakeIcon')}`;

const ANDROID_STRUCTURE = 'android/res';
const IOS_STRUCTURE = 'ios/Assets.xcassets/AppIcon.appiconset';

module.exports.FOLDER_ICON_MOTHER = FOLDER_ICON_MOTHER;
module.exports.PATH_RESULT = PATH_RESULT;
module.exports.ANDROID_STRUCTURE = ANDROID_STRUCTURE;
module.exports.IOS_STRUCTURE = IOS_STRUCTURE;