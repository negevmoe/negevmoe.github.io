var frame = 1; // 当前帧数
var total = 836; // 总帧数

function play() {
    intervalReader = setInterval(raed, 41);
}

function raed(values) {
    frame = (frame % total) + 1; // 计算当前帧数
    document.getElementById("player").innerHTML = arr[frame]; // 渲染html内容
}