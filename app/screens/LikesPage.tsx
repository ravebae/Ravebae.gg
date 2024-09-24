import S from './ProfileDetails/styles';
import { View, Image, ScrollView, Text } from 'react-native';
import Heart from './Images/Heart.jpeg';
import Steven from './Images/Steven.jpeg';

export const LikesPage = () => {
    return (
        <ScrollView 
            contentContainerStyle={{
            flexGrow: 1, // Ensures ScrollView expands to fill available space
            backgroundColor: '#081e23', // Set background color directly on the ScrollView
          }}
        >
            <View
            style={{
                display: 'flex',
                flex: 1,
                width: '100%',
                height: '100%',
                paddingVertical: 50,
                paddingHorizontal: 50
            }}
            >
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#081e23'}}>
                    <S.Title
                        style={{
                        fontFamily: 'JockeyOne_400Regular',
                        fontSize: 40,
                        marginBottom: 30,
                        marginRight: 225
                        }}
                    >
                        Likes
                    </S.Title>
                    <Image
                        source={Heart}
                        style={{
                        width: 35,
                        height: 35,
                        borderRadius: 20,
                        marginTop: -25,
                        }}
                    />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        source={Steven}
                        style={{
                        width: 45,
                        height: 45,
                        borderRadius: 20,
                        marginRight: 20,
                        marginTop: -25
                    }}
                    />
                    <Text
                    style={{
                        fontFamily: 'JockeyOne_400Regular',
                        color: 'white',
                        fontSize: 20,
                        marginBottom: 30
                    }}
                    >
                        David likes your photo
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        source={Steven}
                        style={{
                        width: 45,
                        height: 45,
                        borderRadius: 20,
                        marginRight: 20,
                        marginTop: -25
                    }}
                    />
                    <Text
                    style={{
                        fontFamily: 'JockeyOne_400Regular',
                        color: 'white',
                        fontSize: 20,
                        marginBottom: 30
                    }}
                    >
                        Steven likes your photo
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        source={Steven}
                        style={{
                        width: 45,
                        height: 45,
                        borderRadius: 20,
                        marginRight: 20,
                        marginTop: -25
                    }}
                    />
                    <Text
                    style={{
                        fontFamily: 'JockeyOne_400Regular',
                        color: 'white',
                        fontSize: 20,
                        marginBottom: 30
                    }}
                    >
                        Terry likes your photo
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        source={Steven}
                        style={{
                        width: 45,
                        height: 45,
                        borderRadius: 20,
                        marginRight: 20,
                        marginTop: -25
                    }}
                    />
                    <Text
                    style={{
                        fontFamily: 'JockeyOne_400Regular',
                        color: 'white',
                        fontSize: 20,
                        marginBottom: 30
                    }}
                    >
                        Christian likes your photo
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
}

export default LikesPage;