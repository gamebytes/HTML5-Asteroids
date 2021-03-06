/**
 * Created with JetBrains WebStorm.
 * User: julian
 * Date: 09/03/13
 * Time: 13:27
 */
define(['lib/easeljs/EaselJSAtlasLoader'], function (EaselJSAtlasLoader) {

	function AtlasTest() {
		this.stage = null;
		this.atlas = null;
	}

	var api = AtlasTest.prototype;

	api.init = function init() {
		var self = this;

		this._initStage();

		this.loader = new EaselJSAtlasLoader();
		this.loader.complete.add(function (atlas) {
			self._handleAtlasReady(atlas);
		});
		this.loader.load('./assets/', 'asteroids.json');

	};

	api._initStage = function _initStage() {
		this.stage = new createjs.Stage('canvas');
		createjs.Ticker.setFPS(60);
		createjs.Ticker.addListener(this.stage);
		//createjs.Ticker.addEventListener("tick", function (event) {});
	};

	api._handleAtlasReady = function _handleAtlasReady(atlas) {
		console.log("drawing...");
		console.log(atlas.getDisplayObjectList());

		bmpa1 = atlas.getDisplayObject("ship-explosion");

		bmpa1.regX = 45;
		bmpa1.regY = 45;

		bmpa1.x = 100;
		bmpa1.y = 100;

		bmpa1.rotation = 0;

		this.stage.addChild(bmpa1);

		createjs.Ticker.addEventListener("tick", function (event) {
			bmpa1.rotation++;
		});
		this.atlas = atlas;
	};


	return AtlasTest;
});