var frame = 0; // 当前帧数
var total = 1858; // 总帧数

function start_interval_reading(milliseconds) {
    intervalReader = setInterval(FileReading, milliseconds);
}


function FileReading() {
    frame = (frame % total) + 1;
    $.get(`./ascii/ASCII-${frame}.txt`, function (data) {
        document.getElementById("player").innerHTML = data;
    });
}