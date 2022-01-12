import React from 'react'
import reactDom from 'react-dom'
import './data/front.scss';
import Foot from './components/Foot'
import Header from './components/Header'
import Main from './components/Main'

export const FrontPage = () => {
    return (
        <div className='container'>
            <div>
            <Header/>
            </div>
            <Main/>
            <Foot/>
        </div>
    )
}
