import React, { useState } from 'react';
import styles from './app.module.scss';
import { Stage, Layer, Image } from 'react-konva';
import useImage from 'use-image';
import { type1 } from './constants/character-parts';

const FaceImage = ({ src }) => {
  const [fallbackImage] = useImage('https://konvajs.org/assets/lion.png');
  const [image] = useImage(src);
  console.log(image); // Check if the image is loaded

  return image ? <Image image={image} width={540} height={540}/> : null;
};

const EyesImage = ({ src }) => {
  const [fallbackImage] = useImage('https://konvajs.org/assets/lion.png');
  const [image] = useImage(src);
  console.log(image); // Check if the image is loaded

  return image ? <Image image={image} width={540} height={540}/> : null;
};

export function App() {
  const [faceImageSrc, setFaceImageSrc] = useState(type1.head.options[0].src);
  const [eyesImageSrc, setEyesImageSrc] = useState(type1.eyes.options[0].src);

  return (
    <>
      <div>
        {type1.head.options.map((option, index) => (
          <button key={index} onClick={() => setFaceImageSrc(option.src)}>
            <img className={styles.previewImage} src={option.src} alt={`Option ${index}`} />
            <p>{option.name}</p>
          </button>
        ))}
      </div>
      <div>
        {type1.eyes.options.map((option, index) => (
          <button key={index} onClick={() => setEyesImageSrc(option.src)}>
            <img className={styles.previewImage} src={option.src} alt={`Option ${index}`} />
            <p>{option.name}</p>
          </button>
        ))}
      </div>
      <Stage className={styles.stage} width={540} height={540}>
        <Layer>
          <FaceImage src={faceImageSrc} />
          <EyesImage src={eyesImageSrc} />
        </Layer>
      </Stage>
    </>
  );
}

export default App;