import { View, Text, StyleSheet, Button } from 'react-native';

export default function Auth({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={{color: '#fff', fontSize: 40, fontWeight: '700', marginBottom: 20}}>Auth</Text>
            <Button title="Go to PhotoSticker" onPress={() => {
                navigation.navigate('PhotoSticker')
            }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#181717',
        alignItems: 'center',
        justifyContent: 'center',
    },
});