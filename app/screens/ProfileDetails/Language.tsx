import { TouchableHighlight } from 'react-native';
import React from 'react';

import S from './styles';
import { Controller, useForm } from 'react-hook-form';
import Dropdown from '@components/Dropdown';
import { formStore } from 'store';

import languages from 'app/helper/languages.json';

const Language = () => {
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
        name='languageSpoken'
        control={control}
        rules={{}}
        render={({ field: { onChange, onBlur, value } }) => (
          <Dropdown data={languages} multiple={true} />
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

export default Language;
