import { makeStyles,Box, Typography } from "@material-ui/core";
const useStyles=makeStyles({
    image:{
        background:`url(${'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg'}) center/55% repeat-x #000`,
        width:'100%',
        height:'50vh',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        '& :first-child':{
            fontSize:55,
            color:'white',
            lineHeight:2
        },
        '& :last-child':{
            fontSize:20,
            color:'black',
            background:"white"
        }

    }
})
const Banner= ()=>{
    const classes=useStyles();
    const url='https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg';
    return(
       <Box className={classes.image}>
           <Typography>BLOG</Typography>
           <Typography>BLOGBUSTER</Typography>

       </Box>
    

    )
}
export default Banner;