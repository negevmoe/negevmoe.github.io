var frame = 1; // 当前帧数
var total = 839; // 总帧数

var arr = []

function pushFile() {
    elem = document.getElementById("bar");

    for (let i = 1; i < total + 1; i++) {
        $.get(`./ascii/ASCII-${i}.txt`, function (data) {
            arr.push(data)
        });

        var width = Math.floor(i / total * 100)
        if (width >= 79) {
            break
        }
        elem.style.width = width + '%';
        elem.innerHTML = `loading ${width}%`;
    }

    elem.remove();
    document.getElementById("progress").remove();
}

function start_interval_reading(milliseconds) {
    pushFile();
    intervalReader = setInterval(FileReading, milliseconds);
}

function FileReading() {
    frame = (frame % total) + 1;
    document.getElementById("player").innerHTML = arr[frame];
}