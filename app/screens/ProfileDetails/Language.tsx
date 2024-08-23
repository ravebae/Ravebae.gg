import { TouchableHighlight } from 'react-native';
import React, { useState } from 'react';

import S from './styles';
import { Controller, useForm } from 'react-hook-form';
import Dropdown from '@components/Dropdown';
import { formStore } from 'store';

import languages from 'app/helper/languages.json';
import { RNMultiSelect } from 'rn-multipicker';

const Language = () => {
  const { register, control, handleSubmit } = useForm({
    defaultValues: formStore.useState((s) => s),
  });

  const [selectedItems, setSelectedItems] = useState<string[]>([]);

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
          <RNMultiSelect
            placeholder='Languages'
            data={['English', 'Chinese']}
            onSelectedItemsChange={(value) => setSelectedItems(value)}
            selectedItems={selectedItems}
          />
        )}
      />
    </S.FormWrapper>
  );
};

export default Language;
