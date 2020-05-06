import React from 'react'
import { View ,Text,ImageBackground} from 'react-native'

export default class page3 extends React.Component {

    render (){

        return (
            <>
            <View style={{flex:1}}> 
            <ImageBackground source={require('../assist/cornoa1.png')} style={{  flex: 1,   resizeMode: "cover",  justifyContent: "center"}}>

            <View style={{justifyContent:'center',flex:1,marginBottom:80,alignContent:'center',marginRight:80,border:1}}>

            <Text style={{fontSize:18,fontWeight: "bold",marginTop:15,alignSelf:'center'}}> للاستفسار عن المرض أو التبليغ عن اي الاشتباه بحالة </Text>
                <Text style={{fontSize:18,fontWeight: "bold",marginTop:15,alignSelf:'center'}}> الاتصال بالرقم المجاني التالي  </Text>
                <Text style={{fontSize:18,fontWeight: "bold",marginTop:15,alignSelf:'center'}}>1800-000-888</Text>
                <Text style={{fontSize:18,fontWeight: "bold",marginTop:15,alignSelf:'center'}}>مع أمنياتي بالشفاء للجميع </Text>

            </View>
            </ImageBackground>

            </View>
            </>
        )
    }
}