import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -7rem;

  div {
    background-color: var(--shape);
    color: var(--text-title);
    border-radius: 0.25rem;
    padding: 1.5rem 2rem;

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    strong {
      display: block;
      margin-top: 1rem;

      color: var(--text-title);
      font-size: 2.25rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.highlight-background {
      background-color: var(--green);
      color: var(--shape);

      strong {
        color: var(--shape)
      }
    }
  }
`