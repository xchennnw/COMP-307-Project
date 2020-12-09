import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Navbar_white from '../components/navbar_white'
import ContentTop from '../components/content_top'
import Row from '../components/one_row'
import Footer from "../components/footer";
import Text_page_top from "../components/text_page_top";
import Text_page_content2 from "../components/employ_left";


const Donate=()=>(
    <div>

        <Navbar_white/>
        <Text_page_top cotitle="Employment" title="Student Postings@CS" topic="employment" time="2020-11-23"/>
        <Text_page_content2 publisher="admin" topic="Student Postings@CS"
        content="Dawson College urgently looking for part-time CS teacher to start January 27!
        Application Period: Jan. 17, 2020 - Jan. 27, 2020
        Contact: Please email your CV to Jaya Nilakantan, Director. jnilakantan AT dawsoncollege.qc.ca
        
        "/>

    </div>
)


export default Donate