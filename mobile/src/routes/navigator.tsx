/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { Header } from '@rneui/base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useColorScheme } from 'react-native';

const MyHeader = () => {
  const scheme = useColorScheme();
  return (
    <SafeAreaView>
      <Header
        barStyle="default"
        centerComponent={{
          icon: 'home', 
          style: { color: '#fff' },
        }}
        containerStyle={{ width: '100%' }}
        placement="center"
        backgroundColor={scheme === 'dark' ? 'black' : '#dedede'}
      />
    </SafeAreaView>
  );
};

export default MyHeader;
