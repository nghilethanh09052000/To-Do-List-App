
const Todo = ({text, todo, todos, setTodos}) => {
    //event
    const deleteHandle = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))   //check the id of the clicked on
    }
    const completeHandler = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id){ //if clicked
                return {
                    ...item, completed: !item.completed 
                }
            }
                return item
                     
        }))
    }
    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ''}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandle} className="trash-btn">
                <i  className="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default Todo
