import React, {useState} from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {HelloScreen} from './screens/HelloScreen';
import {WelcomeScreen} from './screens/WelcomeScreen';
import {WorldScreen} from './screens/WorldScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [viewState, setViewState] = useState<'welcome' | 'hello' | 'world'>(
    'welcome',
  );

  return (
    <SafeAreaView
      style={{
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}>
      {viewState === 'welcome' && (
        <WelcomeScreen
          onHelloPress={() => setViewState('hello')}
          onWorldPress={() => setViewState('world')}
        />
      )}
      {viewState === 'hello' && <HelloScreen />}
      {viewState === 'world' && <WorldScreen />}
    </SafeAreaView>
  );
};

export default App;
