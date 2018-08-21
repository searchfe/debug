define('debug', function () {
    function logger() {
    }
    return function factory() {
        return logger;
    };
});
