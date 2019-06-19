# my-pages - admin

## Notes

Running correctly from '/admin' path both on production server and local, requires some tricky setups besides `docker-compose.yml`, `Dockerrun.aws.json` and `.travis.yml` files.

Nginx proxy pass should contain '/' at the end (`proxy_pass http://admin/;`) on production, but removed locally.
