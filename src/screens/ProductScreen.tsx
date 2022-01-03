import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { ProductsStackParams } from '../navigation/ProductsNavigator'

interface Props extends StackScreenProps<ProductsStackParams, 'ProductScreen'>{}

export const ProductScreen = ({ route, navigation }: Props) => {
  const { name, id } = route.params

  useEffect(() => {
    navigation.setOptions({
      headerTitle: name || 'Nuevo Producto'
    })
  }, [])

  return (
    <View>
      <Text>{name || 'Es un nuevo producto'}</Text>
    </View>
  )
}
