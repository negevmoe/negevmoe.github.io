var frame = 1; // 当前帧数
var total = 839; // 总帧数

var arr = []

for (let i = 1; i < total + 1; i++) {
    $.get(`./ascii/ASCII-${i}.txt`, function (data) {
        arr.push(data)
    });
}

function start_interval_reading(milliseconds) {
    intervalReader = setInterval(FileReading, milliseconds);
}

function FileReading() {
    frame = (frame % total) + 1;
    document.getElementById("player").innerHTML = arr[frame];
}