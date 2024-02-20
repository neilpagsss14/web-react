import React, { useEffect, useState } from "react";

function Home() {
  const [jokes, setJokes] = useState(0);

  useEffect(() => {
    getJoke();
  }, []);

  const getJoke = () => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((res) => res.json())
      .then((joke) => {
        setJokes(joke["value"]);
        console.log(joke);
      });
  };

  return (
    <div className="gap-2 w-full h-screen flex flex-col justify-center items-center">
      <h1 className="font-poppins-bold text-xl">HOME</h1>
      <p>{jokes}</p>
      <button
        onClick={getJoke}
        className="p-2 bg-gray-600 rounded-sm text-stone-800"
      >
        Click for Jokes!
      </button>
    </div>
  );
}

export default Home;
