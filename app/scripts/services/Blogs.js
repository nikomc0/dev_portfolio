(function (){
	function Blogs($cookies) {
		var Blogs = {};

		var posts = {
			post1: {
				title: "Bootcamp Experience",
				date: "March 10, 2017",
				src: "/templates/blog/post1.html"
			},
		};

		Blogs.setPost = function (post) {
			Blogs.post = post;
			$cookies.currentPost = post;
			return $cookies.currentPost;
		};

		Blogs.getPost = function (post) {
			Blogs.post = post;
			return Blogs.post;
		}

			console.log($cookies.currentPost);


		Blogs.getPosts = function () {
			this.posts = [];

			for (var post in posts) {
				this.posts.push(angular.copy(posts[post]));
			}

			return this.posts;
		};

		return Blogs;
	}

	angular
		.module('portfolio')
		.factory('Blogs', ['$cookies', Blogs]);
})();