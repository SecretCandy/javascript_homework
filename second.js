window.addEventListener("scroll", function () {
    console.log({scrollY});
})

for(i=1; i<11; i++) {
    console.log(i);
}

for(i=1; i<21; i++) {
    if (i%2===0) {
        console.log(i);
    } else {
        continue;
    }
}

setTimeout(function() {
    console.log("3초 후에 출력되는 텍스트입니다.")
}, 3000);