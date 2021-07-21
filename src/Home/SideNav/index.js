import React from 'react'
import Container from './styles'

const filterLists = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature']

const SideNav = () => {
  return (
    <Container>
      <header className="side--nav__header">
        <h1>Frontend Mentor</h1>
        <p>Feedback Board</p>
      </header>

      <div className="filter--lists">
        {filterLists.map((item, i) => (
          <button key={item} className={i === 0 ? 'active' : ''}>
            {item}
          </button>
        ))}
      </div>

      <div className="roadmap--container">
        <header>
          <div>
            <h2>Roadmap</h2>
          </div>
          <div>
            <a href="/#">View</a>
          </div>
        </header>
        <div className="list--container">
          <div>
            <p>Planned</p>
            <p>2</p>
          </div>
          <div>
            <p className="inprogress--txt">In-Progress</p>
            <p>3</p>
          </div>
          <div>
            <p className="live--txt">Live</p>
            <p>1</p>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default SideNav
