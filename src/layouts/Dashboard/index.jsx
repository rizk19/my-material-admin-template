import React, { Fragment, useContext } from 'react';
import clsx from 'clsx';
// Externals
import classNames from 'classnames';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';

// Material helpers
import { withStyles, withWidth } from '@material-ui/core';

// Material components
import { Drawer } from '@material-ui/core';

// Custom components
import { Sidebar, Topbar, Footer } from './components';

//context
import OpenSidebarContext from '../../context/open-sidebar/openSidebarContext'

// Component styles
import styles from './styles';

const Dashboard = props => {
  const openSidebarContext = useContext(OpenSidebarContext);

  const { sidebarOpen,
    setOpenSidebar, } = openSidebarContext;

  const { classes, width, title, children } = props;
  const isMobile = ['xs', 'sm', 'md'].includes(width);

  const shiftTopbar = sidebarOpen && !isMobile;
  const shiftContent = sidebarOpen && !isMobile;

  return (
    <Fragment>
      <Topbar
        className={classNames(classes.topbar, {
          [classes.topbarShift]: shiftTopbar
        })}
        isSidebarOpen={sidebarOpen}
        onToggleSidebar={setOpenSidebar}
        title={title}
      />
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: sidebarOpen,
          [classes.drawerClose]: !sidebarOpen,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: sidebarOpen,
            [classes.drawerClose]: !sidebarOpen,
          }),
        }}
        open={sidebarOpen}
      >
        <Sidebar className={classes.sidebar} />
      </Drawer>
      <main
        className={classNames(classes.content, {
          [classes.contentShift]: shiftContent
        })}
      >
        {children}
        <Footer />
      </main>
    </Fragment>
  );
}

Dashboard.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  title: PropTypes.string,
  width: PropTypes.string.isRequired
};

export default compose(
  withStyles(styles),
  withWidth()
)(Dashboard);
