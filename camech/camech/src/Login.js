import React, { useState } from 'react';
  import './Login.css';

export function Login({setUser}) {
  const [nombre, setNombre]= useState("")
  const [contraseña, setContraseña]= useState("")
  const [error, setError]=useState (false)

  const handleSubmbit = (e) =>{
    e.preventDefault()

    if(nombre === "" || contraseña === ""){
      setError(true)
      return
    }

    setError(false)

    setUser([nombre])

  }
  

  return(
<section>
  <h1> Login</h1>

  <form 
  className='Login'
  onSubmit={handleSubmbit}
  >
    <input 
    type="text"
    value={nombre}
    onChange={e=>setNombre(e.target.value)}
     />
    <input 
    type="password" 
    value={contraseña}
    onChange={e=>setContraseña(e.target.value)}
    />
    <button>Iniciar sesion</button>
    
  </form>
  {error && <p>Todos los campos son onbligatorios</p>}
</section>
  )
}