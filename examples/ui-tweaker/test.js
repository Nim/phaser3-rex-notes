import phaser from 'phaser/src/phaser.js';
import UIPlugin from '../../templates/ui/ui-plugin.js';
import Tweaker from '../../templates/ui/tweaker/Tweaker.js';

const COLOR_PRIMARY = 0x4e342e;
const COLOR_LIGHT = 0x7b5e57;
const COLOR_DARK = 0x260e04;

const Styles = `
.InputTitle:
  $type: Label
  text:
    $type: Text
    color: yellow
`

class Demo extends Phaser.Scene {
    constructor() {
        super({
            key: 'examples'
        })
    }

    preload() {
    }

    create() {
        var obj = {
            a: 10,
            b: 'Phaser'
        }

        var panel = new Tweaker(this, {
            x: 400, y: 300,
            width: 300,

            styles: Styles
        })
            .addInput(obj, 'a')
            .addInput(obj, 'b')
            .layout();

        this.add.existing(panel);
    }

    update() {
    }
}

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    scene: Demo,
    plugins: {
        scene: [{
            key: 'rexUI',
            plugin: UIPlugin,
            mapping: 'rexUI'
        }]
    }
};

var game = new Phaser.Game(config);