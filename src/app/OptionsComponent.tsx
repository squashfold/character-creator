import React, { ChangeEvent, useState } from 'react';
import { CharacterPartOptions } from './constants/character-parts';
import styles from './app.module.scss';
import SvgImage from './svgImage';
import { ColorPicker, Slider, InputNumber, Divider } from 'antd';

interface OptionsComponentProps {
    options: CharacterPartOptions[];
    setOption: React.Dispatch<React.SetStateAction<CharacterPartOptions>>;
    color?: string;
    // tempColor?: string;
    // setTempColor?: React.Dispatch<React.SetStateAction<string>>;
    setColor?: React.Dispatch<React.SetStateAction<string>>;
    groupName?: string;
    scale?: number;
    setScale?: React.Dispatch<React.SetStateAction<number>>;
  }
  
  const OptionsComponent: React.FC<OptionsComponentProps> = ({ options, setOption, color, setColor, groupName, scale = 1, setScale }) => {

    return (
        <div className={styles.options}>
            <div>
                <h2>{groupName}</h2>
                    {setColor && (
                        <ColorPicker
                            defaultValue={color}
                            onChangeComplete={(color) => setColor(color.toHexString())}
                            showText={(color) => <span>Fill ({color.toHexString()})</span>}
                        />
                    )}
                    {setScale && (
                        <>
                            <Slider
                                min={0.1}
                                max={1}
                                step={0.01}
                                onChange={(scale) => setScale(scale as number)}
                                value={typeof scale === 'number' ? scale : 0}
                            />
                            <InputNumber
                                min={0.1}
                                max={1}
                                style={{ margin: '0 16px' }}
                                value={scale}
                                step={0.01}
                                onChange={(scale) => setScale(scale as number)}
                            />
                        </>
                    )}
                    
                <Divider  />
                <div className={`${styles.optionsList}`}>
                    {options.map((option, index) => (
                        <button className={styles.optionButton} key={index} onClick={() => setOption(option)}>
                            <div className={styles.previewImageContainer}>
                                <SvgImage id={index.toString()} className={styles.previewImage} src={option.src} fillColor={color && color} useKonva={false} />
                            </div>
                            <p>{option.name}</p>
                        </button>
                    ))}
                </div>
                
            </div>
        </div>
    );
};

  export default OptionsComponent