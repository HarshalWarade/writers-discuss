import express, { Request, Response } from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const router = express.Router();
const PORT = process.env.PORT || 5000;
const BASE_URL = process.env.BASE_URL || `http://localhost:${PORT}`;

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Writers Discuss API",
      version: "1.0.0",
      description:
        "API documentation for the Writers Discuss backend (MERN Stack)",
    },
    servers: [
      {
        url: BASE_URL,
        description: "Development server",
      },
    ],
    components: {
      securitySchemes: {
        Bearer: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
      schemas: {
        // response schema
        User: {
          type: "object",
          properties: {
            _id: {
              type: "string",
            },
            username: {
              type: "string",
            },
            email: {
              type: "string",
              format: "email",
            },

            bio: {
              type: "string",
            },
            pagesBalance: {
              type: "integer",
            },
            totalPagesEarned: {
              type: "integer",
            },
            rank: {
              type: "string",
              enum: [
                "Blank Page",
                "Beginner",
                "Wordsmith",
                "Storyteller",
                "Master Weaver",
                "Elite",
              ],
            },
            createdAt: {
              type: "string",
              format: "date-time",
            },
            updatedAt: {
              type: "string",
              format: "date-time",
            },
          },
        },

        // request schema
        RegisterUserInput: {
          type: "object",
          required: ["username", "email", "password"],
          properties: {
            username: {
              type: "string",
              minLength: 3,
              maxLength: 50,
            },
            email: {
              type: "string",
              format: "email",
            },
            password: {
              type: "string",
              minLength: 8,
            },
            bio: {
              type: "string",
              maxLength: 500,
            },
          },
        },

        // what a client sends to login
        LoginInput: {
          type: "object",
          required: ["email", "password"],
          properties: {
            email: {
              type: "string",
              format: "email",
            },
            password: {
              type: "string",
            },
          },
        },
      },
    },
  },
  apis: ["./src/routes/*.ts", "./src/controllers/*.ts"],
};

const swaggerSpec = swaggerJSDoc(options);

require("swagger-model-validator")(swaggerSpec);

router.get("/json", (req: Request, res: Response) => {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerSpec);
});

router.use("/", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default router;
