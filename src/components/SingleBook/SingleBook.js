import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

const SingleBook = ({ book }) => {
  const { name, image, description, price, quantity, supplier, _id } = book;
  const navigate = useNavigate();
  

  return (
    <div className="p-5 shadow rounded-md">
      <div>
        <h2 className="text-3xl ">{name}</h2>
        <p className="text-xl">Supplire: {supplier}</p>
      </div>
      <div className="grid grid-cols-3 my-2 items-center justify-items-center mt-6 gap-6">
        <div className="col-span-2">
          <img
            className="h-[350px] object-cover hover:scale"
            src={image}
            alt=""
          />
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl font-medium">{price}$</h3>
          <p className="text-xl">quantity: {quantity}</p>
          <button
            className=""
            onClick={() => navigate(`inventory/${_id}`)}
          >
            <FontAwesomeIcon icon={faArrowCircleRight} className='text-4xl'></FontAwesomeIcon>
            <p>update</p>
            
          </button>
        </div>
      </div>
      <p className="mt-6">{description}</p>
    </div>
  );
};

export default SingleBook;
