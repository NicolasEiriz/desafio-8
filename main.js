const precios = {
  pizzas: { napolitana: 5000, fugazzeta: 6000, muzzarella: 4000, provolone: 7500 },
  tacos: { carne: 3000, pollo: 3000, mixto: 3500 }
};

const pedidoUsuario = { nombre: "", direccion: "", email: "", telefono: "", pedido: [], total: 0 };

// Capturar pedido del usuario

function capturarPedido() {
  const pizzasSeleccionadas = document.querySelectorAll(".pizza:checked");
  const tacosSeleccionados = document.querySelectorAll(".taco:checked");

  pedidoUsuario.pedido = [];
  pizzasSeleccionadas.forEach(item => {
    pedidoUsuario.pedido.push({ nombre: item.value, precio: precios.pizzas[item.value] });
  });
  tacosSeleccionados.forEach(item => {
    pedidoUsuario.pedido.push({ nombre: item.value, precio: precios.tacos[item.value] });
  });
}


// Validar datos ingresados por el usuario

function validarFormulario() {
  pedidoUsuario.nombre = document.querySelector("#nombre-usuario").value;
  pedidoUsuario.direccion = document.querySelector("#direccion-entrega").value;
  pedidoUsuario.email = document.querySelector("#email-usuario").value;
  pedidoUsuario.telefono = document.querySelector("#telefono-usuario").value;

  if (!pedidoUsuario.nombre || !pedidoUsuario.direccion || !pedidoUsuario.email || !pedidoUsuario.telefono) {
    alert("Por favor, completa todos los campos personales.");
    return false;
  }
  if (pedidoUsuario.pedido.length === 0) {
    alert("Selecciona al menos un artículo para el pedido.");
    return false;
  }
  return true;
}

// Calcular el costo total del pedido
function calcularTotal() {

  pedidoUsuario.total = 0;

  pedidoUsuario.pedido.forEach(item => {
    pedidoUsuario.total += item.precio; // Sumamos el precio de cada artículo
  });

  return pedidoUsuario.total;
}

// Mostrar la confirmación del pedido
function confirmarPedido() {
  capturarPedido();
  if (validarFormulario()) {

    const total = calcularTotal();
    
    alert(`Pedido confirmado!\nNombre: ${pedidoUsuario.nombre}\nDirección: ${pedidoUsuario.direccion}\nTotal: $${total}`);
  }
}

// Evento del botón de pedido
document.querySelector("#pedidoForm").addEventListener("submit", function (e) {
  e.preventDefault();
  confirmarPedido();
});
