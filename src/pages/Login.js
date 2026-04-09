import React from 'react'

export default function Login() {
  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="bg-white p-4 rounded-4 shadow-sm border">
          <h5 className="fw-bold border-bottom pb-3 mb-4">Login</h5>
          <form>
            <div className="form-floating mb-3">
              <input type="email" className="form-control bg-light" id="loginEmail" placeholder="Email" />
              <label htmlFor="loginEmail">Email</label>
            </div>

            <div className="form-floating mb-3">
              <input type="email" className="form-control bg-light" id="loginPassword" placeholder="Password" />
              <label htmlFor="coursePassword">Password</label>
            </div>
            <button type="submit" className="btn px-4 py-2 rounded-3 w-100 shadow-sm gradient-bg text-white">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
