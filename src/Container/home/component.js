import React from 'react'
import AppBaru from '../../Component/appbar';
import Cardd from '../../Component/cards';
import Navbar from '../../Component/navbar';
import {Container} from '@material-ui/core'


class Component extends React.Component {
    render(){
    // const {classes} = this.props;
    return(
        <div>
            <AppBaru />

        <Container maxWidth="sm">            
            <Cardd />
            </Container>
            <Navbar />

        </div>
    )

    }

}
export default Component;