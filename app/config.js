require.config({
    // make components more sensible
    // expose jquery 
    paths: {
        "components": "../components",
        "jquery": "../components/jquery/jquery",
        "backbone": "../components/backbone/backbone",
        "underscore": "../components/underscore/underscore",
        "text": "../components/requirejs-text/text",
        "mockjax": "../components/jquery-mockjax/jquery.mockjax"
    },
    shim: {
        backbone: {
            deps: ["jquery", "underscore"],
            exports: "Backbone"
        },
        underscore: {
            exports: "_"
        },
        mockjax: {
            deps: ["jquery"]
        }
    }
});

if (!window.requireTestMode) {
    require(['jquery', 'main', 'mockjax'], function($, App) {
        $.mockjax({
            url: "repositories/",
            contentType: "application/json",
            proxy: "app/fixtures/repositories.json"
        });

        window.app = new App();
    });
}