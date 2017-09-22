(function () {
	function BlogCtrl(Blogs, $cookies) {
		this.pageTitle = "MUSINGS";
		this.posts = Blogs.getPosts();
		this.setPost = function (post) {
			$cookies.currentPost = post;
			Blogs.setPost(post);
		};
	}

	angular
		.module('portfolio')
		.controller('BlogCtrl', ['Blogs', '$cookies', BlogCtrl]);
})();