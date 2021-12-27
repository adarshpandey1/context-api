import React, {useContext} from 'react'
import ListItem from './ListItem'
import {DataContext} from './DataProvider'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  list:{
      padding:'0px'
  }
   });

export default function List() {
    const classes = useStyles();
    const [todos, setTodos] = useContext(DataContext);

    const switchComplete = id =>{
        const newTodos = [...todos]
        newTodos.forEach((todo, index) =>{
            if(index === id){
                todo.complete = !todo.complete
            }
        })
        setTodos(newTodos)
    }

    const handleEditTodos = (editvalue, id) =>{
        const newTodos = [...todos]
        newTodos.forEach((todo, index) =>{
            if(index === id){
                todo.name = editvalue
            }
        })
        setTodos(newTodos)
    }

    return (
        <ul className={classes.list}>
            {
                todos.map((todo, index) => (
                    <ListItem todo={todo} key={index} id={index}
                    checkComplete={switchComplete} handleEditTodos={handleEditTodos} />
                ))
            }
        </ul>
    )
}