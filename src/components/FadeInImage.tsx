import React, {useState} from 'react';
import {ActivityIndicator, Animated, ImageStyle, StyleProp, View} from 'react-native';
import {useAnimation} from '../hooks/useAnimation';
import {styles} from '../theme/appTheme';

interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({uri, style}: Props) => {
  const {opacity, fadeIn} = useAnimation();
  const [isLoading, setIsLoading] = useState(true);

  const finishLoading = () => {
    setIsLoading(false);
    fadeIn();
  };

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      {isLoading && (
        <ActivityIndicator
          style={{position: 'absolute'}}
          size={40}
          color="5856d6"
        />
      )}
      <Animated.Image
        source={{uri}}
        onLoadEnd={finishLoading}
        style={{...style as any, opacity}}
      />
    </View>
  );
};
