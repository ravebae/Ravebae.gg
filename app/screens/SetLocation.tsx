import React from 'react';
import { Button, TouchableHighlight, Text } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import S from './styles';
import Dropdown from '@components/Dropdown';

const locationData = [
  { label: 'Sydney', value: 'Sydney' },
  { label: 'Melbourne', value: 'Melbourne' },
  { label: 'Brisbane', value: 'Brisbane' },
];

export const SetLocation = ({ navigation }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: { location: '' },
  });

  const onSubmit = (data) => {
    console.log('Location selected:', data.location);
  };

  return (
    <S.ProfileContainer>
      <S.Title>Set Your Location</S.Title>
      <S.FormWrapper>
        <Text style={{ color: '#fff', fontSize: 16, marginBottom: 20 }}>
          WHERE ALL THE RAVEBAES AT?
        </Text>
        <Controller
          name='location'
          control={control}
          render={({ field: { onChange, value } }) => (
            <Dropdown
              data={locationData}
              selectedValue={value}
              onValueChange={onChange}
              style={{
                backgroundColor: '#fff',
                color: '#000',
                marginBottom: 20,
              }}
            />
          )}
        />
        <TouchableHighlight
          onPress={handleSubmit(onSubmit)}
          style={S.ContinueBtn}
        >
          <S.Continue>Continue</S.Continue>
        </TouchableHighlight>
      </S.FormWrapper>
    </S.ProfileContainer>
  );
};

export default SetLocation;