import React, { useState } from 'react';
import styles from './app.module.scss';
import { Stage, Layer } from 'react-konva';
import { type1 } from './constants/character-parts';
import SvgImage from './svgImage';

const OptionsComponent = ({ options, setOption, color, tempColor, setTempColor, setColor }) => (
  <div className={styles.optionsList}>
    {options.map((option, index) => (
      <button className={styles.optionButton} key={index} onClick={() => setOption(option)}>
        <SvgImage id={index} className={styles.previewImage} src={option.src} fillColor={color} useKonva={false} />
        <p>{option.name}</p>
      </button>
    ))}
    <input type="color" value={tempColor} onChange={(e) => setTempColor(e.target.value)} onBlur={() => setColor(tempColor)} />
  </div>
);

export function App() {
  const [faceImageOption, setFaceImageOption] = useState(type1.head.options[0]);
  const [eyesImageOption, setEyesImageOption] = useState(type1.eyes.options[0]);
  const [glassesImageOption, setGlassesImageOption] = useState(type1.glasses.options[0]);
  const [faceColor, setFaceColor] = useState(type1.head.options[0].fillColor);
  const [tempFaceColor, setTempFaceColor] = useState(type1.head.options[0].fillColor);
  const [eyesColor, setEyesColor] = useState(type1.eyes.options[0].fillColor);
  const [tempEyesColor, setTempEyesColor] = useState(type1.eyes.options[0].fillColor);
  const [glassesColor, setGlassesColor] = useState(type1.glasses.options[0].fillColor);
  const [tempGlassesColor, setTempGlassesColor] = useState(type1.glasses.options[0].fillColor);

  return (
    <div className={styles.app}>
    <Stage className={styles.stage} width={540} height={540}>
      <Layer>
        <SvgImage id="face" src={faceImageOption.src} fillColor={faceColor} useKonva />
        <SvgImage id="eyes" src={eyesImageOption.src} fillColor={eyesColor} useKonva />
        <SvgImage id="glasses" src={glassesImageOption.src} fillColor={glassesColor} useKonva />
      </Layer>
    </Stage>
      <section className={styles.options}>
        <OptionsComponent
          options={type1.head.options}
          setOption={setFaceImageOption}
          color={faceColor}
          tempColor={tempFaceColor}
          setTempColor={setTempFaceColor}
          setColor={setFaceColor}
        />
        <OptionsComponent
          options={type1.eyes.options}
          setOption={setEyesImageOption}
          color={eyesColor}
          tempColor={tempEyesColor}
          setTempColor={setTempEyesColor}
          setColor={setEyesColor}
        />
        <OptionsComponent
          options={type1.glasses.options}
          setOption={setGlassesImageOption}
          color={glassesColor}
          tempColor={tempGlassesColor}
          setTempColor={setTempGlassesColor}
          setColor={setGlassesColor}
        />
      </section>
    </div>
  );
}

export default App;