import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

// image
import people1 from '../../assets/img/pf1.jpg'
import people2 from '../../assets/img/pf2.jpg'
import people3 from '../../assets/img/pf3.jpg'
import people4 from '../../assets/img/pf4.jpg'
import BottomImg from '../../components/bottom-img/bottom-img'

const Home = () => {
    const [isShowDetail1, setIsShowDetail1] = useState(false)
    return (
        <>
        <div className="container bd-black-top">
            <h3 className="text-home">การวิเคราะห์ทิศทางการเติบโตของสินค้าทางการเกษตรในประเทศไทย</h3>
        </div>
        <br />
        <div className="container bd-black">
            <br />
            <div className="main">
                <center>
                    {/* <div
                        onMouseOver={() => setIsShowDetail1(!isShowDetail1)}
                        onMouseOut={() => setIsShowDetail1(!isShowDetail1)}
                        className="circle-image"
                    >
                        {isShowDetail1 ? (
                            <>
                                <div className="inner-text-img circle-image-blur">
                                    <p>63010870</p>
                                    <p>วัชรพล โยธาดี</p>
                                </div>
                                <img src={people1} alt="" />
                            </>
                        ) : (<img src={people1} alt="" />)}
                    </div> */}
                    <div className="circle-image">
                        <img src={people1} alt="" />
                    </div>
                    <div className="circle-image">
                        <img src={people2} alt="" />
                    </div>
                    <div className="circle-image">
                        <img src={people3} alt="" />
                    </div>
                    <div className="circle-image">
                        <img src={people4} alt="" />
                    </div>
                </center>
            </div>

            <br />
            <br />
            <div className="main">
                <center>
                    <Link to="/detail">
                        <button class="button-24" role="button">View</button>
                    </Link>
                </center>
            </div>
            <br />
        </div>

        <br />
        <br />
        <BottomImg />
        </>
    )
}

export default Home
