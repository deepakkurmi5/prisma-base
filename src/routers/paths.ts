/**
 * Express router paths go here.
 */

const Paths = {
  Base: "/api/v1",
  Query: {
    Base: "/query",
    Get: ["/"],
  },
  Auth: {
    Base: "/auth",
    Post: ["/signin"],
  },
  Post: {
    base: "/posts",
    Get: ["/"],
  },
  User: {
    Base: "/users",
    Get: ["/", "/mostLikePost"],
  },
};

export default Paths;
