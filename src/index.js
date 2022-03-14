import arrayBufferToImage from './arrayBufferToImage.js';
import createImage from './createImage.js';
import fileManager from './fileManager.js';
import { loadImage, configure } from './loadImage.js';
import { external } from './externalModules.js';
import dicomToImage from "./dicomToImage";
import canvasToImage from "./canvasToImage";

const cornerstoneFileImageLoader = {
  arrayBufferToImage,
  dicomToImage,
  canvasToImage,
  createImage,
  loadImage,
  configure,
  external,
  fileManager
};

export {
  arrayBufferToImage,
  dicomToImage,
  canvasToImage,
  createImage,
  loadImage,
  configure,
  external,
  fileManager
};

export default cornerstoneFileImageLoader;
