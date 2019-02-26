module.exports = function check(str, bracketsConfig) {
    // your solution
    if (str.trim().length===0 || bracketsConfig.length===0) return false;
    let stek = [];
    let first = {};
    for (let i = 0; i < bracketsConfig.length; i++) {
        if (bracketsConfig[i].length!==2) {
            return false;
        }
    }

    const arrStr = str.split('');
    for (let s = 0; s < arrStr.length; s++) {
        for (let i = 0; i < bracketsConfig.length; i++) {
            if (arrStr[s]===bracketsConfig[i][0]) {
                if (first[bracketsConfig[i][0]] == null) {
                    stek.push(bracketsConfig[i][0]);
                    if (bracketsConfig[i][0]===bracketsConfig[i][1]) { first[bracketsConfig[i][0]] = true; }
                } else {
                    delete first[bracketsConfig[i][0]];
                }

            }
            if (arrStr[s]===bracketsConfig[i][1]) {
                if (first[bracketsConfig[i][0]] == null) {
                    if (stek.length===0) return false;
                    let p = stek.pop();
                    if (p !== bracketsConfig[i][0]) return false;
                }
            }
        }
    }

    return stek.length===0;
}
