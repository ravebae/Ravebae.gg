import { View, Text, TouchableHighlight } from 'react-native';
import React, { useState } from 'react';

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

  // Credit to Jon Randy dev.to/jonrandy
  const generateToken = () => `${~~(Math.random() * 10e3)}`.padStart(4, '0');

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
            style={{ zIndex: 2 }}
            onPress={async () => {
              console.log('Pressed');
              const val = getValues();

              let data = {
                email: val.email.toLocaleLowerCase(),
                code: generateToken(),
              };

              console.log('POSTING!');
              navigation.navigate('otp', { code: data.code });
              await axios
                .post(
                  'https://92df-123-208-248-87.ngrok-free.app/user/verify_email', // Hosted on ngrok locally
                  data
                )
                .then(() => {
                  console.log('Posted email');
                })
                .catch((e) => {
                  console.log('Error', e);
                });
            }}
            activeOpacity={1}
            delayPressIn={0}
          >
            <S.ContinueBtn>
              <S.Continue>Continue</S.Continue>
            </S.ContinueBtn>
          </TouchableHighlight>
        </S.VerificationContainer>
      </S.ScrollContainer>
    </S.ViewContainer>
  );
};

export default Verification;
