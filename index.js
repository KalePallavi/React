import React from "react";
import  ReactDOM  from "react-dom";
import About from './About.jsx';

ReactDOM.render(
  <>
  <div className="container">
    <div className="row">
      <About img="https://img.freepik.com/premium-vector/3d-low-polygonal-abstract-programming-code-symbol_127544-1121.jpg" text="1st" desc="usually by designing and building executable computer programs."></About>
      <About img="https://2018media.idtech.com/images/blog/featured/online-coding-classes-for-kids-teens-header.png?716fa92216" text="2nd" desc="the process or activity of writing computer programs."></About>
      <About img="https://cdn.educba.com/academy/wp-content/uploads/2019/05/What-is-Coding.jpg" text="3rd" desc="the process of assigning a code to something for classification or identification."></About>
      
    </div>

  </div>
  </>
  

,document.getElementById('root'));
