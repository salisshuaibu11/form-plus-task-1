import React, { Component } from 'react';
import PersonalDetails from './PersonalDetails';
import ParentGuardian from './ParentGuardian';
import IncomeFunding from './IncomeFunding';
import PersonalCommitment from './PersonalCommitment';
import Budget from './Budget';
import Endorser from './Endorser';
import Confirm from './Confirm';
import Success from './Success';

export class Application extends Component {
    state = {
        step: 1,
        surName: '',
        otherName: '',
        sex: '',
        dateOfBirth: '',
        
    };

    // Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1,
        });
    };

    // Go to previous step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1,
        });
    };

    //Handle fields change
    handleChange = (input) => (e) => {
        this.setState({ [input]: e.target.value });
    };

    render() {
        const { step } = this.state;

        const {
            surName,
            otherName,
            sex,
            dateOfBirth,
            
        } = this.state;

        const values = {
            surName,
            otherName,
            sex,
            dateOfBirth,
            
        };

        switch (step) {
            case 1:
                return (
                    <PersonalDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );

            case 2:
                return (
                    <ParentGuardian
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );

            case 3:
                return (
                    <IncomeFunding
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );

            case 4:
                return (
                    <PersonalCommitment
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );

            case 5:
                return (
                    <Budget
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );

            case 6:
                return (
                    <Endorser
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );

            case 7:
                return (
                    <Confirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );

            case 8:
                return <Success />;

            default:
                return (
                    <PersonalDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
        }
    }
}

export default Application;
