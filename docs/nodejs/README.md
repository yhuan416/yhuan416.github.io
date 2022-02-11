# Nodejs
---
> 记录[nodejs](https://nodejs.org/en/)安装以及使用的过程  

## Linux安装

假设需要将nodejs安装到 /root/tools

1. 下载安装包
``` bash
wget https://nodejs.org/dist/v16.14.0/node-v16.14.0-linux-x64.tar.xz
```

2. 解压
``` bash
cp node-v16.14.0-linux-x64.tar.xz /root/tools
cd /root/tools
tar xvf node-v16.14.0-linux-x64.tar.xz
```

3. 添加环境变量
``` bash
export PATH=${PATH}:/root/tools/node-v16.14.0-linux-x64/bin
```

4. nodejs安装完成后检查
``` bash
node -v
npm -v
```

## cnpm安装

查看当前npm配置

``` bash
npm config ls -l
```

全局安装cnpm

``` bash
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

检查安装是否成功

``` bash
cnpm -v
```

如果显示指令不存在,则需要添加环境变量
