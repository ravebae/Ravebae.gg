import { Controller, useForm } from 'react-hook-form';

import S from './styles';
import {
  Button,
  SafeAreaView,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import React from 'react';
import { formStore } from 'store';
import Inputbox from '@components/Inputbox';

export const ProfileDetails = () => {
  const { register, control, handleSubmit } = useForm({
    defaultValues: formStore.useState((s) => s),
  });

  const onSubmit = (data) => {
    formStore.update((s) => {
      s.firstName = data.firstName;
      s.lastName = data.lastName;
      s.languageSpoken = data.languageSpoken;
      s.religion = data.religion;
      s.familyPlan = data.familyPlan;
      s.race = data.race;
    });
    console.log('SUBMITTED', data);
  };

  return (
    <S.ProfileContainer>
      <S.Title style={{ fontFamily: 'JockeyOne_400Regular' }}>
        Profile details
      </S.Title>
      <S.FormWrapper>
        <Controller
          name='firstName'
          control={control}
          rules={{}}
          render={({ field: { onChange, onBlur, value } }) => (
            <Inputbox
              placeholder='First name'
              onChange={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
        />
        <Controller
          name='lastName'
          control={control}
          rules={{}}
          render={({ field: { onChange, onBlur, value } }) => (
            <Inputbox
              placeholder='Last name'
              onChange={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
        />

        <Controller
          name='languageSpoken'
          control={control}
          rules={{}}
          render={({ field: { onChange, onBlur, value } }) => (
            <Inputbox
              placeholder='Language Spoken'
              onChange={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
        />

        <Controller
          name='religion'
          control={control}
          rules={{}}
          render={({ field: { onChange, onBlur, value } }) => (
            <Inputbox
              placeholder='Religion'
              onChange={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
        />

        <Controller
          name='familyPlan'
          control={control}
          rules={{}}
          render={({ field: { onChange, onBlur, value } }) => (
            <Inputbox
              placeholder='Family Plan'
              onChange={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
        />

        <Controller
          name='race'
          control={control}
          rules={{}}
          render={({ field: { onChange, onBlur, value } }) => (
            <Inputbox
              placeholder='Race'
              onChange={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
        />

        <TouchableHighlight onPress={handleSubmit(onSubmit)}>
          <S.ContinueBtn>
            <S.Continue style={{ fontFamily: 'JockeyOne_400Regular' }}>
              Continue
            </S.Continue>
          </S.ContinueBtn>
        </TouchableHighlight>
      </S.FormWrapper>
    </S.ProfileContainer>
  );
};
