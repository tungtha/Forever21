import React from 'react'
import { View, Text,ScrollView, StyleSheet, Image, SafeAreaView, FlatList, TouchableOpacity, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
]


export default function Bag() {

    const renderItem = ({ item }) => (
        <ScrollView style={{ flex: 1, marginLeft: 25,}}>
            <Text style={{fontSize: 18 }}>WESC Lets Get Weird Graphic Tee</Text>
            <View style={{marginTop: 12, marginLeft: 25, flexDirection: 'row'}}>
                <View>
                    <Image
                        style={{ height: 180, width: 130 }}
                        source={{
                            uri: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/ymb1amxwudbl4v9paf8m/sportswear-t-shirt-zmMkxS.png'
                        }}
                    />
                    <TouchableOpacity style={{
                        justifyContent: 'center', alignItems: 'center', marginTop:10,
                        backgroundColor: '#EEEEEE', height: 30, width: 130, borderWidth: 0.3
                    }}>
                        <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Move to wishlist</Text>
                    </TouchableOpacity>
                </View>
                <View style={{  justifyContent: 'center', marginBottom: 130, marginLeft: 30}}>
                    <Text style={{fontSize: 25}}> $39.99</Text>
                    <View style={{ flexDirection: 'row',marginLeft: 10, marginTop: 10 }}>
                        <Text style={{ fontSize: 16  }}>SKU#:</Text>
                        <Text style={{ fontSize: 16, marginLeft: 5,  fontWeight:'bold' }}>012133213</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 5 }}>
                        <Text style={{ fontSize: 16 }}>Color:</Text>
                        <Text style={{ fontSize: 16, marginLeft: 5,  fontWeight: 'bold' }}>WHITE/MULTI</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 5  }}>
                        <Text style={{ fontSize: 16 }}>Size</Text>
                        <Text style={{ fontSize: 16, marginLeft: 5, fontWeight: 'bold' }}>XL</Text>
                    </View>
                    <View style={{flexDirection: 'row', marginRight: 10, marginTop: 10}}>
                        <View style={{
                            alignItems:'center',
                            borderWidth: 1, height: 35, width: 35, borderRadius: 50 / 2, justifyContent: 'center'
                        }}>
                            <Icon name= "shopping-cart" size={20} />
                        </View>
                        <View style={{ marginTop: 5, paddingHorizontal: 20}}>
                            <Text style={{fontWeight: 'bold', fontSize: 17}}>Qty: 1</Text>
                        </View>
                        <TouchableOpacity style={{
                            alignItems: 'center', justifyContent: 'center',
                            borderWidth: 1, height: 35, width: 35, borderRadius: 50 / 2, justifyContent: 'center'
                        }}>
                            <Icon name="plus" size={20} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View >
                <Text style={{ fontSize: 16, margintop: 0, }}>* Have A Promo?</Text>
                <View style={{ flexDirection:'row',
                    height: 50, width: 370, borderWidth: 1
                }}>

                    <View style={{
                        margin : 10, marginLeft: 310,justifyContent:'center', alignItems:'center',
                        backgroundColor: '#EEEEEE', height: 25, width: 50, borderWidth: 0.3

                    }}>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Apply</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
            <View >
                <View style={{ marginTop: 42,
                    height: 145, width:370, borderWidth: 0.
                }}>
                    <View style={{ flexDirection:'row', marginTop: 15}}>
                        <Text style={{ marginLeft: 20, fontSize: 16 }}>Subtotal</Text>
                        <Text style={{ marginLeft: 220, fontSize: 16}}>$39.99</Text>
                    </View>
                    <TouchableOpacity style={{ height: 40, width: 370, 
                        backgroundColor: 'yellow', justifyContent: 'center', alignItems: 'center',}}>
                        <Text style={{fontSize: 17, fontWeight:'bold'}}>Checkout</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        height: 40, width: 370, marginTop: 7,
                        borderWidth: 0.5, borderColor:'black', justifyContent: 'center', alignItems: 'center',
                    }}>
                        <Text style={{ fontSize: 19, fontWeight: 'bold' }}>Pay</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ marginLeft: 20, fontSize: 16, fontWeight:'bold' }}>Estimated Total</Text>
                        <Text style={{ marginLeft: 165, fontSize: 16, fontWeight: 'bold' }}>$45.94</Text>
                    </View>

                </View>
            </View>    
        </ScrollView>
    )
    return (
        <SafeAreaView>
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderRightWidth: 1, marginTop: 10 }}>
                        <Text style={{ fontSize: 17 }}>Your Bag </Text>
                    </View>
                </View>
            </View>
            <FlatList
                style={{ marginTop: 20 }}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});
