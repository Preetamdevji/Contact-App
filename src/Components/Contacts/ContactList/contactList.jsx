import React from "react";
import { Link } from "react-router-dom";
const contactList = () => {
  return (
    <React.Fragment>
      <section className="contact-search">
        <div className="grid">
          <div className="row">
            <div className="col">
              <p className="h3 fw-bold">
                Contact Manager
                <Link to={"/contacts/add"} className="btn btn-primary ms-2">
                  <i className="fa fa-plus-circle me-2" />
                  New
                </Link>
              </p>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                minus tenetur vero, magnam repudiandae accusamus. Obcaecati
                quasi adipisci est ipsa officia, quam dolorum debitis facere
                quia quos earum mollitia unde!
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <form className="row">
                <div className="col">
                  <div className="mb-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search Names"
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="mb-2">
                    <input
                      type="submit"
                      className="btn btn-outline-dark"
                      value="search"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-list">
            <div>
              <div className="row">
                <div className="col-md-6">
                    <div className="card">
                      <div className="card-body">
                        <div className="row align-items-center d-flex justify-content-around">
                        <div className="col-md-4">
                          <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" className="contact-img"/>
                      </div>
                      <div className="col-md-7">
                        <ul className="list-group">
                          <li className="list-group-item list-group-item-action">
                                Name : <span className="fw-bold">john</span>
                          </li>
                          <li className="list-group-item list-group-item-action">
                                LastName : <span type="password"className="fw-bold">doe</span>
                          </li>
                          <li className="list-group-item list-group-item-action">
                                Email : <span className="fw-bold">test@example.com</span>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-1 d-flex flex-column align-items-center">
                        <Link to={`/contacts/view/:contactId`} className="btn btn-warning my-1">
                          <i className="fa fa-eye"/>
                        </Link>
                        <Link to={`/contacts/edit/:contactId`} className="btn btn-primary my-1">
                          <i className="fa fa-pen"/>
                        </Link>
                        <button className="btn btn-danger my-1">
                          <i className="fa fa-trash"/>
                        </button>
                      </div>
                        </div>
                      </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                      <div className="card-body">
                        <div className="row align-items-center d-flex justify-content-around">
                        <div className="col-md-4">
                          <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" className="contact-img"/>
                      </div>
                      <div className="col-md-7">
                        <ul className="list-group">
                          <li className="list-group-item list-group-item-action">
                                Name : <span className="fw-bold">john</span>
                          </li>
                          <li className="list-group-item list-group-item-action">
                                LastName : <span type="password"className="fw-bold">doe</span>
                          </li>
                          <li className="list-group-item list-group-item-action">
                                Email : <span className="fw-bold">test@example.com</span>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-1 d-flex flex-column align-items-center">
                        <Link to={`/contacts/view/:contactId`} className="btn btn-warning my-1">
                          <i className="fa fa-eye"/>
                        </Link>
                        <Link to={`/contacts/edit/:contactId`} className="btn btn-primary my-1">
                          <i className="fa fa-pen"/>
                        </Link>
                        <button className="btn btn-danger my-1">
                          <i className="fa fa-trash"/>
                        </button>
                      </div>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
      </section>
    </React.Fragment>
  );
};

export default contactList;
