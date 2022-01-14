import 'react-native-gesture-handler';
import React from 'react';
import {
  DefaultTheme,
  DarkTheme,
  NavigationContainer,
  Theme,
} from '@react-navigation/native';
import {Navigator} from './src/navigator/Navigator';
import {ThemeProvider} from './src/context/themeContext/ThemeContext';

// const customTheme: Theme = {
//   dark: true,
//   colors: {
//     ...DarkTheme.colors,
//   },
// };

export const App = () => {
  return (
    // <NavigationContainer theme={customTheme}>
    <AppState>
      {/* <NavigationContainer> */}
      <Navigator />
      {/* </NavigationContainer> */}
    </AppState>
  );
};

const AppState = ({children}: any) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
