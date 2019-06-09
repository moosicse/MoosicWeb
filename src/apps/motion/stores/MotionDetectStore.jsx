import React from 'react';
import {observable, action} from 'mobx';
import * as faceapi from 'face-api.js';

const MODEL_URL = '/models';

class MotionDetectStore {

  async loadModels () {
    await faceapi.loadTinyFaceDetectorModel(MODEL_URL);
    await faceapi.loadFaceLandmarkTinyModel(MODEL_URL);
    await faceapi.loadFaceRecognitionModel(MODEL_URL);
  }

  @observable webcam = null;

  @action recognitionMotion = () => {
    if (this.webcam) {
      const imageSrc = this.webcam.getScreenshot();
      console.log("Take Picture");
      console.log(imageSrc);
      const imgTag = document.createElement('img');
      imgTag.src = imageSrc;

      let scoreThreshold = 0.5;
      let inputSize = 512;
      const OPTION = new faceapi.TinyFaceDetectorOptions({
        inputSize,
        scoreThreshold
      });
      const useTinyModel = true;

      const detectionsWithExpressions = faceapi.detectAllFaces(imgTag, OPTION).withFaceExpressions();
      detectionsWithExpressions
        .then(res => {
          console.log(res);
        })
    }
  };
}

export default new MotionDetectStore();