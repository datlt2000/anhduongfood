import api from 'src/services/http'

const url = "/product"
const ProductUrl = {
    GET_ALL: () => url,
    GET_ONE: (id) => url + "/" + id
}
const ProductService = {
    getProducts: async (data) => {
        return await api.post(ProductUrl.GET_ALL(), data).then((res) => {
            if (res.status === 200) {
                const products = res.data.data
                const data = products.map((product) => {
                    return {
                        ...product,
                        description: product.price,
                        image: product.images.length > 0 ? product.images[0].url : null,
                        url: import.meta.env.VITE_APP_BASE_URL + ProductUrl.GET_ONE(product.id)
                    }
                })
                return { total: res.data.total, data: data }
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