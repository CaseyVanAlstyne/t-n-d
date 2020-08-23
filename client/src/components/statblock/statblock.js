import React from "react";
// import OIP from '../../../public/img/OIP.jpg'

export default function statblock(props) {
  // math function to get level and expBar percent
  let levelMath = (num) => {
    let level = 1 + Math.floor(num / 100);
    let percent = num % 100;
    let levelObj = {
      level: level,
      percent: percent,
    };
    return levelObj;
  };
  // setting current level values for component
  let currentLevel = levelMath(props.experience);
  // var for styleing to pass into expBar
  let expBarStyle = {
    width: currentLevel.percent + "%",
  };

  let healthBarStyle = {
    width: (props.currentHealth / props.totalHealth) * 100 + "%",
  };

  // let testNum = levelMath(480);
  // console.log(testNum);

  return (
    <section className="container">
        <div className="card">
          <div className="card-content">
      <div className="row">
        <div className="col s12 center-align">
          <h1>
            <u><b>{props.name}</b></u>
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col s12 m4 center-align">
          <img
            src="img/OIP.jpg"
            style={{ maxHeight: "200px", maxWidth: "200px" }}
            alt="user avatar"
          ></img>
          <div className="row center-align"></div>
          <button
            onClick={props.healPlayer}
            className="btn "
          >
            Drink a potion
          </button>
        </div>
        <div className="col s12 m8">
          <div className="row">
            <div className="col s12 m6">
              <p>
                {props.currentHealth} / {props.totalHealth}
              </p>
            </div>
          </div>
          <div className="progress">
            <div className="determinate blue" style={healthBarStyle}></div>
          </div>
          <div className="row"></div>
          <p>Exp:{props.experience}</p>
          <div className="progress">
            <div className="determinate purple" style={expBarStyle}></div>
          </div>
          <div className="row"></div>
          <p>LvL: {currentLevel.level}</p>
          <div className="row"></div>
          <p className="errorMessage" style={{ color: "red" }}>
          {props.damageDeathMessage}
        </p>
        </div>
        </div>
      </div>
      </div>
    </section>
  );
}
