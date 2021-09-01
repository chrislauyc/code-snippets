import React from 'react';
import {
    AppBar,
    Toolbar,
    Tooltip,
    IconButton,
    Typography,
    withStyles,
} from '@material-ui/core';
import {withRouter} from 'react-router';
import GitHubIcon from '@material-ui/icons/GitHub';
import CodeIcon from '@material-ui/icons/Code';
import {theme} from '../theme/theme'; 
import {grey} from '@material-ui/core/colors'
const styles={
    icon: {
      marginRight: theme.spacing(2),
    },
    codeIcon:{
        marginLeft:theme.spacing(2),
        color:'white',
        backgroundColor:grey[800],
        '&:hover':{
            backgroundColor:grey[600]
        }
    },
    title:{
        flexGrow:1
    },
};
class Header extends React.Component{
    handleClickHome=()=>{
        this.props.history.push('/');
    }
    render(){
        const {classes} = this.props;
        const {handleClickHome} = this;
        return(
            <header>
                <AppBar position="relative" >
                    <Toolbar>
                        <GitHubIcon className={classes.icon} />
                            <Typography className={classes.title} onClick={handleClickHome} variant="h6" color="inherit" noWrap>
                                GitHub Cards
                            </Typography>
                            <Tooltip className={classes.codeIcon} title='Source Code'>
                                <IconButton href='https://github.com/chrislauyc/github-user-card'>
                                    <CodeIcon />
                                </IconButton>
                            </Tooltip>
                    </Toolbar>
                </AppBar>
            </header>
        );
    }
}
export default withStyles(styles)(withRouter(Header));