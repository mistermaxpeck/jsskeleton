const fs = require('fs');

//FOLDER NAME ARGUMENT PLUS DEFAULT OF PROJECT//

const folderName = process.argv[2] || 'Project';

//CREATE FOLDER SKELETON//

try {
    fs.mkdirSync(folderName);
    fs.mkdirSync(`${folderName}/css`);
    fs.mkdirSync(`${folderName}/js`);

    //CREATE FILE SKELETON//

    fs.writeFileSync(`${folderName}/index.html`, '');
    fs.writeFileSync(`${folderName}/css/styles.css`, '');
    fs.writeFileSync(`${folderName}/js/script.js`, '');
} catch (e) {
    console.log("You have met with a dark fate.");
    console.log(e);
}