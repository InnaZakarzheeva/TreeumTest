import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import styles from './styles';

const Loader = ({isLoading}: {isLoading: boolean}) => {
  return isLoading ? (
    <View style={styles.root}>
      <ActivityIndicator size={'large'} color={'black'} />
    </View>
  ) : null;
};

export default Loader;
