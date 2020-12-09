import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Navbar_dark from '../components/navbar_dark'
import ContentTop from '../components/content_top'
import Row from '../components/one_row'
import Footer from "../components/footer";


const Article=()=>(
    <div>
        
        <Navbar_dark/>
        <ContentTop name="Articles" pic="pan.jpg"/>
        <div style={{height: 150}}></div>

        <Row type="ARTICLE:" topic="Concerns related to COVID-19" 
             time="2020-11-23" author="admin" link="content"/>
        <Row type="ARTICLE:" topic="Concerns related to COVID-19" 
             time="2020-11-23" author="admin" link="content"/>
        <Row type="ARTICLE:" topic="Concerns related to COVID-19" 
             time="2020-11-23" author="admin" link="content"/>
        <Footer/>
    </div>
)


export default Article