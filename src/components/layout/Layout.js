import Navigation from "./navigation/Navigation";
import Footer from "./Footer/Footer";

function Layout(props) {
  return (
    <>
      <Navigation />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}
export default Layout;
