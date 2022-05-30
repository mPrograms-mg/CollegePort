import React, { useEffect } from "react";

function External() {

  useEffect(() => {
    window.location.href = "https://www.interviewbit.com";
  }, []);


}

export default External;