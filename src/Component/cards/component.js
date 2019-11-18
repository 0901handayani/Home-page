import React from 'react';
import Card from '@material-ui/core/Card';
import { Grid } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';


class Cardd extends React.Component{
    render(){
        const {classes} = this.props;
        return(
            <div className={classes.title}>
    <Card className={classes.card}>
      <Grid container spacing={4} style={{padding:55}}>
      <Grid item>
            <Avatar>icon</Avatar>
          </Grid>
        <Grid item xs={4}>Nomor Antrian 
        <br/> Tanggal</Grid>
        <Grid item xs={4}>Status:prosess</Grid>
        </Grid>
    </Card>
<br/>
    <Card className={classes.card}>
      <Grid container spacing={4} style={{padding:55}}>
      <Grid item>
            <Avatar>icon</Avatar>
          </Grid>
        <Grid item xs={4}>Nomor Antrian
        <br />Tanggal</Grid>
        <Grid item xs={4}>Status:Selesai</Grid>
        </Grid>
    </Card>

<br />
    <Card className={classes.card}>
      <Grid container spacing={4} style={{padding:55}}>
      <Grid item>
            <Avatar>icon</Avatar>
          </Grid>
        <Grid item xs={4}>Nomor Antrian
        <br />Tanggal</Grid>
        <Grid item xs={4}>Status:Batal</Grid>
        </Grid>
       
    </Card>


</div>
            );
        }
    }

    export default Cardd;