import { createRoute, z } from "@hono/zod-openapi";
import * as HttpStatusCodes from "stoker/http-status-codes";

export const url = createRoute({
  path: "/url",
  method: "post",
  tags: ["URL"],
  description: "analyze a webpage by extracting key information such as title, metadata, keywords, and content summary. .",
  request: {
    body: {
      content: {
        "application/json": {
          schema: z.object({
            url: z.string().url(),
          }),
        },
      },
    },
  },
  responses: {
    [HttpStatusCodes.OK]: {
      content: {
        "application/json": {
          schema: z.object({}),
        },
      },
      description: " Analyze text based on different algorithmic rules",
    },
    [HttpStatusCodes.BAD_REQUEST]: {
      content: {
        "application/json": {
          schema: z.object({}),
        },
      },
      description: "Bad request",
    },
  },
});

export type AnalyzeRoute = typeof url;
