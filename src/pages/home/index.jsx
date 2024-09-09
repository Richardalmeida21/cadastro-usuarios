import { useState, useEffect, useRef } from 'react';
import './style.css';
import Trash from '../../assets/trash.svg';
import api from '../../services/api';

function Home() {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  async function getUsers() {
    try {
      const response = await api.get('/users');
      setUsers(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }

  async function createUsers() {
    try {
      await api.post('/users', {
        nome: inputName.current.value,
        idade: inputAge.current.value,
        email: inputEmail.current.value
      });
      getUsers(); // Atualiza a lista de usuários após a criação
    } catch (error) {
      console.error('Error creating user:', error);
    }
  }

  async function deleteUsers(userId) {
    try {
      await api.delete(`/users/${userId}`);
      getUsers(); // Atualiza a lista de usuários após a exclusão
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      <form>
        <h1>Cadastro de usuários</h1>
        <input placeholder='Nome' name='nome' type="text" ref={inputName} />
        <input placeholder='Idade' name='idade' type="text" ref={inputAge}/>
        <input placeholder='E-mail' name='email' type="email" ref={inputEmail}/>
        <button onClick={createUsers} type='button'>Cadastrar</button>
      </form>

      {users.map(user => (
        <div key={user.id} className='card'>
          <div>
            <p>Nome: <span>{user.name}</span> </p>
            <p>Idade: <span>{user.age}</span> </p>
            <p>Email: <span>{user.email}</span> </p>
          </div>
          <button onClick={() => deleteUsers(user.id)}>
            <img src={Trash} alt="Delete" />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;