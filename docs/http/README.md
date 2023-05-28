# 搭建http服务器

## 使用docker快速搭建一个http服务器

``` sh
cd ${http_file_path}
docker run -dit --restart=always --name nginx -p 80:80 -v `pwd`:/usr/share/nginx/html nginx:alpine
```


