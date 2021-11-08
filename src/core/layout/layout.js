import Footer from '../footer/footer';
import Header from '../header/header';
import './layout.scss';
export function Layout({ children }) {
  //qwerty solo testear si renderiza los componentes
  const template = (
    <div className="container">
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );

  return template;
}
