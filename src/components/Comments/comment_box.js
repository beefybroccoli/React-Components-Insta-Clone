import React, { useState } from "react";

const Comment_Box = (props) => {
  const { postID, addComment } = props;

  const initial_state = { user: "", comment: "" };
  const [dataForm, set_dataForm] = useState(initial_state);
  const cb_onChange = (event) => {
    event.stopPropagation();
    // set_dataForm({ ...dataForm, name: event.target.value });
  };
  const cb_onSubmit = (event) => {
    event.preventDefault();
    // addComment();
  };

  return (
    <form onSubmit={cb_onSubmit}>
      <div>
        <label>
          user:{" "}
          <input
            type="text"
            value={dataForm.user}
            onChange={cb_onChange}
            name="user"
          />
        </label>
      </div>
      <div>
        <label>
          comment :{" "}
          <input
            type="text"
            value={dataForm.user}
            onChange={cb_onChange}
            name="comment"
          />
        </label>
      </div>
    </form>
  );
};

export default Comment_Box;

/*
    {
        id: 22,
        username: "philzcoffee",
        text: "We've got more than just coffees!",
    }
*/
