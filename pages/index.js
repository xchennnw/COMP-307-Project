import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Navbar_white from '../components/navbar_white'
import Navbar_dark from '../components/navbar_dark'
//import {render} from "next/client";


const Home=()=>(
    <div>
        <Navbar_dark/>
        <p>
            hi
        </p>
    </div>
)
/*
export default function Home() {
    return (

        <Navbar_white/>
        //React.createElement('div',null,'我是傻逼')
    )
}
*/
export default Home