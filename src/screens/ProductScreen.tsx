import React, { useEffect, useState } from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native'
import { ProductsStackParams } from '../navigation/ProductsNavigator'
import { Picker } from '@react-native-picker/picker'
import { useCategories } from '../hooks/useCategories'

interface Props extends StackScreenProps<ProductsStackParams, 'ProductScreen'> { }

export const ProductScreen = ({ route, navigation }: Props) => {
  const { name, id } = route.params
  const [selectedLanguage, setSelectedLanguage] = useState();
  const { categories } = useCategories()

  useEffect(() => {
    navigation.setOptions({
      headerTitle: name || 'New Product'
    })
  }, [])

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.label}>{name || 'Product name'}</Text>
        <TextInput
          placeholder='Product'
          placeholderTextColor={'gray'}
          style={styles.textInput}
        />
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }>
          {categories.map(category => (
            <Picker.Item label={category.nombre} value={category._id} key={category._id} />
          ))}
        </Picker>
        <Text style={styles.label}>Category</Text>

        <Button
          title='Save'
          onPress={() => { }}
          color={'#5856D6'}
        />

        <View style={styles.buttonContainer}>
          <Button
            title='Camera'
            onPress={() => { }}
            color={'#5856D6'}
          />
          <View style={{ width: 10 }} />
          <Button
            title='Gallery'
            onPress={() => { }}
            color={'#5856D6'}
          />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 20
  },
  label: {
    fontSize: 18,
    marginBottom: 5
  },
  textInput: {
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    borderColor: 'rgba(0,0,0,.2)',
    height: 45,
    marginBottom: 15
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15
  }
})