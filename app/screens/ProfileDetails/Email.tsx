import { View, Text, TouchableHighlight } from 'react-native';
import React from 'react';

import S from './styles';
import { Controller, useForm } from 'react-hook-form';
import Inputbox from '@components/Inputbox';
import Dropdown from '@components/Dropdown';
import { formStore } from 'store';
import { MotiView } from 'moti';
import { FIREBASE_AUTH } from 'firebaseConfig';

const Email = () => {
  const { register, control, handleSubmit } = useForm({
    defaultValues: formStore.useState((s) => s),
  });

  return (
    <S.ViewContainer>
      <S.ScrollContainer
        nestedScrollEnabled={true}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <S.EmailContainer>
          <S.FormWrapper>
            <S.Title style={{ fontFamily: 'JockeyOne_400Regular' }}>
              {'My Email'}
            </S.Title>
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
              <Text>Hello</Text>
            </MotiView>
          </S.FormWrapper>
        </S.EmailContainer>
      </S.ScrollContainer>
    </S.ViewContainer>
  );
};

export default Email;
