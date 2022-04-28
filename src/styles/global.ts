import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;
    --bg-header: #070A1C;
    --bg-button: #22263f;
    --shape: #ffffff;

    --red: #e52e4d;
    --green: #33CC95;
    --blue: #00d2ef;

    --text-title: #363f5f;
    --text-body: #969cb3;
    --input-background: #e7e9ee;
    --input-border: #d7d7d7;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .modal-overlay {
    background-color: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-content {
    background-color: var(--background);
    width: 100%;
    max-width: 576px;

    padding: 4rem 3rem;
    border-radius: 0.25rem;
    position: relative;
  }

  .modal-close {
    background-color: transparent;

    position: absolute;
    right: 1.3rem;
    top: 1.3rem;
    border: 0;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }

  @media (max-width: 585px) {
    .modal-overlay {
      align-items: flex-end;
    }

    .modal-content {
      padding: 2rem 1.5rem;
      border-radius: 1rem 1rem 0rem 0rem;
    }
  }
`