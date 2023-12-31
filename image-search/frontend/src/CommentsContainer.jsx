import React, { useState, useEffect, useContext } from 'react';
import './comments.css';
import line from "./images/Pline.png"
//import DiscussionContext from '../contexts/discussion-context';

import { useNavigate } from 'react-router-dom';
function CommentsForum() {
  const [newComment, setNewComment] = useState('');
  const [newReplies, setNewReplies] = useState('');
  const [showReplies, setShowReplies] = useState({}); //show individual replies from dropdown
  const [replyCounts, setReplyCounts] = useState({});//responsible for tracking reply counts
 // const navigate = useNavigate();
 const [sortedComments, setComments] = useState([]);
//const {discussionsData} = useContext(DiscussionContext)
//console.log("discussionsData info",discussionsData.id)
  //const {commentsData}
  //const { commentsData: comments }  = useContext(CommentsContext)
  //

  const navigate = useNavigate();
  //COMMENTS TO TEST 
  const comments = [
    { id: 1, author: 'User: John Doe ', text: 'This is the first comment to test the length of the comments container but how far will the comment container go,lorem borem dorem This is the first comment to test the length of the comments container but how far will the comment container go,lorem borem dorem' },
    { id: 2, author: 'User: Alice Smith', text: 'This is the second comment' },
  ]; 
  
 ////Reples fetch 
 const [replies, setReplies] = useState([]);

//console.log("discussion data",discussionsData[0].id)
////////////////////////////////////////////////////////////////GET COMMENTS FROM BACKEND///////////////////////////////////////////////////////////////////////////////////////////////////////////////

 useEffect(() => {
    // Define your API endpoint for fetching comments by discussion ID
 // const apiUrl = `api/comments/${discussionsData.id}`;
    // Fetch data from the API
    fetch("apiUrl")
      .then((response) => response.json())
      .then((data) => {
        // Assuming the data is an array of comments
        // console.log("comments data",data)
        setComments(data);
       // setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error('Error fetching comments:', error);
       // setLoading(false); // Set loading to false in case of an error
      });
  }, [sortedComments]); 

  // const comments = sortedComments.slice().sort((a, b) => b.timestamp - a.timestamp);
// console.log("sortedComments",comments) 

////////////////////////////////////////////////////////////////GET REPLIES FROM BACKEND///////////////////////////////////////////////////////////////////////////////////////////////////////////////


 useEffect(() => {
   // Define your API endpoint
   const apiUrl = 'api/get-replies';

   // Fetch data from the API
   fetch(apiUrl)
     .then((response) => response.json())
     .then((data) => {
       // Assuming the data is an array of replies
       setReplies(data);
     })
     .catch((error) => {
       console.error('Error fetching replies:', error);
     });
 }, [replies]);
//console.log("replies",replies)

///////////////////////////////////////////////////////////////CODE FOR COMMENTS & REPLIES////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //CODE THAT ALLOWS DROP DOWN for Replies
  useEffect(() => {
    // Calculate and update reply counts for each comment
    const counts = {};
    comments.forEach((comment) => {
      const count = replies.filter((reply) => reply.commentId === comment.id).length;
      counts[comment.id] = count;
    });
    setReplyCounts(counts);
  }, []); // Empty dependency array to run this effect once

  // Function to toggle the visibility of replies for a comment
  const toggleReplies = (commentId) => {
    setShowReplies((prevState) => ({
      ...prevState,
      [commentId]: !prevState[commentId],
    }));
  };

  
////////////////////////////////////////////////////////////SEND COMMENT BACKEND///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Create an object with the data to send
    console.log("word", newComment)
    const data = {
      username: "john",
      comment: newComment,
      discussionBoardId: discussionsData.id, // Replace with the actual discussion board ID
    };

    // Send a POST request using the fetch API
    fetch('api/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
          setNewComment('');

          // Clear the search input field after submission
          setSearchValue('');
        }
        return response.json();
      })
      .then((responseData) => {
        // Handle the response here (e.g., show a success message)
        console.log('Data sent successfully:', responseData);

        // Clear the comment field after submission
      
      })
      .catch((error) => {
        console.error('Error sending data:', error);
      });

      setNewComment('');
  };


///////////////////////////////////////////////////////////////////////SEND REPLIES BACKEND////////////////////////////////////////////////////////////////////////////////////////////////////////

//HANDLE CHANGE FOR REPLIES
const handleRepliesChange = (event) => {
    setNewReplies(event.target.value);
  };



  //SEND REPLIES TO BACKEND
  const sendReplyBackend = (event, commentId) => {
    event.preventDefault(); // Prevent the default form submission

    // Create an object with the data to send
    const data = {
        username: "repliying user",
        commentId: commentId, // Replace with the actual discussion board ID
        text: newReplies,
    };
    
    console.log("send replies baclend", data)
    // Send a POST request using the fetch API
    fetch('api/replies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
          setNewComment('');
        }
        return response.json();
      })
      .then((responseData) => {
        // Handle the response here (e.g., show a success message)
        console.log('Data sent successfully:', responseData);

        // Clear the comment field after submission
      
      })
      .catch((error) => {
        console.error('Error sending data:', error);
      });
      setNewReplies('');
    }


    // const login = ()=> {
    //   navigate("/login");
    //   console.log("log")
    // }

    const login = () => {
      console.log("log")
      navigate("/login");
    }
  return (
    <div>
  {/* <div className = "head">Comments</div> */}
  
        {/* Comment Section */}
<div className="comment-section">
{/* COMMENT FORM */}
  {/* <form className="comment-form" onSubmit={handleSubmit}>
    <textarea
      placeholder="Add a comment"
      value={newComment}
      onChange={handleCommentChange}
    ></textarea>
    <button type="submit">Submit</button>
  </form> */}

  {/* Individual Comments */}
  {comments.reverse().map((comment) => (
    <div className="comment" key={comment.id}>
      {/* <div className="comment-header">
        <span className="comment-author">{comment.author}
        <img src={line} alt="Decorative Line" className="line-image" />
        </span>
        {/* <img src={line} alt="Decorative Line" className="line-image" /> */}
        {/* <span className="comment-date"></span> */}
      {/* </div> */} 

      <div className="comment-header">
  <span className="comment-author">
    {comment.author}
  </span>
    <img src={line} alt="Decorative Line" className="line-image" />
</div>

      <div className="comment-content">{comment.text}</div>
      <div className="comment-actions">
        <button
          className="reply-button"
          onClick={() => login()}
        >
          {showReplies[comment.id] ? "Hide Replies" : "Show Replies"}
        </button>
      </div>
      {/* <div className="comment-actions"> */}
        {/* <button
          className="reply-button"
          onClick={() => toggleReplies(comment.id)}
        >
          {showReplies[comment.id] ? "Hide Replies" : "Show Replies"}
      //   </button> */}
      {/* // </div> */}

      {/* Replies */}
      {/* {showReplies[comment.id] && (
        <div className="replies">
          {/* Reply Form */}
            {/* <form className="comment-form" onSubmit={(e) =>sendReplyBackend(event, comment.id)}>
                <textarea
                placeholder="Add a comment"
                value={newReplies}
                onChange={handleRepliesChange}
                ></textarea>
                <button type="submit"></button>
            </form>
          {replies
            .filter((reply) => reply.commentid === comment.id)
            .map((reply) => (
              <div className="reply" key={reply.id}>
                <span className="reply-author">{reply.username}</span>
                <span className="reply-text">{reply.text}</span>
              </div>
            ))}
        </div> */} 
      {/* )} */}
    </div>
  ))}

  {/* More comments can be added here */}
</div>

  

      {/* <footer>
        &copy; 
      </footer> */}
    </div>
  );
}

export default CommentsForum;