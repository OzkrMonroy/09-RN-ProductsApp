import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext, useEffect } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ProductsContext } from '../context/products/ProductsContext'
import { ProductsStackParams } from '../navigation/ProductsNavigator'

interface Props extends StackScreenProps<ProductsStackParams, 'ProductsScreen'> { }

export const ProductsScreen = ({ navigation }: Props) => {
  const { products } = useContext(ProductsContext)

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity 
          activeOpacity={.8} 
          onPress={() => navigation.navigate('ProductScreen', {})}
          style={{ marginRight: 10 }}
        >
          <Text>Agregar producto</Text>
        </TouchableOpacity>
      )
    })
  }, [])

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
      />
    </View>
  )
}

const styles = StyleSheet.create({
  productName: {
    fontSize: 20
  },
  itemSeparator: {
    borderBottomColor: 'rgba(0,0,0, .3)',
    borderBottomWidth: 2,
    marginVertical: 5
  }
})
