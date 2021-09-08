import "./App.css";
import Header from "./Components/Header/Header";
import Layout from "./Components/Layout/Layout";
import Footer from "./Components/Footer/Footer";

function App() {
  const urlBg =
    "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9b52e4b6-1d4e-4a16-8859-0147b1f4ec81/bg2.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210908%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210908T190135Z&X-Amz-Expires=86400&X-Amz-Signature=78d6771c16a55c2dd52148e12fc5f4e45c23a8c37776380548f9524fc20a9a93&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22bg2.jpg%22";

  const colorBg = "#e2e2e2";
  return (
    <div className="App">
      <Header title descr />
      <Layout title descr urlBg={urlBg} />
      <Layout title descr colorBg={colorBg} />
      <Layout title descr urlBg={urlBg} />
      <Footer />
    </div>
  );
}

export default App;
