import React from 'react';
import MuiAppBar from 'material-ui/AppBar';
function handleClick() {
  //alert('onClick triggered on the title component');
}
const styles = {
  title: {
    cursor: 'pointer',
  },
};

const AppBar = () => (
  <MuiAppBar
    title={<span style={styles.title}>Title</span>}
    onTitleClick={handleClick}
  />
);
// AppBar.propTypes = {
//     title: PropTypes.oneOfType([
//         PropTypes.string,
//         PropTypes.element
//     ]).isRequired,
//     //toggleSidebar: PropTypes.func.isRequired,
// };
export default AppBar;