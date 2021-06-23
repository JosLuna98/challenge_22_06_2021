# challenge_22_06_2021

1. First you have to setup the containers.
- RUN `docker-compose up`
2. Then you have to run the migrations in the laravel project. 
- RUN `docker exec -ti dev_backend php artisan migrate`
3. Finally you have to run seeders to use the api with data.
- RUN `docker exec -ti dev_backend php artisan db:seed`

NOTE: env file is uploaded in the repository just for testing.