import React from 'react'
import './table.css'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'
function Table() {
  const [booklist, setBookList] = useState([])
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    getUser()
  }, [])

  let getUser = async () => {
    try {
      const list = await axios.get(
        'https://6410168a864814e5b646cb10.mockapi.io/studentcouses/library',
      )
      setBookList(list.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  //delete function
  let handelDelete = async (id) => {
    try {
      const confirmdate = window.confirm(
        'Are You Sure You Want To Delete Data ?',
      )
      if (confirmdate) {
        await axios.delete(
          `https://6410168a864814e5b646cb10.mockapi.io/studentcouses/library/${id}`,
        )
        getUser()
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <div class="add-button-container">
        <button className="add-button">
          <Link className="add-book-buttton" to="/portal/bookadd">
            {' '}
            Add new Book
          </Link>
        </button>
      </div>
      <div className="table-container">
        <table class="table table-bordered">
          {isLoading ? (
            <h1>isLoading</h1>
          ) : (
            <>
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">NAME</th>
                  <th scope="col">AUTH</th>
                  <th scope="col">AVal</th>
                  <th scope="col">ACTION</th>
                </tr>
              </thead>
              <tbody>
                {booklist.map((book, key) => {
                  return (
                    <tr>
                      <th scope="row">{book.id}</th>

                      <td>{book.bookname}</td>
                      <td>{book.auth}</td>
                      <td>{book.aval}</td>

                      <td>
                        <Link
                          to={`/portal/update/${book.id}`}
                          className="btn  btn-align btn-secondary btn-sm"
                        >
                          Update
                        </Link>
                        <Link
                          onClick={() => handelDelete(book.id)}
                          className="btn btn-danger btn-align btn-sm "
                        >
                          Delete
                        </Link>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </>
          )}
        </table>
      </div>
    </>
  )
}

export default Table
