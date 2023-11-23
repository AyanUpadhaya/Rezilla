import React from 'react'
import Header from '../../components/Home/Header'
import Sponsors from '../../components/Home/Sponsors'
import Badges from '../../components/Home/Badges'
import WhoAreWe from '../../components/Home/WhoAreWe'
import LatestProperties from '../../components/Home/LatestProperties'

const HomePage = () => {
  return (
    <div>
      <Header></Header>
      <Badges></Badges>
      <Sponsors></Sponsors>
      <WhoAreWe></WhoAreWe>
      <LatestProperties></LatestProperties>
    </div>
  )
}

export default HomePage