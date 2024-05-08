import React, { useState } from 'react';
import styles from './app.module.scss';
import { Stage, Layer } from 'react-konva';
import { type1, CharacterPartOptions } from './constants/character-parts';
import SvgImage from './svgImage';
import OptionsComponent from './OptionsComponent';

import { Layout, Tabs, Button, Divider } from 'antd';
import { DownloadOutlined } from '@ant-design/icons'
import { ItemType } from 'antd/es/menu/hooks/useItems';

const { Header, Footer, Sider, Content } = Layout;

export function App() {
  const [faceImageOption, setFaceImageOption] = useState<CharacterPartOptions>(type1.head.options[0]);
  const [eyesImageOption, setEyesImageOption] = useState<CharacterPartOptions>(type1.eyes.options[0]);
  const [earsImageOption, setEarsImageOption] = useState<CharacterPartOptions>(type1.ears.options[0]);
  const [hairImageOption, setHairImageOption] = useState<CharacterPartOptions>(type1.ears.options[0]);
  const [glassesImageOption, setGlassesImageOption] = useState<CharacterPartOptions>(type1.glasses.options[0]);
  const [mouthImageOption, setMouthImageOption] = useState<CharacterPartOptions>(type1.mouth.options[0]);
  const [backgroundImageOption, setBackgroundImageOption] = useState<CharacterPartOptions>(type1.mouth.options[0]);
  const [faceColor, setFaceColor] = useState<string>(type1.head.options[0].fillColor);
  const [eyesColor, setEyesColor] = useState<string>(type1.eyes.options[0].fillColor);
  const [mouthColor, setMouthColor] = useState<string>(type1.mouth.options[0].fillColor);
  const [hairColor, setHairColor] = useState<string>(type1.mouth.options[0].fillColor);
  const [backgroundColor, setBackgroundColor] = useState<string>(type1.mouth.options[0].fillColor);

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



const optionsConfig = [
  {
    options: type1.head.options,
    setOption: setFaceImageOption,
    color: faceColor,
    setColor: setFaceColor,
    groupName: type1.head.name,
  },
  {
    options: type1.eyes.options,
    setOption: setEyesImageOption,
    color: eyesColor,
    setColor: setEyesColor,
    groupName: type1.eyes.name,
  },
  {
    options: type1.mouth.options,
    setOption: setMouthImageOption,
    color: mouthColor,
    setColor: setMouthColor,
    groupName: type1.mouth.name,
  },
  {
    options: type1.ears.options,
    setOption: setEarsImageOption,
    color: faceColor,
    groupName: type1.ears.name,
  },
  {
    options: type1.hair.options,
    setOption: setHairImageOption,
    color: hairColor,
    setColor: setHairColor,
    groupName: type1.hair.name,
  },
  {
    options: type1.glasses.options,
    setOption: setGlassesImageOption,
    groupName: type1.glasses.name,
  },
  {
    options: type1.background.options,
    setOption: setBackgroundImageOption,
    color: backgroundColor,
    setColor: setBackgroundColor,
    groupName: type1.background.name},
];

const optionsComponents = optionsConfig.map((item, index) => ({
  key: index,
  label: item.groupName,
  children: <OptionsComponent
    key={index}
    options={item.options}
    setOption={item.setOption}
    color={item.color}
    setColor={item.setColor}
    groupName={item.groupName}
  />,
}
));

  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <h1>Character Creator</h1>
        
      </Header>
      <Layout className={styles.contentWrap}>
        {/* <Sider width="60"></Sider> */}
        <Content>
        <div className={styles.stageWrap}>
          <Stage ref={stageRef} className={styles.stage} width={549} height={540} scale={{ x: 0.5, y: 0.5 }}>
            <Layer>
              <SvgImage
                id="background"
                src={backgroundImageOption.src}
                width={backgroundImageOption.width}
                height={backgroundImageOption.height}
                fillColor={backgroundColor}
                x={backgroundImageOption.x}
                y={backgroundImageOption.y}
                useKonva
              />
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
                id="hair"
                src={hairImageOption.src}
                width={hairImageOption.width}
                height={hairImageOption.height}
                fillColor={hairColor}
                x={hairImageOption.x}
                y={hairImageOption.y}
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
        </div>
        </Content>
        <Sider width="50%" className={styles.sidebar}>
          <Tabs
          defaultActiveKey="1"
          tabPosition="left"
          style={{ height: '100%' }}
          items={optionsComponents as ItemType[]}
        />
        </Sider>
      </Layout>
      <Footer >
        
        <Divider style={{marginTop: 0}} />
        <Button onClick={handleExport} icon={<DownloadOutlined />}> Export image</Button>
      </Footer>
    </Layout>
  );
}

export default App;