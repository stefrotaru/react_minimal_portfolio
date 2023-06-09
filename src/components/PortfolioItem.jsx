/* eslint-disable react/prop-types */
// import React from 'react';

function PortfolioItem({ title, imgUrl, stack, link, shortDescription }) {
  return (
    <div className="portfolio-item-wrapper grid drop-shadow-lg dark:drop-shadow-lg">
      <div
        id="appear-l-r"
        className="border-2 dark:border-zinc-500 rounded-md overflow-hidden portfolio-item hide"
      >
        <a href={link} target="_blank" rel="noreferrer">
          <img
            src={imgUrl}
            alt="portfolio-img"
            className="w-full h-auto object-cover cursor-pointer"
          />
        </a>
        <div className="w-full p-4">
          <h3 className="text-lg md:text-xl dark:text-zinc-300 mb-2 md:mb-3 font-semibold">
            {title}
          </h3>
          <div className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-zinc-300">
            {stack.map((item) => (
              <span
                className="inline-block px-2 py-1 font-semibold border-2 border-stone-300 dark:border-zinc-600 rounded-md"
                key={Math.random()}
              >
                {item}
              </span>
            ))}
            <p>{shortDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioItem;
