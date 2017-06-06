var t = require('tcomb-form-native');

const stylesheet = t.form.Form.stylesheet;

// overriding global styles for ALL forms t-comb
stylesheet.textbox.normal.borderWidth = 0;
stylesheet.textbox.error.borderWidth = 0;
stylesheet.textbox.normal.marginBottom = 0;
stylesheet.textbox.error.marginBottom = 0;
stylesheet.textbox.normal.flex = 1;
stylesheet.textbox.error.flex = 1;
stylesheet.textbox.normal.lineHeight = 35;
stylesheet.textbox.error.lineHeight = 35;
stylesheet.textbox.normal.textAlign = 'right';
stylesheet.textbox.error.textAlign = 'right';

stylesheet.pickerContainer.normal.borderWidth = 0;
stylesheet.pickerContainer.error.borderWidth = 0;
stylesheet.pickerContainer.normal.marginBottom = 0;
stylesheet.pickerContainer.error.marginBottom = 0;
stylesheet.pickerContainer.normal.borderRadius = 0;
stylesheet.pickerContainer.error.borderRadius = 0;
stylesheet.pickerContainer.normal.flex = 1;
stylesheet.pickerContainer.error.flex = 1;
stylesheet.pickerContainer.normal.paddingHorizontal = 5;
stylesheet.pickerContainer.error.paddingHorizontal = 5;

stylesheet.pickerValue.normal.textAlign = 'right';
stylesheet.pickerValue.error.textAlign = 'right';
stylesheet.pickerValue.normal.flex = 1;
stylesheet.pickerValue.error.flex = 1;
stylesheet.pickerValue.normal.paddingHorizontal = 5;
stylesheet.pickerValue.error.paddingHorizontal = 5;

//stylesheet.select.normal.height = 45;
//stylesheet.select.error.height = 45;
//stylesheet.select.normal.padding = 5;
//stylesheet.select.error.padding = 5;

stylesheet.textboxView.normal.borderWidth = 0;
stylesheet.textboxView.error.borderWidth = 0;
stylesheet.textboxView.normal.flex = 1;
stylesheet.textboxView.error.flex = 1;
stylesheet.textboxView.normal.borderRadius = 0;
stylesheet.textboxView.error.borderRadius = 0;
stylesheet.textboxView.normal.height = 45;
stylesheet.textboxView.error.height = 45;
stylesheet.textboxView.normal.padding = 5;
stylesheet.textboxView.error.padding = 5;

stylesheet.textbox.normal.marginBottom = 0;
stylesheet.textbox.error.marginBottom = 0;

stylesheet.formGroup.normal.flexDirection = 'row';
stylesheet.formGroup.error.flexDirection = 'row';
stylesheet.formGroup.normal.justifyContent = 'space-between';
stylesheet.formGroup.error.justifyContent = 'space-between';
stylesheet.formGroup.normal.borderWidth = 0;
stylesheet.formGroup.error.borderWidth = 0;
stylesheet.formGroup.normal.borderBottomWidth = 1;
stylesheet.formGroup.error.borderBottomWidth = 1;
stylesheet.formGroup.normal.borderColor = '#bcbdbe';
stylesheet.formGroup.error.borderColor = '#bcbdbe';
stylesheet.formGroup.normal.marginBottom = 0;
stylesheet.formGroup.error.marginBottom = 0;
stylesheet.formGroup.normal.marginLeft = 15;
stylesheet.formGroup.error.marginLeft = 15;

//stylesheet.controlLabel.normal.width = 125;
//stylesheet.controlLabel.error.width = 125;
stylesheet.controlLabel.normal.marginBottom = 0;
stylesheet.controlLabel.error.marginBottom = 0;
stylesheet.controlLabel.normal.lineHeight = 35;
stylesheet.controlLabel.error.lineHeight = 35;
stylesheet.controlLabel.normal.padding = 5;
stylesheet.controlLabel.error.padding = 5;
stylesheet.controlLabel.normal.paddingHorizontal = 0;
stylesheet.controlLabel.error.paddingHorizontal = 0;
stylesheet.controlLabel.normal.fontWeight = '100';
stylesheet.controlLabel.error.fontWeight = '100';

stylesheet.checkbox.normal.marginTop = 7;
stylesheet.checkbox.error.marginTop = 7;
stylesheet.checkbox.normal.marginBottom = 7;
stylesheet.checkbox.error.marginBottom = 7;
stylesheet.checkbox.normal.marginHorizontal = 10;
stylesheet.checkbox.error.marginHorizontal = 10;



export default t;
