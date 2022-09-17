import React, { useEffect, useRef, useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, Animated, Dimensions } from 'react-native'
import { COLORS, FONTS, GOOGLE_API_KEY, icons, SIZES } from '../constants'
import MapView, { Marker } from 'react-native-maps';
import DestinationMarker from '../components/DestinationMarker';
import MapViewDirections from 'react-native-maps-directions'
import DirectionHeader from '../components/DirectionHeader';
import DeliveryInfo from '../components/DeliveryInfo';
import MapButtons from '../components/MapButtons';


function OrderDelivery({ route, navigation }) {

    const mapView = useRef()

    const [restaurant, setRestaurant] = useState(null)
    const [streetName, setStreetName] = useState("")
    const [fromLocation, setFromLocation] = useState(null)
    const [toLocation, setToLocation] = useState(null)
    const [region, setRegion] = useState(null)

    const [duration, setDuration] = useState(0)
    const [isReady, setIsReady] = useState(false)
    const [angle, setAngle] = useState(0)

    useEffect(() => {
        let { restaurant, currentLocation } = route.params

        let fromLoc = currentLocation.gps
        let toLoc = restaurant.location 
        let street = currentLocation.streetName

        let mapRegion = {
            latitude: ( fromLoc.latitude + toLoc.latitude ) / 2,
            longitude: ( fromLoc.longitude + toLoc.longitude) / 2,
            latitudeDelta: Math.abs( fromLoc.latitude - toLoc.latitude ) * 2,
            longitudeDelta: Math.abs( fromLoc.longitude - toLoc.longitude ) * 2
        }

        setRestaurant(restaurant)
        setStreetName(street)
        setFromLocation(fromLoc)
        setToLocation(toLoc)
        setRegion(mapRegion)
        
    }, [])

    function calculateAngle(coordinates) {
        let startLat = coordinates[0]["latitude"]
        let startLng = coordinates[0]["longitude"]
        let endLat = coordinates[1]["latitude"]
        let endLng = coordinates[1]["longitude"]
        let dx = endLat - startLat
        let dy = endLng - startLng

        return Math.atan2(dy, dx) * 180 / Math.PI
    }

    function zoomIn() {
        let newRegion = {
            latitude: region.latitude,
            longitude: region.longitude,
            latitudeDelta: region.latitudeDelta / 2,
            longitudeDelta: region.longitudeDelta / 2
        }

        setRegion(newRegion)
        mapView.current.animateToRegion(newRegion, 200)
    }

    function zoomOut() {
        let newRegion = {
            latitude: region.latitude,
            longitude: region.longitude,
            latitudeDelta: region.latitudeDelta * 2,
            longitudeDelta: region.longitudeDelta * 2
        }

        setRegion(newRegion)
        mapView.current.animateToRegion(newRegion, 200)
    }

    

    const carIcon = () => (
        <Marker
            coordinate={fromLocation}
            anchor={{ x: 0.5, y: 0.5 }}
            flat={true}
            rotation={angle}
        >
            <Image 
                source={icons.car}
                style={{
                    width: 40,
                    height: 40,
                }}
            />
        </Marker>
    )



    return (
        <View style={styles.container}>
            <MapView 
                ref={mapView}
                style={styles.map} 
                initialRegion={region}
                >
                    <MapViewDirections 
                        origin={fromLocation}
                        destination={toLocation}
                        apikey={GOOGLE_API_KEY}
                        strokeWidth={5}
                        strokeColor={COLORS.primary}
                        optimizeWaypoints={true} 
                        onReady={ result => {
                            setDuration(result.duration)

                            if (!isReady) {
                                mapView.current.fitToCoordinates(result.cordinates, {
                                    edgePadding: {
                                        right: (SIZES.width / 20),
                                        bottom: (SIZES.height / 4),
                                        left: (SIZES.width / 20),
                                        top: (SIZES.height / 8),
                                    }
                                })
                                let nextLoc = {
                                    latitude: result.coordinates[0]["latitude"],
                                    longitude: result.coordinates[0]["longitude"],
                                }

                                if(result.coordinates.length >= 2) {
                                    let angle = calculateAngle(result.coordinates)

                                    setAngle(angle)
                                }

                                setFromLocation(nextLoc)
                                setIsReady(true)
                            }
                        } }
                    />
                    <DestinationMarker toLocation={toLocation} />
                    {carIcon()}
            </MapView>
                    <DirectionHeader 
                        streetName={streetName} 
                        duration={duration} 
                    />
                    <DeliveryInfo 
                        restaurant={restaurant} 
                        navigation={navigation}
                        />
                    <MapButtons zoomIn={zoomIn} zoomOut={zoomOut} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });

export default OrderDelivery