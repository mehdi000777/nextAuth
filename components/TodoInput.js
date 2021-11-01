import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const TodoInput = () => {
    const [todo, setTodo] = useState();

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await axios("api/todo", {
                method: "post",
                data: { todo }
            })

            toast.success(res.data.msg, {
                theme: 'dark'
            })
        } catch (err) {
            toast.error(err.response.data.msg, {
                theme: 'dark'
            })
        }

    }

    return (
        <div>
            <h2 className="text-center text-secondary my-4">
                Todo List
            </h2>

            <form className="input-group mb-5 shadow" onSubmit={submitHandler}>
                <input type="text" className="form-control" value={todo}
                    onChange={e => setTodo(e.target.value)} />

                <button type="submit" className="btn btn-dark">
                    Create
                </button>
            </form>
        </div>
    )
}

export default TodoInput
