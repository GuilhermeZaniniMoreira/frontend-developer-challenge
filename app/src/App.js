import React, { useEffect, useState } from 'react';
import './App.css';

import api from './services/api'
import validator from 'validator';

function App() {

  // array that will store data from api
  const [ products, setProducts ] = useState([]);
  // current page of products to get data from the API - start at 1
  const [ currentPage, setCurrentPage ] = useState(1);
  // newsletter
  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ emailValidation, setEmailValidation ] = useState(true);

  // useEffect will be triggered every render
  // if currentPage is incremented useEffect will be triggered
  useEffect(() => {
    async function loadProducts() {
        const response = await api.get(`/products?page=${currentPage}`);
        const data = response.data.products;
        setProducts(products.concat(data));
    }
    loadProducts();
  }, [currentPage]);

  // increment currentPage by 1
  function handlePage() {
    setCurrentPage(currentPage => currentPage + 1);
  }

  function handleBuy() {
    // ... handle purchase
  }

  function handleSubscription() {
    // ... handle subscription
  }

  function validateEmail() {
    if (!validator.isEmail(email)) {
      setEmailValidation(false);
      alert('E-mail inválido!');
    } else {
      handleSubscription();
    }
  }

  return (
    <div className="main-container">
      <header className="header">
        <div className="product-selection-msg">
          <h2>uma seleção de produtos</h2>
          <h1>especial para você</h1>
          <p>Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!</p>
        </div>
        <div className="nav">
          <ul>
              <li>
                <button>Conheça a Linx</button>
              </li>
              <li>
                <button>Ajude o algoritmo</button>
              </li>
              <li>
                <button>Seus produtos</button>
              </li>
              <li>
                <button>Compartilhe</button>
              </li>
          </ul>
        </div>
      </header>
      <div className="products">
        <h1>Sua seleção especial</h1>
        <ul>
          {products.map(product => (
            <li key={product.id}>
               <img src={product.image} alt={product.name} />
               <footer className="footer-product">
                <p className="product-name">{product.name}</p>
                <p className="product-description">{product.description}</p>
                <p className="product-oldPrice">De: R${product.oldPrice.toFixed(2)}</p>
                <strong className="product-price">Por: R${product.price.toFixed(2)}</strong>
                <p className="product-installments">Ou {product.installments.count}x de R${product.installments.value.toFixed(2)}</p>
              </footer>
              <button className="button" onClick={() => handleBuy()}>
                  Comprar
              </button>
            </li>
          ))}
        </ul>
        <button
          className="add-more-products"
          onClick={() => handlePage()}>
          Ainda mais produtos aqui!
        </button>
      </div>
      <div className="newsletter">
          <h1>Compartilhe a novidade</h1>
          <h2>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</h2>
          <form>
            <label>
              <p>Nome do amigo:</p>
              <input type="text"
                id="name"
                onChange={e => setName(e.target.value)}/>
            </label>
            <label>
              <p>E-mail:</p>
              <input type="email"
              id="email"
              onChange={e => setEmail(e.target.value)}/>
            </label>
          </form>
          <button
              className="subscribe-newsletter"
              onClick={() => validateEmail()}>
              Enviar agora
            </button>
      </div>
      <footer className="linx">
        <div>
          <p>Testando suas habilidades em HTML, CSS e JS.</p>
          <p>Linx Impulse</p>
          <p>2019</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
