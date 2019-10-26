import React, { Component } from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';

const styles = theme => ({
  root: {
    margin: '0 auto',
    width: '50%'
  },
  actionsContainer: {
    marginBottom: 5
  },
  resetContainer: {
    padding: 10
  }
});

const theme = createMuiTheme({
  overrides: {
    MuiStepIcon: {
      root: {
        '&$completed': {
          color: '#00acc1'
        },
        '&$active': {
          color: '#4dd0e1'
        }
      },
      active: {},
      completed: {}
    }
  }
});

class VerticalLinearStepper extends Component {
  state = {
    step: 0,
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    city: '',
    bio: ''
  };

  getSteps() {
    return [
      'Enter User Details',
      'Enter Personal Details',
      'Confirm User Data',
      'Success'
    ];
  }

  getStepContent(index) {
    const { firstName, lastName, email, occupation, city, bio } = this.state;
    const values = { firstName, lastName, email, occupation, city, bio };

    switch (index) {
      case 0:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 1:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 3:
        return <Success />;
      default:
        return <h1>Stepped out of bounds!</h1>;
    }
  }

  // Proceed to next step (w/ destructuring)
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to previous step (w/o destructuring)
  prevStep = () => {
    this.setState(currState => ({
      step: currState.step - 1
    }));
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { classes } = this.props;
    const { step } = this.state;
    const activeStep = step;
    const steps = this.getSteps();
    return (
      <div className={classes.root}>
        <ThemeProvider theme={theme}>
          <Stepper activeStep={activeStep} orientation='vertical'>
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  <Typography component={'span'}>
                    {this.getStepContent(index)}
                  </Typography>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {/* {activeStep === steps.length && (
                        <Paper square elevation={0} className={classes.resetContainer}>
                        <Typography>All steps completed - you&apos;re finished</Typography>
                        <Button onClick={handleReset} className={classes.button}>
                            Reset
                        </Button>
                        </Paper>
                    )} */}
        </ThemeProvider>
      </div>
    );
  }
}

VerticalLinearStepper.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(VerticalLinearStepper);
