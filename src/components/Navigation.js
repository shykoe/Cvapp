import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router-dom';
//import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

const HomeIcon = <FontIcon className="material-icons" style={{fontSize:'20px'}}>主页</FontIcon>;
const ProjectsIcon = <FontIcon className="material-icons" style={{fontSize:'20px'}}>项目</FontIcon>;
const TeamIcon = <FontIcon className="material-icons" style={{fontSize:'20px'}}>团队</FontIcon>;
const ContractIcon = <FontIcon className="material-icons" style={{fontSize:'20px'}}>联系我们</FontIcon>;
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
    case '/project':this.setState({selectedIndex:1});break;
    case '/team':this.setState({selectedIndex:2});break;
    default : console.log(window.location.pathname);
  }

}
  select = (index) => this.setState({selectedIndex: index});

  render() {
    return (
      <Paper zDepth={0}>

        <BottomNavigation selectedIndex={this.state.selectedIndex}>
        
          <BottomNavigationItem
            
            icon={HomeIcon}
            onClick={() => this.select(0)}
            containerElement={<Link style={{textDecoration: 'none'}} to="/"/>}
          />
          <BottomNavigationItem
            icon={ProjectsIcon}
            onClick={() => this.select(1)}
            containerElement={<Link style={{textDecoration: 'none'}} to="/project"/>}
          />
          <BottomNavigationItem
            
            icon={TeamIcon}
            onClick={() => this.select(2)}
            containerElement={<Link style={{textDecoration: 'none'}} to="/team"/>}
          />
          <BottomNavigationItem
            
            icon={ContractIcon}
            onClick={() => this.select(3)}
            containerElement={<a style={{textDecoration: 'none'}} href="mailto:xiaoshan.yang@nlpr.ia.ac.cn"/>}
          />
          
        </BottomNavigation>
      </Paper>
    );
  }
}

export default Navigation;