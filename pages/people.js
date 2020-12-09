import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Navbar_white from '../components/navbar_white'
import ContentTop from '../components/content_top'
import Row from '../components/one_row'
import Footer from "../components/footer";
import Text_page_top from "../components/text_page_top";
import Text_page_content from "../components/text_page_content";
import Navbar_dark from "../components/navbar_dark";
import Photocard from "../components/photocard";


const People=()=>(
    <div>
        <Navbar_dark/>
        <ContentTop name="People" pic="pan.jpg"/>
        <Footer/>
        <Photocard name="Kaikai" description="Kaikai is a cool guy" pic="pan.jpg"/>
    </div>
)


export default People