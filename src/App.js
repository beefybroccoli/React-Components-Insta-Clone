/* 
  Start here and work your way down the nested components.
  Not all files in the project need code added.
  Look at each file to see what props need to be passed!
*/

// Import the state hook
import React, { useState, useEffect } from "react";
// Import the Posts (plural!) and SearchBar components, since they are used inside App component
// Import the dummyData
import "./App.css";
import dummyData from "./dummy-data";
import SearchBoar from "./components/SearchBar/SearchBar";
import Posts from "./components/Posts/Posts";

const App = () => {
  // Create a state called `posts` to hold the array of post objects, **initializing to dummyData**.
  const [statePosts, set_statePosts] = useState(dummyData);
  // This state is the source of truth for the data inside the app. You won't be needing dummyData anymore.
  // To make the search bar work (which is stretch) we'd need another state to hold the search term.
  const [stateSearch, set_stateSearch] = useState(null);

  useEffect(() => {
    if (stateSearch) {
      // console.log("App.js stateSearch = ", stateSearch);
      const updatedPosts = dummyData.filter((eachPost) => {
        if (eachPost.username.toLowerCase() === stateSearch.toLowerCase()) {
          return eachPost;
        }
      });

      // console.log("App.js updatedPosts = ", updatedPosts);

      //update statePosts
      set_statePosts(updatedPosts);

      //reset stateSearch to null
      set_stateSearch(null);
    } //end if block
  }, stateSearch);
  const likePost = (postId) => {
    /*
      This function serves the purpose of increasing the number of likes by one, of the post with a given id.

      The state of the app lives at the top of the React tree, but it wouldn't be fair for nested components not to be able to change state!
      This function is passed down to nested components through props, allowing them to increase the number of likes of a given post.

      Invoke `setPosts` and pass as the new state the invocation of `posts.map`.


      The callback passed into `map` performs the following logic:
        - if the `id` of the post matches `postId`, return a new post object with the desired values (use the spread operator).
        - otherwise just return the post object unchanged.
     */

    const updatedPosts = statePosts.map((eachPost) => {
      if (eachPost.id === postId) {
        return { ...eachPost, likes: eachPost.likes + 1 };
      } else {
        return eachPost;
      }
    });

    set_statePosts(updatedPosts);
  };

  const addComment = (new_comment, postId) => {
    const updatedPosts = statePosts.map((eachPost) => {
      if (eachPost.id === postId) {
        const updatedComments = eachPost.comments;
        updatedComments.push(new_comment);
        return {
          ...eachPost,
          comments: updatedComments,
        };
      } else {
        return eachPost;
      }
    });

    set_statePosts(updatedPosts);
  };

  return (
    <div className="App">
      <h2>App</h2>
      <SearchBoar set_stateSearch={set_stateSearch} />
      <Posts likePost={likePost} posts={statePosts} addComment={addComment} />
      {/* Add SearchBar and Posts here to render them */}
      {/* Check the implementation of each component, to see what props they require, if any! */}
    </div>
  );
};

export default App;
