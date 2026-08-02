# Quorum Web

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.0.8.

## General

### What is Quorum Web?

The project is a web client for the API that is in another repository.

### Architecture

#### Folder structure

Foi usado o padrão vertical slice para organização do projeto, onde, é separado por **features** (onde cada funcionalidade do sistema é separado por sua própria pasta contendo subpastas para agrupar seus próprios componentes, services e etc.) e **shared** (onde contém componentes, services e utilitarios compartilhados entre as features).

#### Components

Foram usadas boas práticas e todos componentes são reutilizaveis e escaláveis de acordo com o crescer da aplicação!

## Commands and Local Testing

### Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

### Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

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