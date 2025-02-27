import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// import StarRating from "./StarRating";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating maxRating={10} color="blue" onSetRaing={setMovieRating} />
//       <p>The movie is you {movieRating}⭐ rated </p>
//     </div>
//   );
// }

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />

    {/* <StarRating
      maxRating={5}
      message={["Teribble", "Bad", "Good", "Better", "Best"]}
    />
    <StarRating maxRating={10} size={30} color="#ff2c2c" defaultRating={3} />
    <Test /> */}
  </StrictMode>
);
