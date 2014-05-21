module.exports = function(scope, router){
    app.gaffa.gedi.gel.scope.router = {};

    function createRouterFunction(key){
        return function(scope, args){
            var all = args.all();
            return router[key].apply(router, all);
        };
    }

    for(var key in router){
        if(
            !window.location.hasOwnProperty(key) ||
            typeof window.location[key] !== 'function'
        ){
            continue;
        }

        scope.url[key] = createLocationFunction(key);
    }

    // Add the routers homeRoute string to the gel router function
    scope.router.basePath = router.basePath;

    // Extra handy function to build a route using values from the current route.
    scope.router.to = function(scope, args){
        var all = args.all();
        all.unshift(null);
        return router.drill.apply(router, all);
    };
};