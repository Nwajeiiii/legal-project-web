import './forumPost.css';

function ForumPost( {title, content, fullName} ) {
 return (
   <div className="forum-post" data-aos="zoom-in">
     <h1 data-aos="zoom-out">{title}</h1>
     <p data-aos="zoom-out">{content}</p>
     <p
       data-aos="zoom-out"
       style={{
         color: "#AD9779",
       }}
     >
       {fullName}
     </p>
   </div>
 );
}

export default ForumPost;