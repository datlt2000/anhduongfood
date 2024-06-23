import api from 'services/http'

const url = "/admin/product"
const ProductUrl = {
    SEARCH: () => url + "/search",
    GET_ALL: () => url,
    GET_ONE: (id) => url + "/" + id,
    UPLOAD_IMAGE: (productId) => `${url}/${productId}/image`,
    GET_IMAGE: (productId, imageId) => `${url}/${productId}/image/${imageId}`,
    DELETE_IMAGE: (productId, imageId) => `${url}/${productId}/image/${imageId}`,
    CREATE: () => url,
    EDIT: (id) => url + "/" + id,
    PUBLISH: (id) => url + "/" + id + "/publish",
    PUBLISH_LIST: () => url + "/publish",
    DELETE: (id) => url + "/" + id
}
const ProductService = {
    getProducts: async (data) => {
        return await api.post(ProductUrl.SEARCH(), data)
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
    deleteProducts: async (ids) => {
        return await api.delete(ProductUrl.GET_ALL(), { ids: ids })
    },
    publishProduct: async (id) => {
        return await api.put(ProductUrl.PUBLISH(id))
    },
    publishProducts: async (ids) => {
        return await api.put(ProductUrl.PUBLISH_LIST(), { ids: ids })
    },
    unpublishProduct: async (id) => {
        return await api.put(url + "/" + id + "/unpublish")
    },
    unpublishProducts: async (ids) => {
        return await api.put(url + "/unpublish", { ids: ids })
    },
}

export default ProductService;