import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
      <div className='home'>
          <div className='frame'>
              <h1>Frame 1</h1>
          </div>
          <div className='frame1'>
              <h1>Welcome to AGSM Scholarship Program</h1>
              <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quaerat debitis fugit odit rerum blanditiis nam cum qui sed
                  alias tenetur ex maiores minus laborum deserunt, sit
                  consequatur repellat eum! Expedita quod odit eum? Ipsam amet
                  nihil autem dolorem? Asperiores doloremque ipsa dolores
                  incidunt, eius, repudiandae quos ea nesciunt impedit illo
                  repellat ab fuga facilis rerum, voluptatem perspiciatis
                  obcaecati itaque! Molestias.
              </p>
              <Link to='/apply' >
                  <button className='button'>Apply</button>
              </Link>
          </div>
      </div>
  );
}

export default Home;
