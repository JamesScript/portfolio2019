// $(window).resize();

const mapCalc = function(n, start1, stop1, start2, stop2) {
    return ((n-start1)/(stop1-start1))*(stop2-start2)+start2;
};
let leftSection = 0;

let scrollTop = 0;

$(window).scroll(event => {
    scrollTop = $(window).scrollTop();
    console.log(scrollTop);
    parallaxBackground();
    // REFACTOR THIS
    // get heights of each element and work out where the next section starts
    if (leftSection !== 0 && scrollTop < window.innerHeight * 0.5) {
        leftSection = 0;
        $("#section_1")
            .addClass("vanish")
            .removeClass("appear")
            .css({"pointer-events": "none"});
        $("#section_0")
            .addClass("appear")
            .removeClass("vanish")
            .css({"pointer-events": "auto"});
    }
    if (leftSection !== 1 && scrollTop > window.innerHeight) {
        leftSection = 1;
        $("#section_0")
            .addClass("vanish")
            .removeClass("appear")
            .css({"pointer-events": "none"});
        $("#section_1")
            .addClass("appear")
            .removeClass("vanish")
            .css({"pointer-events": "auto"});
    }

});

function parallaxBackground() {
    let bgPosition = mapCalc(scrollTop, 0, window.innerHeight * 1.5, 0, -50);
    $("#codingBackground").css({"background-position": `0 ${bgPosition}px`})
}