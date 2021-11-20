import React, {useState} from 'react'
import ReactCardFlip from 'react-card-flip'

import './style.css'

function CardFlip({ name, img, predict, precision, farmland, color }) {

    // const { name, img, predict, precision, farmland } = props

    const [isFlipped, setIsFlipped] = useState(false)

    const handleClick = (e) => {
        e.preventDefault()

        setIsFlipped(!isFlipped)
    }

    return (
        <div className="row_card_flip">
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                <div className="card-content-img" 
                onClick={handleClick}
                >
                    <img src={img} alt="" />
                </div>
                
                <div className={`card-content-data ${color}`}
                    onClick={handleClick}
                >
                    <a href="#">ชื่อ</a>
                    <p>{name}</p>
                    <a href="#">ราคาที่ทำนายได้ในปี 2564</a>
                    <p>{predict}</p>
                    <a href="#">ความแม่นยำของข้อมูล</a>
                    <p>{precision}</p>
                    <a href="#">พื้นที่เพราะปลูก</a>
                    <p>{farmland}</p>
                </div>
            </ReactCardFlip>
        </div>
    )
}

export default CardFlip
