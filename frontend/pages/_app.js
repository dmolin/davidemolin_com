import 'tailwindcss/tailwind.css';
import MainLayout from "/components/layouts/MainLayout";

const App = ({ Component, pageProps, router }) => (
  <MainLayout router={router}>
    <Component {...pageProps} key={router.route} />
  </MainLayout>
);

export default App;
