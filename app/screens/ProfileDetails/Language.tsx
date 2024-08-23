import { TouchableHighlight } from 'react-native';
import React, { useState } from 'react';

import S from './styles';
import { Controller, useForm } from 'react-hook-form';
import Dropdown from '@components/Dropdown';
import { formStore } from 'store';

import languages from 'app/helper/languages.json';
import { RNMultiSelect } from 'rn-multipicker';

const Language = () => {
  const { control } = useForm({
    defaultValues: formStore.useState((s) => s),
  });

  return (
    <>
      <Controller
        name='languageSpoken'
        control={control}
        rules={{}}
        render={({ field: { onChange, onBlur, value } }) => (
          <Dropdown placeholder={'Languages'} data={languages} />
        )}
      />
    </>
  );
};

export default Language;
