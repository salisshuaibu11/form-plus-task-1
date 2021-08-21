import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class PersonalDetails extends Component {
    continue = (e) => {
        e.preventDefault();
        //process form
        this.props.nextStep();
    };

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const {
            values: {
                surName,
                otherName,
                // sex,
                // dateOfBirth,
                // nationality,
                // countryOfResidence,
                // contactAddress,
                // village,
                // subCounty,
                // county,
                // maritalStatus,
                // nameOfSpouse,
                // sponsor,
                // sponsorAddress,
                // phone1,
                // phone2,
                // sponsorEmail,
                // studentPhone,
                // studentEmail,
            },
        } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <List>
                        <ListItem
                            primaryText='Surname'
                            secondaryText={surName}
                        />

                        <ListItem
                            primaryText='Other Names'
                            secondaryText={otherName}
                        />
                    </List>
                    <br />

                    <RaisedButton
                        label='Back'
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                    />

                    <RaisedButton
                        label='Confirm & Continue'
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

const styles = {
    button: {
        margin: 15,
    },
};
export default PersonalDetails;
