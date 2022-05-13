import React from 'react'
import useForm from './useForm'
import validate from './validateInfo'
import './Form.css'

const FormSignup = ({submitForm}) => {
    const {handleChange , values,handleSubmit,errors} = useForm(submitForm,validate);
    return (
       <div className='form-content-right'>
           <form className='form' onSubmit={handleSubmit}>
               <h1>
                  Contact Us For The Queries and Feedback Input
               </h1>
               <div className='form-inputs'>
                   <label htmlFor='username' className='form-label'>
                       
                      Username

                   </label>
                   <input id ="email" type='text' name='username' className='form-input' placeholder='Enter your username' value={values.username} onChange={handleChange} />
                   {errors.username && <p>{errors.username}</p>}
               </div>
               <div className='form-inputs'>
                   <label htmlFor='username' className='form-label'>
                      Email
                      </label>
                      <input id ="email" type='email' name='email' className='form-input' placeholder='Enter your email' value={values.email} onChange={handleChange}  />
                      {errors.email && <p>{errors.email}</p>}
               </div>
               <div className='form-inputs'>
                   <label htmlFor='password' className='form-label'>
                        Phone   Number
                    </label>
                    <input id ="password" type='phone'name='password' className='form-input' placeholder='Enter your Phone Number' value={values.password} onChange={handleChange}  />
                    {errors.password && <p>{errors.password}</p>}
               </div>
               <div className='form-inputs'>
                   <label htmlFor='password2' className='form-label'>
                                    Enter the query
                    </label>
                   <input id ="password2" type='textarea' name='password2' className='form-input' placeholder='Enter the query' value={values.password2} onChange={handleChange}  />
                   {errors.password2 && <p>{errors.password2}</p>}
               </div>
               <button className="form-input-btn" type='submit'>
                Submit

               </button>
              

           </form>

       </div>
    )
}

export default FormSignup

