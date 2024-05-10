import { View, Text, TouchableHighlight } from 'react-native';
import React from 'react';

import S from './styles';
import { Controller, useForm } from 'react-hook-form';
import Inputbox from '@components/Inputbox';
import Dropdown from '@components/Dropdown';
import { formStore } from 'store';

const Email = () => {
  const { register, control, handleSubmit } = useForm({
    defaultValues: formStore.useState((s) => s),
  });

  const handleContinue = () => {
    formStore.update((s) => {
      s.page += 1;
    });
  };

  return (
    <S.FormWrapper>
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
      <TouchableHighlight onPress={handleContinue}>
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
  );
};

export default Email;
