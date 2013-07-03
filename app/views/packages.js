define([
	"backbone",
	"collections/packages",
	"views/package"
], function(Backbone, Packages, Package) {
	var PackagesView = Backbone.View.extend({
		el: "#packageContainer",
		initialize: function(options) {
			options = options || {};

			this.collection = options.packages || new Packages();
			
			this.listenTo(this.collection, 'add', this.renderPackage);

			this.collection.fetch();
		},
		render: function() {
			this.collection.each(this.renderPackage, this);
		},
		renderPackage: function(model) {
			var pkg = new Package({
				model: model
			});
			
			this.$el.append(pkg.el);
		}
	});

	return PackagesView;
});