import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {MenuItem} from '../interfaces/appInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/core';
import {useTheme} from '@react-navigation/native';
import {ThemeContext} from '../context/themeContext/ThemeContext';

interface Props {
  menuItem: MenuItem;
}

export const FlatListMenuItem = ({menuItem}: Props) => {
  const navigation = useNavigation();
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => navigation.navigate(menuItem.component as any)}>
      <View style={styles.container}>
        <View style={styles.containarTextIcon}>
          <Icon name={menuItem.icon} color={colors.primary} size={19} />
          <Text style={{...styles.itemText, color: colors.text}}>
            {menuItem.name}
          </Text>
        </View>
        <Icon name="chevron-forward-outline" color={colors.primary} size={19} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  itemText: {
    marginHorizontal: 10,
    fontSize: 19,
  },
  containarTextIcon: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
