import api from '../../services/api'
import React, { useState } from 'react'
import heroesimg from '../../assets/heroes.png'
import logoimg from '../../assets/logo.svg'
import { FiLogIn } from 'react-icons/fi'
import './style.css'
import { Link, useHistory } from 'react-router-dom'
export default function Logon(params) {
  const [id, setId] = useState('')
  const history = useHistory()
  async function Login(e) {
    e.preventDefault()
    const data = {
      id,
    }
    console.log(data)

    console.log()
    try {
      const response = await api.post('session', data)
      console.log(response.data.name)
      localStorage.setItem('ongId', id)
      localStorage.setItem('ongName', response.data.name)
      history.push(`profile`)
    } catch (error) {
      alert('erro')
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoimg} alt="logo" />
        <form onSubmit={Login}>
          <h1>Faça seu logon</h1>
          <input
            placeholder="sua ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <button className="button" type="submit">
            Entrar
          </button>
          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroesimg} alt="heroes" />
    </div>
  )
}
