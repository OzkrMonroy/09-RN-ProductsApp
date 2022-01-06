import React, { useContext, useEffect } from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { StyleSheet, Text, View, ScrollView, TextInput, Button, Image } from 'react-native'
import { ProductsStackParams } from '../navigation/ProductsNavigator'
import { Picker } from '@react-native-picker/picker'
import { useCategories } from '../hooks/useCategories'
import { useForm } from '../hooks/useForm'
import { ProductsContext } from '../context/products/ProductsContext'

interface Props extends StackScreenProps<ProductsStackParams, 'ProductScreen'> { }

export const ProductScreen = ({ route, navigation }: Props) => {
  const { name, id } = route.params
  const { loadProductById, addProduct, updateProduct } = useContext(ProductsContext)

  const { categories } = useCategories()
  const { _id, categoryId, productName, img, onChange, setFormValue } = useForm({
    _id: id || '',
    categoryId: '',
    productName: name || '',
    img: ''
  })

  useEffect(() => {
    navigation.setOptions({
      headerTitle: productName || 'New Product'
    })
  }, [productName])

  useEffect(() => {
    loadProduct()
  }, [])

  const loadProduct = async () => {
    if (!id) return

    const product = await loadProductById(id)
    setFormValue({
      productName,
      _id,
      img: product.img || '',
      categoryId: product.categoria._id
    })
  }

  const saveOrUpdate = async () => {
    console.log(id);
    if (id) {
      updateProduct(categoryId, productName, _id)
    } else {
      const tempCategoryId = categoryId.length > 0 ? categoryId : categories[0]._id
      const productData = await addProduct(tempCategoryId, productName)
      onChange(productData._id, '_id')
    }
  }



  //TODO: Fix picker
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.label}>{name || 'Product name'}</Text>
        <TextInput
          placeholder='Product name'
          placeholderTextColor={'gray'}
          style={styles.textInput}
          value={productName}
          onChangeText={(value) => onChange(value, 'productName')}
        />
        <Picker
          selectedValue={categoryId}
          onValueChange={(itemValue) => onChange(itemValue, 'categoryId')}
        >
          {categories.map(category => (
            <Picker.Item label={category.nombre} value={category._id} key={category._id} />
          ))}
        </Picker>
        <Text style={styles.label}>Category</Text>

        <Button
          title='Save'
          onPress={saveOrUpdate}
          color={'#5856D6'}
        />

        {_id.length > 0 ? (
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
        ) : null}
        {img ? (
          <Image
            source={{ uri: img }}
            style={{ width: '100%', height: 300 }}
          />
        ) : null}
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
    marginTop: 15,
    marginBottom: 20,
  }
})