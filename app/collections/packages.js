define([
		"backbone",
		"underscore",
		"models/package"
], function(Backbone, _, Package) {
	var Packages = Backbone.Collection.extend({
		model: Package,
		url: "repositories/",
		parse: function(resp) {
			var pkgs = _.reduce(resp.packages, function(memo, repo) {
				var concated = memo.concat(repo);
				return concated;
			}, []);

			pkgs.sort(function(a, b) {
				var nameA = a.name.toLowerCase(),
					nameB = b.name.toLowerCase();

				if (nameA < nameB) {
					return -1;
				}
				
				if (nameA > nameB) {
					return 1;
				}
				
				return 0;
			});

			return pkgs;
		}
	});
	return Packages;
});