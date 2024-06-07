import api from 'services/http'

const url = "/admin/product"
const ProductUrl = {
    GET_ALL: () => url,
    GET_ONE: (id) => url + "/" + id,
    UPLOAD_IMAGE: (productId) => `${url}/${productId}/image`,
    GET_IMAGE: (productId, imageId) => `${url}/${productId}/image/${imageId}`,
    DELETE_IMAGE: (productId, imageId) => `${url}/${productId}/image/${imageId}`,
    CREATE: () => url,
    EDIT: (id) => url + "/" + id,
    DELETE: (id) => url + "/" + id
}
const ProductService = {
    getProducts: async () => {
        return await api.get(ProductUrl.GET_ALL())
    },
    createProduct: async (data, files) => {
        let res = await api.post(ProductUrl.CREATE(), data)
        let productId = res?.data?.id
        await ProductService.changeImage(productId, files)
        return res
    },
    changeImage: async (productId, data) => {
        for (let d of data) {
            if (!d.id) {
                await ProductService.uploadImage(productId, d.data)
            } else if (d?.delete) {
                await ProductService.deleteImage(productId, d.id)
            }
        }
    },
    uploadImage: async (productId, data) => {
        return await api.upload_form(ProductUrl.UPLOAD_IMAGE(productId), data)
    },
    getImage: async (url) => {
        return await api.get(url, { responseType: 'blob' })
    },
    getImages: async (product) => {
        const images = []
        for (let image of product?.images ?? []) {
            await ProductService.getImage(image.url).then(res => {
                images.push({ ...image, data: res.data })
            })
        }
        return images
    },
    deleteImage: async (productId, imageId) => {
        return await api.delete(ProductUrl.DELETE_IMAGE(productId, imageId))
    },
    getProduct: async (id) => {
        return await api.get(ProductUrl.GET_ONE(id))
    },
    editProduct: async (id, data, files) => {
        let res = await api.put(ProductUrl.EDIT(id), data)
        await ProductService.changeImage(id, files)
        return res
    },
    deleteProduct: async (id) => {
        return await api.delete(ProductUrl.DELETE(id))
    },
}

export default ProductService;