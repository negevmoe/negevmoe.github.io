var frame = 1; // 当前帧数
var total = 839; // 总帧数

var arr = []
var load = []

function loading() {
    elem = document.getElementById("bar");

    for (let i = 1; i < total + 1; i++) {
        // 将读取文件请求添加到数组中
        load.push($.get(`./ascii/ASCII-${i}.txt`, function (data) {
            arr.push(data)

            // 渲染进度条
            var width = Math.floor(i / total * 100)
            elem.style.width = width + '%';
            elem.innerHTML = `loading ${width}%`;
        }))
    }

    // 等待请求执行完毕
    Promise.all(load).then(() => {
        // 销毁进度条dom
        elem.remove();
        document.getElementById("progress").remove();

        // 播放
        intervalReader = setInterval(raed, 41);
    })
}

function raed(values) {
    frame = (frame % total) + 1; // 计算当前帧数
    document.getElementById("player").innerHTML = arr[frame]; // 渲染html内容
}