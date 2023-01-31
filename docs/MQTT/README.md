# MQTT
> MQTT（Message Queuing Telemetry Transport，消息队列遥测传输协议）
---

# 通过docker部署MQTT Broker
---
> docker image : eclipse-mosquitto

[Docker Hub](https://hub.docker.com/_/eclipse-mosquitto)
[Github](https://github.com/eclipse/mosquitto)
[部署样例](https://gitee.com/yhuan416/mosquitto-docker)

## 1. 拉取docker镜像

---

``` bash
docker pull eclipse-mosquitto:2.0.14
```

## 2. 配置文件

---

- 新建文件夹


``` bash
mkdir mosquitto
cd mosquitto
```

- 配置文件  

``` bash
mkdir mosquitto_conf
vim mosquitto_conf/mosquitto.conf
```

- 常用配置项

``` vim
# 持久化
persistence true
persistence_location /mosquitto/data/

per_listener_settings true

# 端口
listener 1883

# 是否允许匿名登录
allow_anonymous false

# 日志输出目录
log_dest file /mosquitto/log/mosquitto.log

# 账号密码文件
password_file /mosquitto/config/pwdfile

# 账号权限配置文件
acl_file /mosquitto/config/aclfile
```

> [mosquitto.conf文件说明](https://gitee.com/yhuan416/mosquitto-docker/blob/master/mosquitto.example)

## 3. 启动docker

---

``` bash
docker run -d --name mq --restart always -p 1883:1883 \
-v `pwd`/mosquitto_conf:/mosquitto/config \
-v mosquitto_data:/mosquitto/data \
-v mosquitto_logs:/mosquitto/log \
eclipse-mosquitto:2.0.14
```

## 4. docker-compose.yml

---

``` yaml
version: "3.4"

services:
  mq:
    image: eclipse-mosquitto:2.0.14
    container_name: mq
    restart: always
    ports:
      - "1883:1883"
    volumes:
      - ./mosquitto_conf:/mosquitto/config
      - mosquitto_data:/mosquitto/data
      - mosquitto_logs:/mosquitto/log
volumes:
  mosquitto_data: {}
  mosquitto_logs: {}
```

## 5. 账号管理

> 通过 mosquitto_passwd 来进行账号管理

---

- 在 mosquitto_conf 目录下创建 pwdfile 文件

- 在 mosquitto.conf 中添加配置
``` vim
password_file /mosquitto/config/pwdfile
```

- 进入容器
``` bash
docker-compose run mq sh
```

- 进入配置目录
``` bash
cd /mosquitto/config
```

- 添加账号
> 会要求输入两次账号的密码
``` bash
mosquitto_passwd -c pwdfile ${username}
```

- 删除账号
``` bash
mosquitto_passwd -D pwdfile ${username}
```

## 6. 账号权限管理

> 控制账号可 订阅/发布 的topic类型

---

- 在 mosquitto.conf 中添加配置
``` vim
acl_file /mosquitto/config/aclfile
```

- 在 mosquitto_conf 目录下创建 aclfile 文件
``` vim
# user "node" can sub/pub all topic
user node
topic #
#topic read ${topic can sub}
#topic write ${topic can pub}
```
