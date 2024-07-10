import api from "@/services/http"

const url = "post"
const PostUrl = {
    GET_ALL: () => url,
    GET_ONE: (id) => url + "/" + id
}
const PostService = {
    getPosts: async (data) => {
        return await api.post(PostUrl.GET_ALL(), data).then(res => {
            if (res.status === 200) {
                data = res.data.data.map(post => {
                    return {
                        ...post,
                        url: process.env.NEXT_PUBLIC_BASE_URL + PostUrl.GET_ONE(post.id),
                        image: post.images.length > 0 ? post.images[0].url : null,
                        description: post.createdAt
                    }
                })
                return { total: res.data.total, data: data }
            }
        })
    },
    getPost: async (id) => {
        return await api.get(PostUrl.GET_ONE(id))
    },
}

export default PostService;