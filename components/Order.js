import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, Animated } from 'react-native'
import { COLORS, FONTS, icons, SIZES } from '../constants'
import Dots from './Dots'


function Order({ restaurant, scroll, getBasketItemCount, sumOrder, navigation, currentLocation }) {
    const scrollX = new Animated.Value(0)

    

    

    return (
        <View>
            <Dots restaurant={restaurant} />
            <View
                style={{
                    backgroundColor: COLORS.white,
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40
                }}
            >
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingVertical: SIZES.padding * 2,
                    paddingHorizontal: SIZES.padding * 3,
                    borderBottomColor: COLORS.lightGray2,
                    borderBottomWidth: 1
                }} >
                    <Text style={{ ...FONTS.h3 }} >
                        {getBasketItemCount()} items in Cart
                    </Text>
                    <Text style={{ ...FONTS.h3 }} >
                        $ {sumOrder()}
                    </Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingVertical: SIZES.padding * 2,
                    paddingHorizontal: SIZES.padding * 3,
                }} >
                    <View style={{ flexDirection: 'row' }} >
                        <Image
                            source={icons.pin}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: COLORS.darkgray
                            }}
                        />
                        <Text style={{ ...FONTS.h4, marginLeft: SIZES.padding }} >
                            Location
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }} >
                        <Image
                            source={icons.master_card}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: COLORS.darkgray
                            }}
                        />
                        <Text style={{ ...FONTS.h4, marginLeft: SIZES.padding }} >
                            8327
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        padding: SIZES.padding * 2,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <TouchableOpacity
                        style={{
                            width: SIZES.width * 0.9,
                            padding: SIZES.padding,
                            backgroundColor: COLORS.primary,
                            alignItems: 'center',
                            borderRadius: SIZES.radius
                        }}
                        onPress={() => navigation.navigate('OrderDelivery', {
                            restaurant: restaurant,
                            currentLocation: currentLocation
                        })}
                    >
                        <Text style={{ ...FONTS.h2, color: COLORS.white }} >
                            Order
                        </Text>
                    </TouchableOpacity>
                </View>
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

export default Order
