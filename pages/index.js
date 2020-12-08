import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Navbar_white from '../components/navbar_white'
import Navbar_dark from '../components/navbar_dark'
import Homepage_carousel from "../components/carousel";
import Home_login from "../components/home_login";
import Cards from "../components/cards.js";
import Home_background from "../components/home_background";


const Home=()=>(
    <div className="bg-light">
        <head>
            <script type="text/javascript" src="/static/home_head.js"></script>
        </head>
        <Navbar_white/>
        <Homepage_carousel/>
        <Home_login/>
        <Cards/>
        <Home_background/>
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