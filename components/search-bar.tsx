import {  TextInput, View } from 'react-native'
import React from 'react'
import { Search } from 'lucide-react'

interface Props {
    placeholder: string,
    onPress: () => void
}

export default function SearchBar({placeholder, onPress}: Props) {
  return (
    <View className='flex flex-row items-center bg-dark-100 rounded-full  px-5 py-4'>
          <Search className='text-accent'/>
          <TextInput
              onPress={onPress}
              onFocus={onPress}
              placeholder={placeholder}
              value=''
              onChangeText={() => { }}
              placeholderTextColor="#a8b5db"
              className='flex ml-2 text-white'
          />
    </View>
  )
}

