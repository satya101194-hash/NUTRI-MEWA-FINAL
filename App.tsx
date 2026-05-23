const heroImage = "/nutrimewa.png";
export default function App() {
  return (
    <div style={{ fontFamily: "Arial", padding: "20px", textAlign: "center" }}>
      <h1>Nutri Mewa</h1>
      <p>Premium Dry Fruits</p>
      Founder & CEO: Satyendra Yadav
      <img
        src={heroImage}
        alt="Nutri Mewa"
        style={{
          width: "100%",
          maxWidth: "900px",
          borderRadius: "20px",
        }}
      />
      <h2 style={{ marginTop: "30px" }}>Our Products</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <div>
          <h3>Almond</h3>
        </div>

        <div>
          <h3>Cashew</h3>
        </div>

        <div>
          <h3>Pista</h3>
        </div>

        <div>
          <h3>Walnut</h3>
        </div>

        <div>
          <h3>Raisin</h3>
        </div>
      </div>
      <a
        href="https://wa.me/917838341820"
        target="_blank"
        style={{
          display: "inline-block",
          marginTop: "40px",
          padding: "15px 25px",
          background: "green",
          color: "white",
          textDecoration: "none",
          borderRadius: "10px",
        }}
      >
        Order on WhatsApp
      </a>
    </div>
  );
}
