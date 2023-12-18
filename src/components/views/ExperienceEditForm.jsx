import { useState } from "react";
import ExperienceForm from './ExperienceForm'

function ExperienceEditForm(props) {
    console.log(props.data);

    return (
        <ExperienceForm
        data={props.data}
        />
    )
}

export default ExperienceEditForm;