// Personal info details
import React, {useState} from "react";

// Main component of details
function BasicInfoView({data}){
    return (
        <div className="BasicInfoView"> 
        <h1>{data.name}</h1>
        <br/>
        <span><i className="fa-regular fa-envelope"></i> {data.email} <i class="fa-solid fa-phone"></i> {data.phone}</span>
        </div>
    );
}

export default BasicInfoView; 