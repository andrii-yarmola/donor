import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator } from 'react-native';
const t = require('tcomb-form-native');

const Form = t.form.Form;

// form model
const structure = t.struct({
  emailOrPhone: t.String,
  password: t.String,
});

// form options
const options = {
  auto: 'placeholders',
  fields: {
    emailOrPhone: {
      placeholder: 'email/phone',
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
      // validation
      console.log(value);
      this.clearForm();
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text>Sign in to existing account:</Text>
        { this.state.error && <Text> {this.state.error} </Text> }
        <Form
          ref="form"
          type={structure}
          options={options}
        />
        <Button
          onPress={this.onSubmit}
          title="Sign In"
        />
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
    paddingVertical: 30,
  },
});

