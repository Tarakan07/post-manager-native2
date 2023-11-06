export const fetchFilterPosts = async ({
	posts,
	activeUser,
	filter,
	setUserPosts,
}) => {
	if (filter) {
		setUserPosts(posts.filter((post) => post.author === activeUser.email));
	} else {
		setUserPosts(null);
	}
};
