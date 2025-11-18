import React from 'react'

const UseMemo = () => {
    const [todos, setTodos] = React.useState([]);
    const [count, setCount] = React.useState(0);

    const expensiveCalculation = React.useMemo(() => {
        let total = 0;
        for (let i = 0; i < 1000000000; i++){
            total += 1;
        }
        return total;
    },[])
  return (
    <div>
        <h1>React.useMemo</h1>
        <h2>My todos</h2>

        {todos.map((todo, i) => <p key={i}>{todo}</p>)}
        <button onClick={() => setTodos(prev => ([...prev, "New Todo"]))}>Add Todo</button>
        <hr/>
        <p>Count: {count} <button onClick={() => setCount(prev => prev+1)}>+</button></p>

        <h2>Expensive Calculation</h2>
        <p>{expensiveCalculation}</p>
        <hr/><br/><hr/>
    </div>
  )
}

export default UseMemo