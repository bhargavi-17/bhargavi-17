import React from 'react'
import ProgressBar from './progress'
import { FaHtml5 } from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'
import { BsFillBootstrapFill } from "react-icons/bs"
import { FaPython } from 'react-icons/fa'

const testData = [
    { text:"HTML",icon:<FaHtml5 size={50} /> ,bgcolor: "#6a1b9a", completed: 90 },
    { text:"CSS",icon:<FaCss3Alt size={50} />,  bgcolor: "#00695c", completed: 80 },
    { text:"REACT",icon:<FaReact size={50} />,bgcolor: "#ef6c00", completed: 70 },
    { text:"BOOTSTRAP",icon:<BsFillBootstrapFill size={50} />,bgcolor:"#FF1493",completed: 80},
    { text:"PYTHON",icon:<FaPython size={50} />,bgcolor:"#228B22",completed:60}
  ]
function Skills() {
    return (
<div>
      {testData.map((item, idx) => (
        <ProgressBar key={idx} text={item.text} icon={item.icon} bgcolor={item.bgcolor} completed={item.completed} />
      ))}
    </div>

    );
}

export default Skills

