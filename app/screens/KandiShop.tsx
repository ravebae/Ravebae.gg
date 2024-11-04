import S from './ProfileDetails/styles';
import { View, Image, Text } from 'react-native';
import Kandi from './Images/Kandi.jpeg';
import { Circle } from 'react-native-svg';

export const KandiShop = () => {
    return (
        <S.ProfileContainer>
            <View style={{ alignItems: 'center', marginTop: 20}}>
                <View style={{ flexDirection: 'row'}}>
                    <S.Title
                        style={{
                            fontFamily: 'JockeyOne_400Regular',
                            fontSize: 40,
                            marginRight: 60,
                            marginBottom: 50
                        }}
                        >
                        KANDI SHOP
                    </S.Title>
                    <View style={{backgroundColor: '#A94BF3', width: 75, height: 34, alignItems: 'center', justifyContent: 'center', marginTop: 12, borderRadius: 10}}>
                        <Text style={{fontSize: 12, fontFamily: 'JockeyOne_400Regular', color: 'white'}}>UNLOCK{'\n'}PREMIUM</Text>
                    </View>
                </View>
                <Image 
                    source={Kandi}
                    style={{
                        width: 70,
                        height: 70,
                        borderRadius: 20,
                        marginBottom: 5
                    }}
                />
                <Text style={{color: 'white', fontFamily: 'JockeyOne_400Regular', fontSize: 20}}>BUY</Text>
            </View>
            <View style={{ alignItems: 'center'}}>
                <View style={{ flexDirection: 'row'}}>
                    <Text style={{color: 'white', fontFamily: 'JockeyOne_400Regular', fontSize: 20, marginTop: 50}}>1 for $5.99</Text>
                    <View style={{width: 20, height: 20, borderRadius: 50, backgroundColor: 'white', marginTop: 55}}></View>
                </View>
                <View style={{ flexDirection: 'row'}}>
                    <Text style={{color: 'white', fontFamily: 'JockeyOne_400Regular', fontSize: 20, marginTop: 50}}>5 for $25.00</Text>
                    <View style={{width: 20, height: 20, borderRadius: 50, backgroundColor: 'white', marginTop: 55}}></View>
                </View>
                <View style={{ flexDirection: 'row'}}>
                    <Text style={{color: 'white', fontFamily: 'JockeyOne_400Regular', fontSize: 20, marginTop: 50}}>20 for $100.00</Text>
                    <View style={{width: 20, height: 20, borderRadius: 50, backgroundColor: 'white', marginTop: 55}}></View>
                </View>
            </View>
        </S.ProfileContainer>
    );
};
export default KandiShop;