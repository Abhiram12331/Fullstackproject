import "./Home.css";

function Home() {
  return (
    <main id="MainSection">
  
      <header>
        <div className="container ma ">
          <div className="home_header_info ma ">
            <h1 className="typewrite" data-period="2000" data-type='[ "Incredible!ndia", "Dekho Apna Desh!", " Explore the Indian Culture and Heritage." ]'></h1>
            <p className=" dd">India is a country dotted with stunning wildlife diversity, and rich traditions. While the Western coast greets you with mouth-watering delicacies, the East part invites you to experience its greenery.</p>
            <a  className="dd" href="https://indianculture.gov.in/">Read More</a>
          </div>
        </div>
        <div className="video">
          <video id="video" autoPlay loop muted>
            <source type="video/mp4" src="\images\v1.mp4" />
          </video>
        </div>
</header>

<section id="welcome_Sec">
  <div className="container">
    <h2><span>Where science meets the sacred!</span></h2>
    <p>Witness the grand Architecture! How about taking your kids on an exploration of India's heritage this holiday season?</p>
  </div>
</section>

<section id="slides_parent">
  <div className="co">
    <div className="slides">
      
        <div className="container ">
          <div className="row margin_class">
          <div className=" m slide_1 col-sm-12 col-md-12 col-lg-1">
          <div className="slide_info ">
          <p>Modhera Sun Temple</p>
        </div>
      </div>
      <div className="m slide_1 slide_2 col-sm-12 col-md-12 col-lg-1">
        <div className="slide_info">
          <p>Adi Annamalai temple</p>
        </div>
      </div>
      <div className="m slide_1 slide_3 col-sm-12 col-md-12 col-lg-1">
        <div className="slide_info">
          <p>Western Ghats</p>
        </div>
      </div>
      <div className="m slide_1 slide_4 col-sm-12 col-md-12 col-lg-1">
        <div className="slide_info">
          <p>Red Fort</p>
        </div>
      </div>
      <div className="m slide_1 slide_5 col-sm-12 col-md-12 col-lg-1">
        <div className="slide_info">
          <p>Chhatrapati Shivaji Terminus</p>
        </div>
      </div>
      <div className=" m slide_1 slide_6 col-sm-12 col-md-12 col-lg-1">
        <div className="slide_info">
          <p>Bandipur National Park</p>
        </div>
      </div>
      <div className=" m slide_1 slide_7 col-sm-12 col-md-12 col-lg-1">
        <div className="slide_info">
          <p>Ganga Aarti</p>
        </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</section>



<section id="explore-fiji">
            <center>
                <h1>Locate Top Heritage Sites in India!</h1>
            </center>
            <br /><br />
            <center>
                <p>
                    <h4>
                        This map depicts the top ten historical sites in India in terms of their geographical location.<br />
                        Click on any pointer to learn more about the place and to appreciate the diversity!
                    </h4>
                </p>
            </center>
            <br /><br />
            <center>
               
                <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1qYYRFFVXIlnyy79xW_KCHQF0Arr7Qqw&ehbc=2E312F" title="Heritage Sites in India" width="60%" height="480"></iframe>
            </center>
        </section>




    </main>
  );
}

export default Home;
