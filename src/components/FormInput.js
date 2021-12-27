import React, {useState, useContext, useRef, useEffect} from 'react'
import {DataContext} from './DataProvider'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme =>({
   form:{
       width:'100%',
       height:'40px',
       margin:'20px 0',
       display:'flex'
   },
   input:{
       flex:'3 1',
       outline:'none',
       border:'none',
       borderBottom:'1px solid #555',
       margin:'0 5px',
       [theme.breakpoints.down('sm')]: {
        
        
       },
   },
   button:{
    flex: '1 1',
    background: '#555',
    color: '#fff',
    letterSpacing: '2px',
    cursor: 'pointer'
   }
  }));

export default function FormInput() {
    const classes = useStyles();

    const [todos, setTodos] = useContext(DataContext);
    const [todoName, setTodoName] = useState('');
    const todoInput = useRef();

    const addTodo = e =>{
        e.preventDefault();
        setTodos([...todos, {name: todoName, complete: false}])
        setTodoName('');
        todoInput.current.focus();
    }

    useEffect(() =>{
        todoInput.current.focus();
    },[])

    return (
        <form className={classes.form}autoComplete="off" onSubmit={addTodo}>
            <input className={classes.input} type="text" name="todos" id="todos" ref={todoInput}
            required placeholder="What needs to be done?" value={todoName} 
            onChange={e => setTodoName(e.target.value.toLowerCase())} />

            <button className={classes.button} type="submit">Create</button>
        </form>
    )
}