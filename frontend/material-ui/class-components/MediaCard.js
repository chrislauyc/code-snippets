import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    withStyles,
    Typography
} from '@material-ui/core';
const styles = {
    card:{
        height:'100%',
        display:'flex',
        flexDirection: 'column'
    },
    cardMedia:{
        // padding is needed to display the image
        paddingTop:'56.25%' //16:9
    }
};
class UserCard extends React.Component{
    constructor(){
        super();
        this.state = {
            userData:{},
          };
    }
    componentDidMount(){
        const {userName} = this.props;
        const {userData} = this.state;
        if(userName && Object.keys(userData).length===0){
            this.fetchData();
        }
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.userName!==this.props.userName){
            this.fetchData();
        }
    }
    fetchData=()=>{
        const {userName,setUserData} = this.props;
        axios.get(`https://api.github.com/users/${userName}`)
        .then((r)=>{
            this.setState({userData:r.data});
            if(setUserData){
                setUserData(r.data);
            }
        })
        .catch(e=>console.log({e}));
    }
    render(){
        const {avatar_url,name,location,login,html_url} = this.state.userData;
        const {classes} = this.props;
        return(
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia 
                        className={classes.cardMedia}
                        component={Link}
                        to={`/${login}`}
                        image={`${avatar_url}`}
                        title={'User Avatar'}
                    />
                    <CardContent>
                        <Typography variant='body1'>{name}</Typography>
                        <Typography variant='body1'>{location}</Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button component={Link} to={`/${login}`}  size='small' color='primary'>Followers</Button>
                    <Button href={html_url}  size='small' color='primary'>Profile</Button>
                </CardActions>
            </Card>
        );
    }
};
export default withStyles(styles)(UserCard);
