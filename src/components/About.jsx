const About = () => {
    return (
        <div className="container">
        <h1 className="text-4xl font-bold mb-5">About</h1>
        <p>
            NoH8 is a Discord bot that removes hate speech from your server and helps anonymous users connect with others when they're in seek of emotional help. It uses the Natural Language Processing (NLP) platform Cohere to <span className="font-bold">detect and remove potential hate speech</span> with artificial intelligence, it is free to use and open source, and super easy to set up.
        </p>
        <h1 className="mt-5 text-2xl font-bold mb-3">How?</h1>
        <p className="mb-5">
            NoH8 was made using these technologies:
        </p>
        <ul>
            <li className="mb-3">
            <a href="https://reactjs.org/" className="font-bold">React</a> - This was the frontend Javascript
            framework used for the landing page.
            </li>
            <li className="mb-3">
            <a href="https://cohere.ai/" className="font-bold">Cohere</a> - Cohere is a platform for Natural Language Processing (NLP) that allow us to detect hate speech with artificial intelligence.
            </li>
            <li className="mb-3">
            <a href="https://discord.js.org/" className="font-bold">Discord.js</a> - Discord.js is a Javascript library for building rich interactive chatbots on Discord.
            </li>
            <li>
            <a href="https://www.mongodb.com/" className="font-bold">MongoDB</a> - MongoDB is a NoSQL database that is used to store and retrieve data from the users of the Discord platform.
            </li>
        </ul>
        </div>
    );
}

export default About;