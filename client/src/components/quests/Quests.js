import React, { Component } from "react";
import { Link } from "react-router-dom";
// import ListItem from "../dailies/ListItem"

export default function Quests(props) {
console.log(props)
return (
    <section className="container">
        <div className="row">
          <div className="col s12 m6">
            <div className="questsList">
              <div className="questsListHeader">
                <h1>
                  <b>Quests</b>
                </h1>
              </div>
              <div className="questItems">
                <ul>
                  {props.quests.map(todo => (
                      <li key={todo.name}>
                        {todo.name}
                        {todo.experience}
                        {todo.date}
                      </li>
                    ))}
                </ul>
                li (each item contains
                checkbox/complete questName, points/experience, complete/delete
                button)
              </div>
              <form className="questForm">
                <input placeholder="enter quest"></input>
                <button type="submit">Add Quest</button>
              </form>
            </div>
          </div>
        </div>
      </section>
  )
}

// class Quests extends Component {
  //   render(props) {
  //     console.log(props)
  //     return (
  //       <section className="container">
  //         <div className="row">
  //           <div className="col s12 m6">
  //             <div className="questsList">
  //               <div className="questsListHeader">
  //                 <h1>
  //                   <b>Quests</b>
  //                 </h1>
  //               </div>
  //               <div className="questItems">
  //                 <ul>
  //                   {/* {props.quests === []
  //                     ? "no quests"
  //                     : props.quests.map((todo) => {
  //                       return <ListItem
  //                         name={todo.name}
  //                         experience={todo.experience}
  //                         date={todo.date}
  //                       />
  //                     })} */}
  //                 </ul>
  //                 li (each item contains
  //                 checkbox/complete questName, points/experience, complete/delete
  //                 button)
  //               </div>
  //               <form className="questForm">
  //                 <input placeholder="enter quest"></input>
  //                 <button type="submit">Add Quest</button>
  //               </form>
  //             </div>
  //           </div>
  //         </div>
  //       </section>
  //     );
  //   }
  // }
  // export default Quests;