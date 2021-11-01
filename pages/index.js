import React, { useEffect, useState } from 'react';
import { getSession } from 'next-auth/client';
import Nav from '../components/Nav';
import TodoInput from '../components/TodoInput';
import axios from 'axios';
import TodoItem from '../components/TodoItem';
import { toast } from 'react-toastify';

const Home = () => {
  const [todoList, setTodoList] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios("/api/todo");
        setTodoList(res.data);
        setLoading(false);
      } catch (err) {
        toast.error(err.response.data.msg, {
          theme: 'dark'
      })
      }
    }
    fetchData();
  }, [])

  return (
    <div>
      <Nav />

      <main>
        <TodoInput />
        <div>
          {
            todoList.map(item => (
              <TodoItem key={item._id} todo={item} />
            ))
          }
        </div>

        {loading && <h3>Loading...</h3>}
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false
      }
    }
  }

  return {
    props: {
      session
    }
  }
}

export default Home;
