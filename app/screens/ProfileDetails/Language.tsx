import React from 'react';

import { Controller, useForm } from 'react-hook-form';
import Dropdown from '@components/Dropdown';
import { formStore } from 'store';

import languages from 'app/helper/languages.json';

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
