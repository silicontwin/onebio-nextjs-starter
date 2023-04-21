import React from 'react';
import { GetServerSideProps } from 'next';

// -----------------------------------------------------------------------------

export const getServerSideProps: GetServerSideProps = async (context) => {
  const getThoughts = await fetch(
    `https://oneb.io/api/v1/feed/${process.env.ONEBIO_USERNAME}`,
    {
      method: 'GET',
      headers: {
        Authorization: `OneBio_API_KEY ${process.env.ONEBIO_API_KEY}`,
      },
    },
  );

  const thoughts = await getThoughts.json();

  return {
    props: { thoughts },
  };
};

// -----------------------------------------------------------------------------

interface BasicProps {
  thoughts: {
    url: string;
    content: string;
    feedbackStats: {
      positive: number;
      negative: number;
    };
  }[];
}

// -----------------------------------------------------------------------------

const Basic = ({ thoughts }: BasicProps) => {
  return (
    <div className="p-20">
      <ul className="flex flex-col justify-start items-start space-y-4">
        {thoughts.length !== 0 &&
          thoughts.map(
            (
              thought: {
                url: string;
                content: string;
                feedbackStats: {
                  positive: number;
                  negative: number;
                };
              },
              idx: number,
            ) => (
              <li key={idx} className="w-full border-b pb-4">
                <ul>
                  <li>{thought.url}</li>
                  <li>{thought.content}</li>
                </ul>

                <ul className="flex flex-row justify-start items-start space-x-4">
                  <li>{thought.feedbackStats.positive} likes</li>
                  <li>{thought.feedbackStats.negative} dislikes</li>
                </ul>
              </li>
            ),
          )}
      </ul>
    </div>
  );
};

export default Basic;
