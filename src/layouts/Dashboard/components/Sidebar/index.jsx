import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';

// Externals
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse
} from '@material-ui/core';

//Context
import CollapseContext from '../../../../context/collapse/collapseContext'

// Material icons
import {
  DashboardOutlined as DashboardIcon,
  PeopleOutlined as PeopleIcon,
  ShoppingBasketOutlined as ShoppingBasketIcon,
  TextFields as TextFieldsIcon, CameraAltRounded as Camera,
  SettingsOutlined as SettingsIcon, ExpandMore, ExpandLess, BarChart, ShowChart,
} from '@material-ui/icons';

// Component styles
import styles from './styles';

const Sidebar = props => {

  const collapseContext = useContext(CollapseContext);

  const { collapseIngredients,
    collapseStock,
    setCollapseIngredients,
    setCollapseStock, } = collapseContext

  const { classes, className } = props;

  const rootClassName = classNames(classes.root, className);

  return (
    <nav className={rootClassName}>
      <div className={classes.logoWrapper}>
        <Link
          className={classes.logoLink}
          to="/"
        >
          <img
            alt="Brainalytica logo"
            className={classes.logoImage}
            src="/images/logos/brainalytica_logo.svg"
          />
        </Link>
      </div>
      <Divider className={classes.logoDivider} />
      <List
        component="div"
        disablePadding
      >
        <ListItem
          activeClassName={classes.activeListItem}
          className={classes.listItem}
          component={NavLink}
          to="/dashboard"
        >
          <ListItemIcon className={classes.listItemIcon}>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.listItemText }}
            primary="Dashboard"
          />
        </ListItem>
        <ListItem
          button
          onClick={() => setCollapseIngredients()}
          activeClassName={classes.activeListItem}
          className={classes.listItem}
        >
          <ListItemIcon className={classes.listItemIcon}>
            <BarChart />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.listItemText }}
            primary="Bahan-bahan"
          />
          {collapseIngredients ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={collapseIngredients} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              activeClassName={classes.activeListItem}
              className={classes.nested}
              component={NavLink}
              to="/ingredient-raw"
            >
              <ListItemIcon className={classes.listItemIcon}>
                <ShowChart />
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.listItemText }}
                primary="Bahan Baku"
              />
            </ListItem>
            <ListItem
              activeClassName={classes.activeListItem}
              className={classes.nested}
              component={NavLink}
              to="/ingredient-package"
            >
              <ListItemIcon className={classes.listItemIcon}>
                <Camera />
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.listItemText }}
                primary="Bahan Pengemas"
              />
            </ListItem>
          </List>
        </Collapse>
        <ListItem
          button
          onClick={() => setCollapseStock()}
          activeClassName={classes.activeListItem}
          className={classes.listItem}
        >
          <ListItemIcon className={classes.listItemIcon}>
            <BarChart />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.listItemText }}
            primary="Stock"
          />
          {collapseStock ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={collapseStock} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              activeClassName={classes.activeListItem}
              className={classes.nested}
              component={NavLink}
              to="/stock-raw"
            >
              <ListItemIcon className={classes.listItemIcon}>
                <ShowChart />
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.listItemText }}
                primary="Stock Baku"
              />
            </ListItem>
            <ListItem
              activeClassName={classes.activeListItem}
              className={classes.nested}
              component={NavLink}
              to="/stock-package"
            >
              <ListItemIcon className={classes.listItemIcon}>
                <Camera />
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.listItemText }}
                primary="Stock Pengemas"
              />
            </ListItem>
          </List>
        </Collapse>
        <ListItem
          activeClassName={classes.activeListItem}
          className={classes.listItem}
          component={NavLink}
          to="/tolltrx"
        >
          <ListItemIcon className={classes.listItemIcon}>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.listItemText }}
            primary="Toll Transaction"
          />
        </ListItem>
        <ListItem
          activeClassName={classes.activeListItem}
          className={classes.listItem}
          component={NavLink}
          to="/camera"
        >
          <ListItemIcon className={classes.listItemIcon}>
            <ShoppingBasketIcon />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.listItemText }}
            primary="Camera"
          />
        </ListItem>
        <ListItem
          activeClassName={classes.activeListItem}
          className={classes.listItem}
          component={NavLink}
          to="/Maps"
        >
          <ListItemIcon className={classes.listItemIcon}>
            <TextFieldsIcon />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.listItemText }}
            primary="Maps"
          />
        </ListItem>
      </List>
      <Divider className={classes.listDivider} />
      <ListItem
        activeClassName={classes.activeListItem}
        className={classes.listItem}
        component={NavLink}
        to="/settings"
      >
        <ListItemIcon className={classes.listItemIcon}>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText
          classes={{ primary: classes.listItemText }}
          primary="Settings"
        />
      </ListItem>
    </nav>
  );
}

Sidebar.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Sidebar);
