import api from 'services/http'

const url = "/product"
const ProductUrl = {
    GET_ALL: () => url,
    GET_ONE: (id) => url + "/" + id
}
const ProductService = {
    getProducts: async () => {
        return await api.get(ProductUrl.GET_ALL()).then((res) => {
            if (res.status === 200) {
                const products = res.data
                const data = products.map((product) => {
                    return {
                        ...product,
                        description: product.price,
                        image: product.images.length > 0 ? product.images[0].url : null,
                        url: process.env.REACT_APP_BASE_URL + ProductUrl.GET_ONE(product.id)
                    }
                })
                return data
            }
        })
    },
    getProduct: async (id) => {
        return await api.get(ProductUrl.GET_ONE(id)).then(res => {
            if (res.status === 200) {
                return { ...res.data, images: res.data.images.map(image => image.url) }
            }
        })
    }
}

export default ProductService;