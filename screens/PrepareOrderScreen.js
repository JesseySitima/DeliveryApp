import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react';
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';

const PrepareOrderScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('delivery');
        }, 4000)
    }, []);

  return (
    <View style={styles.container}>
       <Animatable.Image
        animation="fadeIn"
        duration={1500}
        source={require('../assets/200w.gif')} // Replace with your image source
        style={styles.image}
      />

        <Animatable.Text
            animation="fadeIn"
            duration={1500}
            style={styles.text}
        >
            Waiting for Restaurant to accept your order!
        </Animatable.Text>

        <Progress.Circle size={60} indeterminate={true} color='white'/>
    </View>
  )
}

export default PrepareOrderScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0878a4',
        justifyContent: 'center',
        alignItems: 'center', // Use alignItems instead of alignContent
      },
})