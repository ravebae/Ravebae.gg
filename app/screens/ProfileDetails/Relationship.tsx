import { TouchableHighlight } from 'react-native';
import React from 'react';

import S from './styles';
import { Controller, useForm } from 'react-hook-form';
import Dropdown from '@components/Dropdown';
import { formStore } from 'store';

import languages from 'app/helper/languages.json';

const Relationship = () => {
  const { register, control, handleSubmit } = useForm({
    defaultValues: formStore.useState((s) => s),
  });

  const handleContinue = () => {
    formStore.update((s) => {
      s.page += 1;
    });
  };

  const relationshipStatus = [
    { key: 'fun', value: 'Looking for a buzz' },
    { key: 'short', value: 'Short term' },
    { key: 'long', value: 'Long term' },
  ];

  return (
    <S.FormWrapper>
      <Controller
        name='relationship'
        control={control}
        rules={{}}
        render={({ field: { onChange, onBlur, value } }) => (
          <Dropdown data={relationshipStatus} />
        )}
      />
    </S.FormWrapper>
  );
};

export default Relationship;
