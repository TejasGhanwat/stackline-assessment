import {SALES} from './sales'
import {REVIEWS} from './reviews'

export interface PRODUCT {
        id: string,
        title: string,
        image: string,
        subtitle: string,
        brand: string,
        reviews: Array<REVIEWS>,
        retailer: string,
        details: Array<string>,
        tags: Array<string>,
        sales: Array<SALES>
    }