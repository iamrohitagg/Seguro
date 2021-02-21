import Navigation from './Navigation/Navigation';
import React from 'react';
import {SafeAreaView} from 'react-native';

const App = () => {
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <Navigation />
      </SafeAreaView>
    </>
  );
};

export default App;
