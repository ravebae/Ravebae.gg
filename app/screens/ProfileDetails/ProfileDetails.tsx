import { Controller, useForm } from 'react-hook-form';
import data from '../../helper/languages.json';

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
import Dropdown from '@components/Dropdown';

export const ProfileDetails = () => {
  const { register, control, handleSubmit } = useForm({
    defaultValues: formStore.useState((s) => s),
  });

  const onSubmit = (formData) => {
    formStore.update((s) => {
      s.firstName = formData.firstName;
      s.lastName = formData.lastName;
      s.languageSpoken = formData.languageSpoken;
      s.religion = formData.religion;
      s.familyPlan = formData.familyPlan;
      s.race = formData.race;
    });
    console.log('SUBMITTED', formData);
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
            <Dropdown data={data} />
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
            <S.Continue
              style={{ fontFamily: 'JockeyOne_400Regular' }}
              onPress={() => {
                formStore.update((s) => {
                  s.page += 1;
                });
                console.log(formStore);
              }}
            >
              Continue
            </S.Continue>
          </S.ContinueBtn>
        </TouchableHighlight>
      </S.FormWrapper>
    </S.ProfileContainer>
  );
};
