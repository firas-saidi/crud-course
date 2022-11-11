import React from "react";

function CourseForms (props){
    return(
        <form onSubmit={props.addCourse}>
            <input onChange={props.updateCourse} type="text" placeholder="whts ur name" value={props.current}/>
            <button >Add course</button>
        </form>
    )
}
export default CourseForms;