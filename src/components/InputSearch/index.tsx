import React, { useState, useCallback } from 'react';
import { FaSearch } from 'react-icons/fa';

import { Container } from './styles';

interface InputSearchProps {
  value: string;
  onChange(value: string): void;
}

const InputSearch: React.FC<InputSearchProps> = ({ value, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  return (
    <Container isFocused={isFocused}>
      <FaSearch />
      <input
        placeholder={isFocused ? '' : 'Qual Pokémon você está procurando?'}
        value={value}
        onChange={e => onChange(e.target.value)}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
    </Container>
  );
};

export default InputSearch;
