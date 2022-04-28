import styled from 'styled-components'

export const Container = styled.section`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;
  }

  th {
    color: var(--text-body);
    font-weight: 400;
    text-align: left;
    padding: 1rem 2rem;
    line-height: 1.5rem;
  }

  td {
    background-color: var(--shape);
    color: var(--text-body);
    padding: 1rem 2rem;
    
    &:first-child {
      color: var(--text-title);
      border-radius: 0.25rem 0rem 0rem 0.25rem;
    }

    &:last-child {
      border-radius: 0rem 0.25rem 0.25rem 0rem;
    }

    &.deposit {
      color: var(--green)
    }

    &.withdraw {
      color: var(--red)
    }
  }

  @media (max-width: 600px) {
    margin-top: 2rem;
    overflow-x: auto;
  }
`