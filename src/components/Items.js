import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

export default class Items extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <TouchableOpacity style={{ height:70, width:300,borderRadius:5}}>
                    <Image resizeMode='cover' 
                    source={this.props.image}
                    style={{
                        borderTopRightRadius:30,
                        height: 50,
                        width:60,
                    }}
                    />
                    <View style={{flexDirection:'row'}}>
                        <View>
                            <Text>{this.props.name}</Text>
                            <Text>{this.props.type}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
 
const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
})