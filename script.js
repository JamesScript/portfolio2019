// Calculates the proportions of a variable's value between two limits to another pair of limits
const mapCalc = (n, start1, stop1, start2, stop2) => ((n-start1)/(stop1-start1))*(stop2-start2)+start2;

// DOM elements got using JQuery
const introSection = $("#introFullPage");
const gameSection = $("#gamesFullPage");
const backgroundGap = $("#codingBackground");

// Determines what to show on the left / top based on where the user has scrolled to
let leftSection = 0;

// Scrolling global variables
let scrollTop = 0;
let scrolling = false;

// Scrolling events
$(window).scroll(() => {
    scrolling = true;
});

// Interval to check whether user is scrolling, to run function below it
setInterval(() => {
    if (scrolling) {
        scrollHandler();
        scolling = false;
    }
}, 10);

// Only call this every few milliseconds as not to slow down performance
function scrollHandler() {
    scrollTop = $(window).scrollTop();
    parallaxBackground();
    // REFACTOR THIS
    // get heights of each element and work out where the next section starts
    // Do not make these global in case window size changes
    const gapHeight = backgroundGap.height();
    const introHeight = introSection.height();
    const gameHeight = gameSection.height();
    if (leftSection !== 0 && scrollTop < gapHeight) {
        $("#section_" + leftSection)
            .addClass("vanish")
            .removeClass("appear")
            .css({"pointer-events": "none"});
        $("#section_0")
            .addClass("appear")
            .removeClass("vanish")
            .css({"pointer-events": "auto"});
        leftSection = 0;
    }
    if (leftSection !== 1 && scrollTop > introHeight && scrollTop < introHeight + gameHeight) {
        $("#section_" + leftSection)
            .addClass("vanish")
            .removeClass("appear")
            .css({"pointer-events": "none"});
        $("#section_1")
            .addClass("appear")
            .removeClass("vanish")
            .css({"pointer-events": "auto"});
        leftSection = 1;
    }
    if (leftSection !== 2 && scrollTop > introHeight + gameHeight + gapHeight) {
        $("#section_" + leftSection)
            .addClass("vanish")
            .removeClass("appear")
            .css({"pointer-events": "none"});
        $("#section_2")
            .addClass("appear")
            .removeClass("vanish")
            .css({"pointer-events": "auto"});
        leftSection = 2;
    }
}

// Background parallax - move at different speed to scrolling
function parallaxBackground() {
    let bgPosition = mapCalc(scrollTop, 0, window.innerHeight * 1.5, 0, -100);
    $("#codingBackground").css({"background-position": `0 ${bgPosition}px`})
}

