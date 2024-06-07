import api from "services/http"

const url = "/post"
const PostUrl = {
    GET_ALL: () => url,
    GET_ONE: (id) => url + "/" + id
}
const PostService = {
    getPosts: async () => {
        return await api.get(PostUrl.GET_ALL()).then(res => {
            if (res.status === 200) {
                return res.data.map(post => {
                    return {
                        ...post,
                        url: process.env.REACT_APP_BASE_URL + PostUrl.GET_ONE(post.id),
                        image: post.images.length > 0 ? post.images[0].url : null,
                        description: post.createdAt
                    }
                })
            }
        })
    },
    getPost: async (id) => {
        return await api.get(PostUrl.GET_ONE(id))
    },
}

export default PostService;