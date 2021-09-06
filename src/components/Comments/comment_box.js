import React, { useState } from "react";

const Comment_Box = (props) => {
  const { postID, addComment } = props;

  const initial_state = { user: "", comment: "" };
  const [dataForm, set_dataForm] = useState(initial_state);
  const cb_onChange = (event) => {
    // const { name, value } = event.target;
    // console.log(event.target.name);
    // console.log(event.target.value);

    // set_dataForm({ ...dataForm, name: value });
    // const { name, value } = event.target;
    set_dataForm({ ...dataForm, [event.target.name]: event.target.value });
  };
  const cb_onSubmit = (event) => {
    console.log("line 13, called on cb_onSubmit");
    event.preventDefault();
    const new_comment = {
      id: Date.now(),
      username: dataForm.user,
      text: dataForm.comment,
    };
    console.log("dataForm.user = ", dataForm.user);
    console.log("dataForm.comment = ", dataForm.comment);

    console.log("new_comment = ", new_comment);
    addComment(new_comment, postID);
    set_dataForm(initial_state);
  };

  return (
    <form onSubmit={cb_onSubmit}>
      <label>
        user:{" "}
        <input
          type="text"
          value={dataForm.user}
          onChange={cb_onChange}
          name="user"
        />
      </label>
      <br />
      <label>
        comment :{" "}
        <input
          type="text"
          value={dataForm.comment}
          onChange={cb_onChange}
          name="comment"
        />
      </label>
      <br />
      <button>Submit</button>
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
