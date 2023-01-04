import React from 'react'
import Controller from './Controller';

export default function AdminPanel() {
  const [password, setPassword] = React.useState('')
  return (
    <div>
      <h1 className="title">Admin Panel</h1>
      <input
        type="text"
        placeholder='enter password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: '100%', marginTop: '20px' }} />

      {
        password.toLowerCase() === 'admin721' && <Controller />
      }
      

    </div>
  )
}
