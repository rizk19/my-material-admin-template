import React, { Component } from 'react';

// Externals
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import { Grid } from '@material-ui/core';

// Shared layouts
import { Dashboard as DashboardLayout } from 'layouts';

// Custom components
import {
  DragComponent,
  DropComponent
} from './components';

// Component styles
const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4
  },
  item: {
    height: '110%'
  }
});

class Camera extends Component {
  render() {
    const { classes } = this.props;

    return (
      <DashboardLayout title="Camera">
        <div className={classes.root}>
          <Grid container spacing={4} >
            <Grid item lg={5} >
              <DragComponent className={classes.item} />
            </Grid>
            <Grid item lg={7}>
              <DropComponent className={classes.item} />
            </Grid>
          </Grid>
        </div>
      </DashboardLayout>
    );
  }
}

Camera.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Camera);
