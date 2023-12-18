import { useState } from "react";
import ExperienceForm from './ExperienceForm'

function ExperienceEditForm(props) {

    return (
        <ExperienceForm
        data={props.data}
        />
    )
}

export default ExperienceEditForm;