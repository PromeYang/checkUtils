// checkVin.js
// desc: 检验车辆识别代码(VIN)
// auth: promeyang
// time: 2017-11-09 13:35:33
// test: JF1SH52F6AG152654
// use: checkVin('JF1SH52F6AG152654')

function checkVin(code) {
    if (!code || code.length !== 17) return false;
    if (/[IOQ]/i.test(code)) return false;
    // 转换大写, 并生成字符数组, 等待计算
    var list = code.toUpperCase().split('');
    // VIN码对照值
    var matchCode = {
        "0": 0,
        "1": 1,
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9,
        "A": 1,
        "B": 2,
        "C": 3,
        "D": 4,
        "E": 5,
        "F": 6,
        "G": 7,
        "H": 8,
        "J": 1,
        "K": 2,
        "L": 3,
        "M": 4,
        "N": 5,
        "P": 7,
        "R": 9,
        "S": 2,
        "T": 3,
        "U": 4,
        "V": 5,
        "W": 6,
        "X": 7,
        "Y": 8,
        "Z": 9
    };
    // VIN码加权值
    var matchValue = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2];
    // 校验值
    var checkCode = list[8];
    // 加权总和
    var countCode = 0;
    // 结果值
    var resultCode = null;
    // 计算加权总和
    for (var i = 0; i < list.length; i++) {
        var _code = list[i];
        // console.log(_code, matchCode[_code], matchValue[i], matchCode[_code] * matchValue[i]);
        countCode += matchCode[_code] * matchValue[i];
    }
    // console.log(checkCode, countCode, countCode % 11);
    if (countCode % 11 === 10) resultCode = 'X';
    else resultCode = '' + (countCode % 11);
    // 返回校验结果
    return checkCode === resultCode;
}
