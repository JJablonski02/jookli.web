import React from "react";

interface ContainerProps {
  header: string;
  content: string;
}

const TextContainer: React.FC<ContainerProps> = ({ header, content }) => {
  return (
    <div className=" py-10 px-10 mx-8 mt-20 border-2 border-black rounded-lg shadow-md ">
      <h3 className="text-3xl">{header}</h3>
      <p className="w-2/3 pt-4">{content}</p>
    </div>
  );
};

export default TextContainer;
