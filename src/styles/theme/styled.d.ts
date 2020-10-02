import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      type: {
        bug: string;
        dark: string;
        dragon: string;
        electric: string;
        fairy: string;
        fighting: string;
        fire: string;
        flying: string;
        ghost: string;
        grass: string;
        ground: string;
        ice: string;
        normal: string;
        poison: string;
        psychic: string;
        rock: string;
        steel: string;
        water: string;
      };
      backgroundType: {
        bug: string;
        dark: string;
        dragon: string;
        electric: string;
        fairy: string;
        fighting: string;
        fire: string;
        flying: string;
        ghost: string;
        grass: string;
        ground: string;
        ice: string;
        normal: string;
        poison: string;
        psychic: string;
        rock: string;
        steel: string;
        water: string;
      };
      background: {
        white: string;
        input: string;
        pressedInput: string;
        modal: string;
      };
      text: {
        white: string;
        black: string;
        gray: string;
        number: string;
      };
      height: {
        short: string;
        medium: string;
        tall: string;
      };
      weight: {
        light: string;
        normal: string;
        heavy: string;
      };
    };
  }
}
