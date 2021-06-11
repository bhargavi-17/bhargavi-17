import React from 'react'
import SplitPane from 'react-split-pane'
import { BiSend } from "react-icons/bi"
import {detaildata} from './detaildata'


function contact() {
    return (
        <div>
        <div>
            <SplitPane split="vertical"minSize={100}>
                <div className="con">
                    <textarea className="area" placeholder={'Enter the message..'}/>
                    <div>
                    <input  type="text" placeholder={'Enter your name'} />
                    <input  type="text" placeholder={'Enter email address'} />
                    </div>
                    <button className="contactButton"><BiSend className="send" />Send message</button>
                </div>
                <div className="details">
                    <ul className="detaillist">
                        {detaildata.map((val,key) => {
                            return(
                                <li className="detailrow" key={key} >
                                    <div id="dicon">{val.icon}</div><div id="dtitle">{val.title}</div>
                                </li>
                            );
                        }
                        )}
                    </ul>
                </div> 
                </SplitPane>
        </div>
        </div>
    )
}

export default contact