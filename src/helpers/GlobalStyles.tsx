import { ExecutionProps, createGlobalStyle } from "styled-components";
import { colorScheme } from "./constants";

export const GlobalStyles: React.NamedExoticComponent<
  ExecutionProps & object
> = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior:smooth;
  overflow-x:hidden;
}

body {
  width: 100%;
  height: 100%;
  background-color:${colorScheme.white};
  color:${colorScheme.black};
  font-family: "League Spartan", Helvetica, Arial, sans-serif;
    font-optical-sizing: auto;
  font-variant:normal;
  font-weight:400;
  font-display:swap;
  transition:all 0.20s linear;
  scroll-behavior:smooth;
  overflow-x:hidden;
  position:relative;
  
}

p{
    font-size: 12px;
}

small{
  font-weight: 100;
    font-size: 12px;
}

::-webkit-scrollbar {
  width: 5px;
  height:5px;
}

::-webkit-scrollbar-track {
  background-image: linear-gradient(to bottom,rgba(0,0,0,0.5),rgba(255,255,255,0.5));
}

::-webkit-scrollbar-thumb {
  border-radius:20px;
  background-color:#000;
}

::-webkit-scrollbar-thumb:hover {
  background-color:rgba(20,20,20,0.5);
}

`;
