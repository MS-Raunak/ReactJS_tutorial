import { useEffect, useState } from "react";

function Textform(props) {
  let [text, setText] = useState("");
  let [text1, setText2] = useState("");

  let [color, setColor] = useState("#c0392b");

  //append the text
  const handleChange = (event) => {
    setText(event.target.value);
  };

  //Speak
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    if (text.length == 0) {
      msg.text = "Pahile likho kuch";

      window.speechSynthesis.speak(msg);
      return;
    }
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  //helper function, checking whether the text is available or not
  function isTextAvailable() {
    if (text.length == 0) {
      alert("No text available!");
      return;
    }
  }


  // change text into uppercase letter
  const changeInUpper = () => {
    isTextAvailable();
    let upper = text.toUpperCase();
    setText(upper);
    props.showAlert("Converted in uppercase", "Success")
  };

  // change text into lowercase letter
  const changeLower = () => {
    isTextAvailable();
    setText(text.toLocaleLowerCase());
    props.showAlert("Converted in lowercase", "Success")
  };

  //change text color
  const changeColor = () => {
    isTextAvailable();
    let colors = [
      "#2ecc71",
      "#8e44ad",
      "#c0392b",
      "#f1c40f",
      "#2c3e50",
      "#051453",
      "#5BCEFA",
    ];
    let min = 0;
    let max = 6;

    let x = Math.floor(Math.random() * (max - min + 1) + min);
    color = colors[x];
    setColor(color);
    props.showAlert("Text color has been changed!", "Success")
  };

  //clear last character
  const clearLastChar = () => {
    isTextAvailable();
    let temp = "";
    for (let i = 0; i < text.length - 1; i++) {
      temp += text.charAt(i);
    }

    text = temp;
    setText(text);
    props.showAlert("Last Character Removed", "Success")
  };

  //clear all text
  const clearText = function () {
    isTextAvailable();
    text = "";
    setText(text);
    props.showAlert("Text cleared!", "Success")
  };

  //change theme
  let flag = true;
  const changeTheme = () => {
    if(flag){
      document.querySelector("body").style.backgroundColor = "black";
      document.querySelector("body").style.color = "white";
      document.querySelector(".theme").style.backgroundColor = "white"
      document.querySelector(".theme").style.color = "black"
      document.querySelector(".theme").innerHTML = "Light theme"
      flag=false;
    }

    else {
        document.querySelector(".theme").style.backgroundColor = "black"
      document.querySelector(".theme").style.color = "white"
      document.querySelector(".theme").innerHTML = "Dark theme"
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("body").style.color = "black";

        flag = true;
      }
  };

  //undo text
  // const undoText = () => {
  //     // isTextAvailable();
  //     console.log(storage);
  //     setText(storage)
  // }


  //copy all text
  const copyText = () => {
    isTextAvailable()
    let txt = document.getElementById('mybox');
    // txt.select()
    navigator.clipboard.writeText(txt.value)
    // alert("Text Copied")
    props.showAlert("Copied to Cleapboar", "Success")
  }

  //Remove extra spaces
  const removeExtraSpace = () => {
    let strArr = text.split(/[ ]+/)
    setText(strArr.join(" "));
    props.showAlert("Removed extra spaces!", "Success")
  }

  useEffect(() => {
    // alert("Color changed")
  }, [color]);

  return (
    <>
      <div className={`mb-3 text-${props.txtColor}`}>
        <h2 className="my-3">{props.heading}</h2>
        <textarea
          className={`form-control bg-${props.bgColor}`}
          style={{ color: color }}
          value={text}
          onChange={handleChange}
          id="mybox"
          rows="8"
          placeholder="enter text here"
        ></textarea>
      </div>
      <button className="btn btn-warning mx-2 my-2" onClick={speak}>
        Speak
      </button>
      <button className="btn btn-primary" onClick={changeInUpper}>
        Convert to Uppercase
      </button>
      <button className="mx-3 btn btn-primary" onClick={changeLower}>
        Convert to Lowercase
      </button>
      <button className="mx-3 btn btn-primary" onClick={changeColor}>
        Change text color
      </button>

      <button className="mx-3 btn btn-danger" onClick={clearLastChar}>
        Clear Last Character
      </button>
      <button className="mx-3 btn btn-danger" onClick={clearText}>
        Clear Text
      </button>
      {/* <button className="mx-3 btn btn-success" onClick={undoText}>Undo Text</button> */}
      <button className="mx-3 btn btn-dark txt-white theme" onClick={changeTheme}>
        Dark Theme
      </button>

      <button className="mx-3 btn btn-primary" onClick={copyText}>
        Copy Text
      </button>

      <button className="mx-3 btn btn-primary" onClick={removeExtraSpace}>
        Remove extra space
      </button>

      <div className={`container my-3 text-${props.txtColor}`}>
        <h3>Your text summary</h3>
        <p>
          {text != "" ? text.trim().split(" ").length : 0} word and{" "}
          {text.trim().length} character
        </p>
        <p>{0.009 * text.trim().split(" ").length} minute to read</p>
        <h3>Preview</h3>
        <p>{(text.length > 0) ? text : "Enter some text inside box"}</p>
      </div>
    </>
  );
}

export default Textform;
