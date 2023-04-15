import "./logo.css";

export function Logo() {
  const pictureRoot = "./logo.png";
  return (
    <img
      className="logo"
      src={pictureRoot}
      alt="Árbol con texto:creamos tu armario"
    />
  );
}
