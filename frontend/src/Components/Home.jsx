import React, { useState, useEffect } from 'react'
import MetaData from './Layout/MetaData'
import axios from 'axios'
import Product from './Product/Product'
import { useParams, useNavigate } from 'react-router-dom'
import Pagination from 'react-js-pagination'


const Home = () => {
    const [products, setProducts] = useState([])
    const [productsCount, setProductsCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [resPerPage, setResPerPage] = useState(0)
    const [filteredProductsCount, setFilteredProductsCount] = useState(0)
    let { keyword } = useParams();
    const getProducts = async (page = 1, keyword = '') => {

        let link = `http://localhost:4001/api/v1/products?page=${page}&keyword=${keyword}`
        // link = `http://localhost:4001/api/v1/products?page=${page}&keyword=${keyword}&price[lte]=${price[1]}&price[gte]=${price[0]}`


        let res = await axios.get(link)
        console.log(res)
        setProducts(res.data.products)
        setResPerPage(res.data.resPerPage)
        setProductsCount(res.data.count)
        setFilteredProductsCount(res.data.filteredProductsCount)

    }

    useEffect(() => {
        getProducts(currentPage, keyword)
    }, [currentPage, keyword]);

    let count = productsCount
    if (keyword) {
        count = filteredProductsCount
    }

    function setCurrentPageNo(pageNumber) {
        setCurrentPage(pageNumber)
    }
    return (
        <>
            <MetaData title={'Buy Best Products Online'} />

            <div className="container container-fluid">
                <h1 id="products_heading">Latest Products</h1>
                <section id="products" className="container mt-5">
                    <div className="row">
                        {products && products.map(product => (
                            <Product key={product._id} product={product} />
                        ))}

                    </div>
                </section>
                {resPerPage <= count && (
                        <div className="d-flex justify-content-center mt-5">
                            <Pagination
                                activePage={currentPage}
                                itemsCountPerPage={resPerPage}
                                totalItemsCount={count}
                                onChange={setCurrentPageNo}
                                nextPageText={'Next'}
                                prevPageText={'Prev'}
                                firstPageText={'First'}
                                lastPageText={'Last'}
                                itemClass="page-item"
                                linkClass="page-link"
                            />
                        </div>)}
            </div>
        </>

    )
}

export default Home