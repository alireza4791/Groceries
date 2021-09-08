import React from 'react';
import {View, 
    Text, 
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView} from 'react-native';
import Items from '../components/Items';

export default class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: 50
                }}
                >
                
                <View style={{flexDirection: 'row', padding:30, backgroundColor: '#CCCCCC'}}>
                    <TouchableOpacity>
                        <Text style={{fontSize:40, color: '#363636', textAlign: 'left'}}>Groceries</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row', padding:20}}>
                <ScrollView>
                    <Items name="apple" type="fruit" image={require('../images/apple.png')} />
                    <Items name="banana" type="fruit" image={require('../images/bananas.png')} />
                    <Items name="beaf" type="meat" image={require('../images/meat.png')} />
                    <Items name="spinach" type="vegetable" image={require('../images/spinach.png')} />
                    <Items name="tomato" type="vegetable" image={require('../images/tomatoes.png')} />
                </ScrollView>
                </View>
                </View>
            </View>
                
            
        )
    }
}


const styles = StyleSheet.create({
    container:{

        flex: 1,
    }
})

