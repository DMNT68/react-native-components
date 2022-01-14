import React, {useContext, useState} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
} from 'react-native';
import {CustomSwtch} from '../components/CustomSwtch';
import {HeaderTitle} from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import {useForm} from '../hooks/userForm';
import {styles} from '../theme/appTheme';

export const TextInputScreen = () => {
  const {form, onChange, isSubcribe} = useForm({
    name: '',
    email: '',
    phone: '',
    isSubcribe: false,
  });

  const {theme: {colors, dividerColor}} = useContext(ThemeContext);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.globalMargin}>
            <HeaderTitle title="TextInput" />
            <TextInput
              style={{...stylesScreen.inpuStyle, borderColor: colors.primary}}
              placeholder="Ingrese su nombre"
              autoCorrect={false}
              autoCapitalize="words"
              onChangeText={value => onChange(value, 'name')}
              placeholderTextColor={dividerColor}
            />
            <TextInput
              style={{...stylesScreen.inpuStyle, borderColor: colors.primary}}
              placeholder="Ingrese su email"
              autoCapitalize="none"
              onChangeText={value => onChange(value, 'email')}
              keyboardType="email-address"
              placeholderTextColor={dividerColor}
            />
            <TextInput
              style={{...stylesScreen.inpuStyle, color:colors.text, borderColor: colors.primary}}
              placeholder="Ingrese su teléfono"
              onChangeText={value => onChange(value, 'phone')}
              keyboardType="phone-pad"
              placeholderTextColor={dividerColor}
            />
            <View style={stylesScreen.switchRow}>
              <Text style={{...stylesScreen.switchText, color: dividerColor}}>Suscribirse</Text>
              <CustomSwtch
                isOn={isSubcribe}
                onChage={value => onChange(value, 'isSubcribe')}
              />
            </View>

            <HeaderTitle title={JSON.stringify(form, null, 3)} />
            <View style={{height: 100}} />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const stylesScreen = StyleSheet.create({
  inpuStyle: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  switchText: {
    fontSize: 25,
  },
});
