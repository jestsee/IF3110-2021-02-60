import Axios from 'axios';
import React, { useEffect } from 'react'
import { DaftarRequestTable  } from './DaftarRequestTable'

function DaftarRequest() {
    const userObj = JSON.parse(localStorage.getItem('token') && '{}');
    //alert(localStorage.getItem('token'));
    const isLoggedIn = userObj ? true : false;
    if(isLoggedIn) {
    return (
        <div className='DaftarRequest'>
            <DaftarRequestTable />
        </div>
    )
    }
    else {
        return(<div></div>)
    }
}

export default DaftarRequest