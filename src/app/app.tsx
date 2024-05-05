import React, { useEffect, useState } from 'react';
import styles from './app.module.scss';
import { Stage, Layer, Image as KonvaImage } from 'react-konva';
import { type1 } from './constants/character-parts';

const SvgImage = ({ src, fillColor }) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetch(src)
      .then(response => response.text())
      .then(data => {
        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(data, "image/svg+xml");
        // svgDoc.querySelector('path').setAttribute('fill', fillColor);
        svgDoc.querySelector('path').style.fill = fillColor;
        console.log(svgDoc.documentElement.outerHTML);
        const img = new window.Image();
        img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgDoc.documentElement.outerHTML);
        img.onload = () => {
          setImage(img);
        };
      });
  }, [src, fillColor]);

  return image ? <KonvaImage image={image} width={540} height={540}/> : null;
};

export function App() {
  const [faceImageOption, setFaceImageOption] = useState(type1.head.options[0]);
  const [eyesImageOption, setEyesImageOption] = useState(type1.eyes.options[0]);

  return (
    <>
      <div>
        {type1.head.options.map((option, index) => (
          <button key={index} onClick={() => setFaceImageOption(option)}>
            <img className={styles.previewImage} src={option.src} alt={`Option ${index}`} />
            <p>{option.name}</p>
          </button>
        ))}
        <input type="color" />
      </div>
      <div>
        {type1.eyes.options.map((option, index) => (
          <button key={index} onClick={() => setEyesImageOption(option)}>
            <img className={styles.previewImage} src={option.src} alt={`Option ${index}`} />
            <p>{option.name}</p>
          </button>
        ))}
        <input type="color" />
      </div>
      <Stage className={styles.stage} width={540} height={540}>
        <Layer>
          <SvgImage src={faceImageOption.src} fillColor={faceImageOption.fillColor} />
          <SvgImage src={eyesImageOption.src} fillColor={eyesImageOption.fillColor} />
        </Layer>
      </Stage>
    </>
  );
}

export default App;