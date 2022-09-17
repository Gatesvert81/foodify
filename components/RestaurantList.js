import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image, FlatList,TouchableOpacity } from 'react-native'
import { COLORS, FONTS, icons, SIZES } from '../constants'


function RestaurantList({restaurant, getCategoryNameById, currentLocation, navigation}) {

    const renderItem =({ item }) => (
        <TouchableOpacity 
            style={{ marginBottom: SIZES.padding * 2 }} 
            onPress={() => navigation.navigate('Restaurant', {
                item,
                currentLocation
            }) }
            >
            <View>
                <Image  
                    source={item.photo}
                    resizeMode='cover'
                    style={{
                        width: "100%",
                        height: 200,
                        borderRadius: SIZES.radius
                    }}
                />
                <View style={styles.durationContainer} >
                    <Text style={styles.duration} >
                        {item.duration}
                    </Text>
                </View>
            </View>
            <Text style={{ ...FONTS.body2 }} >
                {item.name}
            </Text>
            <View style={{
                marginTop: SIZES.padding,
                flexDirection: 'row'
            }} >
                <Image 
                    source={icons.star}
                    style={styles.star}
                />
                <Text style={{ ...FONTS.body3 }} >
                    {item.rating}
                </Text>
                 
                 <View 
                    style={{
                        marginLeft: 10,
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        alignItems: 'center'
                    }}
                 >
                     {
                         item.categories.map((categoryId) => (
                             <View
                                style={{ flexDirection: 'row' }}
                                key={categoryId}
                             >
                                 <Text 
                                    style={{ ...FONTS.body3 }} >
                                     {getCategoryNameById(categoryId)}
                                 </Text>
                                 <Text 
                                    style={{ ...FONTS.h3, color: COLORS.darkgray  }} >
                                         . 
                                 </Text>
                             </View>
                         ))
                     }
                     {
                         [1, 2, 3].map((priceRating) => (
                             <Text
                                key={priceRating}
                                style={{
                                    ...FONTS.body3,
                                    color: ( priceRating <= item.priceRating  ) ? COLORS.black : COLORS.darkgray
                                }}
                             >
                                 $
                             </Text>
                         ) )
                     }
                 </View>
            </View>
        </TouchableOpacity>
    )

    return (
        <FlatList 
            data={restaurant}
            keyExtractor={item => `${item.id}`}
            key={item => `${item.id}`}
            renderItem={renderItem}
            contentContainerStyle={{
                paddingHorizontal: SIZES.padding * 2,
                paddingBottom: 30
            }}
        />
    )
}

const styles = StyleSheet.create({
    durationContainer: {
        position: 'absolute',
        bottom: 0,
        height: 50,
        width: SIZES.width * 0.3,
        backgroundColor: COLORS.white,
        borderTopRightRadius: SIZES.radius,
        borderBottomLeftRadius: SIZES.radius,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    },
    duration: {
        ...FONTS.h5
    },
    star: {
        height: 20,
        width: 20,
        tintColor: COLORS.primary,
        marginRight: 10,
    }
})

export default RestaurantList
