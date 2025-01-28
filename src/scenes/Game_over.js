import Phaser from "phaser"

//game_over scene
export default class Game_over extends Phaser.Scene {
    preload() {}
    create() {
        //game over message
        const text = this.add.text(300, 270, 'Game over!');
        //button to return to menu and its styles and behaviour
        this.clickButton = this.add.text(750, 10, 'Exit', {fill: '#0f0'})
            .setInteractive()
            .on('pointerover', () => this.enterButtonHoverState())
            .on('pointerout', () => this.enterButtonRestState())
            .on('pointerdown', () => this.enterButtonActiveState())
            .on('pointerup', () => {
                this.enterButtonHoverState();
                this.scene.start('TitleScreen');
            });

        }
        enterButtonHoverState()
        {
            this.clickButton.setStyle({fill: '#ff0'});
        }

        enterButtonRestState()
        {
            this.clickButton.setStyle({fill: '#0f0'});
        }

        enterButtonActiveState()
        {
            this.clickButton.setStyle({fill: '#0ff'});

        }
}