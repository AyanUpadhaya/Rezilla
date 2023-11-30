import React from 'react'
import Header from '../../components/Home/Header'
import Sponsors from '../../components/Home/Sponsors'
import Badges from '../../components/Home/Badges'
import WhoAreWe from '../../components/Home/WhoAreWe'
import LatestProperties from '../../components/Home/LatestProperties'
import OurServices from '../../components/Home/OurServices'
import NeighborHoodProperties from '../../components/Home/NeighborHoodProperties'
import OurTeam from '../../components/Home/OurTeam'
import LatestBlog from '../../components/Home/LatestBlog'

const HomePage = () => {
  return (
    <div>
      <Header></Header>
      <Badges></Badges>
      <Sponsors></Sponsors>
      <WhoAreWe></WhoAreWe>
      <LatestProperties></LatestProperties>
      <OurServices></OurServices>
      <NeighborHoodProperties></NeighborHoodProperties>
      <OurTeam></OurTeam>
      <LatestBlog></LatestBlog>
    </div>
  )
}

export default HomePage