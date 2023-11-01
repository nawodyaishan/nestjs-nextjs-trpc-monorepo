# NestJS + NextJS + tRPC Monorepo

This is a full-stack, type-safe monorepo project that
combines [NestJS](https://nestjs.com/), [Next.js](https://nextjs.org/), and [tRPC](https://trpc.io/). It allows you to
build a modern web application with server-side and client-side rendering while ensuring strong type safety throughout
the project. This README will provide an overview of the project structure and how to get started.

## Project Structure

The project structure is organized as follows:

```
nestjs-nextjs-trpc/
  ├── apps/
  │   ├── server/
  │   │   ├── src/
  │   │   │   ├── ...
  │   │   ├── package.json
  │   │   ├── tsconfig.json
  │   │   └── ...
  │   ├── web/
  │   │   ├── app/
  │   │   │   ├── ...
  │   │   ├── package.json
  │   │   ├── tsconfig.json
  │   │   └── ...
  ├── pnpm-lock.yaml
  ├── pnpm-workspace.yaml
  ├── package.json
  ├── tsconfig.json
  └── ...
```

- `apps/server/`: This is the NestJS server application. It contains server-specific code, controllers, services, and
  APIs.

- `apps/web/`: This is the Next.js web application. It contains the client-side code, pages, and components for the
  frontend.

## Getting Started

Follow these steps to get your project up and running:

1. **Install Dependencies**: First, make sure you have [pnpm](https://pnpm.io/) installed. Then, navigate to the project
   root and install the dependencies for both server and web applications:

   ```bash
   pnpm install
   cd apps/server
   pnpm install
   cd ../web
   pnpm install
   ```

2. **Environment Variables**: Set up any necessary environment variables for your server and web applications. You can
   create `.env` files for each application, typically named `.env` for server and `.env.local` for web.

3. **Development**: You can run both the server and web applications concurrently using the provided `dev` script. This
   will start the NestJS server and the Next.js development server.

   ```bash
   pnpm run dev
   ```

4. **Building and Deployment**: When you're ready to deploy your project, refer to the respective documentation for
   NestJS and Next.js for building and deploying your applications.

5. **Customization**: Customize your applications, add routes, controllers, components, and features to match your
   specific project requirements.

## Contributing

If you'd like to contribute to this project, please follow these guidelines:

1. Fork the repository on GitHub.
2. Create a new branch for your feature or bug fix.
3. Make your changes, following the project's coding style and conventions.
4. Write tests if necessary and ensure all tests pass.
5. Submit a pull request to the main repository's `main` branch.

