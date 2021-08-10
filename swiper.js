import React from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import Swiper from 'react-native-swiper'
import Icon from 'react-native-vector-icons/AntDesign'


var styles = {
    wrapper: {
        borderWidth: 1, borderColor: 'red'
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
}

export default function swiper() {

    const ratingCompleted = (val) => {
        // val = 2
    }
    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1 }}>
                <Swiper height={400} style={styles.wrapper} showsButtons loop={false} prevButton={<Text><Icon name="arrowleft" size={20} /></Text>} nextButton={<Text><Icon name="arrowright" size={20} /></Text>}>
                    <View testID="Hello" style={styles.slide1}>
                        <Text style={styles.text}>Hello Swiper</Text>
                    </View>
                    <View testID="Beautiful" style={styles.slide2}>
                        <Text style={styles.text}>Beautiful</Text>
                    </View>
                    <View testID="Simple" style={styles.slide3}>
                        <Text style={styles.text}>And simple</Text>
                    </View>
                </Swiper>


            </ScrollView>

            <TouchableOpacity style={{
                height: 50, backgroundColor: 'yellow',
                width: '100%',
                position: 'absolute', bottom: 10, left: 0
            }}>
                <Text>Add to cart</Text>
            </TouchableOpacity>
        </View>
    )
}