import React from 'react'
import GlobalNavigation from './src/GlobalNavigation'

export default function MyApp(props) {
  return (
      <GlobalNavigation
        startAsync={loadResourcesAsync}
      />
  )

  async function loadResourcesAsync() {
  	await Promise.all([
  		Font.loadAsync({
  			'JosefinSans-Light': require('./src/assets/fonts/JosefinSans-Light.ttf'),
  			'JosefinSans-Regular': require ('./src/assets/fonts/JosefinSans-Regular.ttf'),
  			'JosefinSans-SemiBold': require ('./src/assets/fonts/JosefinSans-SemiBold.ttf'),
  		})
  	]);
  }

}