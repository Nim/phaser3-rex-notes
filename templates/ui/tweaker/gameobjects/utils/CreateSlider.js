import Slider from '../../../slider/Slider.js';
import BuildSliderConfig from './BuildSliderConfig.js';

var CreateSlider = function (scene, config) {
    config = BuildSliderConfig(scene, config);
    var gameObject = new Slider(scene, config);
    scene.add.existing(gameObject);

    return gameObject;
}

export default CreateSlider;