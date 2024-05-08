import { faCarTunnel, faCartArrowDown, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRef, useState } from "react"

export default function SearchBar({handleSearch}){ 

    const inputRef = useRef()
    const brandRef = useRef()
    const priceRef = useRef()
    const categoryRef = useRef()

    //SELECT VALUES

    function handleSearchAction(){ 
        const searchName = (inputRef.current.value)
        const brand = (brandRef.current.value)
        const price = (priceRef.current.value)
        const category = (categoryRef.current.value)

        try {
            handleSearch({searchName, brand, price, category})
        } catch (error) {
            console.log(error)
        }

    }

    return ( 
        <div className="search-bar-container">
            <div className="search-bar-text-area">
            <b>Search</b>
            <p>Look up for your favorite products</p>
            </div>
           <div className="search-bar-area">
                <input ref={inputRef} type="search" name="user-input" placeholder="search products..."/>
                <button className="btn-search-bar" onClick={handleSearchAction}><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
            </div>
            
            <div className="search-bar-area">
                <select ref={brandRef}>
                <option value=""> brand</option>
                    <option value="samsung">samsung</option>
                    <option value="apple">apple</option>
                    <option value="xiaomi">xiaomi</option>
                </select>
                <select ref={priceRef}>
                    <option value="0">price</option>
                    <option value="100">100</option>
                    <option value="250">250</option>
                    <option value="500">500</option>
                    <option value="1000">1000</option>
                    <option value="2000">2000</option>
                </select>
                <select ref={categoryRef}>
                    <option value="">category</option>
                    <option value="cellphone">phone</option>
                    <option value="TV">TV</option>
                    <option value="watch">watch</option>
                    <option value="headphone">headphone</option>
                </select>
            </div>
            {/* <div style={{width: "80%", height: "auto", display: "flex", justifyContent: "flex-end", alignItems: "flex-end"}}>
                <button className="btn-search-bar-filter-remove" onClick={handleSearchAction}>remove filters</button>
            </div> */}
        </div>
    )
}