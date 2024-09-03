export const data = JSON.parse("{\"key\":\"v-4cef7227\",\"path\":\"/posts/%E8%BF%90%E7%BB%B4/devops/Harbor%E9%83%A8%E7%BD%B2.html\",\"title\":\"Harbor部署\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Harbor部署\",\"icon\":\"circle-info\",\"description\":\"Harbor部署 Harbor部署 1、wget https://github.com/goharbor/harbor/releases/download/v2.8.0/harbor-offline-installer-v2.9.0.tgz 2、解压 tar zxvf harbor-offline-installer-v2.9.0.tgz -C /usr/local/harbor/ 3、拷贝配置文件 cp /usr/local/harbor/harbor/harbor.yml.tmpl /usr/local/harbor/harbor/harbor.yml 4、修改配置文件 vim /opt/harbor/harbor.yml/usr/local/harbor/harbor/harbor.yml 修改hostname 和 port 注释https 5、启动 ./prepare ./install.sh ip:85 账号admin，密码Harbor12345 6、docker配置文件中配置仓库地址 /etc/docker/daemon.conf 中加入： cat &gt; /etc/docker/daemon.conf &lt;&lt; EOF { \\\"registry-mirrors\\\": [ \\\"https://jkgtnyi7.mirror.aliyuncs.com\\\", \\\"https://registry.docker-cn.com\\\", \\\"http://hub-mirror.c.163.com\\\", \\\"https://docker.mirrors.ustc.edu.cn\\\" ], \\\"exec-opts\\\": [\\\"native.cgroupdriver=systemd\\\"], \\\"log-driver\\\": \\\"json-file\\\", \\\"log-opts\\\": { \\\"max-size\\\": \\\"100m\\\" }, \\\"insecure-registries\\\": [\\\"192.168.10.250:85\\\"] } EOF 7、修改docker 配置文件 vim /usr/lib/systemd/system/docker.service 在ExecStart=/usr/bin/dockerd后面加： --insecure-registry 192.168.10.250:85 \\\\ 8、重启docker systemctl daemon-reload &amp;&amp; systemctl restart docker\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://github.com/chenweiquan-red/posts/%E8%BF%90%E7%BB%B4/devops/Harbor%E9%83%A8%E7%BD%B2.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"WQ-知识库\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Harbor部署\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Harbor部署 Harbor部署 1、wget https://github.com/goharbor/harbor/releases/download/v2.8.0/harbor-offline-installer-v2.9.0.tgz 2、解压 tar zxvf harbor-offline-installer-v2.9.0.tgz -C /usr/local/harbor/ 3、拷贝配置文件 cp /usr/local/harbor/harbor/harbor.yml.tmpl /usr/local/harbor/harbor/harbor.yml 4、修改配置文件 vim /opt/harbor/harbor.yml/usr/local/harbor/harbor/harbor.yml 修改hostname 和 port 注释https 5、启动 ./prepare ./install.sh ip:85 账号admin，密码Harbor12345 6、docker配置文件中配置仓库地址 /etc/docker/daemon.conf 中加入： cat &gt; /etc/docker/daemon.conf &lt;&lt; EOF { \\\"registry-mirrors\\\": [ \\\"https://jkgtnyi7.mirror.aliyuncs.com\\\", \\\"https://registry.docker-cn.com\\\", \\\"http://hub-mirror.c.163.com\\\", \\\"https://docker.mirrors.ustc.edu.cn\\\" ], \\\"exec-opts\\\": [\\\"native.cgroupdriver=systemd\\\"], \\\"log-driver\\\": \\\"json-file\\\", \\\"log-opts\\\": { \\\"max-size\\\": \\\"100m\\\" }, \\\"insecure-registries\\\": [\\\"192.168.10.250:85\\\"] } EOF 7、修改docker 配置文件 vim /usr/lib/systemd/system/docker.service 在ExecStart=/usr/bin/dockerd后面加： --insecure-registry 192.168.10.250:85 \\\\ 8、重启docker systemctl daemon-reload &amp;&amp; systemctl restart docker\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2024-07-06T10:02:10.000Z\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Durant\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2024-07-06T10:02:10.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Harbor部署\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":\\\"2024-07-06T10:02:10.000Z\\\",\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Durant\\\",\\\"url\\\":\\\"https://www.wqknowledge.top/\\\"}]}\"]]},\"headers\":[{\"level\":3,\"title\":\"Harbor部署\",\"slug\":\"harbor部署-1\",\"link\":\"#harbor部署-1\",\"children\":[]}],\"git\":{\"createdTime\":1720260130000,\"updatedTime\":1720260130000,\"contributors\":[{\"name\":\"chenweiquan-red\",\"email\":\"1271288660@qq.com\",\"commits\":1}]},\"readingTime\":{\"minutes\":0.51,\"words\":152},\"filePathRelative\":\"posts/运维/devops/Harbor部署.md\",\"localizedDate\":\"2024年7月6日\",\"excerpt\":\"<h1> Harbor部署</h1>\\n<h3> Harbor部署</h3>\\n<div class=\\\"language-bash line-numbers-mode\\\" data-ext=\\\"sh\\\"><pre class=\\\"language-bash\\\"><code><span class=\\\"token number\\\">1</span>、wget https://github.com/goharbor/harbor/releases/download/v2.8.0/harbor-offline-installer-v2.9.0.tgz\\n\\n<span class=\\\"token number\\\">2</span>、解压 <span class=\\\"token function\\\">tar</span> zxvf harbor-offline-installer-v2.9.0.tgz <span class=\\\"token parameter variable\\\">-C</span> /usr/local/harbor/\\n\\n<span class=\\\"token number\\\">3</span>、拷贝配置文件 <span class=\\\"token function\\\">cp</span> /usr/local/harbor/harbor/harbor.yml.tmpl /usr/local/harbor/harbor/harbor.yml\\n\\n<span class=\\\"token number\\\">4</span>、修改配置文件 <span class=\\\"token function\\\">vim</span> /opt/harbor/harbor.yml/usr/local/harbor/harbor/harbor.yml\\n修改hostname 和 port\\n注释https\\n\\n<span class=\\\"token number\\\">5</span>、启动\\n./prepare\\n./install.sh\\n\\nip:85\\n账号admin，密码Harbor12345\\n\\n<span class=\\\"token number\\\">6</span>、docker配置文件中配置仓库地址 /etc/docker/daemon.conf 中加入：\\n\\n<span class=\\\"token function\\\">cat</span> <span class=\\\"token operator\\\">&gt;</span> /etc/docker/daemon.conf <span class=\\\"token operator\\\">&lt;&lt;</span> <span class=\\\"token string\\\">EOF\\n    {\\n    \\\"registry-mirrors\\\": [\\n    \\\"https://jkgtnyi7.mirror.aliyuncs.com\\\",\\n    \\\"https://registry.docker-cn.com\\\",\\n    \\\"http://hub-mirror.c.163.com\\\",\\n    \\\"https://docker.mirrors.ustc.edu.cn\\\"\\n    ],\\n    \\\"exec-opts\\\": [\\\"native.cgroupdriver=systemd\\\"],\\n    \\\"log-driver\\\": \\\"json-file\\\",\\n    \\\"log-opts\\\": {\\n    \\\"max-size\\\": \\\"100m\\\"\\n    },\\n    \\\"insecure-registries\\\": [\\\"192.168.10.250:85\\\"]\\n    }\\nEOF</span>\\n\\n<span class=\\\"token number\\\">7</span>、修改docker 配置文件 <span class=\\\"token function\\\">vim</span>  /usr/lib/systemd/system/docker.service\\n\\n在ExecStart<span class=\\\"token operator\\\">=</span>/usr/bin/dockerd后面加：\\n--insecure-registry <span class=\\\"token number\\\">192.168</span>.10.250:85 <span class=\\\"token punctuation\\\">\\\\</span>\\n\\n<span class=\\\"token number\\\">8</span>、重启docker\\nsystemctl daemon-reload <span class=\\\"token operator\\\">&amp;&amp;</span> systemctl restart <span class=\\\"token function\\\">docker</span>\\n\\n\\n\\n\\n\\n\\n\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")
