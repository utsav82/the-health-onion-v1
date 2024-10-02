import { getCurrentUser } from "app/libs/session";
import prisma from "app/libs/prismadb";
import { redis } from "@/app/libs/redis";
export async function POST(req) {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return new Response("Unauthorized", { status: 401 });
    }

    const body = await req.json();

    const { postId } = body;

    const vote = await prisma.vote.findFirst({
      where: {
        postId,
        userId: user.id,
      },
    });

    if (vote) {
      await prisma.vote.delete({
        where: {
          id: vote.id,
        },
      });
    } else {
      await prisma.vote.create({
        data: {
          postId,
          userId: user.id,
        },
      });
    }

    await redis.del(`post:${postId}`);

    return new Response("OK");
  } catch (error) {
    console.log(error);
    return new Response("Could not Like", { status: 500 });
  }
}
