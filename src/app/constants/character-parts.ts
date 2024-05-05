// import face1 from '@characterParts/type1/face1.svg'
import head1 from '../../assets/character-parts/type1/head1.svg'
import head2 from '../../assets/character-parts/type1/head2.svg'
import head3 from '../../assets/character-parts/type1/head3.svg'
import eyes1 from '../../assets/character-parts/type1/eyes1.svg'
import eyes2 from '../../assets/character-parts/type1/eyes2.svg'
import eyes3 from '../../assets/character-parts/type1/eyes3.svg'
import glasses1 from '../../assets/character-parts/type1/glasses1.svg'
import glasses2 from '../../assets/character-parts/type1/glasses2.svg'

interface CharacterPartOptions {
    name: string;
    src: string | null;
    fillColor: string;
    strokeColor?: string;
}

interface CharacterParts {
    head: {
        defaultFill: string;
        options: CharacterPartOptions[];
    };
    eyes: {
        defaultFill: string;
        options: CharacterPartOptions[];
    };
    glasses: {
        options: CharacterPartOptions[];
    };
}

export const type1: CharacterParts = {
    head: {
        defaultFill: '#eeeeee',
        options: [
            {
                name: 'head1',
                src: head1,
                fillColor: '#eeeeee',
                strokeColor: '#000'
            },
            {
                name: 'head2',
                src: head2,
                fillColor: '#eeeeee',
                strokeColor: '#000'
            },
            {
                name: 'head3',
                src: head3,
                fillColor: '#eeeeee',
                strokeColor: '#000'
            },
        ],
    },
    eyes: {
        defaultFill: '#eeeeee',
        options: [
            {
                name: 'eyes1',
                src: eyes1,
                fillColor: '#ffffff',
                strokeColor: '#000'
            },
            {
                name: 'eyes2',
                src: eyes2,
                fillColor: '#ffffff',
                strokeColor: '#000'
            },
            {
                name: 'eyes3',
                src: eyes3,
                fillColor: '#ffffff',
                strokeColor: '#000'
            },
        ],
    },
    glasses: {
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
                strokeColor: '#000'
            },
            {
                name: 'glasses2',
                src: glasses2,
                fillColor: '#ffffff',
                strokeColor: '#000'
            },
        ],
    },
};
