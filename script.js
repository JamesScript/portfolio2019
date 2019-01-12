// $(window).resize();

const mapCalc = function(n, start1, stop1, start2, stop2) {
    return ((n-start1)/(stop1-start1))*(stop2-start2)+start2;
};

let scrollTop = 0;

$(window).scroll(event => {
    scrollTop = $(window).scrollTop();
    console.log(scrollTop);
    parallaxBackground();
    // REFACTOR THIS
    // get heights of each element and work out where the next section starts
    if (scrollTop > window.innerHeight * 1.4) {
        $("#section_0")
            .addClass("vanish")
            .css({"pointer-events": "none"});
        $("#section_1")
            .addClass("appear")
            .css({"pointer-events": "auto"});
    }
});

function parallaxBackground() {
    let bgPosition = mapCalc(scrollTop, 0, window.innerHeight * 1.5, 0, -50);
    $("#codingBackground").css({"background-position": `0 ${bgPosition}px`})
}