import React from 'react';
import { TouchableHighlight } from 'react-native';

import Inputbox from '@components/Inputbox';
import axios from 'axios';
import { FIREBASE_AUTH } from 'firebaseConfig';
import { MotiView } from 'moti';
import { Controller, useForm } from 'react-hook-form';
import { formStore } from 'store';
import S from './styles';

const Verification = ({ navigation }) => {
  const { control, getValues } = useForm({
    defaultValues: formStore.useState((s) => s),
  });

  // Credit to Jon Randy dev.to/jonrandy
  const generateToken = () => `${~~(Math.random() * 10e3)}`.padStart(4, '0');

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

              const data = {
                email: val.email.toLocaleLowerCase(),
                code: generateToken(),
              };

              console.log('POSTING!');
              navigation.navigate('otp', { code: data.code });
              await axios
                .post(
                  'https://9755-123-208-248-87.ngrok-free.app/user/verify_email', // Hosted on ngrok locally
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
