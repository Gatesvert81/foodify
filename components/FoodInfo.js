import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, Animated } from 'react-native'
import { COLORS, FONTS, icons, SIZES } from '../constants'

function FoodInfo({ restaurant, editOrder, getOrderQty }) {

    // const [orderItems, setOrderItems] = useState([])

    const scrollX = new Animated.Value(0)

    // function editOrder(action, menuId, price) {
    //     let orderList = orderItems.slice()
    //     let item = orderList.filter(a => a.menuId == menuId)

    //     if(action == "+") {

    //         if(item.length > 0) {
    //             let newQty = item[0].qty + 1
    //             item[0].qty = newQty
    //             item[0].total = item[0].qty * price
    //         } else {
    //             const newItem = {
    //                 menuId: menuId,
    //                 qty: 1,
    //                 price: price,
    //                 total: price
    //             }
    //             orderList.push(newItem)
    //         }
    //         setOrderItems(orderList)
    //     } else {
    //          if (item.length > 0) {
    //              if (item[0]?.qty > 0) {
    //                  let newQty = item[0].qty - 1
    //                  item[0].qty = newQty
    //                  item[0].total = newQty * price
    //              }
    //          }

    //          setOrderItems(orderList)
    //     }
    // }

    // const getOrderQty = (menuId) => {
    //     let orderItem = orderItems.filter(a => a.menuId == menuId)

    //     if ( orderItem.length > 0 ) {
    //         return orderItem[0].qty
    //     }

    //     return 0
    // }

    // const getBasketItemCount = () => {
    //     let itemCount = orderItems.reduce((a, b) => a + (b.qty || 0), 0)

    //     return itemCount
    // }

    return (
        <Animated.ScrollView  
            horizontal
            pagingEnabled
            scrollEventThrottle={16}
            snapToAlignment="center"
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event([
                {nativeEvent: {contentOffset: { x: scrollX }}}
            ], { useNativeDriver: false } ) }
        >
            {
                restaurant?.menu.map(( item, index) => (
                    <View
                        key={`menu${index}`}
                        style={{ alignItems: 'center' }}
                    >
                        <View
                            style={{ height: SIZES.height * 0.35 }}
                        >
                            <Image 
                                source={item.photo}
                                resizeMode="cover"
                                style={{
                                    width: SIZES.width,
                                    height: "100%"
                                }}
                            />

                            <View style={styles.quantity} >
                                <TouchableOpacity 
                                    style={styles.less} 
                                    onPress={() => editOrder('-',item.menuId, item.price )}
                                    >
                                    <Text style={{ ...FONTS.body1 }} >
                                        -
                                    </Text>
                                </TouchableOpacity>
                                <View style={styles.quantityNum} >
                                    <Text style={{ ...FONTS.h2 }}>
                                        {getOrderQty(item.menuId)}
                                    </Text>
                                </View>
                                <TouchableOpacity 
                                    style={styles.more} 
                                    onPress={() => editOrder('+',item.menuId, item.price )}
                                    >
                                    <Text style={{ ...FONTS.body1 }} >
                                        +
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.info} >
                                <Text style={{
                                    marginVertical: 10,
                                    textAlign: 'center',
                                    ...FONTS.h2
                                }} >
                                    {item.name} - {item.price.toFixed(2)}
                                </Text>
                                <Text 
                                    style={{ textAlign: 'center', ...FONTS.body3 }} >
                                    {item.description}
                                </Text>
                            </View>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    marginTop: 10,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                <Image 
                                    source={icons.fire}
                                    style={{
                                        width: 20,
                                        height: 20,
                                        marginRight: 10
                                    }}
                                />
                                <Text
                                    style={{ color: COLORS.darkgray , ...FONTS.body3 }}
                                >
                                    {item.calories.toFixed(2)} cal
                                </Text>
                            </View>
                        </View>
                    </View>
                ))
            }
            
        </Animated.ScrollView>
    )
}

const styles = StyleSheet.create({
    quantity: {
        position: 'absolute',
        bottom: - 20,
        width: SIZES.width,
        height: 50,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    less: {
        width: 50,
        backgroundColor: COLORS.white,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 26,
        borderBottomLeftRadius: 25
    },
    quantityNum: {
        width: 50,
        backgroundColor: COLORS.white,
        alignItems: 'center',
        justifyContent: 'center',
    },
    more: {
        width: 50,
        backgroundColor: COLORS.white,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 26,
        borderBottomRightRadius: 25
    },
    info: {
        width: SIZES.width,
        alignItems: 'center',
        marginTop: 15,
        paddingHorizontal: SIZES.padding * 2,
    }
})

export default FoodInfo
