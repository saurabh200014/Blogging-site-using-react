import { Button, makeStyles, Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import { categories } from "../../constants/data";
const useStyles=makeStyles({
    create:{
        margin:10,
        background:'DodgerBlue',
        color:'white',
        width:'86%'

    },
    table:{
        border:'1px solid rgba(224,224,224,1)'
    }
})
const Categories=()=>{
    const classes=useStyles();
    return(
       <>
       <Button variant="contained" className={classes.create}>
           CREATE BLOG
       </Button>
       <Table className={classes.table}>
           <TableHead>
               <TableRow>
                   <TableCell>
                       ALL CATEGORIES
                   </TableCell>
               </TableRow>
           </TableHead>
           <TableBody>
               {
                   categories.map(category=>(
                       <TableRow>
                           <TableCell>
                               {category}
                           </TableCell>
                       </TableRow>
                   ))
               }
           </TableBody>
       </Table>
       </>
    )
}
export default Categories;