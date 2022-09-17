import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Home } from '../screens'
import { COLORS, icons } from '../constants'

const Tab = createBottomTabNavigator()
function Tabs() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    borderTopWidth: 0,
                    backgroundColor: 'transparent',
                    elevation: 0
                }
            }}
        >
            <Tab.Screen 
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image 
                            source={icons.cutlery}
                            resizeMode='contain'
                            style={[
                                styles.icon,
                                {tintColor: focused ?  COLORS.primary : COLORS.secondary}
                            ]}
                        />
                    )
                }}
            />
            <Tab.Screen 
                name="Search"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image 
                            source={icons.search}
                            resizeMode='contain'
                            style={[
                                styles.icon,
                                {tintColor: focused ?  COLORS.primary : COLORS.secondary}
                            ]}
                        />
                    )
                }}
            />
            <Tab.Screen 
                name="Like"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image 
                            source={icons.like}
                            resizeMode='contain'
                            style={[
                                styles.icon,
                                {tintColor: focused ?  COLORS.primary : COLORS.secondary}
                            ]}
                        />
                    )
                }}
            />
            <Tab.Screen 
                name="User"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image 
                            source={icons.user}
                            resizeMode='contain'
                            style={[
                                styles.icon,
                                {tintColor: focused ?  COLORS.primary : COLORS.secondary}
                            ]}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    icon: {
        width: 25,
        height: 25,
        
    }
})

export default Tabs
