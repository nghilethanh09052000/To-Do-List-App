const Todo = ({text, todo, todos, setTodos}) => {
    return ( 
        <div className="todo">
            <li>{text}</li>
        </div>
     );
}
 
export default Todo;