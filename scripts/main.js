// Create your variables here
// ==========================================
let numberOfSeasons = 6;
let numberOfEpisodes = 12;

let episodeTime = 45;
let commercialTime = 5;
// ==========================================

// Calculate totalShowTime here
// ==========================================
let totalShowTime = (episodeTime + commercialTime) * numberOfEpisodes * numberOfSeasons;
// ==========================================


let paragraph = document.querySelector('#info');
paragraph.innerText = `${numberOfSeasons} seasons, 
${numberOfEpisodes} episodes per season

Total viewing time: ${totalShowTime} minutes`;