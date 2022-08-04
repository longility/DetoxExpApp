import React from 'react';
import {Button, useColorScheme, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

type WelcomeScreenProps = {
  onHelloPress: () => void;
  onWorldPress: () => void;
};
export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  onHelloPress,
  onWorldPress,
}) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View
      style={{
        backgroundColor: isDarkMode ? Colors.black : Colors.white,
      }}
      testID="welcome">
      <Button testID="hello_button" onPress={onHelloPress} title="Hello" />
      <Button testID="world_button" onPress={onWorldPress} title="World" />
    </View>
  );
};
