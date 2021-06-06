import React from 'react';
import {View, StyleSheet, StyleProp, ViewStyle} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withSequence,
  withTiming,
  withRepeat,
  withDelay,
} from 'react-native-reanimated';

import {Typography} from '../../components/typography';
import {Button} from '../../components/button';
import {useTheme} from '../../context/theme';
import {ScrollView} from 'react-native-gesture-handler';

const Box = ({
  additionalStyles,
  color,
}: {
  additionalStyles: StyleProp<ViewStyle>;
  color: string;
}) => (
  <Animated.View
    style={[styles.box, additionalStyles, {backgroundColor: color}]}
  />
);

const Item = ({
  title,
  animatedStyles,
  onPress,
}: {
  title: string;
  animatedStyles: StyleProp<ViewStyle>;
  onPress(): void;
}) => {
  const {theme} = useTheme();

  return (
    <View style={styles.container}>
      <Typography fontSize="large" fontWeight="bold">
        {title}
      </Typography>
      <Box color={theme.colors.secondary} additionalStyles={animatedStyles} />
      <Button onPress={onPress}>Animate</Button>
    </View>
  );
};

export default () => {
  const simpleSharedAnimation = useSharedValue(0);
  const customSharedAnimation = useSharedValue(0);
  const shakingSharedAnimation = useSharedValue(0);
  const fadeSharedAnimation = useSharedValue(0);

  const simpleAnimatedStyles = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: withSpring(simpleSharedAnimation.value * 255),
      },
    ],
  }));

  const customAnimatedStyles = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: withSpring(customSharedAnimation.value * 255, {
          damping: 20,
          stiffness: 90,
          mass: 1,
        }),
      },
    ],
  }));

  const shakingAnimatedStyles = useAnimatedStyle(() => ({
    transform: [{rotateZ: `${shakingSharedAnimation.value}deg`}],
  }));

  const fadeAnimatedStyles = useAnimatedStyle(() => ({
    opacity: fadeSharedAnimation.value,
  }));

  return (
    <ScrollView>
      <Item
        title={' Simple animation:'}
        animatedStyles={simpleAnimatedStyles}
        onPress={() => {
          simpleSharedAnimation.value = Math.random();
        }}
      />
      <Item
        title={'Custom configuration'}
        animatedStyles={customAnimatedStyles}
        onPress={() => {
          customSharedAnimation.value = Math.random();
        }}
      />
      <Item
        title={'Shaking'}
        animatedStyles={shakingAnimatedStyles}
        onPress={() => {
          shakingSharedAnimation.value = withSequence(
            withTiming(-10, {duration: 50}),
            withRepeat(withTiming(10, {duration: 100}), 6, true),
            withTiming(0, {duration: 50}),
          );
        }}
      />
      <Item
        title={'Fade in / fade out'}
        animatedStyles={fadeAnimatedStyles}
        onPress={() => {
          fadeSharedAnimation.value = withSequence(
            withTiming(1, {duration: 300}),
            withTiming(0, {duration: 300}),
          );
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  box: {
    width: 50,
    height: 50,
    borderRadius: 8,
    margin: 24,
  },
});
