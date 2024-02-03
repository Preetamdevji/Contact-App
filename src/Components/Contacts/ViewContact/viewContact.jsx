import React from 'react'
import { Link } from 'react-router-dom'

const viewContact = () => {
  return (
    <React.Fragment>
        <section className='view-contact-intro p-3'>
          <div>
            <div className="row">
              <div className="col">
                <p className="h3 text-warning">View Contact</p>
                <p className='fst'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab obcaecati neque, quo non sit ea quam hic? Quasi, error? Porro ea beatae laudantium odio aliquam hic totam dolor dicta modi.</p>
              </div>
            </div>
          </div>
        </section>
        <section className='view-contact mt-3'>
              <div>
                <div className="row">
                  <div className="col-md-4">
                      <img src='https://cdn-icons-png.flaticon.com/512/149/149071.png' className='contact-img ms-5'/>
                  </div>
                  <div className="col-md-8 align-items-center">
                   <ul className="list-group">
                          <li className="list-group-item list-group-item-action">
                                Name : <span className="fw-bold">john</span>
                          </li>
                          <li className="list-group-item list-group-item-action">
                                Mobile : <span className="fw-bold">doe</span>
                          </li>
                          <li className="list-group-item list-group-item-action">
                                Email : <span className="fw-bold">test@example.com</span>
                          </li>
                          <li className="list-group-item list-group-item-action">
                                Company : <span className="fw-bold">Systems</span>
                          </li>
                          <li className="list-group-item list-group-item-action">
                                Title : <span className="fw-bold">Powerful work</span>
                          </li>
                  
                  </ul>
                  </div>
                </div>
                <div className='row'>
                  <div className="col">
                    <Link to={"/contacts/list"} className='btn btn-warning ms-5'>Back</Link>
                  </div>
                </div>
              </div>
        </section>
    </React.Fragment>
  )
}

export default viewContact