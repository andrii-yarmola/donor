import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
const t = require('tcomb-form-native/lib');
import Icon from 'react-native-vector-icons/Ionicons';
import _ from 'lodash';
import { forms } from './../../styles';

const Form = t.form.Form;
const stylesheet = _.cloneDeep(t.form.Form.stylesheet);

// form model
const structure = t.struct({
  code: t.Number,
});

// form options
const options = {
  auto: 'placeholders',
  fields: {
    code: {
      secureTextEntry: true,
      placeholder: '••••••',
      maxLength: 6,
    }
  },
  stylesheet: stylesheet
}; 

export default class RegistrationStep1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
    };
    
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  onSubmit(e){
    var value = this.refs.form.getValue();
    if (value) {
      // validation
      this.props.saveValues(value);
    }
  }

  onResend(e){
    var value = this.refs.form.getValue();
    if (value) {
      // validation
    }
  }

  onEmailSend(e){
    var value = this.refs.form.getValue();
    if (value) {
      // validation
    }
  }
  
  render() {
    return (
       <View style={styles.container}>
        <ScrollView style={styles.content}>
          <Text style={styles.heading}>Verify code</Text>
          <Text style={styles.caption}>Enter 6 digits confirmation code sent to your mobile</Text>
          <TouchableOpacity
            onPress={this.onResend}
            style={styles.link}
          >
            <Icon name="ios-refresh" size={22} color="#b1e460" />
            <Text style={styles.linkText}> Resend </Text>
          </TouchableOpacity>
          <Form
            ref="form"
            type={structure}
            options={options}
            value={this.props.value}
            onChange={this.props.onChange}
          />
          <TouchableOpacity
            onPress={this.onEmailSend}
            style={styles.link}
          >
            <Text style={styles.linkText}> Send to my email </Text>
          </TouchableOpacity>
        </ScrollView>
        <TouchableOpacity
          onPress={this.onSubmit}
          style={styles.submit}
        >
          <Text style={styles.submitText}> Continue </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
    paddingTop: 15
  },
  content: {
    alignSelf: 'center',
  },
  link: {
    alignSelf: 'center',
    flexDirection: 'row',
    marginBottom: 40
  },
  linkText: {
    textAlign: 'center',
    color: '#b1e35f',
    fontSize: 17
  },
  heading: {
    fontSize: 32,
    lineHeight: 40,
    fontFamily: 'Avenir',
    fontWeight: '100',
    textAlign: 'center',
    paddingHorizontal: 5,
    marginBottom: 25,
  },
  caption: {
    fontSize: 17,
    maxWidth: 260,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  submit: {
    alignSelf: 'center',
    marginVertical: 25
  },
  submitText: {
    fontSize: 24,
    color: '#b1e35f',
    fontFamily: 'Avenir',
  }
});

stylesheet.textbox.normal.textAlign = 'center';
stylesheet.textbox.error.textAlign = 'center';
stylesheet.textbox.normal.fontSize = 36;
stylesheet.textbox.error.fontSize = 36;
stylesheet.textbox.normal.letterSpacing = 20;
stylesheet.textbox.error.letterSpacing = 20;
stylesheet.textbox.normal.paddingHorizontal = 0;
stylesheet.textbox.error.paddingHorizontal = 0;

stylesheet.textboxView.normal.padding = 0;
stylesheet.textboxView.error.padding = 0;
stylesheet.formGroup.normal.marginLeft = 0;
stylesheet.formGroup.error.marginLeft = 0;
stylesheet.formGroup.normal.marginBottom= 30;
stylesheet.formGroup.error.marginBottom = 30;

