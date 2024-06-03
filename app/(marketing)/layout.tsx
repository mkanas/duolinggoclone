import Footer from "./Footer";
import Header from "./Header";

type Props = {
  children: React.ReactNode;
};

const marketingLayout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default marketingLayout;
