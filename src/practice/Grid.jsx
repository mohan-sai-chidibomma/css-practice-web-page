import "./Grid.css";

export default function Grid() {
  return (
    <div className="bg-img">
      <div className="grid-container">
        <nav className="nav">
          <div>LOGO</div>
          <div>Navigation</div>
        </nav>
        <header className="header">
          <h1>Delicious meals delivered daily to your doorstep</h1>
          <p>
            Discover a customized meal subscription designed for your tastes and
            nutritional needs. Savor fresh, tasty dishes every day, without any
            effort.
          </p>
          <a href="#" className="get-started-link">
            Get Started Today
          </a>
        </header>
        <h2 className="need-details">Need more details?</h2>
        <p className="details">
          Our service brings convenience and taste together. From flexible
          subscriptions to a variety of cuisines, we make healthy eating simple
          and enjoyable. Reach out for more information!
        </p>
      </div>
    </div>
  );
}
