import * as Phaser from 'phaser';
import Sizer from '../sizer/Sizer';

export default class Label extends Sizer {
    constructor(
        scene: Phaser.Scene,

        config?: {
            x?: number,
            y?: number,
            width?: number,
            height?: number,

            orientation?: 0 | 1 | 'x' | 'y' | 'h' | 'v' | 'horizontal' | 'vertical' | 'left-to-right' | 'top-to-bottom',

            space?: {
                left?: number,
                right?: number,
                top?: number,
                bottom?: number,

                icon?: number,
                text?: number,
            },

            anchor?: {
                left?: string, right?: string, centerX?: string, x?: string,
                top?: string, bottom?: string, centerY?: string, y?: string
            },

            draggable?: boolean | string | Phaser.GameObjects.GameObject,

            name?: string,

            background?: Phaser.GameObjects.GameObject,

            icon?: Phaser.GameObjects.GameObject,
            iconMask?: boolean,

            text?: Phaser.GameObjects.GameObject,
            expandTextWidth?: boolean,
            expandTextHeight?: boolean,

            action?: Phaser.GameObjects.GameObject,
            actionMask?: boolean,

            align?: 'left' | 'top' | 'right' | 'bottom' | 'center',
        }
    );

    text: string;

    setText(text: string): this;

    appendText(text: string): this;
}