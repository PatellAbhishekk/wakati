import { AiRoute } from "./ai.routes";
import { Context } from "hono";
import { RouteHandler } from "@hono/zod-openapi";
import { evaluate } from "@/lib/evaluate"; // This should be used, or else remove it.

export const ai: RouteHandler<AiRoute> = async (c: Context) => {
  const { prompt } = await c.req.json(); // Direct destructuring

  const response = await c.env.AI.run(
    "@cf/deepseek-ai/deepseek-r1-distill-qwen-32b",
    {
      messages: [
        {
          role: "system",
          content:
            "I am Wakati, model 02, an advanced AI assistant. I respond only when asked a direct question and always provide short, crisp, and accurate answers.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
    }
  );

  return c.json({ response });
};
