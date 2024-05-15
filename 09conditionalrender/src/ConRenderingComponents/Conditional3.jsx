import React from "react";

function Conditional3() {
    // const isAuthenticated = false;
    const isAuthenticated = true;
  return (
    <div>
      {
      isAuthenticated && ( <button onClick={() => console.log("Logged out")}>Logout</button>)
      }
    </div>
  );
}

export default Conditional3;
