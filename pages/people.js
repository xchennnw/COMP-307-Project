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
        <div style={{height: 150}}></div>
        
        <Photocard name="J.R.R.Tolkien" description="A cool guy" pic="man.jpg"
        name2="Adam L" description2="Kaikai is a cool guThe order of middleware loading is important: middleware functions that are loaded first are also executed first." pic2="man.jpg"/>
        <Photocard name="Emma Jjjj" description="A cool guy important: middleware functions" pic="man2.jpg"
        name2="Kaiii" description2="Kaikai is a cool guThe order of middleware loading is important" pic2="man.jpg"/>
        <Photocard name="James B" description="A cool guy guThe order of middleware " pic="man.jpg"
        name2="People Som" description2="Kaikai is a cool guThe order of middleware loading is important: middleware functions " pic2="man2.jpg"/>
        <Footer/>
    </div>
)


export default People