import React from 'react';
import { connect } from 'react-redux';

import { setFilter } from '../../redux/actions/root';

import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import TabletMacIcon from '@material-ui/icons/TabletMac';

const sampleGet = async (pokemonName) => {
  let response = await fetch(urlBase + pokemonName);
  let parsedJson = await response.json();
  document.body.innerHTML = `<img alt="default front sprite for starmie" src=${parsedJson.sprites.front_default} >`;
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    width: '40px',
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    '&:disabled': {
      color: 'white',
    }
  },
  btn: {
    marginLeft: '3rem'
  },
  try: {
    marginLeft: '3rem',
    opacity: '.5',
    fontSize: 'rem',
    fontStyle: 'italic'
  }
}));

function Navbar({ pokemons, setFilter, filter, page }) {
  const classes = useStyles();

  let placeholder = pokemons.length < 1 
  
  let disabled = pokemons.length < 1;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <TabletMacIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link to="/">Pokédex</Link>
          </Typography>
          
            
          <>
              <Link to="/">
                <Button variant="contained" className={classes.btn}>BACK TO OVERVIEW</Button>
              </Link>
              <Typography variant="h6" className={classes.try}>Try navigating between pokemons</Typography>
            </> 
        </Toolbar>
      </AppBar>
    </div>
  );
};

function mapStateToProps(state) {
  return { 
    pokemons: state.mainReducer.pokemons,
  }
};

const Nav = connect(mapStateToProps, { setFilter })(Navbar);

export default Nav;