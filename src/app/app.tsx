import React, { useState } from 'react';
import styles from './app.module.scss';
import { Stage, Layer } from 'react-konva';
import { type1, CharacterPartOptions } from './constants/character-parts';
import SvgImage from './svgImage';
import OptionsComponent from './OptionsComponent';

export function App() {
  const [faceImageOption, setFaceImageOption] = useState<CharacterPartOptions>(type1.head.options[0]);
  const [eyesImageOption, setEyesImageOption] = useState<CharacterPartOptions>(type1.eyes.options[0]);
  const [earsImageOption, setEarsImageOption] = useState<CharacterPartOptions>(type1.ears.options[0]);
  const [glassesImageOption, setGlassesImageOption] = useState<CharacterPartOptions>(type1.glasses.options[0]);
  const [mouthImageOption, setMouthImageOption] = useState<CharacterPartOptions>(type1.mouth.options[0]);
  const [faceColor, setFaceColor] = useState<string>(type1.head.options[0].fillColor);
  const [tempFaceColor, setTempFaceColor] = useState<string>(type1.head.options[0].fillColor);
  const [eyesColor, setEyesColor] = useState<string>(type1.eyes.options[0].fillColor);
  const [tempEyesColor, setTempEyesColor] = useState<string>(type1.eyes.options[0].fillColor);
  const [mouthColor, setMouthColor] = useState<string>(type1.mouth.options[0].fillColor);
  const [tempMouthColor, setTempMouthColor] = useState<string>(type1.mouth.options[0].fillColor);
  console.log(type1.eyes.options[0]);

  const stageRef = React.useRef(null);

  const handleExport = () => {
    const uri = stageRef.current.toDataURL();
    downloadURI(uri, 'stage.png');
};

function downloadURI(uri, name) {
    const link = document.createElement('a');
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

  return (
    <div className={styles.app}>
      <section>
        <Stage ref={stageRef} className={styles.stage} width={549} height={540} scale={{ x: 0.5, y: 0.5 }}>
          <Layer>
            <SvgImage
              id="ears"
              src={earsImageOption.src}
              width={earsImageOption.width}
              height={earsImageOption.height}
              fillColor={faceColor}
              x={earsImageOption.x}
              y={earsImageOption.y}
              draggable
              useKonva
            />
            <SvgImage
              id="face"
              src={faceImageOption.src}
              fillColor={faceColor}
              width={faceImageOption.width}
              height={faceImageOption.height}
              x={faceImageOption.x}
              y={faceImageOption.y}
              useKonva
            />
            <SvgImage
              id="eyes"
              src={eyesImageOption.src}
              fillColor={eyesColor}
              width={eyesImageOption.width}
              height={eyesImageOption.height}
              x={eyesImageOption.x}
              y={eyesImageOption.y}
              useKonva 
            />
            <SvgImage
              id="glasses"
              src={glassesImageOption.src}
              width={glassesImageOption.width}
              height={glassesImageOption.height}
              x={glassesImageOption.x}
              y={glassesImageOption.y}
              useKonva
            />
            <SvgImage
              id="mouth"
              src={mouthImageOption.src}
              width={mouthImageOption.width}
              height={mouthImageOption.height}
              fillColor={mouthColor}
              x={mouthImageOption.x}
              y={mouthImageOption.y}
              draggable
              useKonva
            />
          </Layer>
        </Stage>
        <button onClick={handleExport}>Export image</button>
      </section>
      <section className={styles.options}>
        <OptionsComponent
          options={type1.head.options}
          setOption={setFaceImageOption}
          color={faceColor}
          tempColor={tempFaceColor}
          setTempColor={setTempFaceColor}
          setColor={setFaceColor}
          groupName={type1.head.name}
        />
        <OptionsComponent
          options={type1.eyes.options}
          setOption={setEyesImageOption}
          color={eyesColor}
          tempColor={tempEyesColor}
          setTempColor={setTempEyesColor}
          setColor={setEyesColor}
          groupName={type1.eyes.name}
        />
        <OptionsComponent
          options={type1.mouth.options}
          setOption={setMouthImageOption}
          color={mouthColor}
          tempColor={tempMouthColor}
          setTempColor={setTempMouthColor}
          setColor={setMouthColor}
          groupName={type1.mouth.name}
        />
        <OptionsComponent
          options={type1.ears.options}
          setOption={setEarsImageOption}
          color={faceColor}
          tempColor={tempFaceColor}
          groupName={type1.ears.name}
        />
        <OptionsComponent
          options={type1.glasses.options}
          setOption={setGlassesImageOption}
          groupName={type1.glasses.name}
        />
      </section>
    </div>
  );
}

export default App;