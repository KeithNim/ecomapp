import React from 'react'
import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss'

// interface Props {
//     title: String,
//     subTitle: String,
//     imgUrl: String,
//     size?: String
// }

const Directory = () => {

    return (
        <div className='directory-menu'>
            <MenuItem title='Mens' subTitle='Shop Now' imgUrl='https://media.gq.com/photos/5df955cba551740008caf055/master/pass/gq-recommends-filters0313-16x9.jpg' />
            <MenuItem title='Women' subTitle='Shop Now' imgUrl='https://www.hobbs.com/dw/image/v2/BDCH_PRD/on/demandware.static/-/Sites-hobbs-catalog/default/dw44318d85/images/0220-5546-3642L00/0220-5546-3642L00-HAISLEY-SILK-DRESS-KINGFISHER-BLUE_02.jpg?sw=1280&sh=1792&strip=false' />
            <MenuItem title='Hats' subTitle='Shop Now' imgUrl='https://media.gq.com/photos/5a04f9a398002d2e253679f5/master/pass/fall-hats-gq-style-0816-01-1.jpg' />
            <MenuItem title='Jackets' subTitle='Shop Now' imgUrl='https://i.ibb.co/px2tCc3/jackets.png' />
            <MenuItem title='Sneakers' subTitle='Shop Now' imgUrl='https://i.ibb.co/0jqHpnp/sneakers.png' />
        </div>
    )
}

export default Directory