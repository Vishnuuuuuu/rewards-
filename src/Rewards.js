// src/Rewards.js
import React from 'react';
import './Rewards.css';

// Import logos from local assets for watching anime
import nineAnimeLogo from './assets/9-anime-logo.jpeg';
import animaxIndiaLogo from './assets/animax-india-logo.jpeg';
import animePlanetLogo from './assets/anime-planet-logo.jpeg';
import funimationLogo from './assets/funimation-logo.jpeg';
import tonamiIndiaLogo from './assets/tonami-india-logo.jpeg';

// Import logos from local assets for downloading anime
import animeVillaLogo from './assets/anime-villa-logo.png';
import coolsAnimeLogo from './assets/cools-anime-logo.png';

const sitesToWatch = [
  {
    name: 'Anime Planet',
    url: 'https://www.anime-planet.com/',
    logo: animePlanetLogo,
  },
  {
    name: '9 Anime',
    url: 'https://9anime.to/',
    logo: nineAnimeLogo,
  },
  {
    name: 'Animax India',
    url: 'https://www.animaxindia.com/',
    logo: animaxIndiaLogo,
  },
  {
    name: 'Tonami India',
    url: 'https://www.tonami.in/',
    logo: tonamiIndiaLogo,
  },
  {
    name: 'Funimation',
    url: 'https://www.funimation.com/',
    logo: funimationLogo,
  },
];

const sitesToDownload = [
  {
    name: 'Anime Villa 4 u',
    url: 'https://www.animevilla4u.com/',
    logo: animeVillaLogo,
  },
  
  // {
  //   name: 'Animetm Dubbers',
  //   url: 'https://www.animetmdubbers.com/',
  //   logo: animetmLogo,
  // },
  {
    name: 'Cools Anime.me',
    url: 'https://www.coolsanime.me/',
    logo: coolsAnimeLogo,
  },
 
];

const Rewards = () => (
  <div className="rewards-container">
    <h2>Sites to Watch Anime in Hindi</h2>
    <div className="card-container">
      {sitesToWatch.map((site, index) => (
        <div key={index} className="card">
          <a href={site.url} target="_blank" rel="noopener noreferrer">
            <img src={site.logo} alt={`${site.name} logo`} className="card-logo" />
            <div className="card-name">{site.name}</div>
          </a>
        </div>
      ))}
    </div>
  </div>
);

const Downloads = () => (
  <div className="rewards-container">
    <h2>Sites to Download Anime in Hindi</h2>
    <div className="card-container">
      {sitesToDownload.map((site, index) => (
        <div key={index} className="card">
          <a href={site.url} target="_blank" rel="noopener noreferrer">
            <img src={site.logo} alt={`${site.name} logo`} className="card-logo" />
            <div className="card-name">{site.name}</div>
          </a>
        </div>
      ))}
    </div>
  </div>
);

export { Downloads, Rewards };

