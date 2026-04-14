import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { loginSchema } from '../Validation/loginSchema'
import { useDispatch } from 'react-redux';
import { loginFailure, loginStart, loginSuccess } from '../store/authSlice';
import { login } from '../services/loginService';

const schema = loginSchema;

export default function Login() {
  const {register, handleSubmit, formState: {errors, isSubmitted}} = useForm({ resolver: yupResolver(schema) });
  const dispatch = useDispatch();

  const loginOnSubmit = async (data) => {
    dispatch(loginStart());

    try {
      const loginUser = await login(data);
      dispatch(loginSuccess(loginUser))
    } catch(error) {
      dispatch(loginFailure(error.response?.data?.message || 'Something went wrong'));
      console.error('Failed to create user:', error);
    }
  }

  return (
    <div className="row w-100">
      <div className="col-md-4 offset-md-4">
        <div className="bg-white p-4 rounded-4 shadow-sm border">
          <h5 className="fw-bold border-bottom pb-3 mb-4">Login</h5>
          <form onSubmit={handleSubmit(loginOnSubmit)}>
            <div className="form-floating mb-3">
              <input type="email" className="form-control bg-light" id="loginEmail" placeholder="Email"
              {...register('email')} />
              <label htmlFor="loginEmail">Email</label>
              {errors.email && <p className="form-error">{errors.email.message}</p>}
            </div>

            <div className="form-floating mb-3">
              <input type="password" className="form-control bg-light" id="loginPassword" placeholder="Password" 
              {...register('password')}/>
              <label htmlFor="coursePassword">Password</label>
              {errors.password && <p className="form-error">{errors.password.message}</p>}
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
