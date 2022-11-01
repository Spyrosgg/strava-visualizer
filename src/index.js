import './style.css';
import req from './req.js';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = "Strava Visualizer"
    element.classList.add('hello');

    btn.textContent = 'FETCH';
    btn.onclick = req;

    element.appendChild(btn);

    return element;
  }
  
  document.body.appendChild(component());

