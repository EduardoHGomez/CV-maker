// Personal info details
import React, {useState} from "react";

// Main component of details
function BasicInfoView({data}){
    return (
        <div className="rightColumn">
            <h1>Basic information</h1>
            <p><b>Name: </b>{data.name}</p>
            <p><b>Email: </b>{data.email}</p>
            <p><b>Phone: </b>{data.phone}</p>
        </div>
    );
}

export default BasicInfoView; 