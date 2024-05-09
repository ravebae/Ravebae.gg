import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { Picker } from '@react-native-picker/picker';
import { FIREBASE_AUTH } from '../../firebaseConfig';
import S from './styles'; 

export const SetLocation = ({ navigation }) => {
    const { control, handleSubmit } = useForm({
        defaultValues: { location: '' }
    });

    const onSubmit = data => {
        console.log('Location selected:', data.location);
    
    };

    return (
        <View style={S.container}>
            <View style={S.header}>
                <Button title="<" onPress={() => navigation.goBack()} /> 
                <Text style={S.title}>Set Your Location</Text>
            </View>
            <Text style={S.subtitle}>WHERE ALL THE RAVEBAES AT?</Text>
            <Controller
                name="location"
                control={control}
                render={({ field: { onChange, value } }) => (
                    <Picker
                        selectedValue={value}
                        onValueChange={onChange}
                        style={S.picker}
                    >
                        <Picker.Item label="Sydney" value="Sydney" />
                        <Picker.Item label="Melbourne" value="Melbourne" />
                        <Picker.Item label="Brisbane" value="Brisbane" />
                        
                    </Picker>
                )}
            />
            <Button title="Continue" onPress={handleSubmit(onSubmit)} style={S.continueButton} />
        </View>
    );
};

export default SetLocation;