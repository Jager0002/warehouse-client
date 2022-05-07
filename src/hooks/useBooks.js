import { useEffect, useState } from "react";

const useBooks = (quantity) => {
  const [books, setBooks] = useState();
  useEffect(() => {
    fetch(`http://localhost:5000/books?quantity=${quantity}`)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      });
  }, [quantity]);
  return { books, setBooks };
};

export default useBooks;
