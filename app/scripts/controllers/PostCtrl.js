(function () {
	function PostCtrl(Blogs, $cookies) {
		this.postData = $cookies.currentPost;

	}

	angular
		.module('portfolio')
		.controller('PostCtrl', ['Blogs', '$cookies', PostCtrl]);
})();