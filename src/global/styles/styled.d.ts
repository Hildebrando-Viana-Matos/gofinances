// Aqui é um arquivo para sobrescrever tipagens

import "styled-components";
import theme from "./theme";

declare module "styled-components" {
  type ThemeType = typeof theme;

  export interface DefaultTheme extends ThemeType {}
}