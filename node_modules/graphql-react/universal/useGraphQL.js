'use strict';

var React = require('react');

var ReactDOM = require('react-dom');

var GraphQL = require('./GraphQL');

var GraphQLContext = require('./GraphQLContext');

var hashObject = require('./hashObject');

var FirstRenderDateContext = require('./private/FirstRenderDateContext');

var graphqlFetchOptions = require('./private/graphqlFetchOptions');

module.exports = function useGraphQL(_ref) {
  var operation = _ref.operation,
    fetchOptionsOverride = _ref.fetchOptionsOverride,
    _ref$cacheKeyCreator = _ref.cacheKeyCreator,
    cacheKeyCreator =
      _ref$cacheKeyCreator === void 0 ? hashObject : _ref$cacheKeyCreator,
    loadOnMount = _ref.loadOnMount,
    loadOnReload = _ref.loadOnReload,
    loadOnReset = _ref.loadOnReset,
    reloadOnLoad = _ref.reloadOnLoad,
    resetOnLoad = _ref.resetOnLoad;
  if (typeof cacheKeyCreator !== 'function')
    throw new TypeError(
      'useGraphQL() option “cacheKeyCreator” must be a function.'
    );
  if (reloadOnLoad && resetOnLoad)
    throw new TypeError(
      'useGraphQL() options “reloadOnLoad” and “resetOnLoad” can’t both be true.'
    );
  var graphql = React.useContext(GraphQLContext);
  if (typeof graphql === 'undefined')
    throw new TypeError('GraphQL context missing.');
  if (!(graphql instanceof GraphQL))
    throw new TypeError('GraphQL context must be a GraphQL instance.');
  var freshCacheKey = React.useMemo(
    function () {
      var fetchOptions = graphqlFetchOptions(operation);
      if (fetchOptionsOverride) fetchOptionsOverride(fetchOptions);
      return cacheKeyCreator(fetchOptions);
    },
    [cacheKeyCreator, fetchOptionsOverride, operation]
  );

  var _React$useState = React.useState(freshCacheKey in graphql.operations),
    loading = _React$useState[0],
    setLoading = _React$useState[1];

  var _React$useState2 = React.useState(freshCacheKey),
    cacheKey = _React$useState2[0],
    setCacheKey = _React$useState2[1];

  var _React$useState3 = React.useState(graphql.cache[freshCacheKey]),
    cacheValue = _React$useState3[0],
    setCacheValue = _React$useState3[1];

  var _React$useState4 = React.useState(cacheValue),
    loadedCacheValue = _React$useState4[0],
    setLoadedCacheValue = _React$useState4[1];

  if (cacheKey !== freshCacheKey) {
    setLoading((loading = freshCacheKey in graphql.operations));
    setCacheKey((cacheKey = freshCacheKey));
    setCacheValue((cacheValue = graphql.cache[freshCacheKey]));
    if (cacheValue) setLoadedCacheValue((loadedCacheValue = cacheValue));
  }

  var load = React.useCallback(
    function () {
      var _graphql$operate = graphql.operate({
          operation: operation,
          fetchOptionsOverride: fetchOptionsOverride,
          cacheKeyCreator: cacheKeyCreator,
          reloadOnLoad: reloadOnLoad,
          resetOnLoad: resetOnLoad,
        }),
        cacheValuePromise = _graphql$operate.cacheValuePromise;

      setLoading(true);
      return cacheValuePromise;
    },
    [
      cacheKeyCreator,
      fetchOptionsOverride,
      graphql,
      operation,
      reloadOnLoad,
      resetOnLoad,
    ]
  );
  var isMountedRef = React.useRef(false);
  React.useEffect(function () {
    isMountedRef.current = true;
    return function () {
      isMountedRef.current = false;
    };
  }, []);
  var onFetch = React.useCallback(
    function (_ref2) {
      var fetchingCacheKey = _ref2.cacheKey;
      if (cacheKey === fetchingCacheKey && isMountedRef.current)
        setLoading(true);
    },
    [cacheKey]
  );
  React.useEffect(
    function () {
      graphql.on('fetch', onFetch);
      return function () {
        graphql.off('fetch', onFetch);
      };
    },
    [graphql, onFetch]
  );
  var onCache = React.useCallback(
    function (_ref3) {
      var cachedCacheKey = _ref3.cacheKey,
        cacheValue = _ref3.cacheValue;
      if (cacheKey === cachedCacheKey && isMountedRef.current)
        ReactDOM.unstable_batchedUpdates(function () {
          setLoading(false);
          setCacheValue(cacheValue);
          setLoadedCacheValue(cacheValue);
        });
    },
    [cacheKey]
  );
  React.useEffect(
    function () {
      graphql.on('cache', onCache);
      return function () {
        graphql.off('cache', onCache);
      };
    },
    [graphql, onCache]
  );
  var onReload = React.useCallback(
    function (_ref4) {
      var exceptCacheKey = _ref4.exceptCacheKey;
      if (
        cacheKey !== exceptCacheKey &&
        loadOnReload &&
        cacheValue &&
        isMountedRef.current
      )
        load();
    },
    [cacheKey, cacheValue, load, loadOnReload]
  );
  React.useEffect(
    function () {
      graphql.on('reload', onReload);
      return function () {
        graphql.off('reload', onReload);
      };
    },
    [graphql, onReload]
  );
  var onReset = React.useCallback(
    function (_ref5) {
      var exceptCacheKey = _ref5.exceptCacheKey;

      if (cacheKey !== exceptCacheKey && isMountedRef.current) {
        ReactDOM.unstable_batchedUpdates(function () {
          setCacheValue(graphql.cache[cacheKey]);
          setLoadedCacheValue(graphql.cache[cacheKey]);
        });
        if (loadOnReset) load();
      }
    },
    [cacheKey, graphql.cache, load, loadOnReset]
  );
  React.useEffect(
    function () {
      graphql.on('reset', onReset);
      return function () {
        graphql.off('reset', onReset);
      };
    },
    [graphql, onReset]
  );

  var _React$useState5 = React.useState(),
    loadedOnMountCacheKey = _React$useState5[0],
    setLoadedOnMountCacheKey = _React$useState5[1];

  var firstRenderDate = React.useContext(FirstRenderDateContext);
  React.useEffect(
    function () {
      if (
        loadOnMount &&
        cacheKey !== loadedOnMountCacheKey &&
        !(cacheValue && new Date() - firstRenderDate < 1000)
      ) {
        setLoadedOnMountCacheKey(cacheKey);
        load();
      }
    },
    [
      cacheKey,
      cacheValue,
      firstRenderDate,
      load,
      loadOnMount,
      loadedOnMountCacheKey,
    ]
  );
  if (graphql.ssr && loadOnMount && !cacheValue)
    graphql.operate({
      operation: operation,
      fetchOptionsOverride: fetchOptionsOverride,
      cacheKeyCreator: cacheKeyCreator,
      reloadOnLoad: reloadOnLoad,
      resetOnLoad: resetOnLoad,
    });
  return React.useMemo(
    function () {
      return {
        load: load,
        loading: loading,
        cacheKey: cacheKey,
        cacheValue: cacheValue,
        loadedCacheValue: loadedCacheValue,
      };
    },
    [cacheKey, cacheValue, loadedCacheValue, load, loading]
  );
};
