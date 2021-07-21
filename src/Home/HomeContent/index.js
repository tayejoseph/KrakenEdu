import React from 'react'
import { BiMedal } from 'react-icons/bi'
import { MdKeyboardArrowUp } from 'react-icons/md'
import Container from './styles'
import { MdAdd } from 'react-icons/md'

const HomeContent = () => {
  return (
    <Container>
      <header>
        <div className="col--1">
          <BiMedal />
          <div>
            <h3>6 Suggestions</h3>
          </div>
          <div className="input--container">
            <label>Sort by:</label>
            <select>
              <option>Most Upvotes</option>
            </select>
          </div>
        </div>
        <button>
          <MdAdd />
          Add Feedback
        </button>
      </header>
      <div className="list--container">
        {[...Array(5).keys()].map((item) => (
          <div className="item--container">
            <div className="col--1">
              <div className="action--container">
                <button arial-label={'increase count'}>
                  <MdKeyboardArrowUp />
                </button>
                <p>122</p>
              </div>
              <div className="content--container">
                <h2>Add tag for solutions</h2>
                <p>Easier to search for solutions based on specific stack</p>
                <p className="label--txt">Enhancement</p>
              </div>
            </div>
            <div className="col--2">
              <h3>2</h3>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default HomeContent
