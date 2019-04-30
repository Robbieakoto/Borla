import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';


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
  grid:{
    marginRight:70,
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
  card: {
    maxWidth: 345,
    marginLeft:52,
    width:'100%',
    
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
    
    
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
      paddingTop: theme.spacing.unit*5,
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
 heading:{
  paddingTop: theme.spacing.unit*5,
  textAlign: 'center',
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
      <Link href="/Borla" color="inherit" className={classes.link}>
        {'Data Analysis'}
      </Link>
      </Typography>
      <Typography className={classes.button} variant="h6" color="inherit">
      
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
      <Typography className={classes.heading} variant="h6">A Data Visualization Platform For Ghana Waste Management</Typography>
      
      
      
      <Grid container className={classes.grid} spacing={24}>
      
        <Grid item xs={24}>
        <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          className={classes.media}
          height="140"
          image="https://thumbs.gfycat.com/LankySlushyApe-size_restricted.gif"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
      </Card>

        </Grid>
        <Grid item xs>
        
        <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          className={classes.media}
          height="140"
          image="https://thumbs.gfycat.com/HonoredFrailKrill-size_restricted.gif"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
      </Card>
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