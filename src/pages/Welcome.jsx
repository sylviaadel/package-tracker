import welcomeImg from "../assets/images/welcome-image.svg";

export default function Welcome() {
  return (
    <div id="Welcome">
      <img
        src={welcomeImg}
        alt="People putting closed packages beside a big truck."
      />
      <h1>
        With <span className="lightblue-color">InstaPacket</span>, you can
        easily and safely track your packages anytime.
      </h1>
      <button className="primary-btn">Get Started</button>
    </div>
  );
}
