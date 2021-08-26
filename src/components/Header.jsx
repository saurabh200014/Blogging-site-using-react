import {AppBar,Toolbar,Typography,makeStyles} from '@material-ui/core';
const useStyles=makeStyles({
    component:{
        background:'white',
        color:'black'
    },
    container:{
        justifyContent:'center',
        '&>*':{
            padding:20
        }
    }

})
const Header=()=>{
    const Classes=useStyles();
    return (
        <AppBar className={Classes.component}>
            <Toolbar className={Classes.container}>
                <Typography>
                    HOME
                </Typography>
                <Typography>
                    CONTACT
                </Typography>
                <Typography>
                    ABOUT
                </Typography>
                <Typography>
                    LOGIN
                </Typography>
              
            </Toolbar>
        </AppBar>

    )
}
export default Header;