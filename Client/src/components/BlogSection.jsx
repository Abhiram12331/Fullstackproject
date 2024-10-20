import React from "react";

import "./blog.css";
function BlogSection() {
  return (
    
    <div id="BlogSection" className="container">
      <div className="row">
      <div className="col-12  "><h3 className="h33">Blogs and Articles</h3></div>
      <div id="blog-par" className=" col-lg-9">
            <div className="blog-content">
                <div className="blog-img">
                    <img className="img-responsive" src="https://www.efghfoods.com/wp-content/uploads/2022/01/indian-food-2-3.jpg" />
                </div>
                <div className="blog-info">
                    <ul>
                        <li>CulturalIndia.net</li>
                    </ul>
                    <h4><a href="https://www.culturalindia.net/indian-food/">Cultural India: Indian Food</a></h4>
                    <p>The traditional food of India has been widely appreciated for its fabulous use of herbs and spices. Indian cuisine is known for its large assortment of dishes.</p>
                </div>
            </div>
            <div className="blog-content">
                <div className="blog-img">
                    <img className="img-responsive" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTayfiy5ZdbssjWkZXaC2JMkZ6Axqy_4CTHOg&usqp=CAU" />
                </div>
                <div className="blog-info">
                    <ul>
                        <li>Soumik's Blog</li>
                    </ul>
                    <h4><a href="http://soumikbhattacharya.blogspot.com/2006/06/unity-of-india-in-diversity.html">The Unity of India in Diversity: Religions</a></h4>
                    <p>Diversity characterizes India. The diverse characters of India are strongly unified and perfectly assimilated to emerge as a one single nation.</p>
                </div>
            </div>
        </div>
        <div id="blog-par" className="col-lg-9">
            <div className="blog-content">
                <div className="blog-img ">
                    <img className="img-responsive" src="https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2023/09/What-language-is-spoken-in-India.jpg?fit=1000%2C600&ssl=1=i&url=https%3A%2F%2Fwww.tusktravel.chttps://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2023/09/What-language-is-spoken-in-India.jpg?fit=1000%2C600&ssl=1om%2Fblog%2Findia-linguistic-diversity-what-language-is-spoken-in-india%2F&psig=AOvVaw0Kxjr-1A44tVsuXgX4c0XV&ust=1726474334367000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCODrj6TAxIgDFQAAAAAdAAAAABAE" />
                </div>
                <div className="blog-info">
                    <ul>
                        <li>translatemedia</li>
                        <li>31.05.2016</li>
                    </ul>
                    <h4><a href="https://www.translatemedia.com/translation-blog/look-indias-amazing-linguistic-diversity/" target="_blank">A Look at India’s Amazing Linguistic Diversity</a></h4>
                    <p>India is a big country and it packs in an astonishing array of languages. It’s unlikely that any other country in the world matches India for linguistic diversity.</p>
                </div>
            </div>
            <div className="blog-content">
                <div className="blog-img">
                    <img className="img-responsive" src="https://d.newsweek.com/en/full/1669799/diwali-celebrations.jpg?w=1600&h=900&q=88&f=a41dbae89faa01003f9e4686e91ebe4c" />
                </div>
                <div className="blog-info">
                    <ul>
                        <li>Treebo</li>
                        <li>01.02.2018</li>
                    </ul>
                    <h4><a href="https://www.treebo.com/blog/religious-festivals-of-india/" target="_blank">The Spectrum of National Festivals of India</a></h4>
                    <p>Such diverse cultures, culminating in such varied festivals and that too under the name of a single country; such is the greatness of Indian culture.</p>
                </div>
            </div>
        </div>
        </div> 
    </div>


  );
}

export default BlogSection;
