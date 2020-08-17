# 如何搭建 Web 前端 基础设施

## 什么是 Web 前端 的基础设施？

相关解释很多，这里给出一个描述式的说明。

    Web 前端的基础设施：是用来解决 _Web 前端项目_ 的依赖的软件环境。

它的本质是一套软件环境，它的核心是解决 Web 项目的依赖，包括：

1. 代码管理
2. 工作流机制
3. 权限校验
4. 开发环境、测试环境准备
5. 交付版本管理（回滚、AB 测试）

---

## 基础设施方案选型

1. 代码管理 CSV

    选型： Gitalb https://about.gitlab.com/

    理由：开源免费，成熟度高，支持本地安装

    其它平台：Github、Bitbucket、Gitee、Coding

2. 持续集成 CI

    选型：Gitlab CI https://docs.gitlab.com/ee/ci/

    理由：与 Gitalb 结合度高，声明式配置（.gitlab-ci.yml 配置文件）

3. 持续部署 CD

    选型：Ansible https://www.ansible.com/

    理由：声明式配置，以”基础设施及代码“为设计原理的自动化工具

4. 容器化 Container

    选型：Docker https://www.docker.com/

    理由：Web 前端容器化之后才能融入到云原生架构中，进而跟后端服务更好的融合

---

## 安装步骤

1. 准备服务器

准备 3 台干净的Linux服务器，**强烈推荐** 使用 Ubuntu Server 20.04 (LTS) 发行版。

不要使用比如 CentOS 7 这样的老发行版，避免去解决软件版本导致的无谓问题。

三台服务器的命名及用途分别为：

* Repo      ：代码管理服务，运行 Gitlab 
* Agent     ：CI、CD 服务
* Server    ：用于部署服务的服务器

2. 安装 Gitlab

在 Repo 服务器，安装 Gitalb

[安装文档](https://about.gitlab.com/install/#ubuntu)

或运行以下脚本（安装脚本可能会过期）

```shell
sudo apt update
sudo apt install -y curl openssh-server ca-certificates
sudo apt install -y postfix
curl https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.deb.sh | sudo bash
sudo apt install gitlab-ee
```

3. 安装 Gitlab-Runner

在 Agent 服务器，安装 Gitlab-Runner

[安装文档](https://docs.gitlab.com/runner/install/linux-manually.html)

或运行以下脚本（安装脚本可能会过期）

```shell
sudo apt install gitlab-runner
```

4. 配置 Gitalb-Runner

[配置文档](https://docs.gitlab.com/runner/register/)

TODO

5. 安装 Ansible

在 Agent 服务器，安装 Gitlab-Runner

[安装文档](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html#installing-ansible-on-ubuntu)

或运行以下脚本（安装脚本可能会过期）

```shell
sudo apt update
sudo apt install software-properties-common
sudo apt-add-repository --yes --update ppa:ansible/ansible
sudo apt install ansible
```

5. 创建测试项目

TODO

6. 生成 Docker 镜像


nginx 配置：

/ping => "pong"
/info => "
author: xxx
version: xxx
build_time: 2020-08-15 17:00:37
environment: production
log_level: fatal
"

## 背景

前不久入职 xx 公司，十几个人的前端团队，因为还没有建设好自己的基础设施和工作流，所以打算先建设好前端自己的基础设施，后来没做完。记录下实施步骤，如果有人感兴趣可以继续完善。

目标

    全生命周期的前端团队 [Full-cycle-devs](https://netflixtechblog.com/full-cycle-developers-at-netflix-a08c31f83249)

适用范围

    面向业务的前端、后端技术团队，都可以适用这套基础设施方案。


---

## FAQ

前端开发需要会写服务端代码吗？

    需要。全栈是基础，前端是专长，单一技术或职能不能满足高阶任务，没有全景视野便无法做好前端的架构设计。

前端开发都要负责哪些工作？

    比“前端/后端”更合适的研发的划分方式是：“前台/中台/后台”（前、中、后台的划分的本质是组织行为学，我们不去探讨它的原理），用“前台”来代替“前端”可以更准确的描述其负责的工作范围：面向用户，以满足用户需求为目标的工作，都属于前台工作范畴，不论你写的是JavaScript、Node、Java、SQL、还是Shell，只要以用户为目标就都属于前台。

前端开发为什么要自己做自己的基础设施？

    1. 现有基础设施薄弱，CI、CD 功能不完整，或还需要编写大量 Shell 脚本
    2. 不适合前端使用，由运维团队负责基础设施建设，没有考虑前端的特殊性，比如微信小程序
    2. 项目有需要特殊，使用了不同的技术栈、不同的研发团队组织模型，比如全生命周期团队

什么情况下前端 **不应该** 建设自己的基础设施？

    1. 现行基础设施已经足够满足需求，不必再造轮子
    2. 不会运维，仅仅看了一篇教程就要自己做基础设施，力所不逮
    3. 与现有的基础设施严重分裂，并且不能清晰的计算投入产出比
    4. 没有做远景目标的规划，
