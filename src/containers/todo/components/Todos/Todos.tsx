import React, { useState, useEffect } from 'react'
interface ITodos {
    id: number;
    text: string;
    createAt: Date;
    completed: boolean;

}
const Todos = () => {
    const [todos, setTodos] = useState<ITodos[]>([
        {
            id: 1,
            text: 'text 001',
            createAt: new Date(),
            completed: false
        }
    ])

    useEffect(() => {
        setTodos((state) => state.concat([
            {
                id: 1,
                text: 'text 002',
                createAt: new Date(),
                completed: false
            },
            {
                id: 1,
                text: 'text 003',
                createAt: new Date(),
                completed: false
            },
        ]))
    }, [])
        return (
            <>{todos?.map(({ id, text }) => (<div key={id}>{text}</div>))}</>
        )
}
  

export default Todos