import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Navbar_dark from '../components/navbar_dark'
import UserPage from '../components/user_page'


const User=()=>(
    <div>
        
        <Navbar_dark/>
        <UserPage/>
        
        
    </div>
)


export default User