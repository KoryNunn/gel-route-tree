# gel-route-tree

route-tree functions for gel

# usage

    var gelRouteTree = require('gel-route-tree');

Call the gelRouteTree function on your gel instances scope, passing in your router instance:

    gelRouteTree(gel.scope, router);

Now you can use route-tree functions in gel expressions:

    (router.get "home")
    -> '/'

(Depends what you have set up on your router)