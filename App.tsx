import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { AuthProvider } from './src/contexts/AuthContext';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/theme';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';

import { Home } from './src/screens/Home';

export default function App() {
  const [fontLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <StatusBar style="light" backgroundColor="transparent" translucent />
        <Home />
      </AuthProvider>
    </ThemeProvider>
  );
}
