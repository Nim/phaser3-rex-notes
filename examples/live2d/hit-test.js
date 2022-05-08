import phaser from 'phaser/src/phaser.js';
import Live2dPlugin from '../../plugins/live2d-plugin.js';
import Dat from '../../plugins/utils/dat.gui/dat.gui.min.js';

class Demo extends Phaser.Scene {
    constructor() {
        super({
            key: 'examples'
        })
    }

    preload() {
        this.load.rexLive2dCoreScript('assets/live2d/core/live2dcubismcore.js');
        this.load.rexLive2d('Haru', 'assets/live2d/Haru/Haru.model3.json');
        this.load.rexLive2d('Hiyori', 'assets/live2d/Hiyori/Hiyori.model3.json');
    }

    create() {
        var x = this.game.config.width / 2,
            y = this.game.config.height / 2;

        // Hit test
        var print = this.add.text(0, 0, '', { fontSize: 36 });
        var character = this.add.rexLive2d(x, y, 'Haru', {
            // autoPlayIdleMotion: 'TapBody'
        })
            .setScale(0.5)
            .setOrigin(0.5, 0.5)
            .setInteractive()
            .on('pointerdown-Head', function () {
                print.text += 'Hit Head\n'
            })
            .on('pointerdown-Body', function () {
                print.text += 'Hit Body\n'
                var key = (character.key === 'Haru') ? 'Hiyori' : 'Haru';
                character.setModel(key)
            })


        // Interactive with touch pointer
        var printDragXY = this.add.text(0, (1080 / 2) + 200, '', { fontSize: 36 });
        this.input.on('pointermove', function (pointer) {
            var x = pointer.worldX, y = pointer.worldY;
            character.lookAt(x, y);

            // Debugging
            var modelXY = character.getModelXY(x, y);
            var dragX = modelXY.x, dragY = modelXY.y;
            printDragXY.text = `${dragX.toFixed(2)}, ${dragY.toFixed(2)}`;
        })
        character.lookForward();


        this.character = character;
        this.debuggerGraphics = this.add.graphics()

        var gui = new Dat.GUI();
        gui.add(this.character, 'x', 0, 1920);
        gui.add(this.character, 'y', 0, 1080);
        gui.add(this.character, 'scale', 0.1, 1);
        gui.add(this.character, 'angle', -180, 180);
    }

    update() {
        this.debuggerGraphics
            .clear()

        this.debuggerGraphics
            .lineStyle(2, 0xffff00)
            .strokeRectShape(this.character.getBounds())

        this.debuggerGraphics
            .lineStyle(2, 0xff0000)
            .lineBetween(
                this.character.x,
                this.character.y,
                this.character.x + 100 * Math.cos(this.character.rotation),
                this.character.y + 100 * Math.sin(this.character.rotation),
            )
    }
}

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 1920,
    height: 1920,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    scene: Demo,
    plugins: {
        global: [
            {
                key: 'rexLive2d',
                plugin: Live2dPlugin,
                start: true
            }
        ]
    }
};

var game = new Phaser.Game(config);