// Store commonly referred to things as variables
// CATEGORIES
const games = "games";
const frontEnd = "front end";
const fullStack = "full-stack";
const dataVis = "data visualisation";
const art = "art";

// TECHNOLOGIES
const _html = "HTML";
const _css = "CSS";
const _js = "JavaScript";
const _pug = "pug";
const _scss = "SCSS";
const _babel = "Babel";
const _jquery = "jQuery";
const _react = "React";
const _redux = "Redux";
const _D3 = "D3";
const _p5 = "p5";
const _THREE = "THREE";
const _p5sound = "p5.sound";
const _howler = "howler";
const _hammer = "hammer";
const _node = "node";
const _express = "express";
const _mongodb = "mongodb";
const _mongoose = "mongoose";
const _socket = "socket.io";
const _passport = "passport";
const _helmet = "helmet";


// Projects
const projects = [
    {
        title: "3D Jumping Game",
        category: [games],
        technologies: [_html, _css, _js, _THREE],
        description: "A simple 3d game where you have to jump over the boxes. Levels are procedurally generated.",
        image: "3dDavidGame.png",
        url: "",
        github: null
    },
    {
        title: "3D Quote Machine",
        category: [frontEnd],
        technologies: [_html, _css, _js, _THREE],
        description: "Generates random quotes which descend in 3D lettering. You can use the keyboard to control the camera view of the text.",
        image: "3dQuoteMachine.png",
        url: "https://codepen.io/crossjames934/pen/LdLbyP",
        github: null
    },
    {
        title: "Scatterplot Graph: Doping Allegations and Athletic Performance",
        category: [dataVis],
        technologies: [_html, _css, _js, _D3],
        description: "A scatterpoint graph which maps the athletic performance of Tour De France competitors. " +
            "It compares the results of those who were caught doping and those who weren't.",
        image: "allegations.png",
        url: "https://codepen.io/crossjames934/pen/PBVYJr",
        github: null
    },
    {
        title: "Astro David",
        category: [games, fullStack],
        technologies: [_html, _css, _js, _babel, _jquery, _hammer, _node, _express, _mongodb, _mongoose],
        description: "A classic and addictive space-shooter game that is cross compatible across handheld and desktop devices. " +
            "This was originally a standalone browser game; I later introduced node.js to add a public hiscore table to the game. " +
            "Now you can make your mark and show your skills off to the world should you perform well. I challenged myself by making " +
            "this without using the p5 framework for canvas animation.",
        image: "astroDavid.png",
        url: "https://david-in-space.glitch.me/",
        github: null
    },
    {
        title: "Audio Bubbles",
        category: [art],
        technologies: [_html, _css, _js, _p5, _p5sound],
        description: "My first project using waveform analysis with p5.sound.js." +
            " I mapped the intensity of each frequency to a height to which the bubbles travel, and used a translucent background " +
            "to give the appealing blurry effect. Music composed and vocals by me.",
        image: "audioVis.png",
        url: "https://audiovis.glitch.me/",
        github: null
    },
    {
        title: "Burst of Life",
        category: [art],
        technologies: [_html, _css, _js, _p5],
        description: "A mathematically generated patterns that grows in intensity with time.",
        image: "burstOfLife.png",
        url: "https://codepen.io/crossjames934/pen/ZVyEWo",
        github: null
    },
    {
        title: "Computer Science Quiz",
        category: [frontEnd, games],
        technologies: [_html, _css, _js, _babel, _react],
        description: "A quiz that utilises questions derived from an API. I used React for this project as it is great for handling asynch requests. Will you get 10/10?",
        image: "computerScienceQuiz.png",
        url: "https://codepen.io/crossjames934/pen/ebojjq",
        github: null
    },
    {
        title: "Cross Me",
        category: [games, fullStack],
        technologies: [_html, _css, _js, _p5, _node, _socket, _express, _mongodb, _mongoose],
        description: "",
        image: "crossMe.png",
        url: "https://cross-me.glitch.me/",
        github: null
    },
    {
        title: "Crosstopia City",
        category: [art],
        technologies: [_html, _css, _js, _p5],
        description: "A procedurally generate city with parallax effect. No images, just code.",
        image: "crosstopiaCity.png",
        url: "https://codepen.io/crossjames934/pen/pqJRQQ",
        github: null
    },
    {
        title: "Drones",
        category: [frontEnd],
        technologies: [_pug, _css, _js],
        description: "A product landing page for drones. I utilised Pug to generate this page.",
        image: "astroDavid.png",
        url: "https://codepen.io/crossjames934/pen/JZOEqV",
        github: null
    },
    {
        title: "Drum Machine and Beat Composer",
        category: [frontEnd],
        technologies: [_pug, _scss, _js, _babel, _react, _redux, _howler],
        description: "Use the keyboard to make drum sounds, get some practise and you'll be able to play" +
            "a cool beat on your laptop. Click on the little rectangles to compose your own beat." +
            "Change the BPM as you listen back to your composition.",
        image: "drumMachine.png",
        url: "https://codepen.io/crossjames934/pen/xJJvjy",
        github: null
    },
    {
        title: "Escape The Spikes",
        category: [games],
        technologies: [_html, _css, _js, _p5],
        description: "An intense educational game for practising mental maths. Dive right in to practise your times tables, or go" +
            "to the settings to challenge yourself in other areas. Tested in classrooms, children respond to it well as" +
            "it gets them very engaged, just beware that one or two of them may get too passionate and start screaming." +
            "You have been warned.",
        image: "escapeTheSpikes.png",
        url: "",
        github: null
    },
    {
        title: "Exercise Tracker",
        category: [fullStack],
        technologies: [_html, _css, _js, _node, _express, _mongodb, _mongoose],
        description: "A page where you can join up as a user to post your exercise progress. Compare your progress with other workout fanatics.",
        image: "exerciseTracker.png",
        url: "https://jc-fcc-exercise-tracker.glitch.me/",
        github: null
    },
    {
        title: "Fireflies",
        category: [art],
        technologies: [_html, _css, _js, _p5],
        description: "I used the Perlin Noise function provided by p5 to animate they fireflies that seem to have a life of their own.",
        image: "fireflies.png",
        url: "https://codepen.io/crossjames934/pen/Rxyjdr",
        github: null
    },
    {
        title: "Float Towards The Light",
        category: [art],
        technologies: [_html, _css, _js, _p5],
        description: "A kaleidoscopic animated pattern, it grows the longer you let it run.",
        image: "floatTowardsTheLight.png",
        url: "https://codepen.io/crossjames934/pen/QZPYar",
        github: null
    },
    {
        title: "Game Reviews",
        category: [fullStack],
        technologies: [_pug, _css, _js, _node, _express, _mongodb, _mongoose, _passport, _helmet],
        description: "Leave a review here for all the games you love and hate. " +
            "Authenticate yourself through Facebook, Google or Github to get up and running in a couple of clicks.",
        image: "gameReviews.png",
        url: "https://game-reviews.glitch.me/",
        github: null
    },
    {
        title: "GDP Bar Chart",
        category: [dataVis],
        technologies: [_html, _css, _js, _D3],
        description: "My first D3 project, an interactive bar chart that shows GDP data over time.",
        image: "gdp.png",
        url: "https://codepen.io/crossjames934/pen/wxQKzp?editors=0010",
        github: null
    }
];