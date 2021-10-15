import GetScaleOutCameraParameters from './GetScaleOuterCameraParameters.js';

const SetStruct = Phaser.Structs.Set;

class ScaleOuter {
    constructor(scene) {
        this.scene = scene;
        // Set gameConfig.scale.mode to Phaser.Scale.RESIZE

        this.cameras = new SetStruct();
        this.scrollX = 0;
        this.scrollY = 0;
        this.zoom = 1;

        this.boot();
    }

    boot() {
        var scene = this.scene;
        scene.scale.on('resize', this.scale, this);
        // Scale manually at beginning
        scene.events.once('preupdate', this.scale, this);

        scene.events.on('prerender', this.addScaleCameraParameters, this);
        scene.events.on('render', this.removeScaleCameraParameters, this);
    }

    destroy() {
        var scene = this.scene;
        scene.scale.off('resize', this.scale, this);
        scene.events.off('preupdate', this.scale, this);

        scene.events.off('prerender', this.addScaleCameraParameters, this);
        scene.events.off('render', this.removeScaleCameraParameters, this);

        this.cameras.clear();
        this.scene = undefined;
    }

    add(camera) {
        this.addCamera(camera);
        this.scale();
        return this;
    }

    scale() {
        if (this.cameras.size === 0) {
            this.addCamera(this.scene.cameras.main);
        }

        GetScaleOutCameraParameters(this.scene, this);
    }

    // Internal methods
    addCamera(camera) {
        if (this.cameras.contains(camera)) {
            return;
        }

        this.cameras.set(camera);
    }

    addScaleCameraParameters() {
        this.cameras.iterate(function (camera, index) {
            camera.zoom *= this.zoom;
            camera.scrollX += this.scrollX;
            camera.scrollY += this.scrollY;
        }, this);
    }

    removeScaleCameraParameters() {
        this.cameras.iterate(function (camera, index) {
            camera.zoom /= this.zoom;
            camera.scrollX -= this.scrollX;
            camera.scrollY -= this.scrollY;
        }, this);
    }
}

export default ScaleOuter;