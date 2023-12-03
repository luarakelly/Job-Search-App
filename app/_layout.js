import {Stack} from 'expo-router';
import { useCallback } from 'react';
// to use costumazed fnts you have to have expo-font.
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'

//this makes the native splash screen ramain visible until hade Asinc is called
SplashScreen.preventAutoHideAsync();


const Layout = ()=>{
    // to implement constume fonts
    const[fontsLoaded] = useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
    })
    // similar to use effect and loads the app only after the fonts are available.
    const onLayoutRootView = useCallback(async () => {
        if(fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded])

    if(!fontsLoaded) return null;

    return <Stack onLayout={onLayoutRootView}/>
}
export default Layout;