import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        <span className="peach_gradient text-center"> Welcome to</span>
        <span className="peach_gradient text-center"> Prompt Haven</span>
      </h1>
      <p className="desc text-center">Find Quick AI-Powered Prompts</p>
      <Feed />
    </section>
  );
};

export default Home;
