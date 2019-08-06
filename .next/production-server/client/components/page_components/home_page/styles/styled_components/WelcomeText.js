"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importDefault(require("@emotion/styled"));
exports.WelcomeTextWrapper = styled_1.default.div `
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  position: absolute;
  top: 0px;
  width: 100vw;
  padding-left: 200px;
  padding-right: 200px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
    padding-left: 0;
    padding-right: 0;

    &.welcome-text {
      text-align: center;
    }
  }

  span {
    font-size: 12px;
  }

  .about-json {
    .json-pretty {
      padding-top: 2em;
    }
    .json-selected {
      background-color: rgba(139, 191, 228, 0.19999999999999996);
    }

    .json-string {
      font-weight: 500;
      color: ${props => props.theme.secondary};
    }

    .json-key {
      font-weight: 800;
      color: ${props => props.theme.light};
    }

    .json-boolean {
      font-weight: 500;
      color: ${props => props.theme.secondary};
    }

    .json-number {
      font-weight: 500;
      color: ${props => props.theme.secondary};
    }
  }

  &.welcome-text {
    grid-column: 1;
  }

  &.about-json {
    grid-column: 2;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
//# sourceMappingURL=WelcomeText.js.map