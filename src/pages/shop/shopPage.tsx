import { useState } from 'react'
import PreviewCollection from '../../components/preview-collection/preview-collection'
import { SHOP_DATA, SHOP_COLLECTION_TYPE } from '../shop/shopData'
import React from 'react'

const ShopPage = () => {
    const [collections,] = useState<SHOP_COLLECTION_TYPE[]>(
        SHOP_DATA
    )

    return (
        <>{
            collections.map(({ id, ...props }) => (
                <PreviewCollection id={id} {...props} />))
        }
        </>

    )
}

export default ShopPage