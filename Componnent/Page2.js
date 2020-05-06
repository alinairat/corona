import React from 'react'
import { View ,Text,ImageBackground} from 'react-native'

export default class Page2 extends React.Component {

    render (){

        return (
            <>
            <View style={{flex:1}}> 
            <ImageBackground source={require('../assist/cornoa1.png')} style={{  flex: 1,   resizeMode: "cover",  justifyContent: "center"}}>

            <View style={{justifyContent:'center',flex:1,marginBottom:80,alignContent:'center',marginRight:80,border:1}}>

                    <Text style={{marginHorizontal:10,fontSize:20,fontWeight: "bold",marginVertical:5}}>
                    اعراض الاصابة ؟

                    </Text>
                    <Text style={{marginHorizontal:10,fontSize:15,fontWeight: "bold",marginVertical:5}}>
                    1- حمى
                    </Text>
                    <Text style={{marginHorizontal:10,fontSize:15,fontWeight: "bold",marginVertical:5}}>
                    2- السعال
                    </Text>
                    <Text style={{marginHorizontal:10,fontSize:20,fontWeight: "bold",marginVertical:5}}>
                    3- فشل كلوي .
                    </Text>
                    <Text style={{marginHorizontal:10,fontSize:15,fontWeight: "bold",marginVertical:5}}>
                    4- ضيق التنفس.
                    </Text>
                    <Text style={{marginHorizontal:10,fontSize:20,fontWeight: "bold",marginVertical:5}}>
                    5- الالتهاب الرئوي.
                    </Text>
            </View>
            </ImageBackground>

            </View>
            </>
        )
    }
}