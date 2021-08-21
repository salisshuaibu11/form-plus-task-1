import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

export class Upload extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    };
    render() {
        return (
            <div style={styles.everything}>
                <MuiThemeProvider>
                    <React.Fragment>
                        <div>
                            <br />
                            <br />
                            <br />
                            <h3>Please Upload all releveant documents</h3>
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
                            Upload recent passport photograph {'\u00A0'}{' '}
                            {'\u00A0'} {'\u00A0'}
                            <input
                                type='submit'
                                value='Upload Image'
                                name='submit'
                            />
                            {'\u00A0'} {'\u00A0'} {'\u00A0'}
                        </div>

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

export default Upload;
