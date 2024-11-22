import React, {useMemo, useState} from 'react';
import {Pressable, SafeAreaView, Text, TextInput, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation';
import styles from './styles';
import {Loader} from '../../components';

const LoginScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Login'>>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const isActive = useMemo(() => email && password, [email, password]);

  const onLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      // login request
      navigation.navigate('Albums');
    }, 1000);
  };

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.contentWrapper}>
        <View>
          <Text style={styles.title}>Welcome</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Enter e-mail"
            style={styles.input}
          />
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Enter password"
            style={styles.input}
          />
        </View>
        <Pressable
          disabled={!isActive}
          onPress={onLogin}
          style={[styles.button, !isActive && styles.disableButton]}>
          <Text style={styles.buttonText}>Continue</Text>
        </Pressable>
      </View>
      <Loader isLoading={isLoading} />
    </SafeAreaView>
  );
};

export default LoginScreen;
