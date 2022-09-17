import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, Animated } from 'react-native'
import { COLORS, FONTS, icons, SIZES } from '../constants'


function Dots({ restaurant }) {

    const scrollX = new Animated.Value(0)

    const dotPosition = Animated.divide(scrollX, SIZES.width)

    return (
        <View style={{ height: 30,  }} >
            <View style={styles.dots} >
                {
                    restaurant?.menu.map((item, index) => {

                        const opacity = dotPosition.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: [0.3, 1, 0.3],
                            extrapolate: "clamp"
                        })

                        const dotSizes = dotPosition.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: [SIZES.base * 0.8, 10, SIZES.base * 0.8],
                            extrapolate: "clamp"
                        })

                        const dotColor = dotPosition.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: [COLORS.darkgray, COLORS.primary, COLORS.darkgray],
                            extrapolate: "clamp"
                        })

                        return (
                            <Animated.View
                                key={`dot-${index}`}
                                opacity={opacity}
                                style={{
                                    borderRadius: SIZES.radius,
                                    marginHorizontal: 6,
                                    width: dotSizes,
                                    height: dotSizes,
                                    backgroundColor: dotColor
                                }}
                            />
                        )

                    })
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    dots: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: SIZES.padding
    }
})

export default Dots
