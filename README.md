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
    - utils: utility functions and classes
    
## Ideas
- [x] monorepo using pnpm
- [x] node express using typescript
- [x] simplified expressjs rest api structure
- [ ] try drizzle orm
  - for now i will be using typeorm
- [ ] vertical architecture (feature based)
  - projects to look into (medusa, vendure)
- [x] automated way to generate open api spec
  - in node world, there is no easy way to automate open api generation
  - i think the best solution is to write open api spec by hand
  - it should be easy with the help of ai though
- [x] try other rest frameworks
  - [x] express: does not play well with typescript
  - [x] fastify: faster, has more features
  - [x] hono
  - [ ] elsyia: 
    - maintained only by one developer
    - works only on bun (based on bun server)
- [ ] extract the features to a seperate package
- [ ] try other frontend frameworks and compare them to angular
  - [ ] sveltekit
  - [ ] nextjs