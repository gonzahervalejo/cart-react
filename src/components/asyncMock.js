

const products = [
    {
        id: "1",
        name: "Medias",
        price: 350,
        category: "Medias",
        img: `Assets/Media3.jpeg`,
        stock: 10,
        description: "Descripcion de la media",
    },

    {
        id: "2",
        name: "Medias",
        price: 300,
        category: "Medias",
        img: `Assets/Media2.jpeg`,
        stock: 4,
        description: "Descripcion de la media",
    },

    {
        id: "3",
        name: "Medias",
        price: 250,
        category: "Medias",
        img: `Assets/Media1.jpeg`,
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
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find((prod) => prod.id === id));
        }, 500);
    });
};

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter((prod) => prod.category === categoryId));
        }, 500);
    });
};

console.log(products);