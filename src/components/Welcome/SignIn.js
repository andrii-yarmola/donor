import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator, TouchableOpacity } from 'react-native';
const t = require('tcomb-form-native');

const Form = t.form.Form;

// form model
const structure = t.struct({
  identifier: t.String,
  password: t.String,
});

// form options
const options = {
  auto: 'placeholders',
  fields: {
    identifier: {
      placeholder: 'Email / Phone',
      keyboardType: 'email-address',
      error: 'Insert a valid email or phone'
    },
    password: {
      secureTextEntry: true,
    }
  }
}; 

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      error: false,
    };
    
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  clearForm() {
    this.setState({ value: null });
  }
  
  onSubmit(e){
    var value = this.refs.form.getValue();
    if (value) {
      console.log(this.props);
      // validation
      console.log(value);
      
      this.props.login(value).then(
        (res) => this.props.navigate('Dashboard'),
        (err) => console.log('my error', err)
      );
      
      this.clearForm();
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        { this.state.error && <Text> {this.state.error} </Text> }
        <Form
          ref="form"
          type={structure}
          options={options}
        />
        <TouchableOpacity
          onPress={this.onSubmit}
          style={styles.button}
        >
          <Text style={styles.buttonText}> Log In </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {}}
          style={styles.link}
        >
          <Text style={styles.linkText}> Recover lost account </Text>
        </TouchableOpacity>
        { this.state.isLoading && 
          <ActivityIndicator
            animating={this.state.isLoading}
            style={[styles.centering, {height: 80}]}
            size="large"
          />
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 45,
    paddingBottom: 30,
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  button: {
    borderRadius: 30,
    backgroundColor: '#bbe172',
    paddingVertical: 15,
    paddingHorizontal: 1,
    marginBottom: 25,
    marginTop: 30
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    lineHeight: 27,
    alignSelf: 'center',
  },
  link: {
    alignSelf: 'center'
  },
  linkText: {
    color: '#bbe172',
    fontSize: 17
  }
});

