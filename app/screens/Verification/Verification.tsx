import { View, Text, TouchableHighlight } from 'react-native';
import React from 'react';

import S from './styles';
import { Controller, useForm, useWatch } from 'react-hook-form';
import Inputbox from '@components/Inputbox';
import Dropdown from '@components/Dropdown';
import { formStore } from 'store';
import { MotiText, MotiView } from 'moti';
import { FIREBASE_AUTH } from 'firebaseConfig';
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendSignInLinkToEmail,
} from 'firebase/auth';
import axios from 'axios';

const Verification = ({ navigation }) => {
  const { register, control, handleSubmit, getValues } = useForm({
    defaultValues: formStore.useState((s) => s),
  });

  const auth = FIREBASE_AUTH;
  return (
    <S.ViewContainer>
      <S.ScrollContainer
        nestedScrollEnabled={true}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <S.VerificationContainer>
          <S.EmailContainer>
            <S.Title style={{ fontFamily: 'JockeyOne_400Regular' }}>
              {'My Email'}
            </S.Title>
            <S.SubTitle>
              Please enter your email address. Ravebae will send a link to
              verify your account.{' '}
            </S.SubTitle>
            <MotiView
              from={{ opacity: 0, left: 100 }}
              animate={{ opacity: 1, left: 0 }}
              transition={{ type: 'timing' }}
            >
              <Controller
                name='email'
                control={control}
                rules={{}}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Inputbox
                    placeholder='Email'
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                  />
                )}
              />
            </MotiView>
          </S.EmailContainer>
          <TouchableHighlight
            onPress={() => {
              console.log('Press');
            }}
            activeOpacity={1}
          >
            <S.ContinueBtn>
              <S.Continue
                onPress={() => {
                  console.log('Verifying user');
                  const val = getValues();
                  axios.post('localhost:5001/user/verify_email');
                  // createUserWithEmailAndPassword(auth, val.email, '123456')
                  //   .then(() => {
                  //     if (auth.currentUser) {
                  //       sendEmailVerification(auth.currentUser, {
                  //         handleCodeInApp: true,
                  //         url: 'https://ravebae-gg.firebaseapp.com',
                  //       })
                  //         .then(() => {
                  //           alert('Verification email sent');
                  //         })
                  //         .catch((error) => alert(error.message));
                  //     }
                  //   })
                  //   .catch((error) => alert(error.message));

                  // Assume user creates account here first time
                  if (auth.currentUser) {
                    sendEmailVerification(auth.currentUser, {
                      handleCodeInApp: true,
                      url: 'https://ravebae-gg.firebaseapp.com',
                    })
                      .then(() => {
                        alert('Verification email sent');
                      })
                      .catch((error) => alert(error.message));
                  }

                  navigation.navigate('test');
                  console.log(formStore);
                }}
              >
                Continue
              </S.Continue>
            </S.ContinueBtn>
          </TouchableHighlight>
        </S.VerificationContainer>
      </S.ScrollContainer>
    </S.ViewContainer>
  );
};

export default Verification;
