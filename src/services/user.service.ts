import prisma from "@src/lib/prisma";

export default class UserService {
  // get all posts created by user
  static async getUsers() {
    const users = await prisma.user.findMany();
    return users;
  }

  // filter email of user
  static async getFilterEmail() {
    const findByEmail = await prisma.user.findMany({
      where: {
        email: {
          endsWith: "prisma.io",
        },
      },
    });
    return findByEmail;
  }

  // get user post a that has most like pist by user
  static async getMostLikeUserPost() {
    const findUser = await prisma.user.findFirst({
      where: {
        posts: {
          some: {
            likeNum: {
              gte: 4,
            },
          },
        },
      },
      orderBy: {
        id: "desc",
      },
    });
    return findUser;
  }

  // Filter by multiple field values
  static async getUserFilter() {
    const users = await prisma.user.findMany({
      where: {
        OR: [
          {
            name: {
              startsWith: "J",
            },
          },
          {
            AND: {
              role: {
                equals: "USER",
              },
              posts: {
                some: {
                  likeNum: {
                    gt: 40,
                  },
                },
              },
            },
          },
        ],
      },
    });

    return users;
  }
}
