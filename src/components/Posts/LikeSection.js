// Look at the number of likes on line 26. Right now it's hard coded to '100'.
// Use a piece of data coming in through props to display the correct number of likes.
// You will also add an onClick handler that utilizes `likePost` to increase the count of likes.
// (As a stretch goal, you might want to prevent your user from "liking" the same post more than once.)
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import Commen_Box from "../Comments/comment_box";
import styled from "styled-components";

const LikeSection = (props) => {
  // 🔥 Make sure the parent of LikeSection is passing the right props!
  const { likePost, numberOfLikes, postID, addComment } = props;

  //when stateCommentBox=false, hide
  //when stateCommentBox=true, show
  const [stateCommentBox, set_stateCommentBox] = useState(false);

  const cb_onClick_Like = (event) => {
    // console.log("LikeSection.js, cb_onClick detect clilck");
    likePost(postID);
  };

  const cb_onClick_Comment = (event) => {
    event.stopPropagation();
    //toggle stateCommentBox true or false
    set_stateCommentBox(!stateCommentBox);
  };

  //toggle Component_Box using stateCommentBox
  const CommentBoxDiv = styled.div`
    background-color: grey;
    /* display: block; */

    display: ${stateCommentBox ? `block` : `none`};
  `;

  return (
    <div>
      <div>
        <div className="like-section" key="likes-icons-container">
          <div className="like-section-wrapper">
            <FontAwesomeIcon icon={faHeart} onClick={cb_onClick_Like} />
          </div>
          <div className="like-section-wrapper">
            <FontAwesomeIcon icon={faComment} onClick={cb_onClick_Comment} />
          </div>
        </div>

        <p className="like-number">{numberOfLikes} likes</p>
      </div>
      {/* <CommentBoxDiv onClick={cb_onClick_Comment}> */}
      <CommentBoxDiv>
        <Commen_Box postID={postID} addComment={addComment} />
      </CommentBoxDiv>
    </div>
  );
};

export default LikeSection;

/*

*/
