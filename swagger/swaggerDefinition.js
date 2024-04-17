module.exports = {
 openapi: "3.0.3",
  info: {
    title: "onesytex Api Documentation",
    description: "free rest full api",
    termsOfService: "",
    contact: {
      email: "idwolf503@gmail.com"
    },
    license: {
      name: "onesytex",
      url: "https://github.com/onepunya"
    },
    version: "1.0.11"
  },
  externalDocs: {
    description: "Support this project",
    "Whatsapp Grup": "https://chat.whatsapp.com/FRL4FzReE0X4qf8Yy80RkW"
  },
  tags: [
    {
      name: "Artificial Intelligence",
      description: "API endpoints for Artificial intelligence content from various platforms."
    },
    {
      name: "Image Processig",
      description: "API endpoints for processing image content from various platforms."
    }
  ],
  paths: {
    '/api/data': {
      get: {
        summary: 'Returns sample data',
        description: 'Get sample data from the server',
        responses: {
          200: {
            description: 'Sample data response',
            content: {
              'application/json': {
                example: {
                  data: 'Sample data',
                },
              },
            },
          },
        },
      },
    },
    '/api/user': {
      post: {
        summary: 'Create a new user',
        description: 'Create a new user with provided data',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              example: {
                username: 'john_doe',
                email: 'john@example.com',
              },
            },
          },
        },
        responses: {
          201: {
            description: 'User created successfully',
          },
          400: {
            description: 'Bad request, check input data',
          },
        },
      },
    },
    '/api/tiktok-dl': {
      get: {
        summary: 'tiktok download',
        description: 'downloader tiktok slide & video',
        parameters: [
          {
            in: 'query',
            name: 'url',
            required: true,
            description: 'tiktok url',
          },
        ],
        responses: {
          200: {
            description: 'User details retrieved successfully',
            content: {
              'application/json': {
           
              },
            },
          },
          404: {
            description: 'User not found',
          },
        },
      },
    },
  },
};