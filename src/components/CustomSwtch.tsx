import React, {useContext, useState} from 'react';
import {Switch} from 'react-native';
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Props {
  isOn: boolean;
  onChage: (value: boolean) => void;
}

export const CustomSwtch = ({isOn, onChage}: Props) => {
  const [isEnabled, setIsEnabled] = useState(isOn);
  const {theme: {colors}} = useContext(ThemeContext);

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    onChage(!isEnabled);
  };

  return (
    <Switch
      trackColor={{false: '#d9d9dd', true: colors.primary}}
      thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};
