### Live Link: <a href="https://cow-hut-backend-assignment-gold.vercel.app/">Link</a>

### Application Routes:

### User

- api/v1/auth/signup (POST)
- api/v1/users (GET)
- api/v1/users/ (Single GET) Include an id that is saved in your database
- api/v1/users/ (PATCH)
- api/v1/users/ (DELETE) Include an id that is saved in your database

### Cows

- api/v1/cows (POST)
- api/v1/cows (GET)
- api/v1/cows/ (Single GET) Include an id that is saved in your database
- api/v1/cows/ (PATCH)
- api/v1/cows/ (DELETE) Include an id that is saved in your database

### Pagination and Filtering routes of Cows
- api/v1/cows?page=1&limit=10
- api/v1/cows?sortBy=price&sortOrder=asc
- api/v1/cows?minPrice=20000&maxPrice=70000
- api/v1/cows?location=Chattogram
- api/v1/cows?searchTerm=Cha

### Orders
- api/v1/orders (POST)
- api/v1/orders (GET)