import React from 'react';
import { Button, TouchableHighlight, Text, Image } from 'react-native';
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
        <S.Title style={{ fontFamily: 'JockeyOne_400Regular', fontSize: 30, }}>Set Your Location</S.Title>
        <S.FormWrapper>
        <Text style={{
            color: '#fff',
            fontSize: 30,
            marginBottom: 20,
            fontFamily: 'JockeyOne_400Regular',
            textAlign: 'center', // Center text horizontally
            alignSelf: 'center' // Center text within its flex container if it's not filling the full width
        }}>
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
                  fontFamily: 'JockeyOne_400Regular'  
                }}
              />
            )}
          />
          <Image
                source={require('location_person.png')} // Include the file extension .png
                style={{ width: '100%', height: 200, marginBottom: 20 }}
            />
          <TouchableHighlight onPress={handleSubmit(onSubmit)}>
            <S.ContinueBtn>
              <S.Continue style={{ fontFamily: 'JockeyOne_400Regular' }}>Continue</S.Continue>
            </S.ContinueBtn>
          </TouchableHighlight>
        </S.FormWrapper>
      </S.ProfileContainer>
    );
  };
  

export default SetLocation;
