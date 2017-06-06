import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';
const t = require('tcomb-form-native/lib');

const Form = t.form.Form;

const Gender = t.enums({
  M: 'Male',
  F: 'Female'
});

// form model
const structure = t.struct({
  code: t.String,
});

// form options
const options = {
  auto: 'placeholders',
  fields: {
    code: {
      secureTextEntery: true,
    }
  }
}; 

export default class RegistrationStep1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
    };
    
    this.onSubmit = this.onSubmit.bind(this);
    this.onToggle = this.onToggle.bind(this);
  }
  
  onSubmit(e){
    var value = this.refs.form.getValue();
    if (value) {
      // validation
    }
  }
  
  onToggle(e) {
    this.setState({ isAgreed: !this.state.isAgreed })
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text>THIS IS 3rd STEP</Text>
        <Form
          ref="form"
          type={structure}
          options={options}
        />
        <Button
          onPress={this.onSubmit}
          title="Next"
          disabled={!this.state.isAgreed}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#e1e1e1',
  },
});

