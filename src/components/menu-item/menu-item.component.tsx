import React from 'react'
import './menu-item.styles.scss'

interface Props {
    title: String,
    subTitle: String,
    imgUrl: String,
    size?: String
}

const MenuItem = ({ title, subTitle, imgUrl, size }: Props) => {
    return (
        <div className={`${size} menu-item`}>
            <div className='background-image' style={{backgroundImage: `url(${imgUrl})`}}>

            </div>
            <div className='content'>
                <h1 className='title'>
                    {title}
                </h1>
                <span className='subtitle'>
                    {subTitle}
                </span>
            </div>
        </div>
    )
}

export default MenuItem