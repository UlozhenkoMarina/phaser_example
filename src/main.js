import Phaser from 'phaser';
import TitleScreen from './scenes/TitleScreen';
import Game from "./scenes/Game.js";
import Game_over from "./scenes/Game_over.js";

//app configs
const config = {
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
        }
    }
}

//game instance creating
const game = new Phaser.Game(config);

//adding scenes to game object
game.scene.add('TitleScreen', TitleScreen);
game.scene.add('Game', Game);
game.scene.add('Game_over', Game_over);

//starting first scene(menu)
game.scene.start('TitleScreen');