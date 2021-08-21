import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class ParentGuardian extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values, handleChange } = this.props;
        return (
            <div style={styles.everything}>
                <MuiThemeProvider>
                    <React.Fragment>
                        <div>
                            <h3 style={styles.h2}>
                                Section 2: Please Enter Your Parent/Guardian's Information
                            </h3>
                            <br />
                        </div>
                        {'\u00A0'} {'\u00A0'} {'\u00A0'}
                        <TextField
                            hintText='Course'
                            floatingLabelText='Course'
                            onChange={handleChange('course1')}
                            defaultValue={values.course1}
                        />
                        {'\u00A0'} {'\u00A0'} {'\u00A0'}
                        <TextField
                            hintText='Overall Result'
                            floatingLabelText='Overall Result'
                            onChange={handleChange('overallResult')}
                            defaultValue={values.overallResult}
                        />
                        {'\u00A0'} {'\u00A0'} {'\u00A0'}
                        <br />
                        {'\u00A0'} {'\u00A0'} {'\u00A0'}
                        <TextField
                            hintText='Course'
                            floatingLabelText='Course'
                            onChange={handleChange('course2')}
                            defaultValue={values.course2}
                        />
                        {'\u00A0'} {'\u00A0'} {'\u00A0'}
                        <TextField
                            hintText='Overall Result'
                            floatingLabelText='Overall Result'
                            onChange={handleChange('or2')}
                            defaultValue={values.or2}
                        />
                        {'\u00A0'} {'\u00A0'} {'\u00A0'}
                        <br />
                        {'\u00A0'} {'\u00A0'} {'\u00A0'}
                        <TextField
                            hintText='Course'
                            floatingLabelText='Course'
                            onChange={handleChange('course3')}
                            defaultValue={values.course3}
                        />
                        {'\u00A0'} {'\u00A0'} {'\u00A0'}
                        <TextField
                            hintText='Overall Result'
                            floatingLabelText='Overall Result'
                            onChange={handleChange('surName')}
                            defaultValue={values.otherNames}
                        />
                        <br />
                        {'\u00A0'} {'\u00A0'} {'\u00A0'}
                        <TextField
                            hintText='Course'
                            floatingLabelText='Course'
                            onChange={handleChange('course4')}
                            defaultValue={values.course4}
                        />
                        {'\u00A0'} {'\u00A0'} {'\u00A0'}
                        <TextField
                            hintText='Overall Result'
                            floatingLabelText='Overall Result'
                            onChange={handleChange('surName')}
                            defaultValue={values.surName}
                        />
                        <br />
                        {'\u00A0'} {'\u00A0'} {'\u00A0'}
                        <TextField
                            hintText='Course'
                            floatingLabelText='Course'
                            onChange={handleChange('course5')}
                            defaultValue={values.course5}
                        />
                        {'\u00A0'} {'\u00A0'} {'\u00A0'}
                        <TextField
                            hintText='Overall Result'
                            floatingLabelText='Overall Result'
                            onChange={handleChange('surName')}
                            defaultValue={values.otherNames}
                />
               
                        {'\u00A0'} {'\u00A0'} {'\u00A0'}
                        <div className='radio' style={styles.radio}>
                  <h4>Parent/Guardian's Gender</h4>
                  <br></br>
                            <input type='radio' value='Male' name='sex' /> Male
                            {'\u00A0'} {'\u00A0'} {'\u00A0'}
                            <input
                                type='radio'
                                value='Female'
                                name='gender'
                            />{' '}
                            Female {'\u00A0'} {'\u00A0'} {'\u00A0'}
                        </div>
                <br />
                
                        <RaisedButton
                            label='Back'
                            primary={false}
                            style={styles.button}
                            onClick={this.back}
                        />
                        <RaisedButton
                            label='Continue'
                            primary={true}
                            style={styles.button}
                            onClick={this.continue}
                        />
                    </React.Fragment>
                </MuiThemeProvider>
            </div>
        );
    }
}

const styles = {
    everything: {
        marginLeft: 100,
    },
    h2: {
        marginTop: 40,
    },
    button: {
        margin: 15,
    },

    radio: {
        margin: 15,
    },
    date: {
        margin: 15,
    },
};

export default ParentGuardian;
