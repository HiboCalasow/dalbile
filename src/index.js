import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import Head from './componant/Head';
import Product from './componant/Product';
import Footer from './componant/footer';

// import App from './App';
// import Header from './componant/Header';
// import Nooty from './componant/Nooty';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
<BrowserRouter> 
{/* <Nooty /> */}
{/* <Header />
   <App /> */}
   <Head />
   <Product/>
   <Footer/>
   
</BrowserRouter>
  </>
);

