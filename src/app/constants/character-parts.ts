// import face1 from '@characterParts/type1/face1.svg'
import face1 from '../../assets/character-parts/type1/face1.svg'
import face2 from '../../assets/character-parts/type1/face2.svg'
import face3 from '../../assets/character-parts/type1/face3.svg'
import eyes1 from '../../assets/character-parts/type1/eyes1.svg'
import eyes2 from '../../assets/character-parts/type1/eyes2.svg'
import eyes3 from '../../assets/character-parts/type1/eyes3.svg'

interface CharacterPartOptions {
    name: string;
    src: string;
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
}

export const type1: CharacterParts = {
    head: {
        defaultFill: '#eee',
        options: [
            {
                name: 'Head 1',
                src: face1,
            },
            {
                name: 'Head 2',
                src: face2,
            },
            {
                name: 'Head 3',
                src: face3,
            },
        ],
    },
    eyes: {
        defaultFill: '#eee',
        options: [
            {
                name: 'Eyes 1',
                src: eyes1,
            },
            {
                name: 'Eyes 2',
                src: eyes2,
            },
            {
                name: 'Eyes 3',
                src: eyes3,
            },
        ],
    },
};
