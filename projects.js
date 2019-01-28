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
const _jquery = "jQuery";
const _react = "React";
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


// Projects
const projects = [
    {
        title: "3D Jumping Game",
        category: [games],
        technologies: [_html, _css, _js, _THREE],
        description: "A simple 3d game where you have to jump over the boxes. Levels are procedurally generated.",
        image: "3dDavidGame.png",
        url: ""
    },
    {
        title: "3D Quote Machine",
        category: [frontEnd],
        technologies: [_html, _css, _js, _THREE],
        description: "Generates random quotes which descend in 3D lettering. You can use the keyboard to control the camera view of the text.",
        image: "3dQuoteMachine.png",
        url: ""
    },
    {
        title: "Scatterplot Graph: Doping Allegations and Athletic Performance",
        category: [dataVis],
        technologies: [_html, _css, _js, _D3],
        description: "A scatterpoint graph which maps the athletic performance of Tour De France competitors. " +
            "It compares the results of those who were caught doping and those who weren't.",
        image: "allegations.png",
        url: ""
    },
    {
        title: "Astro David",
        category: [games, fullStack],
        technologies: [_html, _css, _js, _jquery, _hammer, _node, _express, _mongodb, _mongoose],
        description: "A classic and addictive space-shooter game that is cross compatible across handheld and desktop devices. " +
            "This was originally a standalone browser game; I later introduced node.js to add a public hiscore table to the game. " +
            "Now you can make your mark and show your skills off to the world should you perform well. I challenged myself by making " +
            "this without using the p5 framework for canvas animation.",
        image: "astroDavid.png",
        url: ""
    },
    {
        title: "Audio Bubbles",
        category: [art],
        technologies: [_html, _css, _js, _p5, _p5sound],
        description: "My first project using waveform analysis with p5.sound.js. I mapped the intensity of each frequency to a height to which the bubbles travel, and used a translucent background to give the appealing blurry effect.",
        image: "astroDavid.png",
        url: ""
    },
];