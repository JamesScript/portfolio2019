// Calculates the proportions of a variable's value between two limits to another pair of limits
const mapCalc = (n, start1, stop1, start2, stop2) => ((n-start1)/(stop1-start1))*(stop2-start2)+start2;

// DOM elements got using JQuery
// const introSection = $("#introFullPage");
// const gameSection = $("#gamesFullPage");
// const frontEndSection = $("#standaloneFullPage");
// const fullStackSection = $("#fullStackFullPage");
// const dataVisSection = $("#dataVisFullPage");
// const artSection = $("#artFullPage");
const codingBackground = $("#codingBackground");
const oxfordCircusBackground = $("#oxfordCircusBackground");
const secondCodingBackground = $("#codingBackground2");
const choirBackground = $("#choirBackground");
const codingBehindBackground = $("#codingBehindBackground");
const lakeBackground = $("#lakeBackground");

// Reset these values if window resized
let gapHeight = codingBackground.outerHeight(true);
// let introHeight = introSection.outerHeight(true);
// let gameHeight = gameSection.outerHeight(true);
// let frontEndHeight = frontEndSection.outerHeight(true);
// let fullStackHeight = fullStackSection.outerHeight(true);
// let dataVisHeight = dataVisSection.outerHeight(true);
// let artHeight = artSection.outerHeight(true);

// Positions
let codingBGPos = codingBackground.offset().top;
let oxfordBGPos = oxfordCircusBackground.offset().top;
let secondCodingBGPos = secondCodingBackground.offset().top;
let choirBGPos = choirBackground.offset().top;
let behindBGPos = codingBehindBackground.offset().top;
let lakeBGPos = lakeBackground.offset().top;


// Determines what to show on the left / top based on where the user has scrolled to
let leftSection = 0;

// Scrolling global variables
let scrollTop = 0;
let scrolling = false;

// Scrolling events
$(window)
    .scroll(() => { scrolling = true; })
    .resize(() => { setTimeout(grabNewHeights, 1000) });

// Interval to check whether user is scrolling, to run function below it
setInterval(() => {
    if (scrolling) {
        scrollHandler();
        grabNewHeights();
        scrolling = false;
    }
}, 50);

// Window Resized
function grabNewHeights() {
    gapHeight = codingBackground.outerHeight(true);
    // introHeight = introSection.outerHeight(true);
    // gameHeight = gameSection.outerHeight(true);
    // frontEndHeight = frontEndSection.outerHeight(true);
    // fullStackHeight = fullStackSection.outerHeight(true);
    // dataVisHeight = dataVisSection.outerHeight(true);
    // artHeight = artSection.outerHeight(true);
    // Positions
    codingBGPos = codingBackground.offset().top;
    oxfordBGPos = oxfordCircusBackground.offset().top;
    secondCodingBGPos = secondCodingBackground.offset().top;
    choirBGPos = choirBackground.offset().top;
    behindBGPos = codingBehindBackground.offset().top;
    scrollHandler();
}

// Only call this every few milliseconds as not to slow down performance
function scrollHandler() {
    scrollTop = $(window).scrollTop();
    parallaxBackground();
    // Sections array - used to refactor previous code
    // The array contains sub-arrays with two element determining different scroll limits
    // The first value [0] in each sub-array determines where the content will change when the user scrolls DOWN
    // The second value [1] determines where the content will switch back when the user scrolls UP
    // const sections = [
    //     [0,
    //         gapHeight],
    //     [introHeight,
    //         introHeight + gameHeight],
    //     [introHeight + gapHeight + gameHeight,
    //         introHeight + gameHeight + frontEndHeight + gapHeight],
    //     [introHeight + gameHeight + frontEndHeight + gapHeight * 2,
    //         introHeight + gameHeight + frontEndHeight + fullStackHeight + gapHeight * 2],
    //     [introHeight + gameHeight + frontEndHeight + fullStackHeight + gapHeight * 3,
    //         introHeight + gameHeight + frontEndHeight + fullStackHeight + dataVisHeight + gapHeight * 3],
    //     [introHeight + gameHeight + frontEndHeight + fullStackHeight + dataVisHeight + gapHeight * 4,
    //         introHeight + gameHeight + frontEndHeight + fullStackHeight + dataVisHeight + artHeight + gapHeight * 4],
    //     [introHeight + gameHeight + frontEndHeight + fullStackHeight + dataVisHeight + artHeight + gapHeight * 4,
    //         Infinity]
    // ];
    const sections = [
        0,
        codingBGPos,
        oxfordBGPos,
        secondCodingBGPos,
        choirBGPos,
        behindBGPos,
        lakeBGPos - gapHeight / 2,
        Infinity
    ];
    for (let i = 0; i < sections.length - 1; i++) {
        if (leftSection !== i && scrollTop > sections[i] && scrollTop < sections[i+1] - gapHeight) {
            $("#section_" + leftSection)
                .addClass("vanish")
                .removeClass("appear")
                .css({"pointer-events": "none"});
            $("#section_" + i)
                .addClass("appear")
                .removeClass("vanish")
                .css({"pointer-events": "auto"});
            leftSection = i;
        }
    }
}

// Background parallax - move at different speed to scrolling
function parallaxBackground() {
    let bgPosition = mapCalc(scrollTop, 0, window.innerHeight * 1.5, 100, -100);
    $("#codingBackground").css({"background-position": `0 ${bgPosition}px`});
}

