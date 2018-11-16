webpackJsonp([0],{

/***/ 1089:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.titleScene = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _main = __webpack_require__(214);

var _ui = __webpack_require__(213);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *  @author       Seilai Zhao <seilaizh@gmail.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *  titleScene.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *  The Title Scene I will use to test my menu class and UI.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var titleScene = exports.titleScene = function (_Phaser$Scene) {
  _inherits(titleScene, _Phaser$Scene);

  function titleScene() {
    _classCallCheck(this, titleScene);

    return _possibleConstructorReturn(this, (titleScene.__proto__ || Object.getPrototypeOf(titleScene)).call(this, { key: "titleScene" }));
  }

  _createClass(titleScene, [{
    key: "init",
    value: function init() {}
  }, {
    key: "preload",
    value: function preload() {
      this.load.atlas("buttons", "../assets/ui/button.png", "../assets/ui/button_atlas.json");
      this.load.atlas("ui", "../assets/ui/ui.png", "../assets/ui/ui_atlas.json");

      this.load.audio("titleTheme", "../assets/sound/title_theme.mp3");
      this.load.audio("prologueTheme", "../assets/sound/prologue_theme.mp3");
    }
  }, {
    key: "create",
    value: function create() {
      var foo = function foo() {
        console.log("test");
      };

      var titleTheme = this.sound.add("titleTheme");
      var prologueTheme = this.sound.add("prologueTheme");
      prologueTheme.setLoop(true);
      titleTheme.play();
      titleTheme.setLoop(true);
      var startMenu = this.add.existing(new _ui.Menu(this, 512, 271, "silver", true));
      startMenu.addButton(this, "Start", "silver", {}, this.startGame);
      startMenu.addButton(this, "Options", "silver", {}, foo);
      startMenu.addButton(this, "Quit", "silver", {}, foo);
    }
  }, {
    key: "startGame",
    value: function startGame() {
      this.scene.start("gameScene");
      this.sound.stopAll();
    }
  }]);

  return titleScene;
}(Phaser.Scene);

/***/ }),

/***/ 1090:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gameScene = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Player = __webpack_require__(1091);

var _Mob = __webpack_require__(449);

var _ui = __webpack_require__(213);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *  @author       Seilai Zhao <seilaizh@gmail.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *  gameScene.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *  Currently the main scene in which development of core game mechanics and gameplay will happen.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

//Importing controls from main for use in this scene.

//import {io} from "../../server";

var gameScene = exports.gameScene = function (_Phaser$Scene) {
  _inherits(gameScene, _Phaser$Scene);

  function gameScene() {
    _classCallCheck(this, gameScene);

    return _possibleConstructorReturn(this, (gameScene.__proto__ || Object.getPrototypeOf(gameScene)).call(this, { key: "gameScene" }));
  }

  _createClass(gameScene, [{
    key: 'init',
    value: function init() {}

    //Loading assets.

  }, {
    key: 'preload',
    value: function preload() {
      this.load.image("tiles", "../assets/tilesets/tuxmon-sample-32px.png");
      this.load.tilemapTiledJSON("map", "../assets/maps/sample_map.json");
      this.load.atlas("atlas", "../assets/atlas/atlas.png", "../assets/atlas/atlas.json");
    }

    //Rendering assets.

  }, {
    key: 'create',
    value: function create() {
      var _this2 = this;

      this.sound.play("prologueTheme");
      this.mobs = {};
      this.socket = io();

      var addPlayers = function addPlayers(players) {
        var socketId = _this2.socket.id;
        var scene = _this2;
        Object.keys(players).forEach(function (id) {
          if (players[id].playerId === socketId) {
            scene.player = scene.add.existing(new _Player.Player(scene, players[id].x, players[id].y, "atlas", "misa-front", map.tileWidth, 5));
            scene.physics.add.existing(scene.player);
            scene.player.cursors = cursors;
            scene.player.map = map;
            scene.player.body.setSize(32, 40);
            scene.player.key = "player";
            scene.player.body.setOffset(0, 24);
            scene.physics.add.collider(scene.player, worldLayer);
            scene.player.id = id;
            scene.sys.updateList.add(scene.player);
            camera.startFollow(scene.player);
            console.log(scene.player);
          } else {
            scene.mobs[id] = scene.add.existing(new _Mob.Mob(scene, players[id].x, players[id].y, "atlas", "misa-front", map.tileWidth, 5));
            scene.mobs[id] = scene.physics.add.existing(scene.mobs[id]);
            scene.mobs[id].setSize(32, 40);
            scene.mobs[id].body.setOffset(0, 24);
            scene.mobs[id].id = id;
            scene.mobs[id].key = "otherPlayer";
            scene.sys.updateList.add(scene.mobs[id]);
          }
        });
      };

      var playerQuit = function playerQuit(id) {
        if (_this2.player.id == id) _this2.player.destroy();else mobs[id].destroy();
      };

      this.socket.on('currentPlayers', addPlayers);
      this.socket.on('disconnect', playerQuit);

      map = this.make.tilemap({ key: "map" });

      // Parameters are the name you gave the tileset in Tiled and then the key of the tileset image in
      // Phaser's cache (i.e. the name you used in preload)
      var tileset = map.addTilesetImage("tuxmon-sample-32px", "tiles");

      // Parameters: layer name (or index) from Tiled, tileset, x, y
      var belowLayer = map.createStaticLayer("Turf", tileset, 0, 0);
      var worldLayer = map.createStaticLayer("AboveTurf", tileset, 0, 0);
      var aboveLayer = map.createStaticLayer("AbovePlayer", tileset, 0, 0);

      aboveLayer.setDepth(10);

      //Adding spawnpoint
      var spawnPoint = map.findObject("Object", function (obj) {
        return obj.name === "spawnPoint";
      });

      //Setting collision property to everything in the layer AboveTurf
      worldLayer.setCollisionByProperty({ collides: true });

      //Debug collision
      // const debugGraphics = this.add.graphics().setAlpha(0.75);
      // worldLayer.renderDebug(debugGraphics, {
      //   tileColor: null,
      //   collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255),
      //   faceColor: new Phaser.Display.Color(40, 39, 37, 255)
      // });


      cursors = this.input.keyboard.createCursorKeys();
      var anims = this.anims;
      anims.create({
        key: "misa-left-walk",
        frames: anims.generateFrameNames("atlas", { prefix: "misa-left-walk.", start: 0, end: 3, zeroPad: 3 }),
        frameRate: 10,
        repeat: -1
      });
      anims.create({
        key: "misa-right-walk",
        frames: anims.generateFrameNames("atlas", { prefix: "misa-right-walk.", start: 0, end: 3, zeroPad: 3 }),
        frameRate: 10,
        repeat: -1
      });
      anims.create({
        key: "misa-front-walk",
        frames: anims.generateFrameNames("atlas", { prefix: "misa-front-walk.", start: 0, end: 3, zeroPad: 3 }),
        frameRate: 10,
        repeat: -1
      });
      anims.create({
        key: "misa-back-walk",
        frames: anims.generateFrameNames("atlas", { prefix: "misa-back-walk.", start: 0, end: 3, zeroPad: 3 }),
        frameRate: 10,
        repeat: -1
      });

      var camera = this.cameras.main;
      camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    }

    //Checking for input and changes.

  }, {
    key: 'update',
    value: function update(time, delta) {
      if (this.player != null) this.player.update();
    }
  }]);

  return gameScene;
}(Phaser.Scene);
//Defining global variables in module to be hoisted.


var destination = new Phaser.Math.Vector2();
var player = void 0;
var mob = void 0;
var cursors = void 0;
var map = void 0;
var speed = 175;

/***/ }),

/***/ 1091:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Player = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Mob2 = __webpack_require__(449);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  @author      Seilai Zhao <seilaizh@gmail.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  Player.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  A definition of the Player gameobject that encompasses all monsters and players.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Player = exports.Player = function (_Mob) {
  _inherits(Player, _Mob);

  /**
   * @method Phaser.GameObjects.Sprite#Player
   * @since 3.12.0
   *
   * @param {object} [scene] - The scene in which the Player is created.
   * @param {integer} [x] - The x-coordinate in which the Player will be spawned
   * @param {integer} [y] - The y-coordinate in which the Player will be spawned
   * @param {key} [texture] - The key of the texture/sprite to be loaded onto the Player.
   * @param {integer} [frame] - The frame of the sprite/texture to be selected upon being loaded.
   * @param {integer} [maptileWidth] - Obsolete now that map object is linked with player.
   * @param {integer} [speed] - The speed at which the player moves at a rate of how many tiles per second.
   *
   * @return {Phaser.GameObjects.Sprite.Player}
   */
  function Player(scene, x, y, texture, frame, maptileWidth, speed) {
    _classCallCheck(this, Player);

    var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, scene, x, y, texture, frame, maptileWidth, speed));

    _this.selected = null; //The object that the player has selected
    return _this;
  }

  //update will call necessary functions for movement

  _createClass(Player, [{
    key: "update",
    value: function update(time, delta) {
      /**
       * A movement intention is set here if a cursor is held down. This will be
       * passed into the move function to determine which direction the player will
       * move. If no key is held down then moveIntention is false
       * Note: this movement system is only active when the player is not in combat.
       */
      if (this.inCombat == false) {
        if (this.cursors.left.isDown) this.moveIntention = "left";else if (this.cursors.right.isDown) this.moveIntention = "right";else if (this.cursors.up.isDown) this.moveIntention = "up";else if (this.cursors.down.isDown) this.moveIntention = "down";else if (!this.cursors.isDown) this.moveIntention = false;
      }
      _get(Player.prototype.__proto__ || Object.getPrototypeOf(Player.prototype), "update", this).call(this, time, delta);
    }
  }]);

  return Player;
}(_Mob2.Mob);

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 *  @author      Seilai Zhao <seilaizh@gmail.com>
 *  ui.js
 *  A base class for drop-down menus.
 */

var Button = exports.Button = function (_Phaser$GameObjects$C) {
  _inherits(Button, _Phaser$GameObjects$C);

  /**
   * @method Phaser.GameObjects.Container#Button
   * @since 3.12.0
   *
   * @param {object} [scene] - The scene in which the Button is created.
   * @param {integer} [x] - The x-coordinate in which the Button will be spawned
   * @param {integer} [y] - The y-coordinate in which the Button will be spawned
   * @param {string} [text] - The text to be displayed on the button
   * @param {string} [key] - The type of button to be loaded and key of it.
   * @param {object} [style] - An object containing a number of properties to style the text.
   * @param {function} [func] - A function to be passed to the button that will be called every time the button is pushed.
   * @TODO Rework key parameter. Add "type" to determine the type of button and have key be an identification instead.
   *
   * @return {Phaser.GameObjects.Container#Button}
   */
  function Button(scene, x, y, text, key, style, func) {
    _classCallCheck(this, Button);

    var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, scene, x, y));

    _this.setScrollFactor(0); //Makes sure that the UI is scrolling with the camera.

    // This switch will take the button's key and select what type of button it will become.
    // I'll only describe one case because every single other button is
    // nigh functionally identical.
    switch (key) {
      case "silver":

        //Creating the button's image and making it interactive.
        _this.buttonImage = scene.add.image(x, y, "buttons", "button_default").setInteractive();
        _this.buttonImage.imageType = "Button";
        _this.buttonImage.setScrollFactor(0);
        _this.add(_this.buttonImage);

        //Creating the button's text.
        _this.buttonText = scene.add.text(x - 22, y - 8, text, style);
        _this.add(_this.buttonText);

        //If a function was passed to the button, give the button an event listener
        //where if it is clicked, the function will be called.
        //@TODO Make the button also initialize a new variable to hold the function
        //in case the player wants to select the button without clicking it.
        if (func != null) _this.buttonImage.on("pointerup", func, scene);

        //The frame and an extra identifier for the button to make it change frames
        //depending on what happens to it.
        _this.textureFrame = "button_default";
        _this.textureKey = "buttons";
        _this.key = key;
        break;
      case "ui_start":
        _this.buttonImage = [scene.add.image(x - 47, y, "ui", "ui_start").setInteractive(), scene.add.image(x, y, "ui", "ui_button").setInteractive()];
        if (func != null) {
          _this.buttonImage[0].on("pointerup", func);
          _this.buttonImage[1].on("pointerup", func);
        }
        _this.textureFrame = "ui_button";
        _this.textureKey = "ui";
        _this.key = key;
        break;
      case "ui_misc":
        _this.buttonImage = [scene.add.image(x - 47, y, "ui", "ui_misc").setInteractive(), scene.add.image(x, y, "ui", "ui_button").setInteractive()];
        if (func != null) {
          _this.buttonImage[0].on("pointerup", func);
          _this.buttonImage[1].on("pointerup", func);
        }
        _this.textureFrame = "ui_button";
        _this.textureKey = "ui";
        _this.key = key;
        break;
      case "ui_cancel":
        _this.buttonImage = [scene.add.image(x - 47, y, "ui", "ui_cancel").setInteractive(), scene.add.image(x, y, "ui", "ui_button").setInteractive()];
        if (func != null) {
          _this.buttonImage[0].on("pointerup", func);
          _this.buttonImage[1].on("pointerup", func);
        }
        _this.textureFrame = "ui_button";
        _this.textureKey = "ui";
        _this.key = key;
        break;
      default:
        _this.buttonImage = scene.add.image(x, y, "buttons", "button_default").setInteractive();
        _this.buttonText = scene.add.text(x - 22, y - 8, text, style);
        _this.buttonImage.imageType = "Button";
        _this.add(_this.buttonImage);
        _this.add(_this.buttonText);
        if (func != null) _this.buttonImage.on("pointerup", func, scene);
        _this.textureFrame = "button_default";
        _this.textureKey = "buttons";
        _this.key = key;
        break;
    }
    return _this;
  }
  /**
   * @method Phaser.GameObjects.Container.Button#select
   * @since 3.12.0
   *
   * Shifts this button's frame to a "selected" mode which will, in the future,
   * enable its function to be called from a confirmation button and also,
   * depending on its frame, shift to a selected frame.
   *
   * @return {Phaser.GameObjects.Container.Button#select}
   */


  _createClass(Button, [{
    key: "select",
    value: function select() {
      switch (this.key) {
        case "silver":
          this.buttonImage.setTexture("buttons", "button_selected");
          this.textureFrame = "button_selected";
          break;
        default:
          break;
      }
    }
  }, {
    key: "deselect",
    value: function deselect() {
      switch (this.key) {
        case "silver":
          this.buttonImage.setTexture("buttons", "button_default");
          this.textureFrame = "button_default";
          break;
        default:
          break;
      }
    }
  }]);

  return Button;
}(Phaser.GameObjects.Container);
/**
 * @method Phaser.GameObjects.Container#Menu
 * @since 3.12.0
 *
 * @param {object} [scene] - The scene in which the Menu is created.
 * @param {integer} [x] - The x-coordinate in which the menu will be created
 * @param {integer} [y] - The y-coordinate in which the menu will be created
 * @param {string} [buttonType] - The type of buttons that will populate this Menu
 * @param {bool} [draggable] - Whether the menu is draggable or not.
 * @param {array} [children] - An array containing children already defined to be passed to the menu.
 *
 * @return {Phaser.GameObjects.Container#Menu}
 */


var Menu = exports.Menu = function (_Phaser$GameObjects$C2) {
  _inherits(Menu, _Phaser$GameObjects$C2);

  function Menu(scene, x, y, buttonType, draggable, children) {
    _classCallCheck(this, Menu);

    var _this2 = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, scene, x, y, children));

    _this2.setScrollFactor(0); //Makes sure that the UI is scrolling with the camera.
    _this2.selectedIndex; // The currently selected button in the menu.
    _this2.x = x;
    _this2.y = y;

    //This switch will determine how we should space the buttons in the menu depending
    //on the button type.
    switch (buttonType) {
      case "silver":
        _this2.buttonLength = 34;
        break;
      default:
        _this2.buttonLength = 50;
        break;
    }
    return _this2;
  }
  /**
   * @method Phaser.GameObjects.Container.Menu#addButton
   * @since 3.12.0
   *
   * @param {object} [scene] - The scene in which the button will be added.
   * @param {string} [text] - The text that will be rendered on the Button.
   * @param {string} [key] - The type and key of the button.
   * @param {object} [style] - A style object to stylize the text of the button.
   * @param {function} [func] - A function to be used as the button callback.
   *
   * @return {Phaser.GameObjects.Container.Menu#addButton}
   */


  _createClass(Menu, [{
    key: "addButton",
    value: function addButton(scene, text, key, style, func) {
      this.add(scene.add.existing(new Button(scene, 0, 0 + this.buttonLength / 2 * this.length, text, key, style, func)));
      scene.input.on('gameobjectover', function (pointer, gameObject) {
        if (gameObject.imageType == "Button") gameObject.setTexture("buttons", "button_selected");
      });
      scene.input.on('gameobjectout', function (pointer, gameObject) {
        if (gameObject.imageType == "Button") gameObject.setTexture("buttons", "button_default");
      });
    }
  }]);

  return Menu;
}(Phaser.GameObjects.Container);

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.game = undefined;

__webpack_require__(215);

var _titleScene = __webpack_require__(1089);

var _gameScene = __webpack_require__(1090);

var _Combat = __webpack_require__(450);

/**
*  @author       Seilai Zhao <seilaizh@gmail.com>
*  main.js
*  Entry point importing all scenes and configuring gameConfig.
*
*/

var gameConfig = {
  type: Phaser.AUTO,
  width: 1024,
  height: 768,
  disableContextMenu: true,
  scene: [_titleScene.titleScene, _gameScene.gameScene, _Combat.combatScene],

  //Enabling physics
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 //No gravity in a top-down game.
      } }
  }
};
var controls = void 0;
var game = new Phaser.Game(gameConfig);
exports.game = game;

/***/ }),

/***/ 449:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Mob = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _ui = __webpack_require__(213);

var _Combat = __webpack_require__(450);

var Combat = _interopRequireWildcard(_Combat);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  @author      Seilai Zhao <seilaizh@gmail.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  Mob.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  A definition of the Mob gameobject that encompasses all monsters and Mobs.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Mob = exports.Mob = function (_Phaser$GameObjects$S) {
  _inherits(Mob, _Phaser$GameObjects$S);

  /**
   * @method Phaser.GameObjects.Sprite#Mob
   * @since 3.12.0
   *
   * @param {object} [scene] - The scene in which the Mob is created.
   * @param {integer} [x] - The x-coordinate in which the mob will be spawned
   * @param {integer} [y] - The y-coordinate in which the mob will be spawned
   * @param {key} [texture] - The key of the texture/sprite to be loaded onto the mob.
   * @param {integer} [frame] - The frame of the sprite/texture to be selected upon being loaded.
   *
   * @return {Phaser.GameObjects.Sprite.Mob}
   */
  function Mob(scene, x, y, texture, frame, maptileWidth, speed) {
    _classCallCheck(this, Mob);

    var _this = _possibleConstructorReturn(this, (Mob.__proto__ || Object.getPrototypeOf(Mob)).call(this, scene, x, y, texture, frame));

    _this.moveIntention = false;
    _this.mapTileWidth = maptileWidth;
    _this.prevPos; //previous position
    _this.prevVel; //previous velocity
    _this.prevDest; //previous destination
    _this.destination; //set when the mob is given a move order to a coordinate.
    _this.spd = speed;
    _this.inCombat = false;
    _this.moveQueue = [];

    _this.openMobMenu = function (pointer) {
      var closeMenu = function closeMenu() {
        _this.mobMenu.setVisible(false);
      };
      var fight = function fight(pointer) {
        Combat.initiateCombat(pointer, _this.key);
      };
      if (_this.mobMenu == null) {
        _this.mobMenu = _this.scene.add.existing(new _ui.Menu(_this.scene, pointer.x, pointer.y, "silver", false));
        _this.mobMenu.addButton(_this.scene, "Fight", "silver", {}, fight);
        _this.mobMenu.addButton(_this.scene, "Close", "silver", {}, closeMenu);
      }
      _this.mobMenu.setVisible(true);
      _this.mobMenu.x = pointer.x;
      _this.mobMenu.y = pointer.y;
    };

    _this.setInteractive();
    _this.on("pointerdown", function (pointer) {
      if (pointer.rightButtonDown()) this.openMobMenu(pointer);
    });

    /**
     *  Mob statistics will go here.
     *  design doc: https://docs.google.com/document/d/1R1Zfk5H-SGsoGz-XW6fKIWLZbLpwet5gPclhuVwpVu8/edit?usp=sharing
     *  We will first implement primary stats here:
     *  Default base stat = 10
     */
    _this.strength = 10;
    _this.agility = 10;
    _this.constitution = 10;

    /**
     * Secondary stats.
     */
    _this.health = _this.constitution * 10;
    return _this;
  }

  //Using preUpdate to constantly update the Mob's previous position and velocity.

  _createClass(Mob, [{
    key: "preUpdate",
    value: function preUpdate(time, delta) {
      _get(Mob.prototype.__proto__ || Object.getPrototypeOf(Mob.prototype), "preUpdate", this).call(this, time, delta);
      this.prevVel = this.body.velocity.clone();
      this.prevPos = this.body.position.clone();
    }

    //update will call necessary functions for movement

  }, {
    key: "update",
    value: function update(time, delta) {
      _get(Mob.prototype.__proto__ || Object.getPrototypeOf(Mob.prototype), "update", this).call(this, time, delta);
      /**
       * If the Mob the Mob is intending to move and this object is not moving,
       * give the Mob an initial move command in the direction.
       */
      if (this.moveIntention != false && !this.isMoving()) {
        this.move(this.moveIntention);
      }
      /**
       * If the Mob is moving and it still wishes to move but has reached the
       * original destination, set a new destination ahead of it.
       */
      else if (this.isMoving() && this.moveIntention != false && this.hasReachedDestination()) {
          this.body.stop();
          this.move(this.moveIntention);
        }
        /**
         * If the Mob is moving but no moveIntention is available and it has reached
         * the destination, stop the Mob.
         */
        else if (this.isMoving() && this.moveIntention == false && this.hasReachedDestination()) {
            this.stopMovement();
            this.syncDestination();
          }
    }

    /**
     * @method Phaser.GameObjects.Sprite.Mob#isMoving
     * @since 3.12.0
     * Returns true if mob is moving.
     * @return {Phaser.GameObjects.Sprite.Mob.isMoving}
     */

  }, {
    key: "isMoving",
    value: function isMoving() {
      return this.body.velocity.x != 0 || this.body.velocity.y != 0;
    }

    /**
     * @method Phaser.GameObjects.Sprite.Mob#setMoveIntention
     * @since 3.12.0
     * @param {string} [dir] - Gives the mob a moveintention in a direction.
     * @return {Phaser.GameObjects.Sprite.Mob.setMoveIntention}
     */

  }, {
    key: "setMoveIntention",
    value: function setMoveIntention(dir) {
      this.moveIntention = dir;
      return true;
    }

    /**
       * @method Phaser.GameObjects.Sprite.Mob#move
       * @since 3.12.0
       *
       * @param {string} [dir] - The direction that the move method will be called with.
       * @param {float} [spd] - The speed that the mob will be moving at. It will be at a rate of $spd tiles per second.
       *
       * @return {Phaser.GameObjects.Sprite.Mob.move}
       */

  }, {
    key: "move",
    value: function move(dir) {
      this.prevDest = this.body.position.clone();
      var trueSpd = this.mapTileWidth * this.spd;
      var curPos = this.body.position;
      this.destination = this.body.position.clone();
      switch (dir) {
        case "up":
          this.anims.play("misa-back-walk", true);
          this.body.setVelocityY(-trueSpd);
          this.destination.y = Math.round((curPos.y - this.mapTileWidth) / this.mapTileWidth) * this.mapTileWidth;
          break;

        case "down":
          this.anims.play("misa-front-walk", true);
          this.body.setVelocityY(trueSpd);
          this.destination.y = Math.round((curPos.y + this.mapTileWidth) / this.mapTileWidth) * this.mapTileWidth;
          break;

        case "left":
          this.anims.play("misa-left-walk", true);
          this.body.setVelocityX(-trueSpd);
          this.destination.x = Math.round((curPos.x - this.mapTileWidth) / this.mapTileWidth) * this.mapTileWidth;
          break;

        case "right":
          this.anims.play("misa-right-walk", true);
          this.body.setVelocityX(trueSpd);
          this.destination.x = Math.round((curPos.x + this.mapTileWidth) / this.mapTileWidth) * this.mapTileWidth;
          break;

        default:
          throw "No direction inputted in a move-command";
          break;
      }
    }
    /**
       * @method Phaser.GameObjects.Sprite.Mob#hasReachedDestination
       * @since 3.12.0
       *
       * This function returns whether the Mob has reached its destination or not.
       *
       * @return {Phaser.GameObjects.Sprite.Mob.hasReachedDestination}
       */

  }, {
    key: "hasReachedDestination",
    value: function hasReachedDestination() {
      return this.body.position.x >= this.destination.x && this.prevPos.x < this.destination.x || this.body.position.x <= this.destination.x && this.prevPos.x > this.destination.x || this.body.position.y >= this.destination.y && this.prevPos.y < this.destination.y || this.body.position.y <= this.destination.y && this.prevPos.y > this.destination.y;
    }
    /**
       * @method Phaser.GameObjects.Sprite.Mob#stopMovement
       * @since 3.12.0
       *
       * This function stops the Mob's movement but not before setting a stop
       * frame for the Mob's sprite.
       * @return {Phaser.GameObjects.Sprite.Mob.stopMovement}
       */

  }, {
    key: "stopMovement",
    value: function stopMovement() {
      this.anims.stop();
      switch (this.body.facing) {
        case 11:
          this.setTexture("atlas", "misa-back");
          break;
        case 12:
          this.setTexture("atlas", "misa-front");
          break;
        case 13:
          this.setTexture("atlas", "misa-left");
          break;
        case 14:
          this.setTexture("atlas", "misa-right");
          break;
        default:
          console.log("No direction on stop-command");
          break;
      }
      return this.body.setVelocity(0);
    }
    /**
       * @method Phaser.GameObjects.Sprite.Mob#syncDestination
       * @since 3.12.0
       *
       * This function ensures that the Mob ends on a flat value divisible by the
       * world's map tileWidth and tileLength
       * @return {Phaser.GameObjects.Sprite.Mob.syncDestination}
       */

  }, {
    key: "syncDestination",
    value: function syncDestination() {
      this.body.position.x = Math.round(this.destination.x / this.mapTileWidth) * this.mapTileWidth;
      this.body.position.y = Math.round(this.destination.y / this.mapTileWidth) * this.mapTileWidth;
      return true;
    }
    /**
       * @method Phaser.GameObjects.Sprite.Mob#setToPrevDest
       * @since 3.12.0
       *
       * This function is used to bump the Mob back to its original position if
       * it collided with an object before reaching its new destination.
       * @return {Phaser.GameObjects.Sprite.Mob.setToPrevDest}
       */

  }, {
    key: "setToPrevDest",
    value: function setToPrevDest() {
      this.body.position.x = this.prevDest.x;
      this.body.position.y = this.prevDest.y;
      return true;
    }

    /**
     * @method Phaser.GameObjects.Sprite.Mob#getCurrentTile
     * @since 3.12.0
     *
     * This method is used to acquire what tile index the sprite is on the map.
     * @return @var {Phaser.Math.Vector2} [tile]
     */

  }, {
    key: "getCurrentTile",
    value: function getCurrentTile() {
      var tile = new Phaser.Math.Vector2();
      tile.x = Math.floor(this.destination.x / this.mapTileWidth);
      tile.y = Math.floor(this.destination.y / this.mapTileWidth);
      return tile;
    }
  }]);

  return Mob;
}(Phaser.GameObjects.Sprite);

/***/ }),

/***/ 450:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 *  @author      Seilai Zhao <seilaizh@gmail.com>
 *  Combat.js
 *  We'll be implementing the combat system here.
 */

var initiateCombat = exports.initiateCombat = function initiateCombat(pointer, mobKey) {
  if (pointer.leftButtonDown()) {
    pointer.camera.scene.scene.launch("combatScene");
  }
};

var combatScene = exports.combatScene = function (_Phaser$Scene) {
  _inherits(combatScene, _Phaser$Scene);

  function combatScene() {
    _classCallCheck(this, combatScene);

    return _possibleConstructorReturn(this, (combatScene.__proto__ || Object.getPrototypeOf(combatScene)).call(this, { key: "combatScene" }));
  }

  _createClass(combatScene, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      this.gameScene = this.scene.get("gameScene");
      this.sceneChildren = this.gameScene.children.getChildren();
      this.player;
      this.mob;
      var playerGetter = function playerGetter(entry) {
        if (entry.key == "player") _this2.player = entry;
      };
      this.sceneChildren.forEach(playerGetter);
      this.player.inCombat = true;
      if (this.player.isMoving()) {
        this.player.moveIntention = false;
        this.player.stopMovement();
        this.player.syncDestination();
      }
    }
  }, {
    key: "create",
    value: function create() {}
  }, {
    key: "update",
    value: function update() {}
  }]);

  return combatScene;
}(Phaser.Scene);

/***/ })

},[214]);