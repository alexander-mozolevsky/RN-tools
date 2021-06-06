import React, {FC} from 'react';
import packages from '../../package.json';
import {useNavigation} from '@react-navigation/native';
import {View} from 'react-native';
import {ROUTES} from '../constants/routes';
import {Button} from '../components/button';

export default () => {
  const {navigate} = useNavigation();

  return (
    <View>
      {Object.keys(packages.dependencies)
        ?.filter(key => Object.values(ROUTES).includes(key))
        .map(v => (
          <Button key={v} onPress={() => navigate(v)}>
            {v}
          </Button>
        ))}
    </View>
  );
};
