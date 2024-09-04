import React from 'react';
import { Text } from 'react-native';

import Inputbox from '@components/Inputbox';
import { MotiView } from 'moti';
import { Controller, useForm } from 'react-hook-form';
import { formStore } from 'store';
import S from './styles';

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
            </MotiView>
          </S.FormWrapper>
        </S.EmailContainer>
      </S.ScrollContainer>
    </S.ViewContainer>
  );
};

export default Email;
