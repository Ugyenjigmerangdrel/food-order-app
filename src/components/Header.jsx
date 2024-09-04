import LogoImg from "../assets/logo.jpg";

export default function Header() {
  return (
    <div id="main-header">
      <div id="title">
        <img src={LogoImg} alt="logo" />
      </div>
      <button className="text-button">Cart</button>
    </div>
  );
}
