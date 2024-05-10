import head1 from '../../assets/character-parts/persona/head1.svg'
import head2 from '../../assets/character-parts/persona/head2.svg'
import eyes1 from '../../assets/character-parts/persona/eyes1.svg'
import eyes2 from '../../assets/character-parts/persona/eyes2.svg'
import nose1 from '../../assets/character-parts/type1/nose1.svg'
import glasses1 from '../../assets/character-parts/persona/glasses1.svg'
import glasses2 from '../../assets/character-parts/persona/glasses2.svg'
import mouth1 from '../../assets/character-parts/persona/mouth1.svg'
import mouth2 from '../../assets/character-parts/persona/mouth2.svg'
import mouth3 from '../../assets/character-parts/persona/mouth3.svg'
import ears1 from '../../assets/character-parts/persona/ears1.svg'
import ears2 from '../../assets/character-parts/persona/ears2.svg'
import hair1 from '../../assets/character-parts/persona/hair1.svg'
import hairbg from '../../assets/character-parts/persona/hairbg.svg'
import hair2 from '../../assets/character-parts/persona/hair2.svg'
import hair2bg from '../../assets/character-parts/persona/hair2bg.svg'
import background2 from '../../assets/character-parts/type1/background2.svg'

export interface CharacterPartOptions {
    name: string;
    src: string | null;
    fillColor: string;
    strokeColor?: string;
    width?: number;
    height?: number;
    x?: number;
    y?: number;
    background?: CharacterPartOptions;
}

export interface CharacterParts {
    head?: {
        defaultFill: string;
        name: string;
        options: CharacterPartOptions[];
        defaultOption: number;
    };
    nose?: {
        defaultFill: string;
        name: string;
        options: CharacterPartOptions[];
        defaultOption: number;
    };
    eyes: {
        defaultFill: string;
        name: string;
        options: CharacterPartOptions[];
        defaultOption: number;
    };
    mouth: {
        defaultFill: string;
        name: string;
        options: CharacterPartOptions[];
        defaultOption: number;
    };
    ears: {
        defaultFill: string;
        name: string;
        options: CharacterPartOptions[];
        defaultOption: number;
    };
    glasses: {
        name: string;
        options: CharacterPartOptions[];
        defaultOption: number;
    };
    hair: {
        name: string;
        options: CharacterPartOptions[];
        defaultOption: number;
    };
    background: {
        name: string;
        options: CharacterPartOptions[];
        defaultOption: number;
    };
}

export const type1: CharacterParts = {
    head: {
        name: 'Head',
        defaultFill: '#eeeeee',
        options: [
            {
                name: 'Head 1',
                src: head1,
                fillColor: '#E9C5BC',
                strokeColor: '#000',
                width: 550,
                height: 600,
                x: 540,
                y: 306,
            },
            {
                name: 'Head 2',
                src: head2,
                fillColor: '#E9C5BC',
                strokeColor: '#000',
                width: 550,
                height: 600,
                x: 540,
                y: 306,
            },
        ],
        defaultOption: 0,
    },
    eyes: {
        name: 'Eyes',
        defaultFill: '#eeeeee',
        options: [
            {
                name: 'Eyes 1',
                src: eyes1,
                fillColor: '#000',
                strokeColor: '#000',
                width: 249.5,
                height: 67.8,
                x: 540,
                y: 646,
            },
            {
                name: 'Eyes 2',
                src: eyes2,
                fillColor: '#000',
                strokeColor: '#000',
                width: 249.5,
                height: 45,
                x: 540,
                y: 646,
            },
        ],
        defaultOption: 0,
    },
    mouth: {
        name: 'Mouth',
        defaultFill: '#eeeeee',
        options: [
            {
                name: 'Mouth 1',
                src: mouth1,
                fillColor: '#000',
                strokeColor: '#000',
                width: 109.2,
                height: 53,
                x: 540,
                y: 759.7,
            },
            {
                name: 'Mouth 2',
                src: mouth2,
                fillColor: '#000',
                strokeColor: '#000',
                width: 24.2,
                height: 43.4,
                x: 540,
                y: 759.7,
            },
            {
                name: 'Mouth 3',
                src: mouth3,
                fillColor: '#000',
                strokeColor: '#000',
                width: 100,
                height: 24.4,
                x: 580,
                y: 759.7,
            },
        ],
        defaultOption: 0,
    },
    nose: {
        name: 'Nose',
        defaultFill: '#eeeeee',
        options: [
            {
                name: 'None',
                src: null,
                fillColor: '#ffffff',
            },
        ],
        defaultOption: 0,
    },
    ears: {
        name: 'Ears',
        defaultFill: '#eeeeee',
        options: [
            {
                name: 'None',
                src: null,
                fillColor: '#ffffff',
            },
            {
                name: 'Ears 1',
                src: ears1,
                fillColor: '#ffffff',
                strokeColor: '#000',
                width: 653,
                height: 103,
                x: 540,
                y: 670.3,
            },
            {
                name: 'Ears 2',
                src: ears2,
                fillColor: '#ffffff',
                strokeColor: '#000',
                width: 708,
                height: 164.5,
                x: 540,
                y: 670.3,
            },
        ],
        defaultOption: 1,
    },
    hair: {
        name: 'Hair',
        options: [
            {
                name: 'none',
                src: null,
                fillColor: '#644023',
            },
            {
                name: 'Hair 2',
                src: hair1,
                fillColor: '#644023',
                strokeColor: '#000',
                width: 762.4,
                height: 395.7,
                x: 540,
                y: 85,
                background: {
                    name: 'Hair Background',
                    src: hairbg,
                    fillColor: '#644023',
                    width: 704,
                    height: 704,
                    x: 540,
                    y: 129,
                },
            },
            {
                name: 'Hair 2',
                src: hair2,
                fillColor: '#644023',
                strokeColor: '#000',
                width: 590.6,
                height: 224.2,
                x: 540,
                y: 304,
                background: {
                    name: 'Hair Background',
                    src: hair2bg,
                    fillColor: '#644023',
                    width: 832,
                    height: 825,
                    x: 540,
                    y: 129,
                },
            },
        ],
        defaultOption: 1,
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
                name: 'Glasses 1',
                src: glasses1,
                fillColor: '#ffffff',
                strokeColor: '#000',
                width: 550,
                height: 155.3,
                x: 540,
                y: 587,
            },
            {
                name: 'Glasses 2',
                src: glasses2,
                fillColor: '#ffffff',
                strokeColor: '#000',
                width: 550,
                height: 178.3,
                x: 540,
                y: 587,
            },
        ],
        defaultOption: 0,
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
                name: 'background2',
                src: background2,
                fillColor: '#ffffff',
                strokeColor: '#000',
                width: 1020,
                height: 1020,
                x: 540,
                y: 0,
            },
        ],
        defaultOption: 0,
    }
};
