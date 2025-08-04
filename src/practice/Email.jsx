import "./email.css";

export default function Email() {
  return (
    <div div className="grid-container">
      <nav className="nav">nav</nav>
      <menu className="header">
        <button className="menu-buttons">New</button>
        <button className="menu-buttons">Reply</button>
        <button className="menu-buttons">Reply All</button>
        <button className="menu-buttons">Forward</button>
        <button className="menu-buttons delete-button">Delete</button>
      </menu>
      <section className="email-list">
        <div className="email">email-1</div>
        <div className="email">email-2</div>
        <div className="email">email-3</div>
        <div className="email">email-4</div>
        <div className="email">email-5</div>
        <div className="email">email-6</div>
        <div className="email">email-7</div>
        {/* <div className="email">email-8</div> */}
        {/* <div className="email">email-9</div>
        <div className="email">email-10</div> */}
      </section>
      <main className="email-info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
        quibusdam eligendi nemo perferendis tempore dignissimos commodi velit,
        voluptates dolorum, at voluptatem dolorem id. Voluptates itaque, eveniet
        odit facere sapiente rem officia ipsam est? Animi, velit voluptates
        cumque provident et sit obcaecati reiciendis corrupti! Aliquam expedita
        ipsum nostrum ducimus minima animi.Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Deserunt, quibusdam eligendi nemo
        perferendis tempore dignissimos commodi velit, voluptates dolorum, at
        voluptatem dolorem id. Voluptates itaque, eveniet odit facere sapiente
        rem officia ipsam est? Animi, velit voluptates cumque provident et sit
        obcaecati reiciendis corrupti! Aliquam expedita ipsum nostrum ducimus
        minima animi.
      </main>
      <aside className="addl-info">additional-information</aside>
    </div>
  );
}
