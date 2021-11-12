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
    }
}