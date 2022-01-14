import React, {useContext, useState} from 'react';
import {RefreshControl, ScrollView, View} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const PullToRefreshScreen = () => {
  const {top} = useSafeAreaInsets();
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>();

  const {theme: {colors, dividerColor, dark}} = useContext(ThemeContext);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      console.log('terminamos');
      setRefreshing(false);
      setData('Hola mundo');
    }, 2500);
  };

  return (
    <View style={{...styles.globalMargin}}>
      <ScrollView
        style={{
          marginTop: refreshing ? top : 0,
        }}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            progressViewOffset={10}
            progressBackgroundColor={colors.primary}
            colors={[colors.text]}
            style={{backgroundColor: colors.primary}}
              tintColor={dark ? 'white': 'dark'}
            //   title="Refreshing"
            //   titleColor="white"
          />
        }>
        <HeaderTitle title="Pull to Refresh" />
        {data && <HeaderTitle title={data} />}
      </ScrollView>
    </View>
  );
};
