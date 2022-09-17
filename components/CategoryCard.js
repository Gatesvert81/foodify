import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image, FlatList,TouchableOpacity } from 'react-native'
import { COLORS, FONTS, icons, SIZES } from '../constants'

function CategoryCard({item, selectedCategory, onSelectCategory}) {
    // console.log(item)
    return (
        <TouchableOpacity style={[
            styles.container,
            {backgroundColor: ( selectedCategory?.id == item.id ) ? COLORS.primary: COLORS.white }
        ]} 
        onPress={() => onSelectCategory(item)}
        >
            <View style={[
                styles.imageContainer,
                {backgroundColor: ( selectedCategory?.id == item.id ) ? COLORS.white: COLORS.lightGray }
                ]} >
                <Image
                    source={item.icon}
                    resizeMode='contain'
                    style={[
                        styles.image
                    ]}
                />
            </View>
            <Text style={[
                        styles.text,
                        {color: ( selectedCategory?.id == item.id ) ? COLORS.white: COLORS.black }
                    ]} >
                {item.name}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: SIZES.padding,
        paddingBottom: SIZES.padding * 2,
        borderRadius: SIZES.radius,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: SIZES.padding,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    },
    imageContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.white
    },
    image: {
        width: 30,
        height: 30
    },
    text: {
        ...FONTS.body5,
        marginTop: SIZES.padding,
        // color: COLORS.white
    }
})

export default CategoryCard
