import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import { COLORS, FONTS, icons, SIZES } from '../constants'


function AppHeader({ text, leftIcon, rightIcon, action }) {
    return (
        <View 
            style={styles.container}
            >
            <View
                style={styles.headerLeftView}
            >
                <TouchableOpacity 
                    style={styles.headerLeftTouch} 
                    onPress={action}
                    >
                    <Image
                        source={leftIcon}
                        resizeMode='contain'
                        style={{
                            width: 30,
                            height: 30,
                        }}
                    />
                </TouchableOpacity>
            </View>
            <View
                style={{ backgroundColor: COLORS.lightGray3 , alignItems: 'center', justifyContent: 'center', width: '70%' , height: '100%', borderRadius: SIZES.radius }} >
                <View style={styles.location} >
                    <Text style={{
                        ...FONTS.h3
                    }} >
                        {text}
                    </Text>
                </View>
            </View>
            <View
                style={styles.headerRightView}
            >
                <TouchableOpacity
                    style={styles.headerRightTouch} >
                    <Image
                        source={rightIcon}
                        resizeMode='contain'
                        style={{
                            width: 30,
                            height: 30,

                        }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: COLORS.lightGray4,
        height: 50,
        width: "100%",
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: SIZES.padding * 2,
        padding: SIZES.padding,
        // backgroundColor: 'green'
    },
    headerLeftView: {
    },
    headerLeftTouch: {
    },
    location: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: SIZES.radius
    },
    headerRightView: {
        flexDirection: 'row',
        height: 50,
    },
    headerRightTouch: {
        justifyContent: 'center',
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

export default AppHeader
