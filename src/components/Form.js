
const Form = ({inputText,setInputText,todos,setTodos,setStatus}) => {

    const inputTextHandler =(e) =>{
        setInputText(e.target.value)
    }

    const submitTodoHandler =(e) =>{
        e.preventDefault();
        setTodos([
            ...todos,
            {
                text:inputText,
                completed:false,
                id:Math.random()*1000
            }
                ])
        setInputText("");
    }

    const statusHandler =(e) =>{
        setStatus(e.target.value)
    }
    return ( 
        <div className="create">
        <form>
            <input type="text"
                    required
                    value={inputText}
                    onChange={inputTextHandler}
              />
             <button
                onClick={submitTodoHandler}
                type="submit"
             >
             Add todo
             </button>
             <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>

             </div>
     
        </form>
        </div>
      
     );
}
 
export default Form;