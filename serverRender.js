import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './src/components/App';

import config from './config';
import axios from 'axios';

const serverRender = () => {
  return axios.get(`${config.serveUrl}/api/contests`).then(res => {
    return {
      initialMarkup: ReactDOMServer.renderToString(<App initialContests={ res.data.contests } />),
      initialData: res.data
    };
  });
};

export default serverRender;
