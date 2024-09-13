(function () {

    var $ = function (id) {
        return document.getElementById(id);
    };

    var Tasks = {
        show: function (obj) {
            obj.className = '';
            return this;
        },
        hide: function (obj) {
            obj.className = 'hide';
            return this;
        },
        $addNewItem: $('add-new-item'),
        $addNewItemInput: $('add-new-item-input'),
        $itemList: $('item-list'),
        $newItemTitle: $('new-item-title'),
        $loginButton: $('loginButton'),

        init: function () {
            chrome.tabs.getSelected(null, function (tab) {　　// 先获取当前页面的tabID
                chrome.tabs.sendMessage(tab.id, { greeting: "Rcode" }, function (response) {
                    console.log("注入代码", tab.url)
                });
            });
            //打开添加文本框
            Tasks.$loginButton.addEventListener('click', function () {
                const element = document.getElementById('home');
                var body = document.querySelector('body')
                chrome.tabs.getSelected(null, function (tab) {　　// 先获取当前页面的tabID
                    chrome.tabs.sendMessage(tab.id, { greeting: "hello" }, function (response) {
                        console.log("当前页面地址", tab.url)
                        console.log(response);　　// 向content-script.js发送请求信息
                    });
                });
            }, true);
            //打开添加文本框
            Tasks.$addNewItem.addEventListener('click', function () {
                console.log("close")

                Tasks.show(Tasks.$addNewItemInput).hide(Tasks.$addNewItem);
                Tasks.$newItemTitle.focus();
            }, true);
            //回车添加任务
            Tasks.$newItemTitle.addEventListener('keyup', function (ev) {
                var ev = ev || window.event;
                if (ev.keyCode == 13) {
                    //TODO:写入本地数据
                    var task = Tasks.$newItemTitle.value;
                    Tasks.AppendHtml(task);
                    Tasks.$newItemTitle.value = '';
                    Tasks.hide(Tasks.$addNewItemInput).show(Tasks.$addNewItem);
                }
                ev.preventDefault();
            }, true);
            //取消添加
            Tasks.$newItemTitle.addEventListener('blur', function () {
                Tasks.$newItemTitle.value = '';
                Tasks.hide(Tasks.$addNewItemInput).show(Tasks.$addNewItem);
            }, true);
            //TODO 初始化数据，加载本地数据，生成html
        },
        //增加
        Add: function () {
            //TODO
        },
        //修改
        Edit: function () {
            //TODO
        },
        //删除
        Del: function () {
            //TODO
        },
        AppendHtml: function (title) {
            var oDiv = document.createElement('div');
            oDiv.className = 'item item-todo';
            var oInput = document.createElement('input');
            oInput.type = 'checkbox';
            var oTitle = document.createElement('span');
            oTitle.innerHTML = title;
            oDiv.appendChild(oInput);
            oDiv.appendChild(oTitle);
            Tasks.$itemList.appendChild(oDiv);
            oDiv.addEventListener('click', function () {
                //TODO
            }, true);
        },
        RemoveHtml: function () {
            //TODO
        }
    }
    Tasks.init();
})();