

chrome.extension.onMessage.addListener(
    function (request, sender, sendMessage) {
        var html = document.getElementById('stand_spec').getElementsByClassName('goods-sku-box')[0].getElementsByClassName('property-container-v2')[0];
        var input = html.getElementsByClassName('IPT_input_5-126-0')
        var inputClick = input[input.length - 1]

        setTimeout(function () {
            console.log("触发1", inputClick)
            inputClick.focus()
            inputClick.value = "白色"
            var changeEvent = new Event('change', { bubbles: true })
            inputClick.dispatchEvent(changeEvent);
        }, 2000);


        if (request.greeting == "hello") {
            console.log("触发2", html)
            sendMessage(html);
        }
        else if (request.greeting == "Rcode") {
            var basic = document.getElementById('umd_kits_home_entry_wrapper')
            console.log("Rcode", basic)
            $(document).ready(function () {
                basic.innerHTML = '<input type="file" id="ODFfilieInput" /> ' + basic.innerHTML
                var input = $('#ODFfilieInput')[0]
                if (input) {
                    input.addEventListener('change', function () {
                        readXlsxFile(input.files[0]).then(rows => {
                            for (let i = 2; i < rows.length; i++) { // 遍历表格内容
                                if (rows[i]) {

                                } else {
                                    break    
                                }
                            }
                        })
                    })
                }
            });
            sendMessage(html);

        }
        else
            sendMessage("FUCK OFF"); // snub them.
    });