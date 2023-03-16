import React from 'react'
import { useState } from 'react'
import { useFormik, onChange } from 'formik'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
function Bookadd() {
  const [userList, setUserlist] = useState([])
  const [isLoading, setLoading] = useState(true)
  const navigate = useNavigate()
  const myformik = useFormik({
    initialValues: {
      bookname: '',
      id: '',
      auth: '',
      aval: '',
    },
    validate: (values) => {
      let errors = {}
      if (!values.bookname) {
        errors.bookname = 'please enter a username'
      } else if (values.bookname.length < 3) {
        errors.bookname = 'greater than 3'
      } else if (values.bookname.length > 15) {
        errors.bookname = 'less than 15'
      }

      return errors
    },
    onSubmit: async (values) => {
      setLoading(true)
      try {
        const booklist = await axios.post(
          'https://6410168a864814e5b646cb10.mockapi.io/studentcouses/library',
          values,
          navigate('/'),
        )
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    },
  })

  return (
    <div className="container">
      <div class="create-book"></div>

      <form onSubmit={myformik.handleSubmit}>
        <div className="row">
          {/* <div className="col-lg-6">
            <label>ID</label>
            <input
              type={'text'}
              value={myformik.values.id}
              name="id"
              onChange={myformik.handleChange}
              className={`form-control ${
                myformik.errors.id ? 'is-invalid' : 'is-valid'
              }`}
            ></input>
            <span style={{ color: 'red' }}>{myformik.errors.id}</span>
          </div> */}

          <div className="col-lg-6">
            <label>Book Name</label>
            <input
              type={'text'}
              name="bookname"
              onChange={myformik.handleChange}
              value={myformik.values.bookname}
              className={`form-control ${
                myformik.errors.bookname ? 'is-invalid' : 'is-valid'
              }`}
            ></input>
            <span style={{ color: 'red' }}>{myformik.errors.name}</span>
          </div>

          <div className="col-lg-6">
            <label>Book Auth</label>
            <input
              type={'text'}
              name="auth"
              onChange={myformik.handleChange}
              value={myformik.values.auth}
              className={`form-control ${
                myformik.errors.auth ? 'is-invalid' : 'is-valid'
              }`}
            ></input>
            <span style={{ color: 'red' }}>{myformik.errors.auth}</span>
          </div>

          <div className="col-lg-6">
            <label>Book aval</label>
            <input
              type={'text'}
              name="aval"
              onChange={myformik.handleChange}
              value={myformik.values.aval}
              className={`form-control ${
                myformik.errors.email ? 'is-invalid' : 'is-valid'
              }`}
            ></input>
            <span style={{ color: 'red' }}>{myformik.errors.aval}</span>
          </div>

          <div className="col-lg-3">
            {isLoading ? (
              <input
                type="submit"
                value={isLoading ? 'Create' : 'Loading...'}
                className="btn mt-1 btn-primary"
              />
            ) : (
              <h1>Loading</h1>
            )}
          </div>
        </div>
      </form>
    </div>
  )
}

export default Bookadd
