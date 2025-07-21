(function () {
    const data = {
        "A01": ["蓝色", "绿色", "紫色", "粉色", "随机颜色"],
        "A01-1": ["奶油绿", "香芋紫", "荷花粉", "晴天蓝"],
        "A13": ["黑色", "香槟色", "咖色", "卡其肤", "紫色", "卡其色"],
        "2899": ["月光白", "雅杏色", "摩卡棕"],
        "68003": ["黑色", "白色", "绿色"],
        "7768": ["可可棕", "杏仁肤", "经典黑", "安可拉红"],
        "A02": ["黑色", "白色", "绿色", "粉色"],
        "106": ["黑色", "卡其", "奶白", "褐色"],
        "883#": ["米白色", "咖色", "黑色"],
        "393#": ["黑色", "白色", "红色", "紫薇"],
        "8252#": ["黑色", "杏仁肤", "安可拉红", "可可棕", "月光灰"],
        "1428#": ["蓝色", "绿色", "粉色", "灰色"],
        "106#": ["奶白", "香槟", "卡其", "黑色", "咖啡"],
        "1432#": ["白色", "绿色", "粉色"],
        "111#": ["灰色", "紫色", "肤色", "绿色"],
        "7768#": ["安可拉红", "月光灰", "奶白色", "黑色", "可可棕", "杏仁肤"],
        "8252-2#": ["安可拉红", "月光灰", "奶白色", "黑色"],
        "601#": ["黑色", "肤色"],
        "885#": ["梦境黑", "月光白", "奶咖色", "可可棕"],
        "K04#": ["黑色", "肤色", "绿色"],
        "K06#": ["黑色", "肤色"],
        "287#": ["黑色", "白色", "奶杏色", "卡其色"],
        "582#": ["黑色", "白色", "奶咖色", "浅黄色"],
        "3191#": ["杏色", "豆沙色", "浅蓝色", "黑色", "卡其"],
        "888#": ["黑色", "粉色", "蓝色", "绿色", "灰色"],
        "68007#": ["香槟", "黑色", "浅绿色", "藕粉色"],
        "909#": ["黑色", "肤色", "浅蓝色"],
        "888#": ["黑色", "粉色", "蓝色", "灰色", "绿色"],
        "885#": ["香槟色", "奶白色", "奶咖色", "可可棕", "棕色", "咖色", "黑色", "梦境黑"],
        "8256#": ["黑色", "紫色", "肤色", "灰色", "咖色"],
        "828#": ["肤色", "灰色", "绿色", "紫色"],
        "1388#": ["黑色", "白色", "肤色"],
        "1183#": ["黑色", "白色", "灰色"],
        "8991#": ["黑色", "白色"],
        "8985#": ["黑色", "白色", "肤色"],
        "68003#": ["黑色", "奶白色", "草本绿"],
        "680#": ["黑色", "白色", "卡其", "咖色"],
        "8567#": ["黑色", "黄色", "绿色", "肤色", "白色", "豆沙"],
        "3203#": ["黑色2cm", "白色2cm", "咖色2cm", "黑色4cm", "白色4cm", "咖色4cm"],
        "2033#": ["黑色", "白色", "灰色"],
        "601#": ["黑色", "肤色"],
        "泰 601#": ["黑色", "灰色", "白色", "卡其色", "安可拉红"],
        "2921#": ["黑色1.5cm", "卡其1.5cm", "米白色1.5cm", "浅绿色1.5cm"],
        "5538#": ["黑色", "白色"],
        "3191#": ["卡其", "豆沙", "杏色", "浅蓝色", "黑色"],
        "881#": ["黑色", "肤色"],
        "2899#": ["奶白色", "雅杏色", "黑色"],
        "2884#": ["肤色", "浅咖色", "铁灰色"],
        "8251#": ["黑色", "绿色", "酒红", "咖色"],
        "2871#": ["黑色", "红色", "灰色", "白色"],
        "001#": ["黑色", "肤色", "绿色"],
        "558#": ["黑色", "白色", "卡其", "深灰色"],
        "883#": ["黑色", "米杏色", "米白色", "咖色", "香槟色"],
        "38#": ["黑色", "肤色", "米黄色", "橘色", "浅绿色"],
        "68007#": ["黑色", "香槟色", "浅绿色", "粉色", "蓝色", "藕粉色"],
        "n86#": ["黑色", "藕粉色", "白色", "灰色"],
        "0000": [] //未知
    }
    const size = [{
            code: 'F',
            index: 7
        }, {
            code: '4XL',
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
            let errArrs = []
            for (let i = 1; i < rows.length; i++) { // 遍历表格内容
                if (!data[rows[i][1]]) {
                    errArrs.push(rows[i])
                    console.log("异常数据", rows[i][1])
                    continue
                }
                const nowCode = rows[i][1]
                if (resultData[nowCode] == undefined) {
                    resultData[nowCode] = {}
                }
                for (let index = 0; index < size.length; index++) {
                    const nowMS = size[index].code // 当前码数
                    if (resultData[nowCode][nowMS] == undefined) {
                        resultData[nowCode][nowMS] = data[nowCode].map(item => ({
                            code: item,
                            num: 0
                        }))
                    }
                    if (rows[i][4].indexOf(nowMS) > -1) {
                        for (let index1 = 0; index1 < data[nowCode].length; index1++) {
                            const element = data[nowCode][index1];
                            var len = countSubstring(rows[i][4], element, )
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
                var total = 0
                for (let item in resultData[key]) {
                    for (let items in resultData[key][item]) {
                        if (resultData[key][item][items].num) {
                            total += resultData[key][item][items].num
                            var ele = document.createElement('div');
                            ele.textContent = resultData[key][item][items].code + "\u0020\u0020\u0020" + item + `码\u0020\u0020` + resultData[key][item][items].num + "件";
                            document.getElementById('aaa').appendChild(ele);
                        }

                    }

                }
                var nums = document.createElement('div');
                nums.textContent = "总数量：" + total + "件"
                document.getElementById('aaa').appendChild(nums);
            }
            if (errArrs.length) {
                var code = document.createElement('h3');
                code.textContent = '无法识别型号'
                document.getElementById('errbox').appendChild(code);
                for (let index = 0; index < errArrs.length; index++) {
                    var ele = document.createElement('div');
                    ele.textContent = (errArrs[index][1] || "未知") + "\u0020\u0020\u0020" + errArrs[index][4] + "\u0020 数量： \u0020" + errArrs[index][8] +
                        "件"
                    document.getElementById('errbox').appendChild(ele);
                }
            }

            console.log("resultData", resultData)

        })

    })


})();