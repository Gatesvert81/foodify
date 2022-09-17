import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, Animated, Dimensions } from 'react-native'
import { COLORS, FONTS, icons, SIZES } from '../constants'
import { Marker } from 'react-native-maps';

function DestinationMarker({toLocation}) {
    return (
        <Marker coordinate={toLocation} >
            <View style={styles.marker } >
                <View style={styles.markerIcon} >
                    <Image 
                        source={icons.pin}
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: COLORS.white
                        }}
                    />
                </View>
            </View>
        </Marker>
    )
}

const styles = StyleSheet.create({
    marker: {
        height: 40,
        width: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent:  'center',
        backgroundColor: COLORS.white
    },
    markerIcon: {
        height: 40,
        width: 40,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent:  'center',
        backgroundColor: COLORS.primary
    }
})

export default DestinationMarker
