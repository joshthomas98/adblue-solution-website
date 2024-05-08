import React, { createContext, useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../Firebase";

export const ReviewsContext = createContext();

export const ReviewsProvider = ({ children }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const reviewsRef = ref(database, "reviews");
    onValue(reviewsRef, (snapshot) => {
      const reviewsData = snapshot.val();
      if (reviewsData) {
        const reviewsList = Object.values(reviewsData);
        setReviews(reviewsList);
      } else {
        setReviews([]);
      }
    });
  }, []);

  return (
    <ReviewsContext.Provider value={{ reviews }}>
      {children}
    </ReviewsContext.Provider>
  );
};
