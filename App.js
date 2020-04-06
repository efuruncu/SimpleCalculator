

import React,{Component} from 'react'; //react kütüphanesinden React ve Component i kullanacağım.
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button
} from 'react-native';//react-native kütüphanesinden StyleSheet,View,Text i kullanacağım.


export default class App extends Component{
  constructor(props){ // bu app in dışardan alabileceği özellikler property /props
    super(props);
    this.state={
      input1:'',
      input2:'',
      result:0
    }
    this.sum= this.sum.bind(this);
    this.deduct= this.deduct.bind(this);
    this.mult= this.mult.bind(this);
    this.div= this.div.bind(this);
  }
sum()
{
  const number1=parseInt(this.state.input1);
  const number2=parseInt(this.state.input2);

  const result=number1 + number2;
  this.setState({
    result:result
  })
}
deduct()
{
  const number1=parseInt(this.state.input1);
  const number2=parseInt(this.state.input2);

  const result=number1 - number2;
  this.setState({
    result:result
  })
}
mult()
{
  const number1=parseInt(this.state.input1);
  const number2=parseInt(this.state.input2);

  const result=number1 * number2;
  this.setState({
    result:result
  })
}
div()
{
  const number1=parseInt(this.state.input1);
  const number2=parseInt(this.state.input2);

  const result=number1 / number2;
  this.setState({
    result:result
  })
}

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.header}>
           <Text style={styles.headerText}>Simple Calculator</Text>
        </View>
        <View style={styles.contentWrapper}>
          <TextInput style={styles.input}
          placeholder='First Number: '
          onChangeText={(text)=>{
            this.setState({
              input1:text
            });
          }}
          value={this.state.input1}
          />
          <View style={styles.buttonWrapper}>
          <Button onPress={this.sum}
                  color="#841584"
                  title='+'
                  />
          <Button onPress={this.deduct}
                  color="#841584"
                  title='-'
                  />
          <Button onPress={this.mult}
                  color="#841584"
                  title='*'
                  />
          <Button onPress={this.div}
                  color="#841584"
                  title='/'
                  />
          </View>
          <TextInput style={styles.input}
          placeholder='Second Number: '
          onChangeText={(text)=>{
            this.setState({
              input2:text
            });
          }}
          value={this.state.input2}
          />
          <Text style={styles.sampleText}>Result: {this.state.result}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column'
  },
  contentWrapper:{
    padding:20,
    flexDirection:'column',
    justifyContent:'center'
  },
  input:{
    height:40
  },
  buttonWrapper:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  sampleText:{
    height:30,
    fontSize:14
  },
  header: {
    height:80,
    paddingTop:30,
    shadowColor:'#000000',
    shadowOffset: { width:0, height:2 },
    shadowOpacity:0.3,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#F5FCFF'
    },
  headerText: {
   fontSize:20,
   textAlign:'center'
  }
});

