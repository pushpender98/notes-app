const express = require("express");

const app = express();

app.use("/api/posts", (req, res, next) => {
	const posts = [
		{
			id: "1",
			title: "First Server Side post",
			content: "This is coming from the server",
    },
    {
			id: "2",
			title: "Second Server Side post",
			content: "This is coming from the server",
		},
	];
  res.status(200).json({
    message: 'Post Fetched Successfully',
    posts: posts
  });

  next();
});

module.exports = app;
