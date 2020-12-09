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
        <Text_page_top cotitle="Employment" title="Faculty Postings@CS" topic="employment" time="2020-11-23"/>
        <Text_page_content2 publisher="admin" topic="Faculty Postings@CS"
        content="There are currently no open faculty postings."/>

    </div>
)


export default Donate