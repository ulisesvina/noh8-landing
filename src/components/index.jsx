import { Link } from "wouter";

const Home = () => {
  return (
    <div className="container">
      <h1 className="text-3xl">
        Get rid of
        <br />
        <span className="font-bold text-ua-red">hate speech</span> on
        <br />
        your Discord server.
      </h1>
      <p className="mt-2 text-xl">
        NoH8 is a Discord bot that removes hate speech from your server. It uses
        the Natural Language Processing (NLP) platform Cohere to detect hate
        speech with artificial intelligence.
      </p>
      <Link to="/about">
        <button className="mt-5 mr-5 bg-maximum-blue hover:bg-cambridge-blue text-xl text-white py-2 px-4 rounded-xl">
          Learn More
        </button>
      </Link>
      <a
        href="https://discord.com/api/oauth2/authorize?client_id=989985094590672946&permissions=8&redirect_uri=https%3A%2F%2Fnoh8-around.us&response_type=code&scope=applications.commands%20dm_channels.read%20bot"
        target="_BLANK"
      >
        <button className="mt-5 bg-cameo-pink hover:bg-cambridge-blue text-xl text-white py-2 px-4 rounded-xl">
          Invite to my server
        </button>
      </a>
    </div>
  );
};

export default Home;
