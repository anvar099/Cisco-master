import React, {useState} from 'react'
import './styles.css'
import {useHistory} from "react-router-dom"
import RV160W from '../../assets/img/RV160W-E-K9-G5_1.png'
import {Text} from '../../containers/languages';
const AboutModel = () => {

    const history = useHistory();
    const description = "description"
    const characteristics = "characteristics"
    const features = "features"

    const [currentData, setCurrentData] = useState("")

    const handleDescription = async () => {
        await setCurrentData(description)
    }
    const handleCharacteristics = async () => {
        await setCurrentData(characteristics)
    }
    const handleFeatures = async () => {
        await setCurrentData(features)
    }
    return (
        <div className="aboutModel">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-5">
                        <div className="text">
                            <div className="modelName"><Text tid="modelName-1" /><span/></div>
                            <div className="tab_buttons">
                                <button className={currentData === "" || currentData === description ? 'active' : ''} onClick={handleDescription} data-tab-open="description"><Text tid="description" />
                                </button>
                                <button className={currentData === characteristics ? 'active' : ''} data-tab-open="characteristics" onClick={handleCharacteristics}><Text tid="characteristics" />
                                </button>
                                <button className={currentData === features ? 'active' : ''} data-tab-open="features" onClick={handleFeatures}><Text tid="features" /></button>
                            </div>
                            <div className="tab_contents">
                                <div className={`tab_content ${currentData === description || currentData ==="" ? "active" : ""}`}>
                                    <div className="modelDesc">
                                    <Text tid="about1" />
                                    </div>
                                    <div className="lines">
                                        <div className="line">
                                            <div className="half">
                                                VPN
                                            </div>
                                            <div className="half">
                                            <Text tid="about2" />
                                            </div>
                                        </div>
                                        <div className="line">
                                            <div className="half">
                                            <Text tid="about3" />
                                            </div>
                                            <div className="half">
                                                50
                                            </div>
                                        </div>
                                        <div className="line">
                                            <div className="half">
                                                Wi-Fi
                                            </div>
                                            <div className="half">
                                            <Text tid="about2" />
                                            </div>
                                        </div>
                                        <div className="line">
                                            <div className="half">
                                                LTE
                                            </div>
                                            <div className="half">
                                            <Text tid="about2" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`tab_content ${currentData === characteristics ? "active" : ""}`}>
                                    <div className="lines">
                                        <div className="line">
                                            <div className="half">
                                                Ethernet WAN
                                            </div>
                                            <div className="half">
                                            <Text tid="about4" />
                                            </div>
                                        </div>
                                        <div className="line">
                                            <div className="half">
                                                Ethernet LAN
                                            </div>
                                            <div className="half">
                                            <Text tid="about5" />
                                            </div>
                                        </div>
                                        <div className="line">
                                            <div className="half">
                                            <Text tid="about6" />
                                            </div>
                                            <div className="half">
                                            <Text tid="about7" />
                                            </div>
                                        </div>
                                        <div className="line">
                                            <div className="half">
                                            <Text tid="about8" />
                                            </div>
                                            <div className="half">
                                            <Text tid="about9" />
                                            </div>
                                        </div>
                                        <div className="line">
                                            <div className="half">
                                            <Text tid="about10" />
                                            </div>
                                            <div className="half">
                                                Linux
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`tab_content ${currentData === features ? "active" : ""}`}>
                                    <div className="descs">
                                        <div className="li">
                                            <span/>
                                            <Text tid="about11" />
                                        </div>
                                        <div className="li">
                                            <span/>
                                            <Text tid="about12" />
                                        </div>
                                        <div className="li">
                                            <span/>
                                            <Text tid="about13" />
                                        </div>
                                        <div className="li">
                                            <span/>
                                            <Text tid="about14" />
                                        </div>
                                        <div className="li">
                                            <span/>
                                            <Text tid="about15" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 ml-auto">
                        <div className="image">
                            <img src={RV160W} alt="RV160W"/>
                        </div>
                        <button onClick={() => history.push('/pointofsales')} className="buyBtn"><Text tid="modelbuyBtn"/></button>
                    </div>
                </div>
            </div>
        </div>

    )
}
//DRY-DO Not Repeat yourself
export default AboutModel;