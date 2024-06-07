import api from 'services/http'

const url = "/admin/post"
const PostUrl = {
    GET_ONE: (id) => url + "/" + id,
    GET_ALL: () => url,
    UPLOAD_IMAGE: (postId) => `${url}/${postId}/image`,
    GET_IMAGE: (postId, imageId) => `${url}/${postId}/image/${imageId}`,
    DELETE_IMAGE: (postId, imageId) => `${url}/${postId}/image/${imageId}`,
    CREATE: () => url,
    EDIT: (id) => url + "/" + id,
    DELETE: (id) => url + "/" + id
}
const PostService = {
    getPosts: async () => {
        return await api.get(PostUrl.GET_ALL())
    },
    createPost: async (data, files) => {
        let res = await api.post(PostUrl.CREATE(), data)
        let postId = res?.data?.id
        await PostService.changeImage(postId, files)
        return res
    },
    getPost: async (id) => {
        return await api.get(PostUrl.GET_ONE(id))
    },
    changeImage: async (postId, data) => {
        for (let d of data) {
            if (!d.id) {
                await PostService.uploadImage(postId, d.data)
            } else if (d?.delete) {
                await PostService.deleteImage(postId, d.id)
            }
        }
    },
    uploadImage: async (postId, data) => {
        return await api.upload_form(PostUrl.UPLOAD_IMAGE(postId), data)
    },
    getImage: async (url) => {
        return await api.get(url, { responseType: 'blob' })
    },
    getImages: async (post) => {
        const images = []
        for (let image of post?.images ?? []) {
            await PostService.getImage(image.url).then(res => {
                images.push({ ...image, data: res.data })
            })
        }
        return images
    },
    deleteImage: async (postId, imageId) => {
        return await api.delete(PostUrl.DELETE_IMAGE(postId, imageId))
    },
    editPost: async (id, data, files) => {
        let res = await api.put(PostUrl.EDIT(id), data)
        await PostService.changeImage(id, files)
        return res
    },
    deletePost: async (id) => {
        return await api.delete(PostUrl.DELETE(id))
    },
}

export default PostService;