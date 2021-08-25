import React from 'react'
import Navbar from './Navbar'
import Button from '../Button/Button'
// import {Link} from 'react'

export default {
    title: 'Navbar',
    component: Navbar
}

export const Nav = () => <Navbar size = 'nav-head' placeholder='nav size'>
    {/* <>
    <div className='Nav-Items'>
        <Button><Link to='/home'>home</Link></Button>
    </div>
    </> */}

</Navbar>
// export const Medium = () => <Navbar size = 'medium' placeholder='Medium size'>About</Navbar>
// export const Large = () => <Navbar size = 'large' placeholder='Large size'>Services</Navbar>