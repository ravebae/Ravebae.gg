import Logo from '@components/Logo';
import { JockeyOne_400Regular, useFonts } from '@expo-google-fonts/jockey-one';
import { Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH } from 'firebaseConfig';
import React, { useState } from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { RouterProps } from './List';

const Register = ({ navigation }: RouterProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const [fontsLoaded] = useFonts({
    JockeyOne_400Regular,
    Poppins_600SemiBold,
  });
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  const auth = FIREBASE_AUTH;

  const signUp = async () => {
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          // if (auth.currentUser) {
          //   sendEmailVerification(auth.currentUser, {
          //     handleCodeInApp: true,
          //     url: 'https://ravebae-gg.firebaseapp.com',
          //   })
          //     .then(() => {
          //       alert('Verification email sent');
          //     })
          //     .catch((error) => alert(error.message));
          // }
        })
        .catch((error) => alert(error.message));
    } catch (error: any) {
      console.log(error);
      alert('Sign up failed ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const signIn = async () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior='padding'>
        <View style={styles.logoWrapper}>
          <Logo />
        </View>
        <Text style={styles.title}>REGISTER</Text>
        <TextInput
          value={email}
          style={styles.input}
          placeholder='Email'
          autoCapitalize='none'
          onChangeText={(text) => setEmail(text)}
          placeholderTextColor='#FFF'
        />
        <TextInput
          secureTextEntry={true}
          value={password}
          style={styles.input}
          placeholder='Password'
          autoCapitalize='none'
          onChangeText={(text) => setPassword(text)}
          placeholderTextColor='#FFF'
        />

        {loading ? (
          <ActivityIndicator size='large' color='#0000ff' />
        ) : (
          <>
            <Pressable style={styles.button} onPress={signUp}>
              <Text style={styles.buttonText}>REGISTER</Text>
            </Pressable>
            <Text style={styles.register} onPress={signIn}>
              Already have an account?
              <Text
                style={{ fontWeight: 'bold', color: '#A94BF3' }}
                onPress={signIn}
              >
                {' '}
                Login Here
              </Text>
            </Text>
          </>
        )}
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#081E23',
  },
  logoWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
  },
  title: {
    marginLeft: -10,
    marginBottom: 20,
    color: '#FFF',
    fontFamily: 'JockeyOne_400Regular',
    fontSize: 40,
  },
  input: {
    marginVertical: 4,
    height: 50,
    borderWidth: 3,
    borderColor: '#E4C1FF',
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
    color: '#FFF',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    elevation: 3,
    backgroundColor: '#A94BF3',
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFF',
    fontFamily: 'JockeyOne_400Regular',
    fontSize: 20,
  },
  register: {
    color: '#FFF',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
});

export default Register;
