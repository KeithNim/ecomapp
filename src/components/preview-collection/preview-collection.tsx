import React from 'react'
import CollectionItem from '../collection-item/collection-item'
import './preview-collection.styles.scss'
import { SHOP_ITEM_TYPE } from '../../pages/shop/shopData'

interface Props {
    id: any,
    title: string
    items: any
}
const PreviewCollection = ({ id, title, items }: Props) => {

    return (
        <div className='collection-preview' key={id}>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    items.filter((i:any, idx:number)=>idx<4).map(({id, ...otherItemProps}: SHOP_ITEM_TYPE)=>(
                        <CollectionItem key={id} {...otherItemProps} />
                    ))
                }
            </div>
        </div>
    )
}

export default PreviewCollection