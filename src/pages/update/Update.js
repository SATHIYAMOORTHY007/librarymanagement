import React, { useEffect } from 'react'
import { Formik, useFormik, onChange } from 'formik'
import axios from 'axios'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Update() {
  const [isLoading, setLoading] = useState(false)
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    getUserDate()
  }, [])

  let getUserDate = async () => {
    try {
      const books = await axios.get(
        `https://6410168a864814e5b646cb10.mockapi.io/studentcouses/library}`,
      )
      myformik.setValues(books.data)
      console.log(books.data)
    } catch (error) {
      console.log(error)
    }
  }

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
        const books = await axios.put(
          `https://6410168a864814e5b646cb10.mockapi.io/studentcouses/library/${params.id}`,
          values,
        )
        setLoading(false)
        navigate(`/portal/table`)
      } catch (error) {
        console.log(error)
        navigate(`/`)
      }
    },
  })

  return (
    <div className="container">
      <h1>{params.id}</h1>
      <form onSubmit={myformik.handleSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <label>Book Name</label>
            <input
              type={'text'}
              value={myformik.values.bookname}
              name="bookname"
              onChange={myformik.handleChange}
              className={`form-control ${
                myformik.errors.bookname ? 'is-invalid' : 'is-valid'
              }`}
            ></input>
            <span style={{ color: 'red' }}>{myformik.errors.bookname}</span>
          </div>

          <div className="col-lg-6">
            <label>Auth Name</label>
            <input
              type={'text'}
              value={myformik.values.auth}
              name="bookname"
              onChange={myformik.handleChange}
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
            <input
              type="submit"
              disabled={isLoading}
              value={isLoading ? 'Update...' : 'Update'}
              className="btn mt-1 btn-primary"
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default Update
