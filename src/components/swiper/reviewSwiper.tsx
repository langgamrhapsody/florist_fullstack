import React, { FC } from "react";

export interface FloristReview {
  author: string;
  rating: string;
  title: string;
  review: string;
}

const ReviewSwiper: FC<FloristReview> = ({ author, rating, review, title }) => {
  return (
    <div className="max-w-[80%] md:max-w-full mx-auto">
      <h2 className="text-2xl md:text-3xl font-normal text-center text-balance mb-3">
        {title}
      </h2>
      <p className="text-balance text-normal md:text-xl text-center">{`"${review}"`}</p>
      <div className="mx-auto py-8">
        <p className="font-montserrat uppercase text-center tracking-widest text-xs font-semibold">
          {author}
        </p>
      </div>
    </div>
  );
};

export default ReviewSwiper;
