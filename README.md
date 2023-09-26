

## Getting started

### 1. Download example and install dependencies


Install npm dependencies:
```
cd authentication-jwt-nodejs
npm install
```

### 2. Create and seed the database



```
npx prisma migrate dev --name init
```


### 3. Start database with Docker componse

```
docker-compose up
```


### 4. Start the REST API server

```
npm run dev
```

The server is now running on `http://localhost:3000`.
