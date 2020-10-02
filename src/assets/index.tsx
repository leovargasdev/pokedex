import React, { SVGProps } from 'react';
import { ReactComponent as PatternPokeball } from './patterns/pokeball.svg';

interface Patterns {
  [key: string]: SVGProps<SVGSVGElement>;
}

export const patterns: Patterns = {
  pokeball: <PatternPokeball />,
};
