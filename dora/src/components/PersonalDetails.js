import 'date-fns';
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


import 'react-datepicker/dist/react-datepicker.css';


export class PersonalDetails extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const { values, handleChange } = this.props;
        return (
            <div style={styles.everything}>
                <MuiThemeProvider>
                    <React.Fragment>
                        <div>
                            <h3 style={styles.h2}>
                                Section 1: Please Enter Your Personal Details
                                correctly
                            </h3>
                        </div>
                        {'\u00A0'} {'\u00A0'} {'\u00A0'}
                        <TextField
                            hintText='Please Enter Your Surname'
                            floatingLabelText='Surname'
                            onChange={handleChange('surName')}
                            defaultValue={values.surName}
                        />
                        {'\u00A0'} {'\u00A0'} {'\u00A0'}
                        {'\u00A0'} {'\u00A0'} {'\u00A0'}
                        <TextField
                            hintText='Please Enter Your First Name'
                            floatingLabelText='First Name'
                            onChange={handleChange('firstName')}
                            defaultValue={values.firstName}
                        />
                        <br />
                        <br />
                        <br />
                        {'\u00A0'} {'\u00A0'} {'\u00A0'}
                        Date of Birth
                        {'\u00A0'} {'\u00A0'} {'\u00A0'}
                        <input type='date' />
                        <br />
                        <div className='radio' style={styles.radio}>
                            <h4>Gender</h4>
                            <br />
                            <input
                                type='radio'
                                value='Single'
                                name='Marital Staus'
                            />{' '}
                            Male
                            {'\u00A0'} {'\u00A0'} {'\u00A0'}
                            <input
                                type='radio'
                                value='Married'
                                name='Marital Staus'
                            />{' '}
                            Female
                            {'\u00A0'} {'\u00A0'} {'\u00A0'}
                            
                        </div>
                        
                       
                        {'\u00A0'} {'\u00A0'} {'\u00A0'}
                        {'\u00A0'} {'\u00A0'} {'\u00A0'}
                        
                        {'\u00A0'} {'\u00A0'} {'\u00A0'}
                        <div className='radio' style={styles.radio}>
                            <h4>Marital status</h4>
                            <br />
                            <input
                                type='radio'
                                value='Single'
                                name='Marital Staus'
                            />{' '}
                            Single
                            {'\u00A0'} {'\u00A0'} {'\u00A0'}
                            <input
                                type='radio'
                                value='Married'
                                name='Marital Staus'
                            />{' '}
                            Married {'\u00A0'} {'\u00A0'} {'\u00A0'}
                            <input
                                type='radio'
                                value='Divored'
                                name='Marital Staus'
                            />{' '}
                            Divorced
                        </div>
                        <br />
                        <br />
                        <h3>Please Upload all releveant documents</h3>
                        <br />
                        <br />
                        Document 1{' '}
                        <input
                            type='file'
                            name='fileToUpload'
                            id='fileToUpload'
                        />
                        <br />
                        <br />
                        Document 1{' '}
                        <input
                            type='file'
                            name='fileToUpload'
                            id='fileToUpload'
                        />
                        <br />
                        <br />
                        Upload recent passport photograph {'\u00A0'} {'\u00A0'}{' '}
                        {'\u00A0'}
                        <input
                            type='submit'
                            value='Upload Image'
                            name='submit'
                        />
                        {'\u00A0'} {'\u00A0'} {'\u00A0'}
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
export default PersonalDetails;
