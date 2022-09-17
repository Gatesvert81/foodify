import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, Animated, Dimensions } from 'react-native'
import { COLORS, FONTS, GOOGLE_API_KEY, icons, SIZES } from '../constants'

function MapButtons({ zoomIn, zoomOut }) {
    return (
        <View style={styles.container} >
            <TouchableOpacity 
                style={styles.zoomIn} 
                onPress={() => zoomIn()} 
                >
                <Text style={{ ...FONTS.body1 }}>
                    +
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.zoomOut} 
                onPress={() => zoomOut()} 
                >
                <Text style={{ ...FONTS.body1 }} >
                    -
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: SIZES.height * 0.4,
        right: SIZES.padding * 2,
        width: 60,
        height: 130,
        justifyContent: 'space-between'
    },
    zoomIn: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: COLORS.white,
        alignItems: 'center',
        justifyContent: 'center'
    },
    zoomOut: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: COLORS.white,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default MapButtons
