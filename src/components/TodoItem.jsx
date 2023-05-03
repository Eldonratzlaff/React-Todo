const TodoItem = ({ itemProp, setTodos }) => {
     const handleChange = (id) => {
        setTodos((prevState) =>
        prevState.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        })
      );
       
    console.log('clicked', id);
  };
    return (
      <li>
        <input
          type="checkbox"
          checked={itemProp.completed}
         
          onChange={() => handleChange(itemProp.id)}
        />
        {itemProp.title}
      </li>
    );
  };
  export default TodoItem;