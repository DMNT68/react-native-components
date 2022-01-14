import React, {useContext} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {ThemeContext} from '../context/themeContext/ThemeContext';
import {styles} from '../theme/appTheme';

export const ChangeThemeScreen = () => {
  const {setDarkTheme, setLightTheme, theme: {colors}} = useContext(ThemeContext);
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Change Theme" />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            backgroundColor: colors.primary,
            borderRadius: 20,
            height: 50,
            justifyContent: 'center',
            width: 150,
          }}
          onPress={setLightTheme}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontSize: 22,
            }}>
            Light
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            backgroundColor: colors.primary,
            borderRadius: 20,
            height: 50,
            justifyContent: 'center',
            width: 150,
          }}
          onPress={setDarkTheme}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontSize: 22,
            }}>
            Dark
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
