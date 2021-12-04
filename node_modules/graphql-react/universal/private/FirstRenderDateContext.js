'use strict';

var React = require('react');

var FirstRenderDateContext = React.createContext();
if (typeof process === 'object' && process.env.NODE_ENV !== 'production')
  FirstRenderDateContext.displayName = 'FirstRenderDateContext';
module.exports = FirstRenderDateContext;
