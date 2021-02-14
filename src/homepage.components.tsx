import React from 'react'
import './homepage.styles.scss'
import { Link } from 'react-router-dom'
import Directory from './components/directory/directory'

const HomePage = (props: any) => {
    console.log(props)
    return (
        <div className='homepage'>
            <Directory></Directory>
            <button onClick={()=>props.history.push('./topics')}>button topics</button>
            <Link to='/topics' >link topics</Link>
        </div>

    )
}

export default HomePage