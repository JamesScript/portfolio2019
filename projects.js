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
    },
    {
        title: "Heat Map",
        category: [dataVis],
        technologies: [_html, _css, _js, _D3],
        description: "An interactive heat map graph. Displays the effect of climate change.",
        image: "heatMap.png",
        url: "https://codepen.io/crossjames934/pen/LBqrNO",
        github: null
    },
    {
        title: "Hue Doughnut",
        category: [art],
        technologies: [_html, _css, _js, _p5],
        description: "A colourful animated doughnut built using p5",
        image: "hueDoughtnut.png",
        url: "https://codepen.io/crossjames934/pen/LBqrNO",
        github: null
    },
    {
        title: "James Cross Bubble Letters",
        category: [art],
        technologies: [_html, _css, _js, _p5],
        description: "My name in pulsating colourful letters.",
        image: "jcBubbleLetters.gif",
        url: "https://jamescrosslettering.glitch.me/",
        github: null
    },
    {
        title: "Kaleidoscope: None Of This Is Real",
        category: [art],
        technologies: [_html, _css, _js, _p5],
        description: "Out of all the kaleidoscopic patterns I have created using code, this is my favourite.",
        image: "kaleidoscope.png",
        url: "https://codepen.io/crossjames934/pen/YdePdK",
        github: null
    },
    {
        title: "Loading Icon",
        category: [art],
        technologies: [_html, _css, _js, _p5],
        description: "A loading icon I animated using p5",
        image: "loadingIcon.png",
        url: "https://codepen.io/crossjames934/pen/GXQvqP",
        github: null
    },
    {
        title: "Multiplication Game",
        category: [games],
        technologies: [_html, _css, _js, _p5],
        description: "One of my first ever games, test your multiplication skills in this fast-paced addictive game. Dodge the wrong answers while trying" +
            "to bump into the right one.",
        image: "loadingIcon.png",
        url: "https://codepen.io/crossjames934/pen/GXQvqP",
        github: null
    },
    {
        title: "Nuclear Fall In",
        category: [games],
        technologies: [_html, _css, _js, _p5],
        description: "My first platformer game. A nuclear bomb has gone off on the surface, see how far" +
            "underground you can escape. Can you avoid all the deadly traps?" +
            "I created a level generator so that I could draw the tiles and export the" +
            "layout as a string, with each character representing a different type of object. I designed" +
            "the artwork on Piskel. I also produced" +
            "the music in Logic Pro. Please note this is one of my first projects so the code isn't the most" +
            "efficient performance wise, and some devices may struggle to run this game properly.",
        image: "nuclearFallin.png",
        url: "",
        github: null
    },
    {
        title: "Poppy Field",
        category: [art],
        technologies: [_html, _css, _js, _p5],
        description: "A procedurally generated poppy field, refresh the page to see the mountains and poppies in a new formation.",
        image: "poppyField.png",
        url: "https://codepen.io/crossjames934/pen/QJbwKO",
        github: null
    },
    {
        title: "Recipe Box",
        category: [frontEnd],
        technologies: [_html, _css, _js, _babel, _react],
        description: "One of my earliest React projects, a recipe box which you can customise.",
        image: "recipeBox.png",
        url: "https://codepen.io/crossjames934/pen/PaZZGR",
        github: null
    },
    {
        title: "Synthetic Sakura",
        category: [art],
        technologies: [_html, _css, _js, _p5],
        description: "A moving breathing fractal tree, looks like a cherry blossom or Sakura.",
        image: "sakura.png",
        url: "https://codepen.io/crossjames934/pen/dQQLMJ",
        github: null
    },
    {
        title: "Simon Game Dubstep Edition",
        category: [art],
        technologies: [_pug, _scss, _js],
        description: "There are many recreations of the classic Simon Game online, but I have yet to come across one that produces" +
            "dubstep music as you play like mine does.",
        image: "simonGame.png",
        url: "https://codepen.io/crossjames934/pen/RMGpOM",
        github: null
    },
    {
        title: "Spin Tunnel",
        category: [art],
        technologies: [_html, _css, _js, _p5],
        description: "Spin the tunnel by moving the mouse across it horizontally.",
        image: "spinTunnel.png",
        url: "https://codepen.io/crossjames934/pen/OrpYoN",
        github: null
    },
    {
        title: "Summary of Human History",
        category: [frontEnd],
        technologies: [_html, _css, _js, _babel, _react],
        description: "A page that uses a Wikipedia API to get information on pages about different centuries, so you can scroll through the history of humankind." +
            "I used React because it deals with asynchronous API requests with ease and each segment is procedurally generated with JSX and JavaScript algorithms.",
        image: "summaryOfHumanHistory.png",
        url: "https://codepen.io/crossjames934/pen/xmNRNM",
        github: null
    },
    {
        title: "Survey Form",
        category: [frontEnd],
        technologies: [_pug, _scss, _js],
        description: "A sample survey form. Practise for my Pug skills.",
        image: "surveyForm.png",
        url: "https://codepen.io/crossjames934/pen/yEgzPR",
        github: null
    },
    {
        title: "Tic Tac Toe",
        category: [games],
        technologies: [_html, _css, _js, _p5],
        description: "A Noughts and Crosses / Tic Tac Toe game. " +
            "This was a real challenge as I wanted to program a 'Hard' mode where the computer was unbeatable. You can also play 2P mode.",
        image: "ticTacToe.png",
        url: "https://codepen.io/crossjames934/pen/xWZdba",
        github: null
    },
    {
        title: "Canvas Game Tutorial",
        category: [frontEnd],
        technologies: [_html, _css, _js],
        description: "A step-by-step tutorial on how to make a HTML5 Canvas game without using frameworks like p5.",
        image: "tutorial.png",
        url: "https://codepen.io/crossjames934/pen/oyELzE",
        github: null
    },
    {
        title: "Choropleth Map: Academic Prowess in the USA",
        category: [frontEnd],
        technologies: [_html, _css, _js, _D3],
        description: "An interactive Choropleth Map that shows which states in the USA have higher University Degree attainment.",
        image: "usaMap.png",
        url: "https://codepen.io/crossjames934/pen/LBaEOZ?editors=0011",
        github: null
    },
    {
        title: "Tree Map: Video Game Sales",
        category: [frontEnd],
        technologies: [_html, _css, _js, _D3],
        description: "A tree map which represents the amounts of games that were sold for each console. Has different viewing options available.",
        image: "videoGameSales.png",
        url: "https://codepen.io/crossjames934/pen/pOoRNx",
        github: null
    },
    {
        title: "Wikipedia Viewer",
        category: [frontEnd],
        technologies: [_html, _css, _js, _jquery, _p5],
        description: "My first wikipedia API project, search for something and what the results fill the page. Bubbles animated using P5.",
        image: "wikipediaViewer.png",
        url: "https://codepen.io/crossjames934/pen/jZPzaK",
        github: null
    },
    {
        title: "Maths Joke Work Sheet Generator",
        category: [frontEnd],
        technologies: [_html, _css, _js, _babel, _react],
        description: "Automatically generate a maths work sheet in which your pupils answer maths questions to reveal the punchline to a joke." +
            " Customise your own level of difficulty and joke.",
        image: "workSheetGenerator.png",
        url: "https://codepen.io/crossjames934/pen/XqJMvj?editors=0010",
        github: null
    },
    {
        title: "Worm",
        category: [art],
        technologies: [_html, _css, _js, _p5],
        description: "A worm that moves according to two Perlin Noise algorithms working alongside (for x and y coordinates respectively).",
        image: "worm.png",
        url: "https://codepen.io/crossjames934/pen/VrvWoy",
        github: null
    }
];