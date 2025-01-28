import Phaser from "phaser";

//first scene(menu)
export default class TitleScreen extends Phaser.Scene {
    preload() {}
    create() {
        //declaration of button to start game and its styles and behaviour
        this.clickButton = this.add.text(280, 270, 'Click me to start!', { fill: '#0f0' })
            .setInteractive()
            .on('pointerover', () => this.enterButtonHoverState() )
            .on('pointerout', () => this.enterButtonRestState() )
            .on('pointerdown', () => this.enterButtonActiveState() )
            .on('pointerup', () => {
                this.enterButtonHoverState();
                this.scene.stop('TitleScreen');
                this.scene.start('Game');
            });
    }


    enterButtonHoverState() {
        this.clickButton.setStyle({ fill: '#ff0'});
    }

    enterButtonRestState() {
        this.clickButton.setStyle({ fill: '#0f0' });
    }

    enterButtonActiveState() {
        this.clickButton.setStyle({ fill: '#0ff' });
    }

}