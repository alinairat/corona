import React from 'react'
import { View,Text ,TouchableOpacity,Image,Button,ImageBackground} from 'react-native'


export default class Safe extends React.Component  {

    render (){
        return(
            <View style={{flex:1}}>
         <ImageBackground source={require('../assist/cornoa1.png')} style={{  flex: 1,   resizeMode: "cover",  justifyContent: "center"}}>

            <View style={{justifyContent:'center',flex:1,alignItems:'center'}}>
                    <Text style={{marginHorizontal:10,fontSize:25,fontWeight: "bold",marginVertical:5}}>
                    غسل اليدين بالماء والصابون بانتطام
                    </Text>
                    <Text style={{marginHorizontal:14,fontSize:23,fontWeight: "bold",marginVertical:5,color:'red'}}>
                    تغطية الفم او الانف عند السعال والعطس
                    </Text>
                    <Text style={{marginHorizontal:10,fontSize:20,fontWeight: "bold",marginVertical:5}}>
                    تجنب الاتصال المباشر مع اي شخص تطهر عليه اعراض مرض
                     الجهاز التنفسي مثل السعال والعطس
                    </Text>
                    <Text style={{marginHorizontal:10,fontSize:25,fontWeight: "bold",marginVertical:5,color:'red'}}>
                    طهي اللحوم والبيض جيدا
                    </Text>
                    <Text style={{marginHorizontal:10,fontSize:20,fontWeight: "bold",marginVertical:5}}>
                    تجنب ملامسة الحيوانات في السوق
                    </Text>
                    <Text style={{marginHorizontal:10,fontSize:25,fontWeight: "bold",marginVertical:5,color:'red'}}>
                    تجنب العناق او تقبيل الاخرين
                    </Text>
                   
            </View>
            </ImageBackground>
            </View>
        )
    }

}