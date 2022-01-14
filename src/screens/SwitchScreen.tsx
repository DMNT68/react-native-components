import React, {useContext, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {CustomSwtch} from '../components/CustomSwtch';
import {HeaderTitle} from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const SwitchScreen = () => {
  const [state, setstate] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  const {theme: {colors}} = useContext(ThemeContext);

  const {isActive, isHungry, isHappy} = state;

  const onChange = (value: boolean, field: string) => {
    setstate({
      ...state,
      [field]: value,
    });
  };

  const renderEmjis = {
    isActive: isActive ? '✅' : '⬜',
    isHungry: isHungry ? '🍕' : '🍽️',
    isHappy: isHappy ? '😊' : '😡',
  };

  return (
    <View style={{marginHorizontal: 20}}>
      <HeaderTitle title="Switches" />
      <View style={styles.switchRow}>
        <Text style={{...styles.switchText, color: colors.text}}>⚪ isActive</Text>
        <CustomSwtch
          isOn={isActive}
          onChage={value => onChange(value, 'isActive')}
        />
      </View>

      <View style={styles.switchRow}>
        <Text style={{...styles.switchText, color: colors.text}}>🍕 isHungry</Text>
        <CustomSwtch
          isOn={isHungry}
          onChage={value => onChange(value, 'isHungry')}
        />
      </View>

      <View style={styles.switchRow}>
        <Text style={{...styles.switchText, color: colors.text}}>😊 isHappy</Text>
        <CustomSwtch
          isOn={isHappy}
          onChage={value => onChange(value, 'isHappy')}
        />
      </View>

      <Text style={{...styles.switchText, color: colors.text}}>{JSON.stringify(state, null, 5)}</Text>
      <Text style={{...styles.switchText, color: colors.text}}>
        {JSON.stringify(renderEmjis, null, 5)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  switchText: {
    fontSize: 25,
  },
});
