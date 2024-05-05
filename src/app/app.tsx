import React, { useEffect, useState } from 'react';
import styles from './app.module.scss';
import { Stage, Layer, Image as KonvaImage } from 'react-konva';
import { type1 } from './constants/character-parts';

const SvgImage = ({ src, fillColor, useKonva, className = "", id }) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetch(src)
      .then(response => response.text())
      .then(data => {
        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(data, "image/svg+xml");
        const paths = svgDoc.querySelectorAll('path');
        paths.forEach(path => {
          path.style.fill = fillColor;
        });
        const img = new window.Image();
        img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgDoc.documentElement.outerHTML);
        img.onload = () => {
          setImage(img);
        };
      });
  }, [src, fillColor]);

  if (!image) return null;

  return useKonva ? 
    <KonvaImage image={image} width={540} height={540} id={id}/> : 
    <img src={image.src} alt="" width={540} height={540} className={className} id={id} />;
};

export function App() {
  const [faceImageOption, setFaceImageOption] = useState(type1.head.options[0]);
  const [eyesImageOption, setEyesImageOption] = useState(type1.eyes.options[0]);
  const [faceColor, setFaceColor] = useState(type1.head.options[0].fillColor);
  const [eyesColor, setEyesColor] = useState(type1.eyes.options[0].fillColor);
  const [tempFaceColor, setTempFaceColor] = useState(type1.head.options[0].fillColor);
  const [tempEyesColor, setTempEyesColor] = useState(type1.eyes.options[0].fillColor);

  return (
    <>
      <div>
        {type1.head.options.map((option, index) => (
          <button key={index} onClick={() => setFaceImageOption(option)}>
            {/* <img className={styles.previewImage} src={option.src} alt={`Option ${index}`} /> */}
            <SvgImage id={index} className={styles.previewImage} src={option.src} fillColor={faceColor} useKonva={false} />
            <p>{option.name}</p>
          </button>
        ))}
        {/* <input type="color" value={faceColor} onChange={(e) => setFaceColor(e.target.value)} /> */}
        <input type="color" value={tempFaceColor} onChange={(e) => setTempFaceColor(e.target.value)} onBlur={() => setFaceColor(tempFaceColor)} />
      </div>
      <div>
        {type1.eyes.options.map((option, index) => (
          <button key={index} onClick={() => setEyesImageOption(option)}>
            {/* <img className={styles.previewImage} src={option.src} alt={`Option ${index}`} /> */}
            <SvgImage id={index} className={styles.previewImage}  src={option.src} fillColor={eyesColor} useKonva={false} />
            <p>{option.name}</p>
          </button>
        ))}
        {/* <input type="color" value={eyesColor} onChange={(e) => setEyesColor(e.target.value)} /> */}
        <input type="color" value={tempEyesColor} onChange={(e) => setTempEyesColor(e.target.value)} onBlur={() => setEyesColor(tempEyesColor)} />
      </div>
      <Stage className={styles.stage} width={540} height={540}>
        <Layer>
          <SvgImage id="face" src={faceImageOption.src} fillColor={faceColor} useKonva />
          <SvgImage id="eyes" src={eyesImageOption.src} fillColor={eyesColor} useKonva />
        </Layer>
      </Stage>
    </>
  );
}

export default App;