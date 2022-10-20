

const products = [
    {
        id: "1",
        name: "Medias rayadas",
        price: 350,
        category: "Medias",
        img: 'https://lenceriamytio.com.ar/tienda/6106-large_default/200elemento.jpg',
        stock: 10,
        description: "Descripcion de la media",
    },

    {
        id: "2",
        name: "Medias azules",
        price: 300,
        category: "Medias",
        img: 'https://lenceriamytio.com.ar/tienda/6155-large_default/1021elemento.jpg',
        stock: 4,
        description: "Descripcion de la media",
    },

    {
        id: "3",
        name: "Soquete ",
        price: 250,
        category: "Soquete",
        img: 'https://lenceriamytio.com.ar/tienda/9522-large_default/101-elemento.jpg',
        stock: 9,
        description: "Descripcion de la media",
    },
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 2000);
    });
};

export const getProductById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => {
                return prod.id === id
            }))
        }, 500)
    });
};

export const getProductsByCategory = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}
console.log(products);