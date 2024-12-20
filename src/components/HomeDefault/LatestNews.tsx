"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

const LatestNews: React.FC = () => {
  return (
    <>
      <div className="blog-area ptb-120 bg-image">
        <div className="container">
          <div className="section-title">
            <span>Info Update!</span>
            <h2>
              Our Latest <b>News</b>
            </h2>

            <div className="bg-title">Blog</div>

            {/* <Link href="" className="btn btn-primary">
              View All News
            </Link> */}

            <div className="bar"></div>
          </div>

          <div className="row">
            <Swiper
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 6000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 3,
                },
              }}
              modules={[Pagination, Autoplay]}
              className="blog-slides"
            >
              <SwiperSlide className="col-lg-12 col-md-12">
                <div className="single-blog-post">
                  <div className="blog-image">
                    <Link href="">
                      <Image
                        src="/images/news1.jpg"
                        alt="blog"
                        width={800}
                        height={550}
                      />
                    </Link>

                    {/* <div className="post-tag">
                      <Link href="/blog/details">DBF</Link>
                    </div> */}
                  </div>

                  <div className="blog-post-content">
                    <span className="date">15 November 2024</span>
                    <h3>
                      <Link href="">
                       Visit by Shri Sachindra Pratap Singh 
                      </Link>
                    </h3>
                    <p>
                    Shri Sachindra Pratap Singh, Secretary, DEPwD, Maharashtra State, visited DBF During his visit, a detailed presentation on DBF and the Purple Jallosh event was given, which he greatly appreciated The meeting was also attended by Shri Pravin Puri, State Commissioner for PwD Maharashtra, and Shri Omprakash Deshmukh, Managing Director of DBF.

                    </p>
                    {/* <Link href="/blog/details" className="read-more-btn">
                      Read More <i className="icofont-double-right"></i>
                    </Link> */}
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="col-lg-12 col-md-12">
                <div className="single-blog-post">
                  <div className="blog-image">
                    <Link href="">
                      <Image
                        src="/images/news2.jpg"
                        alt="blog"
                        width={800}
                        height={550}
                      />
                    </Link>

                    {/* <div className="post-tag">
                      <Link href="/blog/details">DBF</Link>
                    </div> */}
                  </div>

                  <div className="blog-post-content">
                    <span className="date">22 October 2024</span>
                    <h3>
                      <Link href="">
                       Stakeholders Meeting for Purple Jallosh
                      </Link>
                    </h3>
                    <p>
                    A meeting gathered representatives from special schools, shared workshops, and rehabilitation centers in the PCMC area to discuss the upcoming Purple Jallosh event. Shri Omprakash Deshmukh, Managing Director of DBF, presided alongside advisors Shri Vijay Kanhekar and Shri Abhijit Murugkar, with CEO Paresh Gandhi emphasizing its significance.

                    </p>
                    {/* <Link href="/blog/details" className="read-more-btn">
                      Read More <i className="icofont-double-right"></i>
                    </Link> */}
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="col-lg-12 col-md-12">
                <div className="single-blog-post">
                  <div className="blog-image">
                    <Link href="">
                      <Image
                        src="/images/news3.jpg"
                        alt="blog"
                        width={800}
                        height={550}
                      />
                    </Link>

                    {/* <div className="post-tag">
                      <Link href="/blog/details">DBF</Link>
                    </div> */}
                  </div>

                  <div className="blog-post-content">
                    <span className="date">18 December 2024</span>
                    <h3>
                      <Link href="">
                       Address by Shri Pravin Puri to Parents of Children with Disabilities   
                      </Link>
                    </h3>
                    <p>
                    Shri Pravin Puri, Hon. Commissioner for PwDs Maharashtra State, addressed parents of children with disabilities in the PCMC area. The event, aimed at stakeholders, highlighted the significance of the upcoming Purple Jallosh, fostering awareness and collaboration to drive inclusivity and better opportunities.

                    </p>
                    {/* <Link href="/blog/details" className="read-more-btn">
                      Read More <i className="icofont-double-right"></i>
                    </Link> */}
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="col-lg-12 col-md-12">
                <div className="single-blog-post">
                  <div className="blog-image">
                    <Link href="">
                      <Image
                        src="/images/news4.jpg"
                        alt="blog"
                        width={800}
                        height={550}
                      />
                    </Link>

                    {/* <div className="post-tag">
                      <Link href="/blog/details">DBF</Link>
                    </div> */}
                  </div>

                  <div className="blog-post-content">
                    <span className="date">11 December 2024</span>
                    <h3>
                      <Link href="/blog/details">
                       UPSC Trainee Officers Visit DBF
                      </Link>
                    </h3>
                    <p>
                    UPSC trainee officers from YASHADA attended an orientation session at DBF, where they were introduced to the organizations activities and initiatives. The session also highlighted the significance of the upcoming Purple Jallosh event, fostering awareness and engagement with efforts towards inclusivity and empowerment for Persons with Disabilities (PwDs).
                    </p>
                    {/* <Link href="/blog/details" className="read-more-btn">
                      Read More <i className="icofont-double-right"></i>
                    </Link> */}
                  </div>
                </div>
              </SwiperSlide>

              {/* <SwiperSlide className="col-lg-12 col-md-12">
                <div className="single-blog-post">
                  <div className="blog-image">
                    <Link href="/blog/details">
                      <Image
                        src="/images/blog4.jpg"
                        alt="blog"
                        width={800}
                        height={550}
                      />
                    </Link> 

                    <div className="post-tag">
                      <Link href="/blog/details">IT</Link>
                    </div>
                  </div>

                  <div className="blog-post-content">
                    <span className="date">28 Feb, 2024</span>
                    <h3>
                      <Link href="/blog/details">
                        How To Setup Redux In React Next Application
                      </Link>
                    </h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum.
                    </p>
                    <Link href="/blog/details" className="read-more-btn">
                      Read More <i className="icofont-double-right"></i>
                    </Link>
                  </div>
                </div>
              </SwiperSlide> */}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestNews;
