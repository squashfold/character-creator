import React, { ChangeEvent, useState } from 'react';
import { CharacterPartOptions } from './constants/character-parts';
import styles from './app.module.scss';
import SvgImage from './svgImage';
import { ColorPicker } from 'antd';

interface OptionsComponentProps {
    options: CharacterPartOptions[];
    setOption: React.Dispatch<React.SetStateAction<CharacterPartOptions>>;
    color?: string;
    // tempColor?: string;
    // setTempColor?: React.Dispatch<React.SetStateAction<string>>;
    setColor?: React.Dispatch<React.SetStateAction<string>>;
    groupName?: string;
  }
  
  const OptionsComponent: React.FC<OptionsComponentProps> = ({ options, setOption, color, setColor, groupName }) => {

    return (
        <div>
            <div>
                <h2>{groupName}</h2>
            {setColor && (
                    <ColorPicker
                        defaultValue={color}
                        onChangeComplete={(color) => setColor(color.toHexString())}
                        showText={(color) => <span>Fill ({color.toHexString()})</span>}
                    />
                )}
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