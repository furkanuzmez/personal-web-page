import React from 'react'
import './style.css'

const SkillCircle = ({ subject, percentage }) => {
    return (
        <div class="skill">
            <div class="box">
                <div class="percent">
                    <svg>
                        <circle cx="70" cy="70" r="70"></circle>
                        <circle cx="70" cy="70" r="70"></circle>
                    </svg>
                    <div class="number">
                        <h2 class="numberZone">{percentage}<span>%</span></h2>
                    </div>
                    <h2 class="text">{subject}</h2>
                </div>
                
            </div>
        </div>
    )
}

export default SkillCircle;