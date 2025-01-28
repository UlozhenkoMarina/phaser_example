import Phaser from "phaser";

//main scene
//creating main game functionality
export default class Game extends Phaser.Scene {
    preload() {}
    create() {
        //boolean flag to indicate redirecting type(toTitleScreen scene or to Game_over scene)
        let flag = true;
        //user achieved score
        let score = 0
        //circle in the bottom of screen
        //not moveable and always visible
        let circle = this.add.circle(380, 400, 100, 0xffffff);
        //moveable circle with changeable parameters
        let circle1 = this.add.circle(380, 0, 50, 0xffff00);
        //adding physics to circle1(gravity)
        this.physics.add.existing(circle1);
        //adding velocity to circle1 to make workable gravity
        circle1.body.setVelocity(0, 100);
        //processing of user click
        this.input.on('pointerup', () => {
            if (flag) {
                //updating user's score and circle1 characteristics
                //redirecting to Game_over scene if needed
                circle1.body.setVelocity(0, 0);
                circle1.setActive(false).setVisible(false);
                if (circle.y - circle.radius <= circle1.y + circle1.radius && circle1.y + circle1.radius <= circle.y + circle.radius && circle.y - circle.radius <= circle1.y - circle1.radius && circle1.y - circle1.radius <= circle.y + circle.radius) {
                    score += 1;
                    text.setText("Score: " + score);
                    step()
                } else {
                    this.scene.stop("Game");
                    this.scene.start("Game_over");
                }}
        });

        //function which updates circle1 characteristics after each level
        const step = () => {
            //updating circle1 characteristics
            circle1.x = 380;
            circle1.y = 0;
            circle1.radius = Math.floor(Math.random() * circle.radius);
            circle1.setVisible(true);
            circle1.setActive(true);
            circle1.body.setVelocity(0, 100);
        }

        //text field for showing user's score
        const text = this.add.text(330, 550, 'Score: 0');

        //exit button to return to main menu(TitleScreen) with its styles and behaviour
        this.clickButton = this.add.text(750, 10, 'Exit', {fill: '#0f0'})
            .setInteractive()
            .on('pointerover', () => this.enterButtonHoverState())
            .on('pointerout', () => this.enterButtonRestState())
            .on('pointerdown', () =>
            {   flag = false;
                this.enterButtonActiveState();})
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