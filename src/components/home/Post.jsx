import { Box, Typography,makeStyles } from "@material-ui/core";
const useStyles=makeStyles({
    container:{
        margin:10,
        height:320,
        borderRadius:10,
        border:'1px solid #d3cede',
        display:'flex',
        alignItems:'center',
        flexDirection:'column',
        // width:'20%'
        '&>*':{
            padding:'0 5px 5px 5px'
        }
    },
    image:{
        height:150,
        width:'100%',
        objectFit:'cover',
        borderRadius:'10px 10px 0 0'
    },
    text:{
        color:'#ff8080',
        fontSize:12
    },
    heading:{
        fontSize:20,
        fontWeight:500,
        color:'#8000ff'
    },
    detail:{
        fontSize:13,
        wordBreak:'break-word'
    }

});
const Post=()=>{
    const classes=useStyles();
    const url='https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80';
    return (
        <Box className={classes.container}>
            <img src={url} alt="wrapper" className={classes.image}/>
            <Typography className={classes.text}>MUSIC</Typography>
            <Typography className={classes.heading}> BLOGBUSTER</Typography>
            <Typography className={classes.text}>AUTHOR: SAURABH</Typography>
            <Typography className={classes.detail}>Hi from Aurangabad helooooooooooooooooooooooooooooo</Typography>
        </Box>

    )
}
export default Post;