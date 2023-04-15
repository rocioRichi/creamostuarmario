import "./display.css";

export function Display() {
  const baner = "./mainbaner.png";
  return (
    <section className="display">
      <img
        className="logo"
        src={baner}
        alt="Viñetas. Hay una mejor diciendo que tiene caos en su armario y un hombre en otra viñeta muy contento contesta que él ya ha llamado creamos tu armario"
      />
    </section>
  );
}
