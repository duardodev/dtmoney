import styled from 'styled-components'
import { darken, transparentize } from 'polished'

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    background-color: var(--input-background);
    color: var(--text-body);

    width: 100%;
    height: 4rem;
    padding: 0 1.5rem;

    font-size: 1rem;
    font-weight: 400;
    border: 1px solid var(--input-border);
    border-radius: 0.25rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    background-color: var(--blue);
    color: var(--shape);

    width: 100%;
    height: 4rem;
    padding: 0 1.25rem;
    margin-top: 1.5rem;

    font-size: 1rem;
    font-weight: 600;
    border: 0;
    border-radius: 0.25rem;

    transition: filter 0.3s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const colors = {
  green: '#12a454',
  red: '#e52e4d'
}

export const RadioBox = styled.button<RadioBoxProps>`
  background-color: ${props => props.isActive 
    ? transparentize(0.9, colors[props.activeColor])
    : 'transparent'
  };

  height: 4rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.125rem;

  border: 1.5px solid var(--input-border);
  border-radius: 0.25rem;

  transition: border-color 0.2s;
  
  &:hover {
    border-color: ${darken(0.1, '#d7d7d7')};
  }

  img {
    height: 24px;
    width: 24px;
  }

  span {
    color: var(--text-title);
    font-size: 1rem;
    font-weight: 500;
  }
`