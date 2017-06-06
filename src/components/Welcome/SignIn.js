import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator, TouchableOpacity } from 'react-native';
import t from 'tcomb-form-native';
import _ from 'lodash';
import { forms } from './../../styles';


const Form = t.form.Form;

// form model
const structure = t.struct({
  identifier: t.String,
  password: t.String,
});

const stylesheet = _.cloneDeep(t.form.Form.stylesheet);

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
  },
  stylesheet: stylesheet
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
    paddingVertical: 10,
    paddingHorizontal: 1,
    marginBottom: 25,
    marginTop: 30
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    lineHeight: 37,
    alignSelf: 'center',
    fontFamily: 'Avenir',
    fontWeight: '100'
  },
  link: {
    alignSelf: 'center'
  },
  linkText: {
    color: '#bbe172',
    fontSize: 17
  }
});

stylesheet.textbox.normal.textAlign = 'left';
stylesheet.textbox.error.textAlign = 'left';
stylesheet.textbox.normal.paddingHorizontal = 0;
stylesheet.textbox.error.paddingHorizontal = 0;
stylesheet.textboxView.normal.padding = 0;
stylesheet.textboxView.error.padding = 0;
stylesheet.formGroup.normal.marginLeft = 0;
stylesheet.formGroup.error.marginLeft = 0;
