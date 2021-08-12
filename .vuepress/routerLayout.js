// 自动获取guide文件夹中的md文件并注入到路由中
const fs = require("fs");
const path = require("path");

function resolve(dir) {
    return path.resolve(__dirname, dir);
}

function getMdFile(dir, arr) {
    const filePath = dir.substr(2);
    const fsList = fs.readdirSync(resolve(dir));
    fsList.forEach((item) => {
        if (/.*(\.md)$/.test(item)) {
            // 是md文件
            let fileName = item.split(".")[0];
            if (fileName === "README") {
                if (filePath == "/learn") {
                    arr.unshift(filePath + "/");
                } else {
                    arr.push(filePath + "/");
                }
            } else {
                arr.push(filePath + "/" + fileName);
            }
        } else {
            // 不是md文件
            var stat = fs.lstatSync(resolve(dir + "/" + item));
            var is_direc = stat.isDirectory(); // true || false 判断是不是文件夹
            if (is_direc) getMdFile(dir + "/" + item, arr);
        }
    });
}

function done(dir, type) {
    let myArr = []
    getMdFile(dir, myArr);
    return myArr
}

module.exports = done;