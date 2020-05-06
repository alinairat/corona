import React from 'react'
import {  View,Text, FlatList, ActivityIndicator } from 'react-native'
import MyListItem from '../Componnent/myListItem'

export default class Pic extends React.Component {

    state = {
        posts: [],
        loading:false
          }


    componentDidMount() {
          this.setState({loading:true})
        fetch('https://www.corona.ps/API/summary') 
        //   method: 'GET',
        //   headers: {
        //     Accept: 'application/json',
        //     'Content-Type': 'application/json'
        //   },
        // })
        //     .then(ret => ret.json())
        //     .then(data => {
        //         this.setState({ posts: data ,loading:false})
                
        //     })
        .then(result=>result.json())
        .then(data =>{
        this.setState({posts:data,loading:false})
        console.log(posts[1])
      
    })
    }

    

    userList = ({ item }) => (
        <MyListItem

            TotalCases={item.TotalCases}
            TotalRecovery={item.TotalRecovery}
            LastUpdated={item.LastUpdated}
            navigation = {this.props.navigation}
            TotalDeath={this.TotalDeath}
            TotalTestedSamples={this.TotalTestedSamples}
        />
    )

    render() {

        return (
          <>
          <ActivityIndicator size="large" color="red" animating={this.state.loading} />
            <FlatList

                data={posts}
                renderItem={item}
                keyExtractor={item => item.LastUpdated}
                numColumns={1}
                ListEmptyComponent={() => <View style={{alignItems:'center',paddingVertical:'50%'}}><Text style={{color:'red'}}>There Is No Post Now </Text></View>}
                initialNumToRender={4}
                inverted={false}
                
            />
            </>

               )

    }

}