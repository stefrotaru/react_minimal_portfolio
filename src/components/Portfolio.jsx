// import React from 'react';
import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";
import Title from "./Title";

function Portfolio() {
  return (
    <>
      <Title className="text-center">Projects</Title>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {portfolio.map((project) => (
            <PortfolioItem
              key={Math.random()}
              imgUrl={project.imgUrl}
              title={project.title}
              stack={project.stack}
              link={project.link}
              shortDescription={project.shortDescription}
              longDescription={project.longDescription}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Portfolio;
