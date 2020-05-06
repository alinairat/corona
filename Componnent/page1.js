import React from 'react'
import { View,Text ,TouchableOpacity,Image,Button, ImageBackground} from 'react-native'


export default class page1 extends React.Component {

    render() {
       
        const { navigation } = this.props

        return(
            <>
                <View style={{flex:0.9}}> 
                <ImageBackground source={require('../assist/cornoa1.png')} style={{  flex: 1,   resizeMode: "cover",  justifyContent: "center"}}>

                    <View style={{marginTop:20,marginLeft:10}}>
                    {/* <Image source={require('../assist/corona.jpg')} style={{width:60,height:60,borderRadius:30}} /> */}
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'center',marginTop:90}}>
                    <TouchableOpacity  onPress={()=> navigation.navigate('Safe')} >
                        <Text style={{fontSize:18,fontWeight: "bold"}}>طرق الوقاية</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft:20}} onPress={() => navigation.navigate('Page2')} >
                        <Text style={{fontSize:18,fontWeight: "bold"}}> أعراض المرض</Text>
                    </TouchableOpacity>  
                      </View>
                    <View style={{flexDirection:'row',justifyContent:'center',marginTop:40}}>
                    <TouchableOpacity  onPress={() => navigation.navigate('page3')}>
                        <Text style={{fontSize:18,fontWeight: "bold"}}>للتبليع عن إصابة </Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={{marginLeft:20}}>
                        <Text style={{fontSize:18,fontWeight: "bold"}} onPress={() => navigation.navigate('Pic')}> الاصابات   </Text>
                    </TouchableOpacity>   */}
                    </View>
                    </ImageBackground>
                </View>
               
                <View style={{flex:0.1,alignItems:'center'}}>
                     <Text style={{color:'Black' , fontFamily:'Cochin',fontWeight: "bold"}}>أوس أحمد عبدالله انعيرات</Text>
                     <Text style={{color:'Black' , fontFamily:'Cochin',fontWeight: "bold"}}>مدرسة ذكور ميثلون الاساسية الثانية</Text>
                </View>
                </>
                
            
        )
    }

}