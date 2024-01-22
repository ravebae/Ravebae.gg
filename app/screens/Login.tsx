import { View, Text, StyleSheet, TextInput, ActivityIndicator, Button, KeyboardAvoidingView, Pressable } from 'react-native'
import React, { useState } from 'react'
import { FIREBASE_AUTH } from '../../firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { JockeyOne_400Regular, useFonts } from '@expo-google-fonts/jockey-one';
import { RouterProps } from './List';
import Logo from '../components/Logo';

const Login = ({navigation}: RouterProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const [fontsLoaded] = useFonts({
    JockeyOne_400Regular
  });
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  
  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    setLoading(true);
    try {
      const res = await signInWithEmailAndPassword(auth, email, password)
      alert('Check your email!')
    } catch (error: any) {
      console.log(error)
      alert('Sign in failed ' + error.message )
    } finally {
      setLoading(false)
    }
  } 

  const signUp = async () => {
    navigation.navigate('Register');
    // setLoading(true)
    // try {
    //   const res = await createUserWithEmailAndPassword(auth, email, password)
    // } catch (error: any) {
    //   console.log(error)
    //   alert('Sign up failed ' + error.message )
    // } finally {
    //   setLoading(false)
    // }
  }

  return (  
    <View style={styles.container}>
      <KeyboardAvoidingView behavior='padding'>
        <View style={styles.logoWrapper}>
          <Logo />
        </View>
        <Text style={styles.title}>LOGIN</Text>
        <TextInput 
          value={email} 
          style={styles.input} 
          placeholder='Email' 
          autoCapitalize='none' 
          onChangeText={(text) => setEmail(text)}
          placeholderTextColor="#FFF"
        />
        <TextInput 
          secureTextEntry={true} 
          value={password}
          style={styles.input} 
          placeholder='Password' 
          autoCapitalize='none' 
          onChangeText={(text) => setPassword(text)} 
          placeholderTextColor="#FFF"
        />

        { loading ? 
          <ActivityIndicator size="large" color="#0000ff" />
          :
          <>
            <Pressable style={styles.button} onPress={signIn}>
              <Text style={styles.buttonText}>LOGIN </Text>
            </Pressable>
            <Text style={styles.register} onPress={signUp}>
              Don't have an account?
              <Text style={{fontWeight: "bold", color: '#A94BF3'}} onPress={signUp}> Register Here</Text>
            </Text>
          </>
        }
      </KeyboardAvoidingView>  
    </View>
  )
}

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
    fontSize: 40
  },
  input: {
    marginVertical: 4,
    height: 50,
    borderWidth: 3,
    borderColor: '#E4C1FF',
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    elevation: 3,
    backgroundColor: '#A94BF3',
    marginBottom: 20
  },
  buttonText: {
    color: '#FFF',
    fontFamily: 'JockeyOne_400Regular',
    fontSize: 20
  },
  register: {
    color: '#FFF',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 30,
  }
})


export default Login
