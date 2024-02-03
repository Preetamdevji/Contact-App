import React from 'react'
import { Link } from 'react-router-dom'

const editContact = () => {
  return (
    
    <React.Fragment>
    <section className='add-contact p-3'>
        <div>
          <div className="row">
            <div className="col">
              <p className="h4 text-primary fw-bold">Edit Contact</p>
              <p className="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quisquam voluptas magnam reprehenderit? Nobis recusandae natus nulla ducimus quia illum fuga ullam nostrum, veritatis sunt cupiditate incidunt laboriosam numquam? Dicta.</p>
            </div>
          </div>
          <div className='row align-items-center'>
            <div className="col-md-4">
              <form>
                    <div className='mb-2'>
                      <input type="text" className='form-control' placeholder='name'/>
                    </div>
                    <div className='mb-2'>
                      <input type="url" className='form-control' placeholder='Photo Url'/>
                    </div>
                    <div className='mb-2'>
                      <input type="number" className='form-control' placeholder='Mobile'/>
                    </div>
                    <div className='mb-2'>
                      <input type="email" className='form-control' placeholder='Email'/>
                    </div>
                    <div className='mb-2'>
                      <input type="text" className='form-control' placeholder='Company'/>
                    </div>
                    <div className='mb-2'>
                      <input type="submit" className='btn btn-primary' placeholder='Create'/>
                      <Link to={'/contacts/list'} className='btn btn-dark ms-2'>Close</Link>
                    </div> 
              </form>
            </div>
            <div className='col-md-6'>
              <img src='https://cdn-icons-png.flaticon.com/512/149/149071.png' className='contact-img'/>
            </div>
          </div>
        </div>
    </section>
    </React.Fragment> 
  )
}

export default editContact