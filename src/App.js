import "./App.css";

import Layout from "./Pages/Layout/Layout";


function App() {
  return (
    <div className="App">
      <Layout/>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout children={<Hero />} />} />
       
         
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
