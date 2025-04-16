import prisma from "@src/lib/prisma";

export default class PostService {
  // get all posts created by user
  static async getPosts() {
    const posts = await prisma.post.findMany();
    return posts;
  }

  static async getLatestPost() {
    const latestPost = await prisma.post.findFirst();
    return latestPost;
  }

  static async getPostById(id: number) {
    const searchPost = await prisma.post.findUnique({
      where: {
        id: id,
      },
    });
    return searchPost;
  }

  static async getpublishedPost() {
    const publishedPost = await prisma.post.findMany({
      where: {
        published: false,
      },
    });
    return publishedPost;
  }
}
