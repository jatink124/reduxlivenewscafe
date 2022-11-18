import React from 'react'

function CardOne() {
  return (
    <div><section id="recent-blog-posts" class="recent-blog-posts">

    <div class="container" data-aos="fade-up">

      <div class="section-header">
        <h2>Blog</h2>
        <p>Recent posts form our Blog</p>
      </div>

      <div class="row">

        <div class="col-lg-4" data-aos="fade-up" data-aos-delay="200">
          <div class="post-box">
            <div class="post-img"><img src="assets/img/blog/blog-1.jpg" class="img-fluid" alt=""/></div>
            <div class="meta">
              <span class="post-date">Tue, December 12</span>
              <span class="post-author"> / Julia Parker</span>
            </div>
            <h3 class="post-title">Eum ad dolor et. Autem aut fugiat debitis voluptatem consequuntur sit</h3>
            <p>Illum voluptas ab enim placeat. Adipisci enim velit nulla. Vel omnis laudantium. Asperiores eum ipsa est officiis. Modi cupiditate exercitationem qui magni est...</p>
            <a href="blog-details.html" class="readmore stretched-link"><span>Read More</span><i class="bi bi-arrow-right"></i></a>
          </div>
        </div>

        <div class="col-lg-4" data-aos="fade-up" data-aos-delay="400">
          <div class="post-box">
            <div class="post-img"><img src="assets/img/blog/blog-2.jpg" class="img-fluid" alt=""/></div>
            <div class="meta">
              <span class="post-date">Fri, September 05</span>
              <span class="post-author"> / Mario Douglas</span>
            </div>
            <h3 class="post-title">Et repellendus molestiae qui est sed omnis voluptates magnam</h3>
            <p>Voluptatem nesciunt omnis libero autem tempora enim ut ipsam id. Odit quia ab eum assumenda. Quisquam omnis aliquid necessitatibus tempora consectetur doloribus...</p>
            <a href="blog-details.html" class="readmore stretched-link"><span>Read More</span><i class="bi bi-arrow-right"></i></a>
          </div>
        </div>

        <div class="col-lg-4" data-aos="fade-up" data-aos-delay="600">
          <div class="post-box">
            <div class="post-img"><img src="assets/img/blog/blog-3.jpg" class="img-fluid" alt=""/></div>
            <div class="meta">
              <span class="post-date">Tue, July 27</span>
              <span class="post-author"> / Lisa Hunter</span>
            </div>
            <h3 class="post-title">Quia assumenda est et veritatis aut quae</h3>
            <p>Quia nam eaque omnis explicabo similique eum quaerat similique laboriosam. Quis omnis repellat sed quae consectetur magnam veritatis dicta nihil...</p>
            <a href="blog-details.html" class="readmore stretched-link"><span>Read More</span><i class="bi bi-arrow-right"></i></a>
          </div>
        </div>

      </div>

    </div>

  </section></div>
  )
}

export default CardOne