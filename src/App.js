import React, { Component } from "react"
import './App.css';
import CourseForms from "./components/CourseForms";
import CourseList from "./components/CourseList";

class  App extends Component{
  state ={
    courses : [
      {name: "html"},
      {name: " CSS"},
      {name: "jquery"},
    ],
    current :" "
  }

  updateCourse=(e)=>{
    this.setState({
      current :e.target.value })
  }
  addCourse=(e)=>{
     e.preventDefault();
    
    let current=this.state.current
    //a
    if(current === " " )
       {
        alert("please check your enter course name ");
    }   
      else 
    {let courses=this.state.courses
    e.preventDefault()
    courses.push({name:current})
    this.setState({
      courses,
      current :" "
    })
  }
  }

  deleteCourse=(index)=>{
    let courses=this.state.courses
    courses.splice(index,1)
    this.setState({
      courses
    })
  }

  editCourse=(index,value)=>{
    let courses=this.state.courses
    let course=courses[index] 
    course["name"]=value
    this.setState({
      courses
    })


  }
  render(){
    const courses = this.state.courses
    let length = courses.length
    const courselist= length ? (courses.map((course,index) => {
      return <CourseList details ={course} key={index}  index={index} deleteCourse={this.deleteCourse} editCourse={this.editCourse} />
    })) : 
      (<p>no course</p>)
    


  return (
    <div className="App">
     <h2>Add Course</h2>  
      <CourseForms updateCourse={this.updateCourse} addCourse = {this.addCourse} current={this.state.current} />
      <ul>{courselist}</ul>
    </div>
  )}
}

export default App;
