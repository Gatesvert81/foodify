import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, Animated } from 'react-native'
import AppHeader from '../components/AppHeader'
import FoodInfo from '../components/FoodInfo'
import Order from '../components/Order'
import { COLORS, FONTS, icons, SIZES } from '../constants'

function Restaurant({ route, navigation }) {

    

    const [restaurant, setRestaurant] = useState(null)
    const [currentLocation, setcurrentLocation] = useState(null)
    const [scroll, setScroll] = useState()
    const [orderItems, setOrderItems] = useState([])

    const scrollX = new Animated.Value(0)

    useEffect(() => {
        let { item, currentLocation } = route.params

        setRestaurant(item)
        setcurrentLocation(currentLocation)
        
    }, [])

    const backFunc = () => navigation.goBack()

    function editOrder(action, menuId, price) {
        let orderList = orderItems.slice()
        let item = orderList.filter(a => a.menuId == menuId)

        if(action == "+") {

            if(item.length > 0) {
                let newQty = item[0].qty + 1
                item[0].qty = newQty
                item[0].total = item[0].qty * price
            } else {
                const newItem = {
                    menuId: menuId,
                    qty: 1,
                    price: price,
                    total: price
                }
                orderList.push(newItem)
            }
            setOrderItems(orderList)
        } else {
             if (item.length > 0) {
                 if (item[0]?.qty > 0) {
                     let newQty = item[0].qty - 1
                     item[0].qty = newQty
                     item[0].total = newQty * price
                 }
             }

             setOrderItems(orderList)
        }
    }

    const getOrderQty = (menuId) => {
        let orderItem = orderItems.filter(a => a.menuId == menuId)

        if ( orderItem.length > 0 ) {
            return orderItem[0].qty
        }

        return 0
    }

    const getBasketItemCount = () => {
        let itemCount = orderItems.reduce((a, b) => a + (b.qty || 0), 0)

        return itemCount
    }

    const sumOrder = () => {
        let total = orderItems.reduce((a, b) => a + (b.total || 0), 0)

        return total.toFixed(2)
    }

    return (
        <SafeAreaView style={styles.container} >
           <AppHeader 
                text={restaurant?.name}
                leftIcon={icons.back}
                rightIcon={icons.list}
                action={backFunc}
           />
           {/* {renderFoodInfo} */}
           <FoodInfo 
                restaurant={restaurant} 
                setScroll={setScroll} 
                editOrder={editOrder} 
                getOrderQty={getOrderQty} 
                />
           <Order 
                restaurant={restaurant} 
                scroll={scroll} 
                getBasketItemCount={getBasketItemCount} 
                sumOrder={sumOrder} 
                navigation={navigation} 
                currentLocation={currentLocation} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray2
    },
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

export default Restaurant