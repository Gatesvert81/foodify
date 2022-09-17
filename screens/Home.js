import React, { useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import AppHeader from '../components/AppHeader'
import MainCategories from '../components/MainCategories'
import RestaurantList from '../components/RestaurantList'
import { categoryData, COLORS, icons, initialCurrentLocation, restaurantData, SIZES } from '../constants'


function Home({ navigation }) {

    const [categories, setCategories] = useState(categoryData)
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [restaurants, setRestaurants] = useState(restaurantData)
    const [currentLocation, setCurrentLocation] = useState(initialCurrentLocation)


    function onSelectCategory(category) {
        //filter restaurant
        let restaurantList = restaurantData.filter(a => a.categories.includes(category.id))

        setRestaurants(restaurantList)

        setSelectedCategory(category)
    }

    function getCategoryNameById(id) {
        let category = categories.filter(a => a.id == id)

        if (category.length > 0)
            return category[0].name

        return ""
    }

    return (
        <SafeAreaView style={styles.container} >
            <AppHeader 
                text={currentLocation.streetName} 
                leftIcon={icons.nearby} 
                rightIcon={icons.basket} 
                />
            <MainCategories 
                categories={categories} 
                selectedCategory={selectedCategory} onSelectCategory={onSelectCategory} 
                />
            <RestaurantList 
                restaurant={restaurants} 
                getCategoryNameById={getCategoryNameById} currentLocation={currentLocation} 
                navigation={navigation} />
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4,
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    }
})

export default Home
