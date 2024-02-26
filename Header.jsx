import React from 'react'

function Logo(){
    return ( <div >
        <h1 id = 'logo'>LOGO</h1>
    </div>
)}

function SearchBar(){
    return (<div id='searchbox'>
        <input  type="text" name="Search" id="searchbar"  placeholder='Search here...'  />
        <button id='button'>Search</button>
    </div>
)}

function Header(){
    return (
    <div className='container'>
        <Logo/>
        <SearchBar/>
        <div id='username'>
        <img id='user' src="https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWFsfGVufDB8fDB8fHww" alt="photo"  />
    </div>
    </div>
)}

export default Header
