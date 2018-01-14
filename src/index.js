import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { JunctionNavigation } from 'react-junctions';
import { AppJunctionTemplate } from './App';
import registerServiceWorker from './registerServiceWorker';

function main() {
  let content =
    <JunctionNavigation
      root={AppJunctionTemplate}
      waitForInitialContent
    />

  let node = document.getElementById('root')
  if (process.env.NODE_ENV === 'production') {
    ReactDOM.hydrate(content, node)
  }
  else {
    ReactDOM.render(content, node)
  }
}

if (process.env.NODE_ENV !== 'production') {
  main()
  registerServiceWorker()
}

window.JunctionsStaticApp = {
  root: AppJunctionTemplate,
  main: main
}

