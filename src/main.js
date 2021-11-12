let config = {
    type: Phaser.CANVAS,
    width: 320,
    height: 240,
    zoom: 2.5,
    pixelArt: true,
    backgroundColor: 0xffffff,
    scene: [UI_Test]
}

let game = new Phaser.Game(config);