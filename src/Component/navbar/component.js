import React from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Home';
import ListAltIcon from '@material-ui/icons/ListAlt';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';



class Navbar extends React.Component {
    render(){
     const {classes} = this.props;
    return(
       
        <BottomNavigation className={classes.navbar}>
            <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Favorites" icon={<ListAltIcon />} />
            <BottomNavigationAction label="Nearby" icon={<AccountCircleIcon />} />
        </BottomNavigation>
       
    )

    }

}
export default Navbar;