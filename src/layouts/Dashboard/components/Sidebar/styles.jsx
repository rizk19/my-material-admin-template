export default theme => ({
  root: {
    backgroundColor: theme.palette.common.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    paddingLeft: theme.spacing(0.2),
    // paddingRight: theme.spacing(1)
  },
  logoWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '63px',
    flexShrink: 0
  },
  logoLink: {
    fontSize: 0
  },
  logoImage: {
    cursor: 'pointer'
  },
  logoDivider: {
    marginBottom: theme.spacing(2)
  },
  profile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content'
  },
  avatar: {
    width: '70px',
    height: '70px'
  },
  nameText: {
    marginTop: theme.spacing(2)
  },
  bioText: {},
  profileDivider: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2)
  },
  listSubheader: {
    color: theme.palette.text.secondary
  },
  listItem: {
    cursor: 'pointer',
    marginLeft: '0px',
    '& $listItemText': {
      marginLeft: '4px'
    },
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
      borderLeft: `4px solid ${theme.palette.primary.main}`,
      '& $listItemIcon': {
        color: theme.palette.primary.main,
        marginLeft: '-4px'
      },
      '& $listItemText': {
        color: theme.palette.primary.main,
        marginLeft: '4px'
      },
    },
    '& + &': {
      marginTop: theme.spacing(0.4)
    }
  },
  activeListItem: {
    borderLeft: `4px solid ${theme.palette.primary.dark}`,
    backgroundColor: theme.palette.primary.light,
    marginLeft: '0px',
    '& $listItemText': {
      color: theme.palette.primary.dark,
      marginLeft: '4px'
    },
    '& $listItemIcon': {
      color: theme.palette.primary.dark,
      marginLeft: '-4px'
    }
  },
  listItemIcon: {
    marginRight: '4px'
  },
  listItemText: {
    fontWeight: 500,
    color: theme.palette.text.secondary
  },
  listDivider: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2)
  },
  nested: {
    cursor: 'pointer',
    '& $listItemText': {
      paddingLeft: theme.spacing(3),
      color: theme.palette.text.secondary,
      marginLeft: '-4px'
    },
    '&:hover': {
      backgroundColor: theme.palette.background.light,
      borderLeft: `4px solid ${theme.palette.primary.main}`,
      borderRadius: '4px',
      '& $listItemText': {
        color: theme.palette.primary.main
      },
      '& $listItemIcon': {
        color: theme.palette.primary.main,
        marginLeft: '-4px'
      }
    }
  },
});
