const getLocalPosts = ((state) => state.localPosts.posts || [])
const getCurrentPostId = ((state) => state.localPosts.currentPostId || null)

export {
    getLocalPosts,
    getCurrentPostId
}