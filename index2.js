
//  Array-Object in used props Concept pass dynamic data for function component.

import React from "react";
import  ReactDOM  from "react-dom";
import Array_obj from './Array_obj.jsx';


var data=[
  {
    img:"https://toppng.com/uploads/preview/the-logo-is-a-black-and-white-line-drawling-of-a-man-business-man-icon-11553494320tb9nzj0wmv.png",
    name:"Ram",
    email:"ram@gmail.com",
    possition:"Developer",
    address:"Ahmednagar",
  },
  {
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh3xVYqfKTyKrp6cgB0l6G1MGByJCyVOwXog&usqp=CAU",
    name:"Sham",
    email:"sham12@gmail.com",
    possition:"Tester",
    address:"Pune",
  },
  {
    img:"https://w7.pngwing.com/pngs/34/886/png-transparent-female-woman-girl-computer-icons-svg-face-people-logo.png",
    name:"Pallavi Kale",
    email:"pallavi@gmail.com",
    possition:"React Developer",
    address:"Pune",
  },

]




ReactDOM.render(
  <>
  <div className="container">
    <div className="row">
      <div className="col-4">
        <Array_obj img={data[0].img} name={data[0].name} email={data[0].email} possition={data[0].possition} address={data[0].address}></Array_obj>
      </div>
      <div className="col-4">
        <Array_obj img={data[1].img} name={data[1].name} email={data[1].email} possition={data[1].possition} address={data[1].address}></Array_obj>
      </div>
      <div className="col-4">
        <Array_obj img={data[2].img} name={data[2].name} email={data[2].email} possition={data[2].possition} address={data[2].address}></Array_obj>
      </div>

    </div>

  </div>
  </>
  

,document.getElementById('root'));
