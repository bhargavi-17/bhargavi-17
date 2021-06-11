import React from 'react'
import SplitPane from 'react-split-pane'
import image from '../image3.png'
import Button from '@material-ui/core/Button';



function about() {
    return (
        <div>
        <SplitPane split="vertical"minSize={50}>
            <div className="image">
                <img src={image} alt="sun" height={400} width={500} />
            </div>
            <div className="about">
                <h3>ABOUT ME</h3>
                <p className="para">
                    I’m Bhargavi, I’m a frontend developer, and I specialize in <br />
                    efficient React apps and CSS & HTML that just work across <br />
                    all the platforms and browsers.  I care deeply about building <br />
                    interfaces that are usable and pleasant.I spend my time on <br />
                    planning before writing a code, because i believe that this<br />
                    way is much better.My hobbies are singing ,reading books ,<br />
                    craftwork and interested to learn new things always.</p>
                     <br />
                    <Button variant="outlined">KNOW MORE</Button>
            </div>
        </SplitPane>
        </div>
    )
}

export default about
