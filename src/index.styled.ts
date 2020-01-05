import { createGlobalStyle } from "styled-components";
import { CONTAINERS } from "./constants";

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

*, ::after, ::before {
  box-sizing: border-box;
}

*:focus { 
  outline: 0;
}

.container {
  margin-left: auto;
  margin-right: auto;
  padding-right: 15px;
  padding-left: 15px;
  width: 100%;
  max-width: ${CONTAINERS.CONTENT}px;

  &__fluid {
    max-width: ${CONTAINERS.WIDER_CONTENT}px;
  }
}

.row {
  display: flex;
  margin-right: -15px;
  margin-left: -15px;
  flex-wrap: wrap;
}

.column {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}

h1, h2, h3, h4, h5, h6, p {
  margin-top: 0;
  margin-bottom: 0;
}

.button {
  padding: 0;
  border-radius: 2px;
  transition: all 0.5s ease;
  cursor:pointer;
  font-size: calc(16 / 16 * 1rem);
  width: 100%;
}

.animated {
  animation-duration: 1s;
  animation-fill-mode: forwards;
}

.slide__down--appear {
  animation-name: slideDownAppear;
}

.slide__down--disappear {
  animation-name: slideDownDisappear;
}

.slide__up--appear {
  animation-name: slideUpAppear;
}

.slide__up--disappear{
  animation-name: slideUpDisappear;
}

@keyframes slideDownAppear {
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes slideDownDisappear {
  from {
    transform: translate3d(0, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 100%, 0);
  }
}

@keyframes slideUpAppear {
  from {
    transform: translate3d(0, -100, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes slideUpDisappear {
  from {
    transform: translate3d(0, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, -100%, 0);
  }
}
`;
