import { Controller, useForm } from "react-hook-form";

import { Button, Text, TextInput, View } from 'react-native'
import React from 'react'
import { formStore } from "../../store";

export const Step1 = () => {
  const { register, control, handleSubmit } = useForm({defaultValues: formStore.useState((s) => s)});

  const onSubmit = (data) => {
    formStore.update((s) => {
      s.firstName = data.firstName;
      s.lastName = data.lastName;
    })
    console.log('SUBMITTED', data);
  };

  return (
      <View>
        <Text>Profile details</Text>
        <Controller 
          name="firstName"
          control={control} 
          rules={{}}
          render={({ field: {onChange, onBlur, value} }) => (
            <TextInput 
              placeholder="First Name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        <Controller 
          name="lastName"
          control={control} 
          rules={{}}
          render={({ field: {onChange, onBlur, value} }) => (
            <TextInput 
              placeholder="Last Name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        
        <Button title="Submit" color="#A94BF3" onPress={handleSubmit(onSubmit)}/>
      </View>
    );
}

export default Step1