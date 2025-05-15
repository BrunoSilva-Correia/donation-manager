# Donation Manager

**Donation Manager** is a backend application built with [NestJS](https://nestjs.com/) and TypeScript, designed to manage donations efficiently and scalably. It also includes built-in API documentation using Swagger.

## 🚀 Technologies Used

- [NestJS](https://nestjs.com/): A progressive Node.js framework for building scalable server-side applications.
- [TypeScript](https://www.typescriptlang.org/): A statically typed superset of JavaScript.
- [Prisma](https://www.prisma.io/): A next-generation ORM for Node.js and TypeScript.
- [Yarn](https://yarnpkg.com/): A fast, reliable, and secure dependency manager.
- [Swagger](https://swagger.io/): For API documentation and testing.

## 📦 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/BrunoSilva-Correia/donation-manager.git
   ```

2. Navigate to the project directory:

   ```bash
   cd donation-manager
   ```

3. Install dependencies:

   ```bash
   yarn install
   ```

## ⚙️ Environment Variables

Create a `.env` file in the root of the project with the following variables:

```env
PORT=3000
DATABASE_URL=postgresql://user:password@localhost:5432/database_name
JWT_SECRET_TOKEN=your_secret_key
```

> Make sure to replace the values with your own database credentials and a secure JWT secret.

## 🏃 Running the Application

- Development mode:

  ```bash
  yarn start
  ```

- Watch mode (auto-restart on changes):

  ```bash
  yarn start:dev
  ```

- Production mode:

  ```bash
  yarn start:prod
  ```

Once the server is running, Swagger API documentation will be available at:

```
{{host}}/docs
```

<!-- ## 🧪 Running Tests

- Run all tests:

  ```bash
  yarn test
  ```

- Run tests with coverage:

  ```bash
  yarn test:cov
  ``` -->

## 📁 Project Structure

```
donation-manager/
|
├── prisma/             # Prisma schema and migrations
├── src/                # Application source code
├── test/               # Unit and integration tests
├── .eslintrc.js        # ESLint configuration
├── .gitignore          # Files and folders ignored by Git
├── .prettierrc         # Prettier code formatting configuration
├── nest-cli.json       # Nest CLI configuration
├── package.json        # Project metadata and scripts
├── tsconfig.build.json # TypeScript build configuration
├── tsconfig.json       # Main TypeScript configuration
└── yarn.lock           # Exact dependency versions
```

<!-- ## 📄 License

This project is licensed under the [MIT License](LICENSE). -->
