import React from 'react';
import {View, Pressable, Text} from 'react-native';
import styles from './styles';

interface HeaderProps {
  title: string;
  subtitle: string;
  goBack?: () => void;
}

const Header = ({title, subtitle, goBack}: HeaderProps) => {
  return (
    <View style={styles.header}>
      {Boolean(goBack) && (
        <Pressable onPress={goBack}>
          <Text style={styles.backText}>Back</Text>
        </Pressable>
      )}

      <Text style={styles.headerTitle}>{title}</Text>
      <Text style={styles.headerSubtitle}>{subtitle}</Text>
    </View>
  );
};

export default Header;
