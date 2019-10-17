import React from 'react';
import { withRouter } from 'react-router-dom';

// Externals
import PropTypes from 'prop-types';
import classNames from "classnames";
import compose from "recompose/compose";

// Internal

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import { Grid } from '@material-ui/core';

// Shared layouts
import { Dashboard as DashboardLayout } from '../../layouts/index';
import { Portlet } from '../../components/index';
// Custom components

// Component styles
const styles = theme => ({
    root: {
        padding: theme.spacing(4)
    },
    item: {
        height: "100%",
        width: "100%"
    }
});

const StockRaw = props => {
    const { classes } = props;

    return (
        <DashboardLayout title="Stock Raw">
            <div className={classes.root}>
                <Grid container spacing={4}>
                    <Grid item lg={12} md={12} xl={12} xs={12}>
                        <Portlet className={classNames(classes.item)}>
                            <Grid container justify="center" style={{ padding: '1.5rem' }}>
                            </Grid>
                        </Portlet>
                    </Grid>
                </Grid>
            </div>
        </DashboardLayout>
    );
};

StockRaw.propTypes = {
    className: PropTypes.string,
    classes: PropTypes.object.isRequired
};

export default compose(
    withRouter,
    withStyles(styles)
)(StockRaw);
