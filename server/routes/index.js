
var keystone = require('keystone');
var importRoutes = keystone.importer(__dirname);

var routes = {
	api: importRoutes('./api'),
};


exports = module.exports = function (app) {
	app.get('/api/recipe/', keystone.middleware.api, routes.api.recipe.list);
	app.all('/api*', keystone.middleware.cors);
	app.options('/api*', function(req, res) { res.send(200); });
	app.get('/index.html', function (req, res) {
		function renderFullPage () {
			return `
		<!doctype html>
		<html>
			<head>
				<title>Keystone With React And Redux</title>
			</head>
      <body>
        <div class="react-container">
        </div>
				<script src="bundle.js"></script>
			</body>
		</html>
		`;
		}
		res.send(renderFullPage());
	});
};
