var frame = 1; // 当前帧数
var total = 836; // 总帧数
var cnt = 1; // 请求次数

var arr = []
var load = []
var elem

window.onload = function () {
    elem = document.getElementById("bar");
    loading();
}

function loading() {

    Promise.all(createPromiseArr()).then((values) => {
        arr = values;
        // 销毁进度条dom
        elem.remove();
        document.getElementById("progress").remove();

        // 播放
        intervalReader = setInterval(raed, 41);
    });
}

function raed(values) {
    frame = (frame % total) + 1; // 计算当前帧数
    document.getElementById("player").innerHTML = arr[frame]; // 渲染html内容
}

function createPromiseArr() {
    let promise_list = [];

    for (let i = 1; i <= total; i++) {

        let promise = new Promise((res, rej) => {
            $.get(`./ascii/ASCII-${i}.txt`, (data, status) => {
                res(data)
                // 渲染进度条
                var width = Math.floor(cnt / total * 100)
                elem.style.width = width + '%';
                elem.innerHTML = `${width}%`;
                cnt++
            });
        });

        promise_list.push(promise);
    }
    return promise_list;
}

