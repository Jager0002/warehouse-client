import { useEffect, useState } from "react";

const useBooks = (quantity) => {
  const [books, setBooks] = useState();
  useEffect(() => {
    fetch(
      `https://shrouded-plateau-40134.herokuapp.com/books?quantity=${quantity}`
    )
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      });
  }, [quantity]);
  return { books, setBooks };
};

export default useBooks;
