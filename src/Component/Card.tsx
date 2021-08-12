import React from "react";
interface Props {
  Name: string;
  imageLink: string;
  description: string;
  firstname?: string;
  lastname?: string;
}
const Card: React.FC<Props> = ({
  Name,
  imageLink,
  description,
  firstname,
  lastname,
}) => {
  if (imageLink == " " || imageLink == null) {
    imageLink =
      "https://tse1.mm.bing.net/th?id=OIP.xpiIO-J0gjTyesdqa_CI7gHaFj&pid=Api&P=0&w=228&h=172";
  }

  return (
    <div className="flex flex-col space-y-5 mb-5 w-full rounded-lg justify-center text-center lg:justify-start lg:text-left md:justify-start md:text-left  md:flex-row lg:flex-row  space-x-4 py-4 my-2 bg-gray-200 lg:mx-10 hover:bg-gray-600 duration-200 hover:text-white font-serif ">
      <div>
        <img
          className=" flex justify-center mx-auto lg:justify-start lg:mx-5 h-20 w-20 rounded-full lg:mt-2 md:mt-10"
          src={imageLink}
          onError={(reflink: any) => {
            reflink.target.src =
              "https://tse3.mm.bing.net/th?id=OIP.y3wsmmId6Am_KXzb7XKS4QHaEC&pid=Api&P=0&w=277&h=152";
          }}
        />
      </div>
      <div className="flex-col space-y-3">
        <h2 className=" text-lg md:text-xl lg:text-2xl font-semibold">
          {Name}
        </h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

Card.defaultProps = {};

export default Card;
