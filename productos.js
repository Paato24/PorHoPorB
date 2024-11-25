// Productos de ejemplo
const products = [
    { id: 1, name: "WR8DC+ Bujías Bosch", price: 8438.82, stock: 10, img: "img/BuajiBosch-WR8DC+.png" },
    { id: 2, name: "FR7DCX Bujías Bosch", price: 8834.01, stock: 9, img: "img/BuajiBosch-FR7DCX.png" },
    { id: 3, name: "Lámpara Osram H3 12V 55W 64151", price: 8169.17, stock: 10, img: "img/OsramH3-12v.png" },
    { id: 4, name: "Lámpara Osram 12V 1.2W B8.5D", price: 2618.65, stock: 10, img: "img/Osram 1.2W-12v.png" },
    { id: 5, name: "Lámpara Osram 12V 2W BX8.4D", price: 3201.55, stock: 10, img: "img/Osram 2W-12v.png" },
    { id: 6, name: "Lámpara Osram H4 P43 12V 60/55W 64193", price: 9282.70, stock: 10, img: "img/OsramH4-12v.png" },
    { id: 7, name: "Lámpara Osram H7 12V 55W 64210", price: 14486.64, stock: 10, img: "img/OsramH7-12v.png" },
    { id: 8, name: "Lámpara Osram H1 12V 55W 64150", price: 7229.59, stock: 10, img: "img/OsramH1-12v.png" },
    { id: 9, name: "Lámpara NeoLux 12V P21/5W (7528)", price: 1539.75, stock: 10, img: "img/NeoLux2Polo-12v.png" },
    { id: 10, name: "Lámpara NeoLux 24V P21/5W (7528)", price: 1539.75, stock: 10, img: "img/NeoLux2Polo-24v.png" },
    { id: 11, name: "Lámpara NeoLux 12V P21W (7506)", price: 1083.85, stock: 10, img: "img/NeoLux1Polo-12v.png" },
    { id: 12, name: "Lámpara NeoLux 24V P21W (7506)", price: 1083.85, stock: 10, img: "img/NeoLux1Polo-24v.png" },
    { id: 13, name: "Lámpara NeoLux H4 P43T 12V 60/55W", price: 5603.09, stock: 13, img: "img/NeoLuxH4-12v.png" },
    { id: 14, name: "Lámpara NeoLux H4 P43T 24V 75/70W", price: 5603.09, stock: 4, img: "img/neolux_h4_24v.jpg" },
    { id: 15, name: "Lámpara NeoLux H7 12V 55W", price: 8934.40, stock: 10, img: "img/neolux_h7_12v.jpg" },
    { id: 16, name: "Lámpara NeoLux H7 24V 70W", price: 8934.40, stock: 14, img: "img/NeoLuxH7-24v.png" },
    { id: 17, name: "Lámpara NeoLux H3 12V 55W", price: 4719.02, stock: 10, img: "img/neolux_h3_12v.jpg" },
    { id: 18, name: "Lámpara NeoLux H3 24V 70W", price: 4719.02, stock: 14, img: "img/NeoLuxH3-24v.png" },
    { id: 19, name: "Lámpara NeoLux H1 12V 55W", price: 4804.05, stock: 14, img: "img/NeoLuxH1-12v.png" },
    { id: 20, name: "Lámpara NeoLux H1 24V 70W", price: 4804.05, stock: 4, img: "img/neolux_h1_24v.jpg" },
    { id: 21, name: "NeoLux 472 DW 12V H4 (Kit)", price: 91963.80, stock: 2, img: "img/NeoLux472.png" },
    { id: 22, name: "Destellador Electrónico 12V 3T C/Sop RTM 73", price: 23017.75, stock: 2, img: "img/DestelladorRTM73-12v-3T.png" },
    { id: 23, name: "Destellador Electrónico 12V 4T C/Sop RTM 80", price: 21249.85, stock: 2, img: "img/DestelladorRTM80-12v-4T.png" },
    { id: 24, name: "MicroRelay 12V 4T C/Sop S/Res RTM 50", price: 10274.15, stock: 3, img: "img/RelayRTM50-12v-4T.png" },
    { id: 25, name: "MicroRelay 12V 5T RTM 56", price: 11705.29, stock: 3, img: "img/RelayRTM56-12v-5T.png" },
    { id: 26, name: "Ficha Mini Relay", price: 3250.46, stock: "Disponibles", img: "img/ficha_mini_relay.jpg" },
    { id: 27, name: "Terminal De Bateria Moher 600", price: 4735.16, stock: "Disponibles", img: "img/terminal_bateria_moher_600.jpg" },
    { id: 28, name: "Terminal De Bateria Moher 617", price: 3765.94, stock: "Disponibles", img: "img/terminal_bateria_moher_617.jpg" },
    { id: 29, name: "Terminal De Bateria Moher 604", price: 7751.48, stock: "Disponibles", img: "img/terminal_bateria_moher_604.jpg" },
    { id: 30, name: "Terminal De Bateria Moher 607", price: 8030.91, stock: "Disponibles", img: "img/terminal_bateria_moher_607.jpg" },
    { id: 31, name: "Total Fleet HD 500 15W-40 208LTS TOTAL", price: 222056.47, stock: "Disponibles", img: "img/total_fleet_hd.jpg" },
    { id: 32, name: "Total Classic 7 10W-40 208Lts TOTAL", price: 9000, stock: "Disponibles", img: "img/total_classic_7.jpg" },
    { id: 33, name: "Total Quartz INEO MC3 5W-30 208LTS", price: 16100, stock: "Disponibles", img: "img/total_quartz_ineo_mc3.jpg" },
    { id: 34, name: "Total Quartz Ineo MC3 5W-30 1Lts Total", price: 51961.01, stock: 3, img: "img/Total-Quartz-Ineo-MC3-5W-30.png" },
    { id: 35, name: "Total Vision Lava Parabrisas 1Lts Elf", price: 8412.91, stock: 4, img: "img/Total-Vision-Lava-Parabrisas.png" },
    { id: 36, name: "Total Frelub HBF3C 200cc Total", price: 8246.02, stock: "Disponibles", img: "img/total_frelub_hbf3c_200cc.jpg" },
    { id: 37, name: "Total Frelub HBF3C 1Lts Total", price: 26952.52, stock: 3, img: "Total-Frelub-HBF3C.png" },
    { id: 38, name: "Total Quartz 7000 10W-40 x 4Lts Total", price: 84774.06, stock: 6, img: "img/Total-Quartz-7000-10W-40.png" },
    { id: 39, name: "Total Quartz Ineo MC3 5W-30 4Lts Total", price: 147248.05, stock: 9, img: "img/Total-Quartz-Ineo-MC3-5W-30-4Lts-Total.png" },
    { id: 40, name: "Total Quartz 9000 5W-40 4Lts Total", price: 172255.98, stock: "Disponibles", img: "img/total_quartz_9000_4L.jpg" },
    { id: 41, name: "Total Glacelf Supra Red 1Lts Total", price: 15882.64, stock: 5, img: "img/Total-Glacelf-Supra-Red.png" },
    { id: 42, name: "Total Glacelf Supra 1Lts Total", price: 15882.64, stock: 6, img: "img/Total Glacelf Supra.png" },
    { id: 43, name: "Total Glacelf Verde 1Lts Total", price: 11960.82, stock: 6, img: "img/Total Glacelf Verde.png" },
    { id: 45, name: "Poxipol La Gotita 2ML (Bister 6Unid)", price: 1656.18, stock: "Disponibles", img: "img/poxipol_la_gotita.jpg" },
    { id: 46, name: "Poxipol Fastix Alta Temperatura x 25grs", price: 4949.47, stock: "Disponibles", img: "img/poxipol_fastix_alta_temperatura.jpg" },
    { id: 47, name: "Poxipol 10 Chico Metal 14ML (Bister 6Unid)", price: 4565.47, stock: "Disponibles", img: "img/poxipol_10_chico_metal.jpg" },
    { id: 48, name: "Poxipol Poxilina Estuche 70g (Bister 6Unid)", price: 4555.70, stock: "Disponibles", img: "img/poxipol_poxilina_estuche.jpg" },
    { id: 49, name: "Poxipol Poxiran 24G. Poxipol", price: 3169.73, stock: "Disponibles", img: "img/poxipol_poxiran_24g.jpg" },
    { id: 50, name: "Total Dixelf 145grs Total", price: 6690.54, stock: "Disponibles", img: "img/total_dixelf.jpg" },
    { id: 51, name: "Agua Desmineralizada 5Lts Acme", price: 3952.07, stock: 19, img: "img/Agua Desmineralizada.png" },
    { id: 52, name: "Absorbente (Bentonita) 20kgrs", price: 10744.95, stock: "Disponibles", img: "img/absorbente_bentonita.jpg" },
    { id: 53, name: "Walker Estopa Limpieza 300grs", price: 3739.61, stock: "Disponibles", img: "img/walker_estopa_limpieza.jpg" },
    { id: 54, name: "Walker Cera Lustre Intenso (Azul) 450cc", price: 10809.79, stock: "Disponibles", img: "img/walker_cera_lustre_azul.jpg" },
    { id: 55, name: "Walker Cera Lustre Intenso (Azul) 450cc (Repetido)", price: 10809.79, stock: "Disponibles", img: "img/walker_cera_lustre_azul.jpg" },
    { id: 56, name: "Walker Cera Polish (Roja/Azul) 450cc", price: 10809.79, stock: "Disponibles", img: "img/walker_cera_polish.jpg" },
    { id: 57, name: "5W5 NeoLux N501 12V 5W W2.1x9.5d Piojito", price: 2500, stock: "1", img: "img/NeoLuxPiojito-24v.png" },
    { id: 58, name: "Equipo Led S7 H4 (Kit)", price: 39381.15, stock: 1, img: "img/S7H4-Kit.png" },
    { id: 58, name: "Equipo Led S7 H7 (Kit)", price: 39381.15, stock: 2, img: "img/S7H7-Kit.png" },
    { id: 59, name: "MiniRelay 12V 5T C/Sop RTM35", price: 7197.86, stock: 12, img: "img/RelayRTM35-12v-5T.png" },
    { id: 60, name: "Fusible Maxi Ficha RonBay", price: 2053.45, stock: 20, img: "img/FusibleMaxiFichaRonBay.png" },
    { id: 61, name: "Fusible Mini Ficha IMP", price: 210.97, stock: 10, img: "img/Fusible-Mini-Ficha-IMP.png" },
    { id: 62, name: "Fusible Ficha IMP", price: 182.84, stock: "Disponible", img: "img/Fusible-Ficha-IMP.png" }
      ];
  
  
  let cart = [];
  
  // Renderizar productos
  function renderProducts(list) {
    const productList = document.getElementById("productList");
    productList.innerHTML = "";
    list.forEach((product) => {
      const productDiv = document.createElement("div");
      productDiv.classList.add("product");
      productDiv.innerHTML = `
        <img src="${product.img}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Precio: $${product.price}</p>
        <p>Stock: ${product.stock}</p>
        <button ${product.stock === 0 ? "disabled" : ""} onclick="addToCart(${product.id})">
          ${product.stock === 0 ? "Sin stock" : "Agregar al carrito"}
        </button>
      `;
      productList.appendChild(productDiv);
    });
  }
  
  renderProducts(products);
  
  // Buscar productos
  function searchProduct() {
    const searchValue = document.getElementById("searchBar").value.toLowerCase();
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchValue)
    );
    renderProducts(filteredProducts);
  }
  
  // Filtrar por precio
  function filterByPrice() {
    const filter = document.getElementById("filterPrice").value;
    let sortedProducts = [...products];
    if (filter === "asc") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (filter === "desc") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    renderProducts(sortedProducts);
  }
  
  // Agregar al carrito
  function addToCart(id) {
    const product = products.find((p) => p.id === id);
  
    if (product && product.stock > 0) {
      // Verificar si el producto ya está en el carrito
      const cartItem = cart.find((item) => item.id === id);
  
      if (cartItem) {
        // Si ya está en el carrito, aumentar la cantidad
        cartItem.quantity++;
      } else {
        // Si no está en el carrito, agregarlo como nuevo
        cart.push({ id: product.id, name: product.name, price: product.price, quantity: 1 });
      }
  
      // Reducir el stock del producto
      product.stock--;
  
      renderProducts(products);
      renderCart();
    }
  }
  
  // Renderizar carrito
  function renderCart() {
    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");
    cartItems.innerHTML = "";
    let total = 0;
  
    cart.forEach((item) => {
      const cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");
      cartItem.innerHTML = `
        <p>${item.name} - $${item.price} x ${item.quantity} = $${item.price * item.quantity}</p>
      `;
      cartItems.appendChild(cartItem);
      total += item.price * item.quantity;
    });
  
    cartTotal.textContent = total;
  }
  
  // Comprar
  function checkout() {
    if (cart.length === 0) {
      alert("El carrito está vacío.");
      return;
    }
  
    alert("Compra realizada. Métodos de pago próximamente.");
    cart = [];
    products.forEach((product) => {
      product.stock = 10; // Resetear stock (esto es solo un ejemplo)
    });
    renderProducts(products);
    renderCart();
  }
  