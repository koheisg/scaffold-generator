// This set's up the module paths for underscore and backbone
require.config({ 
    'paths': { 
        "underscore": "bower_components/underscore/underscore-min",
        "jquery": "bower_components/jquery/dist/jquery.min",
        "bootstrap": "bower_components/bootstrap/dist/js/bootstrap.min"
    }
}); 

require([
    'underscore',
    'jquery',
    'app'
]);
