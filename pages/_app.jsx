import "../styles/globalStyles.scss"
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import Router from 'next/router';
import App, { Container } from 'next/app';
import NProgress from 'nprogress';

NProgress.configure({ showSpinner: false });

Router.onRouteChangeStart = () => {
  // console.log('onRouteChangeStart triggered');
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  // console.log('onRouteChangeComplete triggered');
  NProgress.done();
};

Router.onRouteChangeError = () => {
  // console.log('onRouteChangeError triggered');
  NProgress.done();
};
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
