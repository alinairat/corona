import React from 'react'
import { StyleSheet, Text, View, email,TextInput, Button, Alert, Picker, ScrollView, Image, TouchableOpacity } from 'react-native'


export default class MyListItem extends React.Component {


    render() {
        const {  navigation,LastUpdated,TotalCases,TotalRecovery,TotalActiveCases,TotalDeath,TotalTestedSamples } = this.props
        return (
            <TouchableOpacity onPress={() => navigation.navigate('Pic', {LastUpdated: LastUpdated})}>
                <View style={styles.container}>
                    <Text>TotalCases : {TotalCases}</Text>
                    <Text>TotalRecovery : {TotalRecovery}</Text>
                    <Text>TotalActiveCases:{TotalActiveCases} </Text>
                    <Text>TotalDeath:{TotalDeath} </Text>
                    <Text>TotalTestedSamples:{TotalTestedSamples} </Text>
                </View>
            </TouchableOpacity>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingHorizontal: 5,
        marginLeft: 15,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'black',
        marginVertical: 20,
        width: "95%"
    }
})