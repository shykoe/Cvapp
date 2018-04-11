import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
//import ProjectCard from './components/ProjectCard';
import Navigation from './components/Navigation';
import Routes from './routes';
/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const styles = {
    wrapper: {
        // Avoid IE bug with Flexbox, see #467
        display: 'flex',
        flexDirection: 'column',
    },
    main: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    body: {
        backgroundColor: '#edecec',
        display: 'flex',
        flex: 1,
        overflowY: 'hidden',
        overflowX: 'scroll',
    },
    bodySmall: {
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        padding: '3em',
        display:'block',
        justifyContent: 'center',
        margin:'0 auto',
    },
    contentSmall: {
        flex: 1,
        paddingTop: '3em',
    },
    loader: {
        position: 'absolute',
        top: 0,
        right: 0,
        margin: 16,
        zIndex: 1200,
    },
};
class App extends Component {
  render() {
    console.log('asda')
    return (

      <div className="App">
        <MuiThemeProvider>
        <div style={styles.main}>
        <Navigation/>
          <div style={styles.content}>
          <Routes/>
          </div>
          </div>
          
        
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
