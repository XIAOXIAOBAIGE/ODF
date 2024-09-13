(function () {
    const data = {
        "3089": ['云朵白', '卡其肤', '经典黑', '茶褐色'],
        "029": ['黑色', '紫色', '绿色', '奶肤'],
        "808": ["黑色","墨绿","肤色","桔红"],
        "3008": ["黑色", "奶白", "咖啡", "卡其"],
        "218": ["气质黑", "奢华肤", "蒂芙蓝", "冰莓粉"],
        "0000": [] //未知
    }
    const size = [
        {
            code: 'F',
            index: 6
        },
        {
            code: '3XL',
            index: 5
        }, {
            code: '2XL',
            index: 4
        }, {
            code: 'XL',
            index: 3
        }, {
            code: 'L',
            index: 2
        }, {
            code: 'M',
            index: 1
        }, {
            code: 'S',
            index: 0
        }
    ] // 码数 
    let resultData = {}
    //{
    // 3089: {
    // //   XL:[{
    // str: '云朵白',
    // num: 0
    // }]
    // }


    function countSubstring(str, sub) {
        // 使用split方法将字符串分割成一个数组，分割点为子字符串
        // 然后返回数组的长度减一，因为会多出一个空字符串
        return str.split(sub).length - 1;
    }
    var input = $('#ODFfilieInput')[0]
    input.addEventListener('change', function () {
        readXlsxFile(input.files[0]).then(rows => {
            for (let i = 1; i < rows.length; i++) { // 遍历表格内容
                const nowCode = rows[i][1] || '0000'// 当前型号
                if (resultData[nowCode] == undefined) {
                    resultData[nowCode] = {}
                }
                for (let index = 0; index < size.length; index++) {
                    const nowMS = size[index].code// 当前码数
                    if (resultData[nowCode][nowMS] == undefined) {
                        resultData[nowCode][nowMS] = data[nowCode].map(item => ({ code: item, num: 0 }))
                    }
                    if (rows[i][4].indexOf(nowMS) > -1) {
                        for (let index1 = 0; index1 < data[nowCode].length; index1++) {
                            const element = data[nowCode][index1];
                            var len = countSubstring(rows[i][4], element,)
                            if (len) {
                                resultData[nowCode][nowMS][index1].num = resultData[nowCode][nowMS][index1].num + (len * rows[i][8])
                            }
                        }
                        break
                    }
                }
            }
            for (let key in resultData) {
                var code = document.createElement('h3');
                code.textContent = key
                document.getElementById('aaa').appendChild(code);
                for (let item in resultData[key]) {
                    for (let items in resultData[key][item]) {
                        console.log("lenyXXXXXXXXXX", resultData[key][item])
                        if (resultData[key][item][items].num) {
                            var ele = document.createElement('div');
                            ele.textContent = resultData[key][item][items].code + "\u0020\u0020\u0020" + item + `码\u0020\u0020` + resultData[key][item][items].num + "件";
                            document.getElementById('aaa').appendChild(ele);
                        }

                    }
                }

            }
        })
        console.log("resultData", resultData)

    })


})();