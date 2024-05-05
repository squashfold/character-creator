import React, { useState, ChangeEvent } from 'react';
import styles from './app.module.scss';
import { Stage, Layer } from 'react-konva';
import { type1, Option } from './constants/character-parts';
import SvgImage, { SvgImageProps } from './svgImage';

interface OptionsComponentProps {
  options: Option[];
  setOption: React.Dispatch<React.SetStateAction<Option>>;
  color: string;
  tempColor: string;
  setTempColor: React.Dispatch<React.SetStateAction<string>>;
  setColor: React.Dispatch<React.SetStateAction<string>>;
}

const OptionsComponent: React.FC<OptionsComponentProps> = ({ options, setOption, color, tempColor, setTempColor, setColor }) => (
  <div className={styles.optionsList}>
    {options.map((option, index) => (
      <button className={styles.optionButton} key={index} onClick={() => setOption(option)}>
        <SvgImage id={index.toString()} className={styles.previewImage} src={option.src} fillColor={color} useKonva={false} />
        <p>{option.name}</p>
      </button>
    ))}
    <input type="color" value={tempColor} onChange={(e: ChangeEvent<HTMLInputElement>) => setTempColor(e.target.value)} onBlur={() => setColor(tempColor)} />
  </div>
);

export function App() {
  const [faceImageOption, setFaceImageOption] = useState<Option>(type1.head.options[0]);
  const [eyesImageOption, setEyesImageOption] = useState<Option>(type1.eyes.options[0]);
  const [glassesImageOption, setGlassesImageOption] = useState<Option>(type1.glasses.options[0]);
  const [faceColor, setFaceColor] = useState<string>(type1.head.options[0].fillColor);
  const [tempFaceColor, setTempFaceColor] = useState<string>(type1.head.options[0].fillColor);
  const [eyesColor, setEyesColor] = useState<string>(type1.eyes.options[0].fillColor);
  const [tempEyesColor, setTempEyesColor] = useState<string>(type1.eyes.options[0].fillColor);
  const [glassesColor, setGlassesColor] = useState<string>(type1.glasses.options[0].fillColor);
  const [tempGlassesColor, setTempGlassesColor] = useState<string>(type1.glasses.options[0].fillColor);

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