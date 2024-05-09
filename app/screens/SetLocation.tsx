import React from 'react';
import { Button, TouchableHighlight, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Controller, useForm } from 'react-hook-form';
import S from './styles';

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
            <Picker
              selectedValue={value}
              onValueChange={onChange}
              style={{
                backgroundColor: '#fff',
                color: '#000',
                marginBottom: 20,
              }}
            >
              <Picker.Item label='Sydney' value='Sydney' />
              <Picker.Item label='Melbourne' value='Melbourne' />
              <Picker.Item label='Brisbane' value='Brisbane' />
            </Picker>
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
