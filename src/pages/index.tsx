import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="container h-full mx-auto px-5 pt-20">
      <div className="flex flex-row">
        <h1 className="text-5xl uppercase text-blue-600 font-bold">Next.js</h1>
        <span className="text-5xl ml-5 text-blue-50  pr-5 shadow-lg rounded-lg gradient">boilerplate</span>
      </div>
      <ul className="flex flex-row flex-wrap gap-3 mt-10 font-mono">
        <li className="ring-2 rounded px-3">typescript</li>
        <li className="ring-2 rounded px-3">tailwindcss</li>
        <li className="ring-2 rounded px-3">react-query</li>
        <li className="ring-2 rounded px-3">msw</li>
        <li className="ring-2 rounded px-3">react-hook-form, yup</li>
        <li className="ring-2 rounded px-3">jest, react-testing-library</li>
        <li className="ring-2 rounded px-3">prettier, eslint</li>
        <li className="ring-2 rounded px-3">husky, lint-staged, commitlint</li>
      </ul>
    </div>
  );
};

export default Home;
