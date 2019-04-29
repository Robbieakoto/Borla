import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import Link from '@material-ui/core/Link';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);


const styles = theme => ({
  root: {
    width: '100%',
    alignItems:'right',
    marginRight:30,
    
  },
  
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
    
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  table: {
    maxWidth: 350,
    alignItems:'right',
    marginLeft:60,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  button: {
    margin: theme.spacing.unit,
    alignItems: 'center',
    marginLeft: 40,
  },
 input:{
   display:'none',
 },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
});
let id = 0;
function createData(name, calories, fat) {
  id += 1;
  return { id, name, calories, fat};
}
const rows = [
  createData('Frozen yoghurt', 159),
  createData('Ice cream sandwich', 237),
  createData('Eclair', 262),
];
const dudUrl = 'javascript:;';
function AutoGrid(props) {
  const { classes } = props;
}
function SearchAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
          </IconButton>
          <Typography className={classes.title} variant="h4" color="inherit" noWrap>
          Borla
          </Typography>
          
      <Typography  className={classes.button} variant="h6" color="inherit" noWrap>
      <Link href={dudUrl} color="inherit" className={classes.link}>
        {'Home'}
      </Link>
      </Typography>
      <Typography className={classes.button} variant="h6" color="inherit">
      <Link href={dudUrl} color="inherit" className={classes.link}>
        {'Contact'}
      </Link>
      </Typography>
      <Typography className={classes.button} variant="h6" color="inherit">
      <Link href={dudUrl} color="inherit" className={classes.link}>
        {'About'}
      </Link>
      </Typography>
       
          <div className={classes.grow} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
            </div>

            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>
        </Toolbar>
      
    <Paper className={classes.root}>
      
      <div className={classes.root}>
      
      <Grid container spacing={10}>
        <Grid item xs>
          <Table className={classes.table}>
        
        <TableHead>
          <TableRow>
            <CustomTableCell>Name of Town</CustomTableCell>
            <CustomTableCell align="right">No. Of Reports</CustomTableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow className={classes.row} key={row.id}>
              <CustomTableCell component="th" scope="row">
                {row.name}
              </CustomTableCell>
              <CustomTableCell align="right">{row.calories}</CustomTableCell>
               
            </TableRow>
          ))}
        </TableBody>
      </Table>
        </Grid>
        <Grid item xs>
        <Typography>Map overview</Typography>
        <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>Dessert (100g serving)</CustomTableCell>
            <CustomTableCell align="right">Calories</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow className={classes.row} key={row.id}>
              <CustomTableCell component="th" scope="row">
                {row.name}
              </CustomTableCell>
              <CustomTableCell align="right">{row.calories}</CustomTableCell>
               
            </TableRow>
          ))}
        </TableBody>
      </Table>
        </Grid>
        
      </Grid>
      
    </div>

    </Paper>
    
    
    <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
          </IconButton>
          <Typography className={classes.title} variant="h4" color="inherit" noWrap>
           Borla
          </Typography>
          </Toolbar>
      </AppBar>
    </div>
  );
}

SearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};
AutoGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(SearchAppBar);

