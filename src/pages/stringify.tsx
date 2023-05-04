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

interface SSRExampleProps {
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

const SSRExample = ({ thoughts }: SSRExampleProps) => {
  return (
    <div className="p-20">
      <pre className="break-words whitespace-pre-wrap rounded-md text-left text-xs">
        <code>{JSON.stringify(thoughts, null, 2)}</code>
      </pre>
    </div>
  );
};

export default SSRExample;
