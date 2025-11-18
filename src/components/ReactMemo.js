import React, { useRef, useState } from 'react'

const ReactMemo = () => {
    const inputRef = useRef(null);
    const [list, setList] = useState([]);
  return (
    <div>
        <h1>React.memo</h1>
        <input ref={inputRef} type="text" placeholder='type'/>
        <button onClick={() => {
            const value = inputRef.current.value
            setList(prev => ([...prev, value]))
            inputRef.current.value = '';
        }}>Add Skill</button>
        <ul>
            {list.map((skill, i) => <li key={`skill-${i}`}>{skill}</li>)}
        </ul>
    </div>
  )
}

export default React.memo(ReactMemo)