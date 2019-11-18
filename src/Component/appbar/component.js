import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { BottomNavigation } from '@material-ui/core';

class AppBaru extends React.Component{
 
    render(){
        const {classes} = this.props;
        return(
            <div>
                <AppBar className={classes.title}>App Bar</AppBar>
                 <BottomNavigation> hello</BottomNavigation>
            </div>
        );
    }
}
 export default AppBaru;