define([
	"backbone",
	"underscore",
	"text!templates/package.tmpl.html"
], function(Backbone, _, PackageTemplate) {
	var Package = Backbone.View.extend({
		tagName: "li",
		template: _.template(PackageTemplate),
		initialize: function() {
			this.render();
		},
		render: function() {
			var html = this.template(this.model.attributes);
			this.$el.html(html);
			return this;
		}
	});

	return Package;
});