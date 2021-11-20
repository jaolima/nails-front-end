'use strict';

var PropTypes = require('prop-types');

var React = require('react');

var GraphQL = require('./GraphQL');

var GraphQLContext = require('./GraphQLContext');

var FirstRenderDateContext = require('./private/FirstRenderDateContext');

function GraphQLProvider(_ref) {
  var graphql = _ref.graphql,
    children = _ref.children;
  var firstRenderDateRef = React.useRef(new Date());
  return React.createElement(
    FirstRenderDateContext.Provider,
    {
      value: firstRenderDateRef.current,
    },
    React.createElement(
      GraphQLContext.Provider,
      {
        value: graphql,
      },
      children
    )
  );
}

if (typeof process === 'object' && process.env.NODE_ENV !== 'production')
  GraphQLProvider.propTypes = {
    graphql: PropTypes.instanceOf(GraphQL).isRequired,
    children: PropTypes.node,
  };
module.exports = GraphQLProvider;
