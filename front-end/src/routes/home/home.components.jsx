import { motion } from 'framer-motion'
import { Outlet } from 'react-router-dom'

import { styles } from './home.styles'

import {
  textVariant,
  slideIn,
  staggerContainer,
  zoomIn,
  fadeIn,
} from '../../utils/framer-motion/motion'

import EarthCanvas from '../../components/canvas/earth-canvas/earth-canvas.components'

import './home.styles.scss'

const Home = () => {
  return (
    <div className='flex justify-between'>
      <div className='w-5/12 ml-16 mt-16'>
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 1)}
          className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
        >
          <p className={styles.sectionSubText}>
            Unlock the Art of Effortless Excellence
          </p>
          <h3 className={styles.sectionHeadText}>Welcome.</h3>
          <br />
          <p className={styles.sectionSubText}>
            Elevate Your Final Year Project Experience
          </p>

          <p className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium '>
            Embark on a journey of refined project management with our
            sophisticated Final Year Project Dashboard. Seamlessly orchestrate
            your project's complexities with elegance and finesse, as our
            platform empowers you to navigate tasks, deadlines, and
            collaboration with unparalleled grace. Embrace the synergy of
            innovation and sophistication as you sculpt your project
            masterpiece. Join us and elevate your final year project experience
            to new heights of achievement and distinction.
          </p>
        </motion.div>
      </div>
      <div className='w-5/12 h-[600px] mr-12'>
        <EarthCanvas />
      </div>
      <Outlet />
    </div>
  )
}

export default Home
