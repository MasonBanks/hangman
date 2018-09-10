import React from "react";

export default function Score({ lives }) {
  return <h2>Lives Remaining: {lives === -1 ? "😥" : lives} </h2>;
}
