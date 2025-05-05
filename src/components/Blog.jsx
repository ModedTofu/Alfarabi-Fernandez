import React, { useState, useEffect, useRef } from 'react';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  
  const blogPosts = [
    {
      id: 1,
      title: "My Educational Tour: A Learning Experience beyond the Classroom",
      date: "April 7, 2023",
      excerpt: "A week-long journey exploring Manila, Subic, and Baguio as a BSIT student.",
      content: "As a BSIT student, I've always been curious about how systems work in the real world. This educational tour gave me a chance to see that for myself. Throughout the week, we visited different institutions and places that helped me connect what we study in class to how things operate in actual settings. It was an experience that combined learning, travel, and personal growth.",
      images: [
        "/DAY 1/day1 (1).JPG",
        "/DAY 2/day2 (1).JPG",
        "/DAY 3/day3 (1).JPG",
        "/DAY 4/day4 (1).JPG",
        "/DAY 5/day5 (1).JPG",
        "/BAGUIO/day6 (1).JPG"
      ]
    },
    {
      id: 2,
      title: "Day 1: City Tour – A Glimpse of Manila's Rich History and Modern Vibe",
      date: "April 7, 2023",
      excerpt: "Exploring Fort Santiago, Luneta Park, and SM Mall of Asia.",
      content: "Our first day was spent exploring the heart of Manila. We started at Fort Santiago, a powerful symbol of Filipino resilience and sacrifice. Walking through its cobblestone paths felt like a step back in time, imagining the stories of Jose Rizal and countless others who passed through its gates.\n\nNext, we visited Luneta Park, a national landmark that continues to inspire patriotism. It was humbling to stand before the Rizal Monument and reflect on the legacy of our national hero. We wrapped up the day with a visit to SM Mall of Asia (MOA), where we got to relax and enjoy one of the biggest malls in Asia.",
      images: [
        "/DAY 1/day1 (1).JPG",
        "/DAY 1/day1 (2).JPG",
        "/DAY 1/day1 (3).JPG",
        "/DAY 1/day1 (4).JPG",
        "/DAY 1/day1 (5).JPG",
        "/DAY 1/day1 (6).JPG"
      ]
    },
    {
      id: 3,
      title: "Day 2: Subic – Structure and System Management",
      date: "April 8, 2023",
      excerpt: "Learning about traffic management and law enforcement systems in Subic.",
      content: "In Subic, we visited the SBMA Seaport Department and learned about their traffic management system. It was interesting to see how they use coordination, data, and planning to keep operations running smoothly. It gave me a clearer idea of how information systems can help manage logistics and traffic.\n\nWe also went to the SBMA Law Enforcement Department. Their use of tech in monitoring and safety gave me a better understanding of how IT supports public security.",
      images: [
        "/DAY 2/day2 (1).JPG",
        "/DAY 2/day2 (2).JPG",
        "/DAY 2/day2 (3).JPG",
        "/DAY 2/day2 (4).JPG",
        "/DAY 2/day2 (5).JPG",
        "/DAY 2/day2 (6).JPG"
      ]
    },
    {
      id: 4,
      title: "Day 3: Museums and Memory",
      date: "April 9, 2023",
      excerpt: "Exploring the Museo ni Manuel Quezon and the National Museum.",
      content: "This day was all about history and heritage. We started at the Museo ni Manuel Quezon, which gave us a glimpse into the life and leadership of one of our former presidents. The exhibits were not just educational—they were inspiring.\n\nIn the afternoon, we explored the National Museum, where we viewed artworks, artifacts, and cultural pieces that reflect the soul of the Filipino people. It reminded me of how deeply rooted our identity is in our history, art, and collective struggles.",
      images: [
        "/DAY 3/day3 (1).JPG",
        "/DAY 3/day3 (2).JPG",
        "/DAY 3/day3 (3).JPG",
        "/DAY 3/day3 (4).JPG",
        "/DAY 3/day3 (5).JPG",
        "/DAY 3/day3 (6).JPG"
      ]
    },
    {
      id: 5,
      title: "Day 4: Finance and Technology in Action",
      date: "April 10 2023",
      excerpt: "Visiting Bangko Sentral ng Pilipinas and Hytec Power Inc.",
      content: "Our visit to the Bangko Sentral ng Pilipinas helped me understand the importance of stability in the financial system. I was surprised to learn how much they rely on digital systems to keep the economy running securely and efficiently.\n\nLater, we toured Hytec Power Inc, which showed us different types of training equipment used in education. It was great to see how technology is applied to support learning and workforce readiness.",
      images: [
        "/DAY 4/day4 (1).JPG",
        "/DAY 4/day4 (2).JPG",
        "/DAY 4/day4 (3).JPG",
        "/DAY 4/day4 (4).JPG",
        "/DAY 4/day4 (5).JPG",
        "/DAY 4/day4 (6).JPG"
      ]
    },
    {
      id: 6,
      title: "Day 5: Transport Systems and Urban Planning",
      date: "April 11, 2023",
      excerpt: "Exploring LRT Line 2 and the MMDA Traffic Engineering Center.",
      content: "We visited LRT Line 2 and saw how train operations are handled. It showed me how important system maintenance and monitoring are in transportation. It also reminded me of how dependent we are on well-functioning tech infrastructure.\n\nAt the MMDA Traffic Engineering Center, we learned how they collect and analyze traffic data to improve road systems. This visit really connected with our field, especially in terms of data analysis and system design.",
      images: [
        "/DAY 5/day5 (1).JPG",
        "/DAY 5/day5 (2).JPG",
        "/DAY 5/day5 (3).JPG",
        "/DAY 5/day5 (4).JPG",
        "/DAY 5/day5 (5).JPG",
        "/DAY 5/day5 (6).JPG"
      ]
    },
    {
      id: 7,
      title: "Day 6: Baguio – A Breath of Fresh Air",
      date: "April 12, 2023",
      excerpt: "Enjoying the Summer Capital of the Philippines and reflecting on our journey.",
      content: "We ended our tour with a trip to Baguio, the Summer Capital of the Philippines. After days of learning and travelling, it was refreshing to be surrounded by pine trees and cool mountain air. Baguio was the perfect place to reflect on the week's experiences and bond with fellow students.",
      images: [
        "/DAY 6/day6 (1).JPG",
        "/DAY 6/day6 (2).JPG",
        "/DAY 6/day6 (3).JPG",
        "/DAY 6/day6 (4).JPG",
        "/DAY 6/day6 (5).JPG",
        "/DAY 6/day6 (6).JPG"
      ]
    },
    {
      id: 8,
      title: "Reflection: What I Learned from Our Educational Tour",
      date: "April 13, 2023",
      excerpt: "Looking back on how this journey shaped my understanding of IT in the real world.",
      content: "This educational tour helped me realize how broad the applications of information technology can be. From traffic systems to finance, from logistics to education, IT plays a key role. I am thankful for the chance to learn outside the classroom and see how what we study can make a real impact. This experience made me more motivated to continue learning and to find ways I can contribute to future systems that help people every day.",
      images: [
        "/DAY 1/day1 (1).JPG",
        "/DAY 2/day2 (1).JPG",
        "/DAY 3/day3 (1).JPG",
        "/DAY 4/day4 (1).JPG",
        "/DAY 5/day5 (1).JPG",
        "/DAY 6/day6 (1).JPG"
      ]
    }
  ];

  useEffect(() => {
    // Auto-slide functionality
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleCardClick = (post) => {
    setSelectedPost(post);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === blogPosts.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? blogPosts.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="blog-container">
      <h1 className="blog-title">My Tech Journey Blog</h1>
      
      {selectedPost ? (
        <div className="blog-post">
          <h2 className="blog-post-title">{selectedPost.title}</h2>
          <p className="blog-post-date">
            <i className="far fa-calendar-alt"></i> {selectedPost.date}
          </p>
          <div className="blog-post-images">
            {selectedPost.images.map((image, index) => (
              <img 
                key={index} 
                src={image} 
                alt={`Blog post ${selectedPost.id} image ${index + 1}`} 
                className="blog-post-image" 
              />
            ))}
          </div>
          <div className="blog-post-content">
            {selectedPost.content.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <button 
            className="back-button" 
            onClick={() => setSelectedPost(null)}
          >
            <i className="fas fa-arrow-left"></i> Back to All Posts
          </button>
        </div>
      ) : (
        <div className="blog-slider-container">
          <button className="slider-arrow slider-arrow-left" onClick={prevSlide}>
            <i className="fas fa-chevron-left"></i>
          </button>
          
          <div className="blog-slider" ref={sliderRef}>
            <div 
              className="blog-slider-track" 
              style={{ 
                transform: `translateX(-${currentIndex * 100}%)`,
                transition: 'transform 0.5s ease-in-out'
              }}
            >
              {blogPosts.map((post) => (
                <div 
                  key={post.id} 
                  className="blog-card" 
                  onClick={() => handleCardClick(post)}
                >
                  <div className="blog-card-image-container">
                    <img 
                      src={post.images[0]} 
                      alt={post.title} 
                      className="blog-card-image" 
                    />
                    <div className="blog-card-overlay">
                      <span className="blog-card-read-more">Read Article</span>
                    </div>
                  </div>
                  <div className="blog-card-content">
                    <h3 className="blog-card-title">{post.title}</h3>
                    <p className="blog-card-date">
                      <i className="far fa-calendar-alt"></i> {post.date}
                    </p>
                    <p className="blog-card-excerpt">{post.excerpt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button className="slider-arrow slider-arrow-right" onClick={nextSlide}>
            <i className="fas fa-chevron-right"></i>
          </button>
          
          <div className="slider-dots">
            {blogPosts.map((_, index) => (
              <button 
                key={index} 
                className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
