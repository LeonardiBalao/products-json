const db = require('./db.json');

let fs = require('fs');
fs.readFile('./db.json', function (err, data) {
    let arr = JSON.parse(data);
    arr.forEach(obj => {
        obj["name"] = obj["name"].trim();
        obj["quantity/g"] = parseFloat(obj["quantity/g"].replace("g", "") * 100).toFixed(2);
        obj["calorie/kcal"] = parseFloat(obj["calorie/kcal"].replace("kcal", "") * 100).toFixed(2)
        obj["carbs/g"] = parseFloat(obj["carbs/g"].replace("g", "") * 100).toFixed(2)
        obj["protein/g"] = parseFloat(obj["protein/g"].replace("g", "") * 100).toFixed(2)
        obj["totalFat/g"] = parseFloat(obj["totalFat/g"].replace("g", "") * 100).toFixed(2)
        obj["fiber/g"] = parseFloat(obj["fiber/g"].replace("g", "") * 100).toFixed(2)
        obj["sodium/mg"] = parseFloat(obj["sodium/mg"].replace("mg", "") * 100).toFixed(2)
    });
    let newJSON = JSON.stringify(arr);
    fs.writeFile('newdb.json', newJSON, function (err) {
        console.log('Done.');
    });
});