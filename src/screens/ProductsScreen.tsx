import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext, useEffect, useState } from 'react'
import { FlatList, RefreshControl, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ProductsContext } from '../context/products/ProductsContext'
import { ProductsStackParams } from '../navigation/ProductsNavigator'

interface Props extends StackScreenProps<ProductsStackParams, 'ProductsScreen'> { }

export const ProductsScreen = ({ navigation }: Props) => {
  const { products, loadProducts } = useContext(ProductsContext)
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity 
          activeOpacity={.8} 
          onPress={() => navigation.navigate('ProductScreen', {})}
          style={{ marginRight: 10 }}
        >
          <Text style={{  color: '#000' }}>Agregar producto</Text>
        </TouchableOpacity>
      )
    })
  }, [])

  const onRefresh = async () => {
    setRefreshing(true);
    await loadProducts()
    setRefreshing(false)
  }

  return (
    <View style={{ flex: 1, marginHorizontal: 10 }}>
      <FlatList
        data={products}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity activeOpacity={.8} onPress={() => navigation.navigate('ProductScreen', { name: item.nombre, id: item._id })}>
            <Text style={styles.productName}>{item.nombre}</Text>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
        refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              progressViewOffset={10}
              progressBackgroundColor='white'
              colors={['green', 'red', 'orange']}
              style={{ backgroundColor: '#5856D6' }}
              tintColor='white'
              title='Refreshing...'
              titleColor='white'
            />
          }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  productName: {
    fontSize: 20,
    color: "#000"
  },
  itemSeparator: {
    borderBottomColor: 'rgba(0,0,0, .2)',
    borderBottomWidth: 1,
    marginVertical: 5
  }
})
