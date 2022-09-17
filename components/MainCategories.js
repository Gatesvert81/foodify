import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image, FlatList,TouchableOpacity } from 'react-native'
import { COLORS, FONTS, icons, SIZES } from '../constants'
import CategoryCard from './CategoryCard'


function MainCategories({categories, selectedCategory, onSelectCategory}) {
    return (
        <View style={{
                padding: SIZES.padding * 2,
            }} 
        >
            <Text style={{ ...FONTS.h1 }} >Main</Text>
            <Text style={{ ...FONTS.h1 }} >Categories</Text>

            <FlatList 
                data={categories}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => `${item.id}`}
                key={item => `${item.id}`}
                renderItem={ item => <CategoryCard item={item.item} selectedCategory={selectedCategory} onSelectCategory={onSelectCategory} /> }
                contentContainerStyle={{ paddingVertical: SIZES.padding* 2 }}
            />

        </View>
    )
}

export default MainCategories
