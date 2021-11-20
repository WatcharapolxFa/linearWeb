import React from 'react'

import CardFlip from '../../components/card-flip'

import './style.css'

import { greenData } from '../../assets/data/green'
import { blueData } from '../../assets/data/blue'
import { orangeData } from '../../assets/data/orange'
import { Link } from 'react-router-dom'

const Detail = () => {
    return (
        <>
            <div className="container bd-black-top">
                <h3 className="text-home">การวิเคราะห์ทิศทางการเติบโตของสินค้าทางการเกษตรในประเทศไทย</h3>
            </div>
            <br />
            <div className="container bd-black orange">
                <br />
                <div className="main1 orange">
                    {orangeData.map((val) => (
                        <CardFlip
                            img={val.img}
                            name={val.name}
                            predict={val.predict}
                            precision={val.precision}
                            farmland={val.farmland}
                            color = "purple-bg"
                        />
                    ))}
                </div>
            </div>

            <br />
            <div className="container bd-black green">
                <br />
                <div className="main1 green">
                    {greenData.map((val) => (
                        <CardFlip
                            img={val.img}
                            name={val.name}
                            predict={val.predict}
                            precision={val.precision}
                            farmland={val.farmland}
                            color = "green-bg"
                        />
                    ))}
                </div>
            </div>

            <br />
            <div className="container bd-black blue">
                <br />
                <div className="main1 blue">
                    {blueData.map((val) => (
                        <CardFlip
                            img={val.img}
                            name={val.name}
                            predict={val.predict}
                            precision={val.precision}
                            farmland={val.farmland}
                            color = "blue-bg"
                        />
                    ))}
                </div>
            </div>
            <br />
            <br />
            <div className="main">
                <center>
                    <Link to="/">
                        <button class="button-24" role="button">Back to home</button>
                    </Link>
                </center>
            </div>
            <br />
        </>
    )
}

export default Detail
