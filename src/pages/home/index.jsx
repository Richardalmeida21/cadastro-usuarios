import { useState } from 'react'
import './style.css'
import Trash from '../../assets/trash.svg'

function Home() {
  const [count, setCount] = useState(0)

  const users = [{

    id: "234hbjwewdf23",
    name: "João",
    age: 23,
    email: "rod@email.com"
  },
  {
    id: "234hbjwewdf25",
    name: "Gabi",
    age: 33,
    email: "gab@email.com"
  }]

  return (

    <div className="container">
      <form>
        <h1>Cadastro de usuários</h1>
        <input name='nome' type="text" />
        <input name='idade' type="number" />
        <input name='email' type="email" />
        <button type='button'>Cadastrar</button>
      </form>

      {users.map(user => (

        <div key={user.id}>
          <p>Nome: {user.name} </p>
          <p>Idade: {user.age} </p>
          <p>Email: {user.email} </p>
          <div>
            <button><img src={Trash} /></button>
          </div>
        </div>

      ))}


    </div>

  )
}

export default Home
