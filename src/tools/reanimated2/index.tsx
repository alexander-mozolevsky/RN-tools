import React from 'react';
import {View} from 'react-native';
import {Typography} from '../../components/typography';
import {Button} from '../../components/button';

export default () => {
  return (
    <View>
      <Typography>Reanimated 2</Typography>
      <Button onPress={() => {}}>Hello press!</Button>
    </View>
  );
};
