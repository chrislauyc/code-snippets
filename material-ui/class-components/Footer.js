import React from 'react';
import {
    Typography,withStyles,Link
} from '@material-ui/core';
import {theme} from '../theme/theme'; 
const styles = {
    footer: {
        backgroundColor: theme.palette.primary.light,
        padding: theme.spacing(1,0),
        position: 'fixed',
        left: '0',
        bottom:'0',
        width:'100%',
      },
    text:{
        color:'white'
    }
};
const CopyRight=(classes)=>{
    return(
        <Typography className={classes.text} variant='body2' align='center'>
            {'Copyright © '}
            <Link color='inherit' href='https://github.com/chrislauyc'>
                Chris Lau
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
class Footer extends React.Component{
    render(){
        const {classes} = this.props;
        return(
            <footer className={classes.footer}>
                {/* <Typography variant='h6' align='center' gutterBottom> */}
                {CopyRight(classes)}
            </footer>
        );
    }
}
export default withStyles(styles)(Footer);