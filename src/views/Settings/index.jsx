import React, { Component } from 'react';

// Externals
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import { Grid } from '@material-ui/core';

// Shared layouts
import { Dashboard as DashboardLayout } from 'layouts';

// Component styles
const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4
  }
});

class Settings extends Component {
  render() {
    const { classes } = this.props;

    return (
      <DashboardLayout title="Settings">
        <div className={classes.root}>
          <Grid
            container
            spacing={4}
          >
            <Grid
              item
              md={7}
              xs={12}
            >
              <h1>Setting</h1>
            </Grid>
            <Grid
              item
              md={5}
              xs={12}
            >
              
            </Grid>
          </Grid>
        </div>
      </DashboardLayout>
    );
  }
}

Settings.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Settings);
