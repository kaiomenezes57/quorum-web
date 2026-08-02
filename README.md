# Quorum Web

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.0.8.

## General

### What is Quorum Web?

The project is a web client for the [Quorum API](https://github.com/kaiomenezes57/quorum-api).

### Architecture

#### Folder structure

The project uses the Vertical Slice Architecture pattern for organization. The application is divided into features, where each system functionality has its own dedicated folder containing its related components, services, and other internal resources.

A shared folder is also used to store reusable components, services, utilities, and other resources that are common across multiple features.

#### Components

Best practices were followed when developing the components. All components are designed to be reusable, maintainable, and scalable, allowing the application to grow efficiently as new features are added.

## Commands and Local Testing

### Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

### Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

### Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```