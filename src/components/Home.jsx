import React from 'react';
import "../styles/index.css";

const Home = () => {

  return (

    <>


      <div className='main-heading'>

        <h4> Shared Hosting </h4>
        <span>Take advantage of our robust shared hosting services to power</span>
        <span>your website effortlessly.</span>

      </div>

      <div className='clx-card container'>

        <div class="card col-sm-12" style={{ width: "18rem" }}>
          <img src="/images/python-1.png" class="card-img-top mt-2 python-img" alt="..." style={{ width: "260px" }} />
          <div class="card-body">
            <h5 class="card-title">Python</h5>
            <p class="card-text">Python is a computer programming language often used to build websites and software, automate tasks, and analyze data.</p>
            <a href="#" class="btn btn-black">Get Started
              {/* <i class="bi bi-arrow-right ms-1"></i> */}
            </a>
          </div>
        </div>

        <div class="card" style={{ width: "18rem" }}>
          <img src="/images/java.png" class="card-img-top mt-2" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Java</h5>
            <p class="card-text">Java is a multi-platform, object-oriented, and network-centric language that can be used as a platform in itself.</p>
            <a href="#" class="btn btn-black">Get Started
              {/* <i class="bi bi-arrow-right ms-1"></i> */}
            </a>
          </div>
        </div>

        <div class="card" style={{ width: "18rem" }}>
          <img src="/images/web-dev.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Web Development</h5>
            <p class="card-text">Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network).</p>
            <a href="#" class="btn btn-black">Get Started
              {/* <i class="bi bi-arrow-right ms-1"></i> */}
            </a>
          </div>
        </div>

      </div>

      <div className='bottom-content'>

        <h4> Shared Hosting Features</h4>
        <span>Discover a comprehensive suite of powerful features designed in</span>
        <span>optimize your web hosting experience.</span>

      </div>

    </>

  )

}

export default Home;