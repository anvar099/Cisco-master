import React, { useState } from 'react'
import {useHistory} from "react-router-dom"
import SG1101 from '../../../assets/img/SG110-16HP_1.png';
import { Text } from '../../../containers/languages';

const AboutModel = () => {
  const history = useHistory();
  const description = "description"
  const characteristics = "characteristics"
  const features = "features"

  const [currentData, setCurrentData] = useState("")

  const handleDescription = () => {
      setCurrentData(description)
  }
  const handleCharacteristics = () => {
      setCurrentData(characteristics)
  }
  const handleFeatures = () => {
      setCurrentData(features)
  }
  return(
    <div className="aboutModel">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-5">
              <div className="text">
                <div className="modelName"><Text tid="modelName-1" /> <span /></div>
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
                    <Text tid="about16" />
                    </div>
                    <div className="lines">
                      <div className="line">
                        <div className="half">
                        <Text tid="about17" />
                        </div>
                        <div className="half">
                        <Text tid="about18" />
                        </div>
                      </div>
                      <div className="line">
                        <div className="half">
                        PoE
                        </div>
                        <div className="half">
                        <Text tid="about18" />
                        </div>
                      </div>
                      <div className="line">
                        <div className="half">
                        <Text tid="about19" />
                        </div>
                        <div className="half">
                        <Text tid="about18" />
                        </div>
                      </div>
                      <div className="line">
                        <div className="half">
                        <Text tid="about20" />
                        </div>
                        <div className="half">
                        <Text tid="about18" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`tab_content ${currentData === characteristics ? "active" : ""}`}>
                  <div className="modelDesc">
                  <Text tid="about16" />
                    </div>
                    <div className="lines">
                      <div className="line">
                        <div className="half">
                        Стандарты
                        </div>
                        <div className="half">
                        IEEE 802.3 10BASE-T Ethernet, IEEE 802.3 u 100BASE-TX Fast Ethernet, IEEE 802.3 ab 1000BASE-T Gigabit Ethernet, IEEE 802.3 z Gigabit Ethernet, IEEE 802.3 x Flow Control, 802.1 p priority, 802.3 af, Power over Ethernet
                        </div>
                      </div>
                      <div className="line">
                        <div className="half">
                        <Text tid="about21" />
                        </div>
                        <div className="half">
                        <Text tid="about22" />
                        </div>
                      </div>
                      <div className="line">
                        <div className="half">
                        <Text tid="about22" />
                        </div>
                        <div className="half">
                        <Text tid="about23" />
                        </div>
                      </div>
                      <div className="line">
                        <div className="half">
                        <Text tid="about8" />
                        </div>
                        <div className="half">
                        <Text tid="about24" />
                        </div>
                      </div>
                      <div className="line">
                        <div className="half">
                        <Text tid="about29" />
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
                        <span />
                        <Text tid="about25" />
                      </div>
                      <div className="li">
                        <span />
                        <Text tid="about26" />
                      </div>
                      <div className="li">
                        <span />
                        <Text tid="about27" />
                      </div>
                      <div className="li">
                        <span />
                        <Text tid="about28" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 ml-auto">
              <div className="image">
                <img src={SG1101} alt="SG1101" />
              </div>
              <button onClick={() => history.push('/pointofsales')} className="buyBtn"><Text tid="modelbuyBtn" /></button>
            </div>
          </div>
        </div>
      </div>
     
  )
}
//DRY-DO Not Repeat yourself
export default AboutModel;