// import face1 from '@characterParts/type1/face1.svg'
import head1 from '../../assets/character-parts/type1/head1.svg'
import head2 from '../../assets/character-parts/type1/head2.svg'
import head3 from '../../assets/character-parts/type1/head3.svg'
import eyes1 from '../../assets/character-parts/type1/eyes1.svg'
import eyes2 from '../../assets/character-parts/type1/eyes2.svg'
import eyes3 from '../../assets/character-parts/type1/eyes3.svg'

interface CharacterPartOptions {
    name: string;
    src: string;
    fillColor: string;
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
        defaultFill: '#eeeeee',
        options: [
            {
                name: 'head1',
                src: head1,
                fillColor: '#eeeeee'
            },
            {
                name: 'head2',
                src: head2,
                fillColor: '#eeeeee'
            },
            {
                name: 'head3',
                src: head3,
                fillColor: '#eeeeee'
            },
        ],
    },
    eyes: {
        defaultFill: '#eeeeee',
        options: [
            {
                name: 'eyes1',
                src: eyes1,
                fillColor: '#eeeeee'
            },
            {
                name: 'eyes2',
                src: eyes2,
                fillColor: '#eeeeee'
            },
            {
                name: 'eyes3',
                src: eyes3,
                fillColor: '#eeeeee'
            },
        ],
    },
};
