import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, Animated, Dimensions } from 'react-native'
import { COLORS, FONTS, icons, SIZES } from '../constants'

function DeliveryInfo({ restaurant, navigation }) {
    return (
        <View style={styles.container} >
            <View style={styles.main} >
                <View
                    style={{ flexDirection: 'row', alignItems: 'center' }}
                >
                    <Image
                        source={restaurant?.courier.avatar}
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 25
                        }}
                    />
                    <View style={{ flex: 1, marginLeft: SIZES.padding }} >
                        <View
                            style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                            <Text style={{ ...FONTS.h4 }} >
                                {restaurant?.courier.name}
                            </Text>
                            <View style={{ flexDirection: 'row' }} >
                                <Image
                                    source={icons.star}
                                    style={{ width: 18, height: 18, tintColor: COLORS.primary, marginRight: SIZES.padding }}
                                />
                                <Text style={{ ...FONTS.body3 }}>{restaurant?.rating}</Text>
                            </View>
                        </View>
                        <Text style={{ color: COLORS.darkgray, ...FONTS.body4 }}>{restaurant?.name}</Text>
                    </View>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.padding * 2,
                        justifyContent: 'space-between'
                    }}
                >
                    <TouchableOpacity
                        style={styles.call}
                        onPress={() => navigation.navigate("Home")}
                    >
                        <Text style={{ ...FONTS.h4, color: COLORS.white }}>
                            Call
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.cancel} 
                        onPress={() => navigation.goBack()}
                        >
                        <Text style={{ ...FONTS.h4, color: COLORS.white }}>
                            Cancel
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 50,
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    main: {
        width: SIZES.width * 0.9,
        paddingVertical: SIZES.padding * 3,
        paddingHorizontal: SIZES.padding * 2,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.white
    },
    call: {
        flex: 1,
        height: 50,
        marginRight: 10,
        backgroundColor: COLORS.primary,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    cancel: {
        flex: 1,
        height: 50,
        backgroundColor: COLORS.secondary,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    }
})

export default DeliveryInfo
