!function (factory) {
  if("object" == typeof exports && "undefined" != typeof module)
    module.exports = factory();
  else if ("function" == typeof define && define.amd)
    define([], factory)
}(function () {
    function logger() {}
    return function factory() {
        return logger;
    };
});
