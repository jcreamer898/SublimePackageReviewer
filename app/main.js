// to depend on a bower installed component:
// define(['component/componentName/file'])

define([
	"jquery",
	"underscore",
	"views/packages"
], function($, _, Packages) {
	var App = function(options) {
		options = options || {};
		this.packages = options.packages || new Packages();
	};

	_.extend(App.prototype, {
		initialize: function() {

		}
	});

	return App;
});