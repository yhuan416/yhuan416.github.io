# WireGuard

[WireGuard官网: https://www.wireguard.com/](https://www.wireguard.com/)  
[WireGuard官网下载页面](https://www.wireguard.com/install/)

## 安装wireguard

较新版本的linux发行版基本都可以直接安装, 以ubuntu举例

``` bash
sudo apt install wireguard
```

## 生成密钥对

生成私钥并保存到文件中
``` bash
wg genkey > privatekey
```

获取私钥对应的公钥
``` bash
wg pubkey < privatekey
```

也可以一步到位
``` bash
wg genkey | tee privatekey | wg pubkey > publickey
```

## 配置文件

```
[Interface]
PrivateKey = ${之前在本机上生成的私钥}
Address = 10.0.0.1/24
PostUp = iptables -A FORWARD -i %i -o %i -j ACCEPT;
PostDown = iptables -D FORWARD -i %i -o %i -j ACCEPT;
ListenPort = 50416

[Peer]
PublicKey = ${对端机器的公钥}
AllowedIPs = 10.0.0.2/32
```

## 设置开机自启

```
systemctl enable wg-quick@wg0
```
