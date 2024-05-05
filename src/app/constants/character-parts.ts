// import face1 from '@characterParts/type1/face1.svg'
import head1 from '../../assets/character-parts/type1/head1.svg'
import head2 from '../../assets/character-parts/type1/head2.svg'
import head3 from '../../assets/character-parts/type1/head3.svg'
import eyes1 from '../../assets/character-parts/type1/eyes1.svg'
import eyes2 from '../../assets/character-parts/type1/eyes2.svg'
import eyes3 from '../../assets/character-parts/type1/eyes3.svg'
import glasses1 from '../../assets/character-parts/type1/glasses1.svg'
import glasses2 from '../../assets/character-parts/type1/glasses2.svg'
import glasses3 from '../../assets/character-parts/type1/glasses3.svg'
import mouth1 from '../../assets/character-parts/type1/mouth1.svg'
import mouth2 from '../../assets/character-parts/type1/mouth2.svg'
import mouth3 from '../../assets/character-parts/type1/mouth3.svg'
import mouth4 from '../../assets/character-parts/type1/mouth4.svg'
import ears1 from '../../assets/character-parts/type1/ears1.svg'
import hair1 from '../../assets/character-parts/type1/hair1.svg'
import hair2 from '../../assets/character-parts/type1/hair2.svg'
import background1 from '../../assets/character-parts/type1/background1.svg'

export interface CharacterPartOptions {
    name: string;
    src: string | null;
    fillColor: string;
    strokeColor?: string;
    width?: number;
    height?: number;
    x?: number;
    y?: number;
}

export interface CharacterParts {
    head: {
        defaultFill: string;
        name: string;
        options: CharacterPartOptions[];
    };
    eyes: {
        defaultFill: string;
        name: string;
        options: CharacterPartOptions[];
    };
    mouth: {
        defaultFill: string;
        name: string;
        options: CharacterPartOptions[];
    };
    ears: {
        defaultFill: string;
        name: string;
        options: CharacterPartOptions[];
    };
    glasses: {
        name: string;
        options: CharacterPartOptions[];
    };
    hair: {
        name: string;
        options: CharacterPartOptions[];
    };
    background: {
        name: string;
        options: CharacterPartOptions[];
    };
}

export const type1: CharacterParts = {
    head: {
        name: 'Head',
        defaultFill: '#eeeeee',
        options: [
            {
                name: 'head1',
                src: head1,
                fillColor: '#eeeeee',
                strokeColor: '#000',
                width: 700.3,
                height: 761,
                x: 189.8,
                y: 159.5,
            },
            {
                name: 'head2',
                src: head2,
                fillColor: '#eeeeee',
                strokeColor: '#000',
                width: 689.7,
                height: 761,
                x: 195.2,
                y: 159.5,
            },
            {
                name: 'head3',
                src: head3,
                fillColor: '#eeeeee',
                strokeColor: '#000',
                width: 689.7,
                height: 761,
                x: 195.2,
                y: 159.5,
            },
        ],
    },
    eyes: {
        name: 'Eyes',
        defaultFill: '#eeeeee',
        options: [
            {
                name: 'eyes1',
                src: eyes1,
                fillColor: '#ffffff',
                strokeColor: '#000',
                width: 540,
                height: 172,
                x: 270,
                y: 456.6,
            },
            {
                name: 'eyes2',
                src: eyes2,
                fillColor: '#ffffff',
                strokeColor: '#000',
                width: 568.9,
                height: 173.6,
                x: 255.6,
                y: 481.3,
            },
            {
                name: 'eyes3',
                src: eyes3,
                fillColor: '#ffffff',
                strokeColor: '#000',
                width: 565,
                height: 173.6,
                x: 257.5,
                y: 481.3,
            },
        ],
    },
    mouth: {
        name: 'Mouth',
        defaultFill: '#eeeeee',
        options: [
            {
                name: 'mouth1',
                src: mouth1,
                fillColor: '#ffffff',
                strokeColor: '#000',
                width: 120,
                height: 21.5,
                x: 473,
                y: 818,
            },
            {
                name: 'mouth2',
                src: mouth2,
                fillColor: '#ffffff',
                strokeColor: '#000',
                width: 148,
                height: 16.8,
                x: 459,
                y: 800.2,
            },
            {
                name: 'mouth3',
                src: mouth3,
                fillColor: '#ffffff',
                strokeColor: '#000',
                width: 109,
                height: 57,
                x: 471,
                y: 817,
            },
            {
                name: 'mouth4',
                src: mouth4,
                fillColor: '#ffffff',
                strokeColor: '#000',
                width: 170,
                height: 59.7,
                x: 455,
                y: 785.9,
            },
        ],
    },
    ears: {
        name: 'Ears',
        defaultFill: '#eeeeee',
        options: [
            {
                name: 'none',
                src: null,
                fillColor: '#ffffff',
            },
            {
                name: 'ears1',
                src: ears1,
                fillColor: '#ffffff',
                strokeColor: '#000',
                width: 904.3,
                height: 225,
                x: 87.8,
                y: 427.5,
            },
        ],
    },
    hair: {
        name: 'Hair',
        options: [
            {
                name: 'none',
                src: null,
                fillColor: '#ffffff',
            },
            {
                name: 'hair1',
                src: hair1,
                fillColor: '#ffffff',
                strokeColor: '#000',
                width: 748.7,
                height: 415.1,
                x: 175.4,
                y: 109.7,
            },
            {
                name: 'hair2',
                src: hair2,
                fillColor: '#ffffff',
                strokeColor: '#000',
                width: 810.1,
                height: 910.5,
                x: 145.4,
                y: 59,
            },
        ],
    },
    glasses: {
        name: 'Glasses',
        options: [
            {
                name: 'none',
                src: null,
                fillColor: '#ffffff',
            },
            {
                name: 'glasses1',
                src: glasses1,
                fillColor: '#ffffff',
                strokeColor: '#000',
                width: 695.2,
                height: 238.1,
                x: 193,
                y: 426,
            },
            {
                name: 'glasses2',
                src: glasses2,
                fillColor: '#ffffff',
                strokeColor: '#000',
                width: 702.9,
                height: 274,
                x: 189.8,
                y: 425,
            },
            {
                name: 'glasses3',
                src: glasses3,
                fillColor: '#ffffff',
                strokeColor: '#000',
                width: 691,
                height: 257.8,
                x: 198,
                y: 423,
            },
        ],
    },
    background: {
        name: 'Background',
        options: [
            {
                name: 'none',
                src: null,
                fillColor: '#ffffff',
            },
            {
                name: 'background1',
                src: background1,
                fillColor: '#ffffff',
                strokeColor: '#000',
                width: 1020,
                height: 1020,
                x: 30,
                y: 30,
            },
        ],
    }
};
