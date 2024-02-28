import { useRef } from 'react'
import './Style.css'

function Register() {
  
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  function handleClick(e) {
    e.preventDefault();
    const user = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value
    }

    fetch("https://auth-rg69.onrender.com/api/auth/signup", {
      method: "POST",
      headers: {
      'Content-type': 'application/json',
    },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      alert(`Congratulation! ${data.message}`)
    })
    .catch(err =>{
      console.log(err);
    })

  }

  return (
    <div className='container mt-4'>
      <form className='forma'>
      <div class="mb-3">
  <label htmlFor="name" className="form-label">Name</label>
  <input type="text" className="form-control" id="name" placeholder="Enter name" ref={usernameRef}></input>
</div>
<div class="mb-3">
  <label htmlFor="email" className="form-label">Email</label>
  <input type='email' className="form-control" id="email" rows="3" placeholder='example@gmail.com' ref={emailRef} ></input>
</div>
<div class="mb-3">
  <label htmlFor="password" className="form-label">Password</label>
  <input  type= "password"  className="form-control" id="password" rows="3" ref={passwordRef}></input>
</div>
<button className='btn btn-success col-6' onClick={handleClick}>Send</button>
      </form>
    </div>
  )
}

export default Register
