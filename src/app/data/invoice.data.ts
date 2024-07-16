export const invoiceData = {
  id: 1,
  name: "Componentes de PC",
  client: {
    name: "Andres",
    lastname: "Doe",
    address: {
      country: "United States",
      city: "Los Angeles",
      street: "One Street",
      number: 1234
    },
  },
  company: {
    name: "New Age",
    fiscalNumber: 12134454
  },
  items: [
    {
      id: 1,
      product: "CPU Intel i9",
      price: 599,
      quantity: 1
    },
    {
      id: 2,
      product: "Corsair Teclado Mecanico",
      price: 399,
      quantity: 2
    },
    {
      id: 3,
      product: "Monitor Asus",
      price: 899,
      quantity: 3
    },
    {
      id: 4,
      product: "Memoria 64GB Corsair",
      price: 899,
      quantity: 7
    }
  ]
};
