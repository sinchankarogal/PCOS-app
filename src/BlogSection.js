// // BlogPage.js
// import React from 'react';

// const BlogPage = () => {
//   // Dummy data for recent blogs
//   const recentBlogs = [
//     {
//       id: 1,
//       title: 'Understanding PCOS: Symptoms and Causes',
//       date: 'April 1, 2024',
//       author: 'Jane Doe',
//       content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
//     },
//     {
//       id: 2,
//       title: 'Managing PCOS with Diet and Exercise',
//       date: 'March 15, 2024',
//       author: 'John Smith',
//       content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
//     },
//     // Add more blog entries as needed
//   ];

//   return (
//     <div>
//       <h2>Recent Blogs about PCOS</h2>
//       {recentBlogs.map(blog => (
//         <div key={blog.id}>
//           <h3>{blog.title}</h3>
//           <p>Date: {blog.date}</p>
//           <p>Author: {blog.author}</p>
//           <p>{blog.content}</p>
//           <hr />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default BlogPage;

import React from 'react';
import './BlogSection.css'


const BlogPage = () => {
  const recentBlogs = [
    {
      id: 1,
      title: 'Understanding PCOS: Symptoms and Causes',
      date: 'April 25, 2024',
      author: 'Jane Doe',
      content: 'WHO supports the generation of statistics on how common infertility and its causes (such as PCOS) are',
      image: 'https://www.fda.gov/files/iStock-1305106395.jpg',
      link: 'https://www.who.int/news-room/fact-sheets/detail/polycystic-ovary-syndrome?gad_source=1&gclid=CjwKCAjwt-OwBhBnEiwAgwzrUoLbNyzaQom_ifR7MekRCcTRqzh0WTu-U7yWop5zvFwQfrUKkBvccRoC8zcQAvD_BwE'
    },
    {
      id: 2,
      title: 'Breaking down PCOS ',
      date: 'Jan 8, 2024',
      author: 'Dr. Renuka Dangare',
      content: 'Everything you need to know about PCOS ',
      image: 'https://www.motherhoodindia.com/wp-content/uploads/2023/07/8.png',
      link: 'https://proactiveforher.com/blogs/pcos/breaking-down-pcos/'
    },
    {
      id: 3,
      title: 'Living with PCOS: Tips for Daily Life',
      date: 'February 22, 2024',
      author: 'BY TEAM VEERA',
      content: 'DOES PCOS CAUSE HIGH CHOLESTEROL?',
      image: 'https://d2avcgftbrgp6g.cloudfront.net/wp-content/uploads/2024/01/iStock-1280587810.jpg',
      link: 'https://veerahealth.com/does-pcos-cause-high-cholesterol/'
    },
    {
      id: 4,
      title: 'PCOS and Insulin Resistance: Everything You Need to Know',
      date: 'Mar 20, 2023',
      author: 'Amy Plano',
      content: 'How are PCOS and Insulin Resistance Related? ',
      image: 'https://thepcosdietitian.com/wp-content/uploads/PCOS-and-Insulin-Resistance-2.png',
      link: 'https://thepcosdietitian.com/pcos-and-insulin-resistance/'
    },
    {
      id: 5,
      title: 'PCOS diet',
      date: 'April 11, 2024',
      author: 'Julia Zakrzewski',
      content: 'The Best PCOS Registered Dietitian Nutritionist: Costs & More',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoe4lQ3OTVmozLp8T3pTO6Agxb-agzyVZ89vemjpcwSQ&s',
      link: 'https://www.usenourish.com/blog/pcos-nutritionist'
    },
    {
      id: 6,
      title: 'PCOS and eating behaviour',
      date: 'April 10, 2024',
      author: 'Eka Melson',
      content: 'Research Request: PCOS and eating behaviour',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVQrhjd1yIL2C74TYSLCLDLBaPVjkKjYtWeFpx94yoVQ&s',
      link: 'https://blog.verity-pcos.org.uk/'
    },
  ];

//   return (
//     <div>
//       <h2>Recent Blogs about PCOS</h2>
//       <div className="blog-container">
//         {recentBlogs.map(blog => (
//           <div key={blog.id} className="blog-entry">
//             <a href={blog.link} target="_blank" rel="noopener noreferrer">
//               <img src={blog.image} alt={blog.title} className="blog-image" />
//             </a>
//             <h3><a href={blog.link} target="_blank" rel="noopener noreferrer">{blog.title}</a></h3>
//             <p>Date: {blog.date}</p>
//             <p>Author: {blog.author}</p>
//             <p>{blog.content}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BlogPage;


return (
  <div>
    <h2 className="blog-heading">Recent Blogs about PCOS</h2>
    <div className="blog-container">
      {recentBlogs.map(blog => (
        <div key={blog.id} className="blog-entry">
          <a href={blog.link} target="_blank" rel="noopener noreferrer">
            <img src={blog.image} alt={blog.title} className="blog-image" />
          </a>
          <h3><a href={blog.link} target="_blank" rel="noopener noreferrer">{blog.title}</a></h3>
          <p>Date: {blog.date}</p>
          <p>Author: {blog.author}</p>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  </div>
);
};

export default BlogPage;