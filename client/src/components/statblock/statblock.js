import React from 'react'
// import OIP from '../../../public/img/OIP.jpg'

export default function statblock(props) {

  return (
    <section className="container">
      <div className="row">
        <div className="col s12 m6"><h2><u>{props.name}</u></h2></div>
      </div>
      <div className="row">
        <div className="col s12 m3"><img src="img/OIP.jpg" style={{maxHeight: "200px", maxWidth: "200px"}} alt="user avatar"></img></div>
        <div className="col s12 m9">
          <div className="row"></div>
            <p>{props.currentHealth}/{props.totalHealth}</p>
            <div className="progress">
              <div className="determinate blue" style={{width: "100%"}}></div>
            </div>
          <div className="row"></div>
            <p>Exp:{props.experience}</p>
            <div className="progress">
              <div className="determinate purple" style={{width: "0%"}}></div>
            </div>
          <div className="row"><p>LvL: logic not created yet</p></div>
        </div>
      </div>
    </section>
  )
}
