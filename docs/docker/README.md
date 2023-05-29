# Docker

## 安装docker

[runoob](https://www.runoob.com/docker/docker-tutorial.html)

``` sh
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

## 配置非root用户使用docker

``` sh
sudo usermod -aG docker ${your-user}
```

## 启动一个docker
```
docker run [opt] ${image_name} [cmd]
```

常见参数
```
    -t      在新容器内指定一个伪终端或终端
    -i      允许你对容器内的标准输入 (STDIN) 进行交互
    -d      后台运行
    -p ${HOST PORT}:${CONTAINER PORT} 将容器的端口映射到宿主机上
    -v ${HOST DIR}:${CONTAINER DIR} 将容器的目录映射到宿主机上
        ${VOLUME}:${CONTAINER DIR} 将容器的目录映射到宿主机的某个 卷 上
    --net=host 直接使用宿主机的网络
    --restart=always 自动重启
    --log-opt max-size=10m --log-opt max-file=3 设置docker logs大小
    --name=${CONTAINER_NAME} 设置本次启动的容器名
```

## 查看某个容器的log
```
	docker logs ${容器名或者容器id}
```

## 停止某个容器
```
	docker stop ${容器名或者容器id}
```
	
## 销毁某个容器
```
	docker rm ${容器名或者容器id}
```

## 删除某个镜像
```
	docker rmi ${docker_images}
```

## 查看容器卷
```
	docker volume ls
```

## 创建容器卷
```
	docker volume create ${volume_name}
```

## 查看容器卷的信息
```
	docker volume inspect ${volume_name}
```
