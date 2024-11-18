/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  StyleSheet,
  useColorScheme
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import { RootStack } from './app/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { HomeScreen, HistoryScreen } from './app/screen';

import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HeaderNavigation } from './app/components/navigation/header';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

const queryClient = new QueryClient()

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <RootStack.Navigator>
            <RootStack.Screen 
              name="Home" 
              component={HomeScreen} 
              options={{ 
                headerShown: false
              }} />
            <RootStack.Screen 
              name="History" 
              component={HistoryScreen}
              options={{
                header: (navigation: NativeStackHeaderProps) => {
                  return <HeaderNavigation navigation={navigation} />
                }
              }} />
          </RootStack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;
