import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router-dom';
//import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

// const HomeIcon = <FontIcon className="material-icons" style={{fontSize:'20px'}}>主页</FontIcon>;
// const ProjectsIcon = <FontIcon className="material-icons" style={{fontSize:'20px'}}>项目</FontIcon>;
// const TeamIcon = <FontIcon className="material-icons" style={{fontSize:'20px'}}>团队</FontIcon>;
// const ContractIcon = <FontIcon className="material-icons" style={{fontSize:'20px'}}>联系我们</FontIcon>;
/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
class Navigation extends Component {
  state = {
    selectedIndex: 0,
  };
componentWillMount(){
  console.log(window.location);
  switch(window.location.pathname){
    case '/classify':this.setState({selectedIndex:1});break;
    case '/caption':this.setState({selectedIndex:1});break;
    case '/sketch':this.setState({selectedIndex:1});break;
    case '/project':this.setState({selectedIndex:1});break;
    case '/team':this.setState({selectedIndex:2});break;
    default : console.log(window.location.pathname);
  }

}
  select = (index) => this.setState({selectedIndex: index});

  render() {
    return (
      <Paper zDepth={0} style={{backgroundColor:'rgb(0, 188, 212)',height:'2em',width:'100%',position:'fixed'}}>

 <div style={{fontzFamily:'Roboto, sans-serif',fontSize:'24px',fontWeight:'300',color:'rgb(255,255,255)',paddingLeft:'24px'}}>DESCRIBE AND GUESS</div>
      </Paper>
    );
  }
}

export default Navigation;