import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import page1 from '../Componnent/page1'
import Pic from '../Componnent/pic'
import Safe from '../Componnent/safe'
import Page2 from '../Componnent/Page2'
import myListItem from '../Componnent/myListItem'
import page3 from '../Componnent/page3'
export default navigator= ()=>{
const AppStack =createStackNavigator({
page1:{
    screen:page1
    ,
    navigationOptions: {
        headerShown: false,
      }
},

        Pic :{
            screen: Pic,
            navigationOptions: {
                headerShown: false,
              }
            },
        Safe:{
             screen:Safe,
             navigationOptions: {
                headerShown: false,
              }
            },
        Page2 :{
            screen:Page2,
            navigationOptions: {
                headerShown: false,
              }
        },
        page3 :{
            screen:page3,
            navigationOptions: {
                headerShown: false,
              }
        },
        myListItem:{
            screen:myListItem
        }
            
    },
    



{
    initialRouteName:'page1',
    headerLayoutPreset:"center"
}
,


)



const AppContainer = createAppContainer(AppStack)
    return(
        <AppContainer/>
    )

}