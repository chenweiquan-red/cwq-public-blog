export const data = JSON.parse("{\"key\":\"v-6fce4bfc\",\"path\":\"/posts/%E8%BF%90%E7%BB%B4/devops/Jenkins%E9%83%A8%E7%BD%B2%E5%8F%8A%E4%BD%BF%E7%94%A8.html\",\"title\":\"Jenkins部署及使用\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Jenkins部署及使用\",\"icon\":\"circle-info\",\"description\":\"Jenkins部署及使用 安装部署 基本要求：安装部署前需要先安装JDK1.8, git, maven, docker, docker-compose 等环境 通过docker-compose方式安装jenkins， 好处是不需要关心 jenkins 的版本，需要的jdk,git,maven等插件都和物理机解耦 另一个原因是 jenkins 只有最新的几个版本才支持在线安装插件，如果用低级传统的部署方式，必须要找到离线安装需要的所有插件 才能正常使用。 docker-compose.yml 内容如下：（注意：maven/jdk/git等路径的映射要和物理机的路径要对应） version: '3.8' services: docker_jekins_2.378: image: jenkins/jenkins:2.378-jdk11 container_name: docker_jekins_2.378 user: root ports: - \\\"8081:8080\\\" expose: - \\\"50000\\\" - \\\"8080\\\" privileged: true restart: unless-stopped volumes: - ./jenkins_data:/var/jenkins_home - /usr/local/maven/apache-maven-3.6.3:/usr/local/mymaven - /usr/local/java/jdk1.8.0_281:/usr/local/jdk - /usr/bin/git:/usr/local/git\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://github.com/chenweiquan-red/posts/%E8%BF%90%E7%BB%B4/devops/Jenkins%E9%83%A8%E7%BD%B2%E5%8F%8A%E4%BD%BF%E7%94%A8.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"WQ-知识库\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Jenkins部署及使用\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Jenkins部署及使用 安装部署 基本要求：安装部署前需要先安装JDK1.8, git, maven, docker, docker-compose 等环境 通过docker-compose方式安装jenkins， 好处是不需要关心 jenkins 的版本，需要的jdk,git,maven等插件都和物理机解耦 另一个原因是 jenkins 只有最新的几个版本才支持在线安装插件，如果用低级传统的部署方式，必须要找到离线安装需要的所有插件 才能正常使用。 docker-compose.yml 内容如下：（注意：maven/jdk/git等路径的映射要和物理机的路径要对应） version: '3.8' services: docker_jekins_2.378: image: jenkins/jenkins:2.378-jdk11 container_name: docker_jekins_2.378 user: root ports: - \\\"8081:8080\\\" expose: - \\\"50000\\\" - \\\"8080\\\" privileged: true restart: unless-stopped volumes: - ./jenkins_data:/var/jenkins_home - /usr/local/maven/apache-maven-3.6.3:/usr/local/mymaven - /usr/local/java/jdk1.8.0_281:/usr/local/jdk - /usr/bin/git:/usr/local/git\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2024-07-06T10:02:10.000Z\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Durant\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2024-07-06T10:02:10.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Jenkins部署及使用\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":\\\"2024-07-06T10:02:10.000Z\\\",\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Durant\\\",\\\"url\\\":\\\"https://www.wqknowledge.top/\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"安装部署\",\"slug\":\"安装部署\",\"link\":\"#安装部署\",\"children\":[]},{\"level\":2,\"title\":\"基本设置\",\"slug\":\"基本设置\",\"link\":\"#基本设置\",\"children\":[{\"level\":3,\"title\":\"选择插件\",\"slug\":\"选择插件\",\"link\":\"#选择插件\",\"children\":[]},{\"level\":3,\"title\":\"jenkins - 系统配置 - 全局配置\",\"slug\":\"jenkins-系统配置-全局配置\",\"link\":\"#jenkins-系统配置-全局配置\",\"children\":[]},{\"level\":3,\"title\":\"jenkins 创建项目\",\"slug\":\"jenkins-创建项目\",\"link\":\"#jenkins-创建项目\",\"children\":[]}]},{\"level\":2,\"title\":\"总结\",\"slug\":\"总结\",\"link\":\"#总结\",\"children\":[]}],\"git\":{\"createdTime\":1720260130000,\"updatedTime\":1720260130000,\"contributors\":[{\"name\":\"chenweiquan-red\",\"email\":\"1271288660@qq.com\",\"commits\":1}]},\"readingTime\":{\"minutes\":2.34,\"words\":701},\"filePathRelative\":\"posts/运维/devops/Jenkins部署及使用.md\",\"localizedDate\":\"2024年7月6日\",\"excerpt\":\"<h1> Jenkins部署及使用</h1>\\n<h2> 安装部署</h2>\\n<p>基本要求：安装部署前需要先安装JDK1.8, git, maven, docker, docker-compose 等环境</p>\\n<div class=\\\"language-xml line-numbers-mode\\\" data-ext=\\\"xml\\\"><pre class=\\\"language-xml\\\"><code>    通过docker-compose方式安装jenkins， 好处是不需要关心 jenkins 的版本，需要的jdk,git,maven等插件都和物理机解耦\\n    另一个原因是 jenkins 只有最新的几个版本才支持在线安装插件，如果用低级传统的部署方式，必须要找到离线安装需要的所有插件\\n    才能正常使用。\\n\\n    docker-compose.yml 内容如下：（注意：maven/jdk/git等路径的映射要和物理机的路径要对应）\\n        \\n    version: '3.8'\\n    services:\\n     docker_jekins_2.378:\\n      image: jenkins/jenkins:2.378-jdk11\\n      container_name: docker_jekins_2.378\\n      user: root\\n      ports:\\n        - \\\"8081:8080\\\"\\n      expose:\\n        - \\\"50000\\\"\\n        - \\\"8080\\\"\\n      privileged: true\\n      restart: unless-stopped\\n      volumes:\\n        - ./jenkins_data:/var/jenkins_home\\n        - /usr/local/maven/apache-maven-3.6.3:/usr/local/mymaven\\n        - /usr/local/java/jdk1.8.0_281:/usr/local/jdk\\n        - /usr/bin/git:/usr/local/git\\n\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")
