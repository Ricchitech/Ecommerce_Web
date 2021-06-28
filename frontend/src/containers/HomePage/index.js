import React from 'react'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import MenuHeader from '../../components/MenuHeader';
import './style.css'

/**
* @author
* @function HomePage
**/

const HomePage = (props) => {
  return (
    <Layout>
      <img src={require("./sg.svg").default} className="logo" />
    </Layout>
  );

 }

export default HomePage