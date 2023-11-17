import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Currency from 'react-currency-formatter';
import Icon from 'react-native-vector-icons/FontAwesome';

const DishRow = ({ id,name, description, price, image }) => {
    const [isPressed, setIsPressed] = useState(false)

    return (
        <>
        <View>
            <TouchableOpacity style={styles.container} onPress={() => setIsPressed(!isPressed)}>
                <View style={styles.semiContainer}>
                        <View style={styles.infoContainer}>
                        <Text style={styles.nameStyle}>{name}</Text>
                        <Text style={styles.descStyle}>{description}</Text>
                        <Text style={styles.priceStyle}>
                        <Currency quantity={price} currency='MWK'/>
                        </Text>
                    </View>
                    
                    <View>
                        <Image
                        source={{
                            uri: image,
                        }} 
                        style={{ width: 100, height: 100 }}
                        />
                    </View>
            
                </View>
                    
            </TouchableOpacity>
            
        </View>

        {isPressed && (
            <View style={styles.buttonContainer}>
                <TouchableOpacity>
                    <Icon name="minus-circle" size={30} color="#66cc99" style={styles.starIcon}/>
                </TouchableOpacity>
                <Text style={styles.textStyle}>0</Text>
                <TouchableOpacity>
                    <Icon name="plus-circle" size={30} color="#66cc99" style={styles.starIcon}/>
                </TouchableOpacity>
            </View>
            
        )}
        <View style={styles.horizontalLine} /> 
        </>
        
       
        
      );
    };
    
    export default DishRow;
    
    const styles = StyleSheet.create({
      container: {
        backgroundColor: 'white',
        borderColor: 'gray',
        padding: 20,
      },
      horizontalLine: {
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        marginVertical: 10, // Adjust this value to control the space above and below the line
      },
      semiContainer: {
        flexDirection: 'row',
      },
      infoContainer: {
        flex: 1
      }, 
      nameStyle: {
        fontSize: 16,
        fontWeight: '400',
      },
      descStyle: {
        paddingTop: 10
      },
      priceStyle: {
        paddingTop: 10
      },
      buttonContainer: {
        flexDirection: 'row',
      
        alignItems: 'center', // Align items vertically in the center
        paddingHorizontal: 20,
      },
      textStyle: {
        padding: 20
      }
    });