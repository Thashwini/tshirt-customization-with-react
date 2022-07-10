import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  tabs: {
    alignItems: 'center',
    background: 'white',
    width: '74px',
    justifyContent: 'center',
  },
  activeTabs: {
    background: 'white',
    width: '74px',
  },
  barFont: {
    fontSize: '10px',
  },
  activeContent: {
    display: 'block',
  },
  barContainer: {
    display: 'flex',
    height: '308px',
    width: '300px',
    marginLeft: '20px',
  },
  barBox: {
    background: '#e5f3f8',
    padding: '10px',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '268px',
    margin: '20px 0px',
  },
  bar: {
    background: 'black',
    padding: '4px',
    marginLeft: '5px',
    justifyContent: 'space-between',
    marginTop: '20px',
  },
}));

export default useStyles;
