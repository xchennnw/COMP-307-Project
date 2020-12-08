import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Navbar_white from '../components/navbar_white'
import ContentTop from '../components/content_top'
import Row from '../components/one_row'
import Footer from "../components/footer";
import Text_page_top from "../components/text_page_top";
import Text_page_content from "../components/text_page_content";


const Donate=()=>(
    <div>

        <Navbar_white/>
        <Text_page_top cotitle="DONATE" title="Donate now open" topic="COVID-19 UPDATES" time="2020-11-23"/>
        <Text_page_content publisher="admin" topic="ANNOUNCEMENT"
        content="The School welcomes your feedback on our courses during the COVID-19 disruption. Please contact your instructor first.
         If you wish you comments to be confidential, then email Prof. Michael Langer (michael.langer@mcgill.ca) or the School's Director
          Prof. Bettina Kemme (bettina.kemme@mcgill.ca) and use your McGill address.
          The School welcomes your feedback on our courses during the COVID-19 disruption. Please contact your instructor first.
         If you wish you comments to be confidential, then email Prof. Michael Langer (michael.langer@mcgill.ca) or the School's Director
         Prof. Bettina Kemme (bettina.kemme@mcgill.ca) and use your McGill address."/>
        <Footer/>
    </div>
)


export default Donate