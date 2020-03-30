import React, { useEffect, useState } from 'react'
import logoimg from '../../assets/logo.svg'
import { Link, useHistory } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'
import './style.css'
import api from '../../services/api'
export default function Profile(params) {
  const ongId = localStorage.getItem('ongId')
  const ongName = localStorage.getItem('ongName')
  const history = useHistory()
  if (ongName == null || ongId == null) {
    history.push(`/`)
  }
  const [insidents, SetInsidents] = useState([])

  function logoff(params) {
    localStorage.removeItem('ongId')
    localStorage.removeItem('ongName')
    history.push(`/`)
  }
  useEffect(() => {
    api
      .get('profile', {
        headers: { Authorization: ongId },
      })
      .then(response => {
        SetInsidents(response.data)
      })
  }, [ongId])


  async function deliteInsident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: { Authorization: ongId },
      })
    }
 catch (error) {
      alert("Ocorreu umm erro ao Apagar")
    }
    SetInsidents(insidents.filter(insidents => insidents.id !== id))
  }
  return (
    <div className="profile-container">
      <header>
        <img src={logoimg} alt="Logo" />
        <span>Bem vinda, {ongName} </span>
        <Link className="button" to="/incidents/new">
          Cadastrar novo Caso
        </Link>
        <button onClick={logoff}>
          <FiPower size={18} color="#e02041"></FiPower>
        </button>
      </header>
      <h1>Casos Cadastrados</h1>
      <ul>
        {insidents.map(insident => {
          return (
            <li key={insident.id}>
              <strong>Caso:</strong>
              <p>{insident.title}</p>
              <strong>Descrição:</strong>
              <p>{insident.description}</p>
              <strong>VALOR:</strong>
              <p>
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(insident.value)}
              </p>
              <button
                onClick={() => {
                  deliteInsident(insident.id)
                }}
                type="button"
              >
                <FiTrash2 size={20} color="#a8a8b3" />
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
