import React, { Component } from 'react';
import './App.css';
class App extends Component {
  constructor(){
    super();
    this.state = {index: 0, SlideCount:3};
    this.autoSlide = this.autoSlide.bind(this);
  }
  componentDidMount(){
    this.interval=setInterval(this.autoSlide, 3000);
  }
  autoSlide(){
    let nextIndex = (this.state.index + 1) % this.state.SlideCount;
    document.getElementById("slideRef").style.transform = `translateX(-${nextIndex * 100}%)`;
    this.setState({index: nextIndex});
    
  }
  render() {
    const{index, SlideCount} = this.state;
    return (
      
      <>
        <header>
          <div className='logo'>Sliding Page - Slide {index}</div>
        </header>
        <section>
          <div className='Slider'>
            <div className='Slides' id='slideRef'>
              <div className='Slide s1'></div>
              <div className='Slide s2'></div>
              <div className='Slide s3'></div>
            </div>
          </div>
        </section>
        <footer>Copyright @ 2025. All rights reserved.</footer> 
      </>
    );
  }
}

export default App;
