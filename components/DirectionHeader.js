import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, Animated, Dimensions } from 'react-native'
import { COLORS, FONTS, icons, SIZES } from '../constants'


function DirectionHeader({ streetName, duration }) {
    return (
        <View
            style={{
                position: 'absolute',
                top: 50,
                left: 0,
                right: 0,
                height: 50,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: SIZES.width * 0.9,
                    paddingVertical: SIZES.padding,
                    paddingHorizontal: SIZES.padding * 2,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.white
                }}
            >
                <Image
                    source={icons.red_pin}
                    style={{
                        width: 30,
                        height: 30,
                        marginRight: SIZES.padding
                    }}
                />

                <View style={{ flex: 1 }}>
                    <Text style={{ ...FONTS.body3 }}>{streetName}</Text>
                </View>

                <Text style={{ ...FONTS.body3 }}>{Math.ceil(duration)} mins</Text>
            </View>
        </View>
    )
}

export default DirectionHeader
