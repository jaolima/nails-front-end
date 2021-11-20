'use strict';

var React = require('react');

var GraphQLContext = React.createContext();
if (typeof process === 'object' && process.env.NODE_ENV !== 'production')
  GraphQLContext.displayName = 'GraphQLContext';
module.exports = GraphQLContext;
