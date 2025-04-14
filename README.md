# Tue

simple task manager

this project is for learning purposes only. i use it to try new ideas with angular and nodejs
or to dive deep into angular/nodejs advanced concepts

## Project Structure

root
- apps: project artifacts
  - web: angular frontend
  - api: rest api
- packages: shared packages used by apps
    - api-spec: holds api DTOs used by the api and the clients
    
## Ideas
- monorepo using pnpm
- node express using typescript
- simplified expressjs rest api structure
- try drizzle orm
  - for now i will be using typeorm
- vertical architecture (feature based)
  - projects to look into (medusa, vendure)
- automated way to generate open api spec
- try other rest frameworks
  - fastify: faster, has more features (open api)
- extract the services to a seperate package
- try nextjs and compare it to angular