import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';

export class Success extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <h2>
                        You have succesfully applied for addmission into Equsat
                        University of science and technology. You will be
                        contacted for your offer of provisional admission when
                        you are admitted into our institution{' '}
                    </h2>

                    <br />

                    <Link to='/'>
                        <RaisedButton
                            label='Home'
                            primary={true}
                            style={styles.button}
                            // onClick={this.continue}
                        />
                    </Link>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

const styles = {
    button: {
        margin: 0,
    },
};
export default Success;
