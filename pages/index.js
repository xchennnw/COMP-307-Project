import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Navbar_white from '../components/navbar_white'
import Navbar_dark from '../components/navbar_dark'
//import {render} from "next/client";
import styles from './styles/index.css'
import Homepage_carousel from "../components/carousel";


const Home=()=>(
    <div>
        <head>
            <script type="text/javascript" src="/static/home_head.js"></script>
        </head>
        <Navbar_white/>
        <Homepage_carousel/>
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