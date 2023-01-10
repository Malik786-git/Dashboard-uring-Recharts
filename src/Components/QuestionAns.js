import {useState} from 'react'


const QuestionAns = ({data}) => {

  const [answer, setAnswer] = useState(false);
  console.log(data);
  return (
    <>
     
            <div className="question-box">
            <div className="question">
           <h2>Malik</h2>
            <span
            onClick={()=>setAnswer(!answer)}>
             {
               answer? 
               <i class="fa fa-minus-circle" aria-hidden="true"></i>
               :
               <i class="fa fa-plus-circle" aria-hidden="true"></i>
             }
            </span>
            </div>
           {
             answer? 
            <p>
               "Quia excepturi quam non ducimus harum maiores numquam mollitia, in blanditiis consequatur odio eos dolore explicabo debitis fugiat nihil expedita? Eos sint tempora natus esse aliquam aperiam quas! Ad porro repudiandae, ducimus nesciunt cum veritatis velit, corrupti, voluptate omnis explicabo praesentium et." 
             </p>
               :
               ""
             }
         </div>
          
    </>
  )
}

export default QuestionAns
