import React, { FC } from "react";

const ReviewSwiperItem: FC<FloristReview> = ({
  author,
  rating,
  review,
  title,
}) => {
  return (
    <div className="max-w-[80%] md:max-w-full mx-auto">
      <h2 className="text-2xl md:text-3xl font-normal text-center text-balance mb-3">
        {title}
      </h2>
      <p className="text-balance text-normal md:text-xl text-center">{`"${review}"`}</p>
      <div className="mx-auto py-8">
        <p className="font-montserrat uppercase text-center tracking-[0.4rem] text-xs font-semibold">
          {author}
        </p>
      </div>
    </div>
  );
};

export default ReviewSwiperItem;
