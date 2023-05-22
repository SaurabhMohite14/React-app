import logo from "./logo.svg";
import "./App.css";
import saurabh from "./pages/Header";
function App() {
  return (
    <div>
      <Header></Header>
      <MainBody />
      <h1>Hello World</h1>
      <Header />
      <Footer />
      <saurabh />
    </div>
  );
}

function Header() {
  return (
    <div>
      <h1>Saurabh Mohite</h1>
    </div>
  );
}

function MainBody() {
  return (
    <div>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia temporibus
      magnam, eveniet animi molestias ipsam quae obcaecati qui. Natus nulla
      dolorem porro eaque doloremque soluta aliquam iure itaque, eligendi
      facilis!
    </div>
  );
}

function Footer() {
  return <div>This is footer</div>;
}

export default App;
