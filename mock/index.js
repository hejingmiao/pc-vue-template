const fs = require('fs')
const path = require('path')
const root = process.cwd()
const mocks = path.join(root, './mock/json')

let allMocks = fs.readdirSync(mocks)
let appData = {}

for (let i = 0; i < allMocks.length; i++) {
    let file = allMocks[i]
    if (/\.json$/.test(file)) {
        let  data = fs.readFileSync(path.join(mocks, file), 'utf-8');
        data = data.replace(/[^:"]\/\/.+/g, '');
        try {
            let jsonObj = JSON.parse(data);
            Object.assign(appData, jsonObj)
        } catch (e) {
            console.log(mocks.red + path.sep.red + file.red + ' JSON syntax error'.red);
        }
    }
}
// console.log('所有mock数据', appData)

let proxy = {}
for (let api in appData) {
    proxy[api] = appData[api]
}

module.exports = proxy
