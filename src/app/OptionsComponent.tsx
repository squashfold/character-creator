import React, { ChangeEvent, useState } from 'react';
import { CharacterPartOptions } from './constants/character-parts';
import styles from './app.module.scss';
import SvgImage from './svgImage';

interface OptionsComponentProps {
    options: CharacterPartOptions[];
    setOption: React.Dispatch<React.SetStateAction<CharacterPartOptions>>;
    color?: string;
    tempColor?: string;
    setTempColor?: React.Dispatch<React.SetStateAction<string>>;
    setColor?: React.Dispatch<React.SetStateAction<string>>;
    groupName?: string;
  }
  
  const OptionsComponent: React.FC<OptionsComponentProps> = ({ options, setOption, color, tempColor, setTempColor, setColor, groupName }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.accordion}>
            <button className={`${styles.accordionHeader} ${isOpen ? styles.accordionHeaderOpen : styles.accordionHeaderClosed}`} onClick={toggleOpen}>
                {groupName && (<h2>{groupName}</h2>)}
            </button>
            <div className={`${styles.accordionContent}  ${isOpen ? styles.open : styles.closed}`}>
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
                {setTempColor && setColor && (
                    <input type="color" value={tempColor} onChange={(e: ChangeEvent<HTMLInputElement>) => setTempColor(e.target.value)} onBlur={() => setColor(tempColor)} />
                )}
            </div>
        </div>
    );
};

  export default OptionsComponent