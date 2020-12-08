import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Navbar_dark from '../components/navbar_dark'
import ContentTop from '../components/content_top'
import Row from '../components/one_row'
import Footer from "../components/footer";


const Update=()=>(
    <div>
        
        <Navbar_dark/>
        <ContentTop name="Faculty Updates" pic="pan.jpg"/>
        <div style={{height: 150}}></div>
        
        <Row type="COVID-19 UPDATES:" topic="Concerns related to COVID-19" 
             time="2020-11-23" author="admin" link="content"/>
        <Row type="COVID-19 UPDATES:" topic="Concerns related to COVID-19" 
             time="2020-11-23" author="admin" link="content"/>
        <Row type="COVID-19 UPDATES:" topic="Concerns related to COVID-19" 
             time="2020-11-23" author="admin" link="content"/>
             <Footer/>
    </div>
)


export default Update