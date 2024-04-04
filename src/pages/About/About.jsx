import TopHeader from "../TopHeader/TopHeader";
import Header from "../Header/Header";
import "./about.css";

function About() {
  return (  
    <>
      <TopHeader></TopHeader>
      <Header></Header>
      <div className="container">
        <div className="about__text__button d-flex mt-5">
          <h1> We love</h1>
          <button className="button-about btn btn-primary px-5 py-3">
            comfy
          </button>
        </div>
        <h2 className="text--about--two mt-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quae
          quam blanditiis vitae, dolor non eveniet ipsum voluptatibus, quia
          optio aut! Perferendis ipsa cumque ipsam nostrum reprehenderit ad illo
          sed officiis ea tempore! Similique eos minima sit porro, ratione
          aspernatur!
        </h2>
      </div>
    </>
  );
}

export default About;
