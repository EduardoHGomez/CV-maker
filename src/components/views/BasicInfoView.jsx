// Personal info details
import React, {useState} from "react";

// Main component of details
function BasicInfoView({data}){
    return (
        <div className="BasicInfoView"> 
        <h2>{data.name}</h2>
        <span>{data.email} | {data.phone}</span>
        </div>
    );
}

export default BasicInfoView; 