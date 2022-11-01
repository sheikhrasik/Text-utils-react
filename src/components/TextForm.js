import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase" , "success");
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };

  const handleSentenceCaseClick = () => {
    let newText = (str)=> {
      return str
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
    }
    setText(newText);
    props.showAlert("Converted to sentencecase." , "success");
  };

  // const handleLowClick = () => {
  //   let newText = text.toLowerCase();
  //   setText(newText);
  // };

  const handleOnChanged = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        {/* to uppercase */}
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            value={text}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            onChange={handleOnChanged}
            id="mybox"
            rows="8"
          ></textarea>
          <button className="btn btn-primary my-3 mx-2" onClick={handleUpClick}>
            Convert to uppercase
          </button>
          <button
            className="btn btn-primary my-3 mx-2"
            onClick={handleLowClick}
          >
            Convert to lowercase
          </button>
          <button
            className="btn btn-primary my-3 mx-2"
            onClick={handleSentenceCaseClick}
          >
            Convert to sentencecase
          </button>
        </div>
      </div>

      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words & {text.length} characters
        </p>
        <p>It took {0.08 * text.split(" ").length} minutes to read the text</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter your text to preview."}</p>
      </div>
    </>
  );
}
