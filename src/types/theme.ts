export interface ThemeColors {
    primary: string;
    primaryLight: string;
    primaryDark: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
}

export interface PokemonTheme {
    id: string;
    name: string;
    pokemon: string;
    colors: ThemeColors;
    gradient: string;
}

export const themes: PokemonTheme[] = [
    {
        id: 'pikachu',
        name: 'Pikachu',
        pokemon: 'Electric Mouse',
        colors: {
            primary: '#FFCB05',
            primaryLight: '#FFF176',
            primaryDark: '#F57F17',
            secondary: '#FF1744',
            accent: '#F7DC6F',
            background: 'linear-gradient(135deg, #FFF176 0%, #FFCB05 50%, #F57F17 100%)',
            text: '#212121',
        },
        gradient: 'from-yellow-300 via-yellow-400 to-yellow-600',
    },
    {
        id: 'charizard',
        name: 'Charizard',
        pokemon: 'Flame Pokemon',
        colors: {
            primary: '#FF6B35',
            primaryLight: '#FF8C69',
            primaryDark: '#CC4125',
            secondary: '#FFD700',
            accent: '#FF4500',
            background: 'linear-gradient(135deg, #FF8C69 0%, #FF6B35 50%, #CC4125 100%)',
            text: '#2D1B14',
        },
        gradient: 'from-orange-400 via-red-500 to-red-700',
    },
    {
        id: 'mewtwo',
        name: 'Mewtwo',
        pokemon: 'Genetic Pokemon',
        colors: {
            primary: '#9C4DCC',
            primaryLight: '#BA68C8',
            primaryDark: '#7B1FA2',
            secondary: '#E1BEE7',
            accent: '#AB47BC',
            background: 'linear-gradient(135deg, #BA68C8 0%, #9C4DCC 50%, #7B1FA2 100%)',
            text: '#2D1B2D',
        },
        gradient: 'from-purple-400 via-purple-600 to-purple-800',
    },
];
