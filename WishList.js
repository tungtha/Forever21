import React from 'react'
import { View, Text,TouchableOpacity, StyleSheet, Image, FlatList, SafeAreaView, ScrollView } from 'react-native'
const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
]
export default function WishList() {


    const renderItem = ({ item }) => (
        <SafeAreaView>
            <ScrollView style={{   marginLeft: 25 }}>
                <Text style={{ fontSize: 17, margin: 5 }}>Ribbed Notched Dress</Text>
                <View style={{ flexDirection: 'row' }} >
                    <Image
                        style={{ height: 200, width: 120, marginTop: 10 }}
                        source={{
                            uri: 'https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dwe1b8a4ef/2_side_750/00439445-01.jpg?sw=400&sh=600',
                        }}
                    />
                    <View style={{ justifyContent: 'center', marginBottom: 30, marginLeft: 50 }}>
                        <Text style={{ fontSize: 22 }}> $39.99</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 18 }}>SKU#:</Text>
                            <Text style={{ fontSize: 18, marginLeft: 5, fontWeight: 'bold' }}>012133213</Text>
                        </View>
                        <TouchableOpacity style={{
                            justifyContent: 'center', alignItems: 'center', marginTop: 20,
                            backgroundColor: '#EEEEEE', height: 30, width: 200, borderWidth: 0.3
                        }}>
                            <Text style={{ fontSize: 15 }}>Add to Cart</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            justifyContent: 'center', alignItems: 'center', marginTop: 20,
                            backgroundColor: '#EEEEEE', height: 30, width: 200, borderWidth: 0.3
                        }}>
                            <Text style={{ fontSize: 15, }}>Remove from Wishlist</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.lineStyle2} />
                <Text style={{ fontSize: 17, marginTop: 20 }}>Orange Beach Dress</Text>
                <View style={{ flexDirection: 'row' }} >
                    <Image
                        style={{ height: 200, width: 120, marginTop: 10 }}
                        source={{
                            uri: 'https://cf.shopee.vn/file/df2763bffca84e75cfad33075e9db09a_tn',
                        }}
                    />
                    <View style={{ justifyContent: 'center', marginBottom: 30, marginLeft: 50 }}>
                        <Text style={{ fontSize: 22 }}> $19.99</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 18 }}>SKU#:</Text>
                            <Text style={{ fontSize: 18, marginLeft: 5, fontWeight: 'bold' }}>015879455</Text>
                        </View>
                        <TouchableOpacity style={{
                            justifyContent: 'center', alignItems: 'center', marginTop: 20,
                            backgroundColor: '#EEEEEE', height: 30, width: 200, borderWidth: 0.3
                        }}>
                            <Text style={{ fontSize: 15 }}>Add to Cart</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            justifyContent: 'center', alignItems: 'center', marginTop: 20,
                            backgroundColor: '#EEEEEE', height: 30, width: 200, borderWidth: 0.3
                        }}>
                            <Text style={{ fontSize: 15, }}>Remove from Wishlist</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.lineStyle3} />
                <Text style={{ fontSize: 17, marginTop: 20 }}>Flower Long Dress</Text>
                <View style={{ flexDirection: 'row' }} >
                    <Image
                        style={{ height: 200, width: 120, marginTop: 10 }}
                        source={{
                            uri: 'https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw355699cc/3_back_750/00441393-03.jpg?sw=400&sh=600',
                        }}
                    />
                    <View style={{ justifyContent: 'center', marginBottom: 30, marginLeft: 50 }}>
                        <Text style={{ fontSize: 22 }}> $29.99</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 18 }}>SKU#:</Text>
                            <Text style={{ fontSize: 18, marginLeft: 5, fontWeight: 'bold' }}>014485455</Text>
                        </View>
                        <TouchableOpacity style={{
                            justifyContent: 'center', alignItems: 'center', marginTop: 20,
                            backgroundColor: '#EEEEEE', height: 30, width: 200, borderWidth: 0.3
                        }}>
                            <Text style={{ fontSize: 15 }}>Add to Cart</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            justifyContent: 'center', alignItems: 'center', marginTop: 20,
                            backgroundColor: '#EEEEEE', height: 30, width: 200, borderWidth: 0.3
                        }}>
                            <Text style={{ fontSize: 15, }}>Remove from Wishlist</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
    return (
        <SafeAreaView>
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderRightWidth: 1, marginTop: 10 }}>
                        <Text style={{ fontSize: 17 }}>Your wishlist </Text>
                    </View>
                </View>
                <View style={styles.lineStyle1} />
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
    lineStyle1: {
        borderWidth: 0.15,
        borderColor: 'black',
        marginTop: 15,

    },
    lineStyle2: {
        borderWidth: 0.15,
        borderColor: 'black',
        marginTop: 40,
    },
    lineStyle3: {
        borderWidth: 0.15,
        borderColor: 'black',
        marginTop: 40,
    },
})
