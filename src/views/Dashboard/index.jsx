import React, { useState, useCallback } from 'react';

// Externals
import PropTypes from 'prop-types';
import classNames from 'classnames';
import update from 'immutability-helper';

// Material helpers
import { withStyles } from '@material-ui/core';
import ItemTypes from '../../common/ItemTypes';

// Material components
import { Grid } from '@material-ui/core';

// Shared layouts
import { Dashboard as DashboardLayout } from 'layouts';

// Custom components
import { DragComponent, DropComponent } from './components';

// Shared components
import {
  Portlet,
} from 'components';

// Component styles
const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4
  },
  item: {
    height: '100%'
  }
});


const Dashboard = props => {
  const { classes } = props;

  const [dustbins, setDustbins] = useState([
    { accepts: [ItemTypes.COMPONENTS], lastDroppedItem: null },
    { accepts: [ItemTypes.COMPONENTS], lastDroppedItem: null },
    { accepts: [ItemTypes.COMPONENTS], lastDroppedItem: null },
    { accepts: [ItemTypes.COMPONENTS], lastDroppedItem: null },
    { accepts: [ItemTypes.COMPONENTS], lastDroppedItem: null },
    { accepts: [ItemTypes.COMPONENTS], lastDroppedItem: null },
    { accepts: [ItemTypes.COMPONENTS], lastDroppedItem: null },
    { accepts: [ItemTypes.COMPONENTS], lastDroppedItem: null },
    { accepts: [ItemTypes.COMPONENTS], lastDroppedItem: null }
  ]);

  const [droppedBoxNames, setDroppedBoxNames] = useState([]);
  function isDropped(boxName) {
    return droppedBoxNames.indexOf(boxName) > -1;
  }

  const [boxes] = useState([
    { name: 'Bottle', type: ItemTypes.COMPONENTS },
    { name: 'Banana', type: ItemTypes.COMPONENTS },
    { name: 'Magazine', type: ItemTypes.COMPONENTS }
  ]);

  const handleDrop = useCallback(
    (index, item) => {
      const { name } = item;
      setDroppedBoxNames(
        update(droppedBoxNames, name ? { $push: [name] } : { $push: [] })
      );
      setDustbins(
        update(dustbins, {
          [index]: {
            lastDroppedItem: {
              $set: item
            }
          }
        })
      );
    },
    [droppedBoxNames, dustbins]
  );

  const handleCancelDrop = useCallback(
    (index, item) => {
      let { name } = item;
      setDroppedBoxNames(
        update(droppedBoxNames, name ? { $unshift: [] } : { $unshift: [name] })
      );
      setDustbins(
        update(dustbins, {
          [index]: {
            lastDroppedItem: {
              $set: null
            }
          }
        })
      );
    },
    [droppedBoxNames, dustbins]
  );

  return (
    <DashboardLayout title="Dashboard">
      <div className={classes.root}>
        <Grid container spacing={4}>
          <Grid item lg={3} md={3} xl={3} xs={12}>
            <Portlet className={classNames(classes.root, classes.item)}>
              {boxes.map(({ name, type }, index) => (
                <DragComponent
                  name={name}
                  type={type}
                  isDropped={isDropped(name)}
                  key={index}
                />
              ))}
            </Portlet>
          </Grid>
          <Grid item lg={9} md={9} xl={9} xs={12}>
            <Portlet className={classNames(classes.root, classes.item)}>
              {dustbins.map(({ accepts, lastDroppedItem }, index) => (
                <DropComponent
                  accept={accepts}
                  lastDroppedItem={lastDroppedItem}
                  onDrop={item => handleDrop(index, item)}
                  key={index}
                  onCancel={item => handleCancelDrop(index, item)}
                />
              ))}
            </Portlet>
          </Grid>
        </Grid>
      </div>
    </DashboardLayout>
  );
};

Dashboard.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dashboard);
