import InputFiledBase from './InputFieldBase.js';
import CreateSlider from '../utils/CreateSlider.js';
import CreateCanvasInput from '../utils/CreateCanvasInput.js';

const GetValue = Phaser.Utils.Objects.GetValue;
const Linear = Phaser.Math.Linear;
const SnapFloor = Phaser.Math.Snap.Floor;

class RangeInput extends InputFiledBase {
    constructor(scene, config) {
        if (config === undefined) {
            config = {};
        }

        super(scene);
        this.type = 'rexTweaker.RangeInput';

        var sliderConfig = config.slider;
        var trackSizeKey = (this.orientation === 0) ? 'track.height' : 'track.width';
        var trackSize = GetValue(sliderConfig, trackSizeKey);
        var slider = CreateSlider(scene, sliderConfig);

        var proportion = GetValue(config, 'proportion.range.slider', 2);
        var expand = (trackSize === undefined);
        this.add(
            slider,
            { proportion: proportion, expand: expand }
        );

        var inputTextConfig = config.inputNumber || config.inputText;
        var inputText = CreateCanvasInput(scene, inputTextConfig)
            .setNumberInput();

        var proportion = GetValue(config, 'proportion.range.inputText', 1);
        this.add(
            inputText,
            { proportion: proportion, expand: true }
        );

        this.addChildrenMap('slider', slider);
        this.addChildrenMap('inputText', inputText);

        inputText.on('close', function () {
            this.setValue(inputText.value);
        }, this);

        slider.on('valuechange', function () {
            var value = Linear(this.minValue, this.maxValue, slider.value);
            if (this.step) {
                value = SnapFloor(value, this.step, this.minValue);
            }
            this.setValue(value);
        }, this);

    }

    get value() {
        return this._value;
    }

    set value(value) {
        if (this._value === value) {
            return;
        }

        var text = (this.textFormatCallback) ? this.textFormatCallback(value) : value;
        this.childrenMap.inputText.setText('').setText(text);

        this.childrenMap.slider.setValue(value, this.minValue, this.maxValue);
        super.value = value;
    }

    setRange(min, max, step) {
        this.minValue = min;
        this.maxValue = max;
        this.step = step;

        this.childrenMap.slider.setGap(step, min, max);

        return this;
    }

    setInputTextReadOnly(enable) {
        if (enable === undefined) {
            enable = true;
        }
        this.childrenMap.inputText.setReadOnly(enable);
        return this;
    }

}

export default RangeInput;