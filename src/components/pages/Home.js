import AllHeader from 'components/header/AllHeader'
import SectionFour from 'components/sections/SectionFour'
import SectionOne from 'components/sections/SectionOne'
import SectionThree from 'components/sections/SectionThree'
import SectionTwo from 'components/sections/SectionTwo'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const Home = () => {
  return (
    <div className=' container mx-auto px-4 '>
      
      <div className=' mt-56'>
      <SectionOne/>
       <SectionTwo/>
       <SectionThree/>
       <SectionFour/>
      </div>   
    </div>
  )
}

export default Home
