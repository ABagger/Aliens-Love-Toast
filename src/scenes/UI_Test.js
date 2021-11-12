class UI_Test extends Phaser.Scene
{
    constructor() 
    {
        super('uiTest');
    }

    preload()
    {
        this.load.image('uiConcept', './assets/ui_concept.png');
    }

    create()
    {
        let conceptSprite = this.add.sprite(0, 0, 'uiConcept').setOrigin(0,0);
        let screenHide = this.add.rectangle(0,0,320,180, 0xffffff).setOrigin(0,0).setInteractive().setAlpha(0.001);

        screenHide.on('pointerdown', () => {
            if(screenHide.alpha < 1)
                screenHide.setAlpha(1);
            else
                screenHide.setAlpha(0.001);
        });
    }
}