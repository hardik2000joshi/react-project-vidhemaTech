import { Bookmark } from "lucide-react";
// export const Card = (props) => {
//     let st = "Props stands for properties used to pass data from parent component to child component in parameters using props";
//     console.log(props);
//     return(
//         <div className="card">
//         {/* <h1>
//             Props: {prop}
//         </h1>
//         <div>
//             It flows from parent to child not child to parent
//         </div> */}
//         <h1>
//            {props.admin}
//         </h1>
//         <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos pariatur deleniti fugit distinctio laborum, quasi at? Laborum quo vero perferendis mollitia facere praesentium sed placeat, consequatur assumenda libero! Quis, omnis.
//         </p>
//         <h3>
//            User age is: {props.age}
//         </h3>
//         <button>
//             View Profile
//         </button>
//         </div>
//     )
// }

export let UICard = (props) => {
  return(
    <div className="parent">
      <div className="card">
        <div className='top'>
          <img src={props.image} alt=""/>
          <button>Save <Bookmark size={12}/></button>
        </div>
        <div className='center'>
          <h3>
            {props.name} <span>5 years ago</span>
          </h3>
          <h2>
            {props.role}
          </h2>
          <div className="tags">
            <h4>
              {props.duration}
            </h4>
            <h4>
             {props.level}
            </h4>
          </div>
        </div>
        <div className='bottom'>
          <div>
            <div>
              <h3>$120/hr</h3>
              <p>
                Mumbai, India
              </p>
            </div>
            <button>
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}