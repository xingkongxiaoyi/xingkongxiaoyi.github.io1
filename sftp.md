# [Python—实现sftp客户端（连接远程服务器）](https://www.cnblogs.com/liuhaidon/p/11757357.html)

**使用SFTP上传与下载文件方式一：**

```python
import paramiko
 
transport = paramiko.Transport(("106.15.88.182", 22))    # 获取Transport实例
transport.connect(username="root", password="123456")    # 建立连接
 
# 创建sftp对象，SFTPClient是定义怎么传输文件、怎么交互文件
sftp = paramiko.SFTPClient.from_transport(transport)
 
# 将本地 api.py 上传至服务器 /www/test.py。文件上传并重命名为test.py
sftp.put("E:/test/api.py", "/www/test.py")
 
# 将服务器 /www/test.py 下载到本地 aaa.py。文件下载并重命名为aaa.py
sftp.get("/www/test.py", "E:/test/aaa.py")
 
# 关闭连接
transport.close()
```

**使用SFTP上传与下载文件方式二：**

```python
import paramiko
 
client = paramiko.SSHClient()   # 获取SSHClient实例
client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
client.connect("106.15.88.182",  username="root", password="123456")  # 连接SSH服务端
transport = client.get_transport()   # 获取Transport实例
 
# 创建sftp对象，SFTPClient是定义怎么传输文件、怎么交互文件
sftp = paramiko.SFTPClient.from_transport(transport)
 
# 将本地 api.py 上传至服务器 /www/test.py。文件上传并重命名为test.py
sftp.put("E:/test/api.py", "/www/test.py")
 
# 将服务器 /www/test.py 下载到本地 aaa.py。文件下载并重命名为aaa.py
sftp.get("/www/test.py", "E:/aaa.py")
 
# 关闭连接
client.close()
```



**使用SFTP上传与下载文件之封装：**



```python
# -*- coding:utf-8 -*-
import paramiko
import uuid
 
class SSHConnection(object):
 
    def __init__(self, host='192.168.2.103', port=22, username='root',pwd='123456'):
        self.host = host
        self.port = port
        self.username = username
        self.pwd = pwd
        self.__k = None
 
    def connect(self):
        transport = paramiko.Transport((self.host,self.port))
        transport.connect(username=self.username,password=self.pwd)
        self.__transport = transport
 
    def close(self):
        self.__transport.close()
 
    def upload(self,local_path,target_path):
        # 连接，上传
        # file_name = self.create_file()
        sftp = paramiko.SFTPClient.from_transport(self.__transport)
        # 将location.py 上传至服务器 /tmp/test.py
        sftp.put(local_path, target_path)
 
    def download(self,remote_path,local_path):
        sftp = paramiko.SFTPClient.from_transport(self.__transport)
        sftp.get(remote_path,local_path)
 
    def cmd(self, command):
        ssh = paramiko.SSHClient()
        ssh._transport = self.__transport
        # 执行命令
        stdin, stdout, stderr = ssh.exec_command(command)
        # 获取命令结果
        result = stdout.read()
        print (str(result,encoding='utf-8'))
        return result
 
ssh = SSHConnection()
ssh.connect()
ssh.cmd("ls")
ssh.upload('s1.py','/tmp/ks77.py')
ssh.download('/tmp/test.py','kkkk',)
ssh.cmd("df")
ssh.close()
```

