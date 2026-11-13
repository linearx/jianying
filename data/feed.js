window.FEED_DATA = {
  "generatedAt": "2026-11-13T10:25:26.029Z",
  "count": 72,
  "batches": [
    {
      "id": 4,
      "createdAt": "2026-11-13T10:25:26.042Z",
      "note": "refresh",
      "queued": 12
    },
    {
      "id": 3,
      "createdAt": "2026-11-13T08:15:19.855Z",
      "note": "refresh",
      "queued": 12
    },
    {
      "id": 2,
      "createdAt": "2026-11-13T05:54:15.336Z",
      "note": "refresh",
      "queued": 12
    },
    {
      "id": 1,
      "createdAt": "2026-11-13T05:53:28.443Z",
      "note": "第一批：2026-11-13 抓取",
      "queued": 8
    }
  ],
  "items": [
    {
      "key": "https://github.com/kobima6813/fossil-versions",
      "url": "https://github.com/kobima6813/fossil-versions",
      "lane": "discussion",
      "source": "Hacker News",
      "title": "Fossil versions: a fingerprint of AI-written code in 250k NPM packages",
      "titleZh": "AI 写的代码会留下「化石版本」特征：250 万个 npm 包里的证据",
      "author": "kobima6813",
      "publishedAt": "2026-11-13T08:13:57.000Z",
      "popularity": {
        "label": "points",
        "value": 2
      },
      "excerpt": "",
      "excerptZh": "",
      "reason": "用依赖版本号反推 manifest 是不是模型凭记忆写的，思路很巧。",
      "tags": [
        "AI编程",
        "数据"
      ],
      "cover": "./data/covers/thumbs/25a1b5bfa1a8.jpg",
      "lang": "en",
      "duration": null,
      "keyPoints": [
        "随机抽样 25 万个 npm 包，看首个版本里写死的依赖版本号",
        "发现一批「比发布时间还新」的版本号，只可能来自模型记忆而非真实安装",
        "作者强调数据不能证明具体是谁写的，只能指向 manifest 是生成的"
      ],
      "uses": [
        "判断输入：怎么识别 AI 生成的代码痕迹",
        "方法借鉴：用版本号这类副产物做取证"
      ],
      "gap": "基于仓库 README 整理。",
      "batchId": 3,
      "state": {
        "saved": false,
        "read": false,
        "hidden": false
      },
      "id": 0
    },
    {
      "key": "https://sspai.com/post/118153",
      "url": "https://sspai.com/post/118153",
      "lane": "zh",
      "source": "少数派",
      "title": "研究生如何用 AI 辅助完成一篇综述：我的科研写作工具与实践经验",
      "titleZh": "研究生如何用 AI 辅助完成一篇综述",
      "author": "胡拉图说",
      "publishedAt": "2026-11-13T07:00:00.000Z",
      "popularity": null,
      "excerpt": "AI 改变的不是科研写作本身，而是我们完成科研写作时的工作方式。 查看全文",
      "excerptZh": "",
      "reason": "从选题、检索到绘图、格式检查，全流程的工具分工写得很具体。",
      "tags": [
        "科研",
        "AI写作"
      ],
      "cover": "./data/covers/thumbs/3d1c77a074e7.jpg",
      "lang": "zh",
      "duration": null,
      "keyPoints": [
        "按「选题—检索—证据整理—写作—绘图—格式检查」拆解综述流程",
        "工具组合是 AI + Zotero + Keynote + AI Agent",
        "强调保留人工核验环节，而不是让 AI 代写"
      ],
      "uses": [
        "自用：照这套流程写综述",
        "内容选题：AI 辅助科研的边界"
      ],
      "gap": "",
      "batchId": 3,
      "state": {
        "saved": false,
        "read": false,
        "hidden": false
      },
      "id": 1
    },
    {
      "key": "https://concernedaistaff.org/",
      "url": "https://concernedaistaff.org/",
      "lane": "discussion",
      "source": "Hacker News",
      "title": "Coalition of Concerned AI Staff",
      "titleZh": "关心 AI 的员工联盟：在造前沿模型的公司内部组织起来",
      "author": "Bluestein",
      "publishedAt": "2026-11-13T08:10:42.000Z",
      "popularity": {
        "label": "points",
        "value": 1
      },
      "excerpt": "",
      "excerptZh": "",
      "reason": "一线员工对「自己在造什么」公开发声，是行业治理的新变量。",
      "tags": [
        "行业",
        "治理"
      ],
      "cover": "./data/covers/thumbs/3f77835f043a.jpg",
      "lang": "en",
      "duration": null,
      "keyPoints": [
        "由前沿 AI 公司员工组成的跨公司联盟",
        "主张从业者对技术用途负有公共责任",
        "组织跨实验室的会议和工作组"
      ],
      "uses": [
        "行业观察：内部异议如何组织化",
        "内容选题：造 AI 的人怎么看 AI 风险"
      ],
      "gap": "",
      "batchId": 3,
      "state": {
        "saved": false,
        "read": false,
        "hidden": false
      },
      "id": 2
    },
    {
      "key": "https://rocketgit.com/user/catalinux/ai-drop",
      "url": "https://rocketgit.com/user/catalinux/ai-drop",
      "lane": "discussion",
      "source": "Hacker News",
      "title": "Show HN: AI-drop project – drop traffic fast from misbehaving crawlers (AGPL)",
      "titleZh": "AI-drop：给乱抓内容的爬虫限流",
      "author": "catab",
      "publishedAt": "2026-11-13T08:05:44.000Z",
      "popularity": {
        "label": "points",
        "value": 2
      },
      "excerpt": "Hello! All started with 4 million requests / day on rocketgit.com (AGPL git hosting). Instead of thousands. Enough is enough! Presentation (8 pages): https://rocketgit.com/user/catalinux/ai-drop/artefacts/downl... So, I built AI-drop free-software project…",
      "excerptZh": "",
      "reason": "内容站对抗 AI 抓取的开源小工具，思路直接。",
      "tags": [
        "工具",
        "AI爬虫"
      ],
      "cover": "./data/covers/thumbs/67eec1b29f06.jpg",
      "lang": "en",
      "duration": null,
      "keyPoints": [
        "开源项目（AGPL），用来对行为不当的爬虫快速限流",
        "面向内容站，解决被 AI 爬虫高频抓取的问题",
        "原文页面为空，细节需看仓库"
      ],
      "uses": [
        "自用：站点被爬爆时的应急手段",
        "内容选题：内容站怎么和 AI 爬虫相处"
      ],
      "gap": "原文无正文，以上据标题与项目定位整理。",
      "batchId": 3,
      "state": {
        "saved": false,
        "read": false,
        "hidden": false
      },
      "id": 3
    },
    {
      "key": "https://cs329z.stanford.edu/",
      "url": "https://cs329z.stanford.edu/",
      "lane": "discussion",
      "source": "Hacker News",
      "title": "Stanford CS 329Z: Engineering AI Agents",
      "titleZh": "斯坦福 CS 329Z：工程化 AI Agent 课程",
      "author": "chirau",
      "publishedAt": "2026-11-13T07:51:57.000Z",
      "popularity": {
        "label": "points",
        "value": 1
      },
      "excerpt": "",
      "excerptZh": "",
      "reason": "从 LLM 流水线到复合系统再到自主 agent，课纲本身就是一张能力地图。",
      "tags": [
        "课程",
        "agent"
      ],
      "cover": "./data/covers/thumbs/fed73609bc96.jpg",
      "lang": "en",
      "duration": null,
      "keyPoints": [
        "课程覆盖从 LLM 流水线到复合 AI 系统再到自主 agent",
        "强调问题分解、组件选择、数据整理和评测设计",
        "核心是工程取舍，不是调 prompt"
      ],
      "uses": [
        "学习路线：按这个课纲补能力",
        "团队参考：agent 项目的必备环节清单"
      ],
      "gap": "",
      "batchId": 3,
      "state": {
        "saved": false,
        "read": false,
        "hidden": false
      },
      "id": 4
    },
    {
      "key": "https://news.ycombinator.com/item?id=50479788",
      "url": "https://news.ycombinator.com/item?id=50479788",
      "lane": "discussion",
      "source": "Hacker News",
      "title": "Ask HN: Is there hope against slop?",
      "titleZh": "HN 讨论：面对 AI 生成的垃圾内容，还有希望吗",
      "author": "yuchi",
      "publishedAt": "2026-11-13T07:46:23.000Z",
      "popularity": {
        "label": "points",
        "value": 3
      },
      "excerpt": "Long time HNer here, mostly lurker. Developer turned agent steerer yada yada yada, you all know the story. I'm writing because I think we are missing something important in the discourse on slop. The realization that occured to me recently is that it is simply not possible for media (social,…",
      "excerptZh": "",
      "reason": "社区情绪样本，能看到大家对「slop」的耐受度。",
      "tags": [
        "讨论",
        "AI内容"
      ],
      "cover": "",
      "lang": "en",
      "duration": null,
      "keyPoints": [
        "讨论「slop」（AI 生成的垃圾内容）是否正在淹没信息流",
        "属于社区情绪样本，不是研究结论"
      ],
      "uses": [
        "内容选题：信息质量下降的体感",
        "产品参考：反 slop 的需求在哪"
      ],
      "gap": "讨论帖正文未抓到，以上据标题整理。",
      "batchId": 3,
      "state": {
        "saved": false,
        "read": false,
        "hidden": false
      },
      "id": 5
    },
    {
      "key": "https://mlq.ai/news/tsmc-says-employee-personal-data-was-posted-online-from-a-cloud-providers-systems/",
      "url": "https://mlq.ai/news/tsmc-says-employee-personal-data-was-posted-online-from-a-cloud-providers-systems/",
      "lane": "discussion",
      "source": "Hacker News",
      "title": "TSMC Has Been Hacked",
      "titleZh": "台积电称员工个人数据从云服务商系统泄露",
      "author": "pretext",
      "publishedAt": "2026-11-13T07:37:59.000Z",
      "popularity": {
        "label": "points",
        "value": 15
      },
      "excerpt": "",
      "excerptZh": "",
      "reason": "AI 供应链上游的安全事件，影响面比一般公司大。",
      "tags": [
        "安全",
        "行业"
      ],
      "cover": "./data/covers/thumbs/ef40425683fa.jpg",
      "lang": "en",
      "duration": null,
      "keyPoints": [
        "台积电确认员工个人数据经由云服务商系统被公开",
        "事件发生在 AI 供应链的关键节点上"
      ],
      "uses": [
        "风险意识：供应商安全会传导到核心厂商",
        "内容选题：AI 供应链的薄弱环节"
      ],
      "gap": "原文 403，以上据标题整理。",
      "batchId": 3,
      "state": {
        "saved": false,
        "read": false,
        "hidden": false
      },
      "id": 6
    },
    {
      "key": "https://twitter.com/willdepue/status/2120992457630326841",
      "url": "https://twitter.com/willdepue/status/2120992457630326841",
      "lane": "discussion",
      "source": "Hacker News",
      "title": "Forensic evidence Chinese AI labs built their newest models on Nvidia Blackwell",
      "titleZh": "取证证据：中国 AI 实验室的新模型是在英伟达 Blackwell 上训的",
      "author": "oger",
      "publishedAt": "2026-11-13T07:36:28.000Z",
      "popularity": {
        "label": "points",
        "value": 4
      },
      "excerpt": "",
      "excerptZh": "",
      "reason": "芯片管制的执行效果，最终要看这类取证。",
      "tags": [
        "行业",
        "芯片"
      ],
      "cover": "./data/covers/thumbs/2b5330c4dfc6.jpg",
      "lang": "en",
      "duration": null,
      "keyPoints": [
        "帖子称有取证证据表明中国实验室的新模型基于英伟达 Blackwell 训练",
        "涉及芯片管制的实际执行效果"
      ],
      "uses": [
        "判断输入：管制是否真的挡得住",
        "内容选题：算力取证怎么做"
      ],
      "gap": "原帖未抓取，以上据标题整理。",
      "batchId": 3,
      "state": {
        "saved": false,
        "read": false,
        "hidden": false
      },
      "id": 7
    },
    {
      "key": "https://www.bloomberg.com/news/articles/2026-11-12/openai-joins-groundswell-of-support-for-ai-chip-control-measures",
      "url": "https://www.bloomberg.com/news/articles/2026-11-12/openai-joins-groundswell-of-support-for-ai-chip-control-measures",
      "lane": "discussion",
      "source": "Hacker News",
      "title": "OpenAI Joins Groundswell of Support for AI Chip Control Measures",
      "titleZh": "OpenAI 加入支持 AI 芯片管制的一方",
      "author": "pretext",
      "publishedAt": "2026-11-13T07:31:03.000Z",
      "popularity": {
        "label": "points",
        "value": 1
      },
      "excerpt": "",
      "excerptZh": "",
      "reason": "管制立场变化会影响算力供给和模型价格。",
      "tags": [
        "行业",
        "政策"
      ],
      "cover": "./data/covers/thumbs/403237fcb80a.jpg",
      "lang": "en",
      "duration": null,
      "keyPoints": [
        "OpenAI 表态支持 AI 芯片管制措施",
        "立场与自身算力需求存在张力"
      ],
      "uses": [
        "判断输入：政策风向对算力成本的影响",
        "内容选题：AI 公司的监管站位"
      ],
      "gap": "彭博原文未抓取，以上据标题整理。",
      "batchId": 3,
      "state": {
        "saved": false,
        "read": false,
        "hidden": false
      },
      "id": 8
    },
    {
      "key": "https://runitlocal.io/",
      "url": "https://runitlocal.io/",
      "lane": "discussion",
      "source": "Hacker News",
      "title": "Runitlocal.io – Run AI on your own hardware",
      "titleZh": "runitlocal.io：在你自己的硬件上跑 AI",
      "author": "rzk",
      "publishedAt": "2026-11-13T07:24:51.000Z",
      "popularity": {
        "label": "points",
        "value": 1
      },
      "excerpt": "",
      "excerptZh": "",
      "reason": "浏览器读 GPU 信息、不上传，本地推理的入口在变简单。",
      "tags": [
        "工具",
        "本地部署"
      ],
      "cover": "./data/covers/thumbs/264f7dd6db79.jpg",
      "lang": "en",
      "duration": null,
      "keyPoints": [
        "浏览器读取本机 GPU 信息，不上传服务器",
        "给出不同硬件的推理速度估算",
        "主打「自己的硬件跑 AI」"
      ],
      "uses": [
        "自用：评估本地能跑多大的模型",
        "内容选题：本地推理的体验门槛"
      ],
      "gap": "",
      "batchId": 3,
      "state": {
        "saved": false,
        "read": false,
        "hidden": false
      },
      "id": 9
    },
    {
      "key": "https://wonderchat.io/",
      "url": "https://wonderchat.io/",
      "lane": "discussion",
      "source": "Hacker News",
      "title": "Show HN: Wonderchat – A Zendesk alternative that doesn't charge per seat",
      "titleZh": "Wonderchat：按坐席收费的客服工具替代品",
      "author": "walkingsunrise",
      "publishedAt": "2026-11-13T06:59:21.000Z",
      "popularity": {
        "label": "points",
        "value": 3
      },
      "excerpt": "Hi HN, I’m Vera, co-founder of Wonderchat. We started as an AI website agent that answers customer questions from a company’s website and docs. Over time, customers kept asking for the rest of the support stack around it, so we built a helpdesk: live chat, a unified inbox for email and SMS, and a…",
      "excerptZh": "",
      "reason": "AI 先解决 75% 重复工单，剩下的人工兜底——典型的分层自动化。",
      "tags": [
        "客服",
        "AI应用"
      ],
      "cover": "./data/covers/thumbs/96e39978a7e3.jpg",
      "lang": "en",
      "duration": null,
      "keyPoints": [
        "用 AI agent 自动解决约 75% 的重复客服工单",
        "覆盖网页、邮件等渠道，剩余交人工",
        "按坐席收费的替代方案，有免费额度"
      ],
      "uses": [
        "选型：小团队客服自动化的参考",
        "内容选题：AI 客服的真实解决率"
      ],
      "gap": "",
      "batchId": 3,
      "state": {
        "saved": false,
        "read": false,
        "hidden": false
      },
      "id": 10
    },
    {
      "key": "https://nachi065.github.io/AI-Security-Wiki/",
      "url": "https://nachi065.github.io/AI-Security-Wiki/",
      "lane": "discussion",
      "source": "Hacker News",
      "title": "AI Security Wiki",
      "titleZh": "AI 安全维基：治理、风险、控制项和 682 个测试用例",
      "author": "totetsu",
      "publishedAt": "2026-11-13T03:48:55.000Z",
      "popularity": {
        "label": "points",
        "value": 3
      },
      "excerpt": "",
      "excerptZh": "",
      "reason": "公开、厂商中立的参考架构，适合当合规清单用。",
      "tags": [
        "安全",
        "合规"
      ],
      "cover": "./data/covers/thumbs/d821c5b30013.jpg",
      "lang": "en",
      "duration": null,
      "keyPoints": [
        "厂商中立的 AI 安全治理与参考架构维基",
        "覆盖治理、风险、控制项、agentic AI 标准和区域合规",
        "附带 682 个测试用例，可直接当清单"
      ],
      "uses": [
        "合规：给 AI 项目做安全检查表",
        "内容选题：AI 安全的落地清单长什么样"
      ],
      "gap": "",
      "batchId": 2,
      "state": {
        "saved": false,
        "read": false,
        "hidden": false
      },
      "id": 11
    },
    {
      "key": "https://sspai.com/post/118512",
      "url": "https://sspai.com/post/118512",
      "lane": "zh",
      "source": "少数派",
      "title": "在快 AI 时代，我是怎么把 Mole 做成一款「慢产品」的？",
      "titleZh": "在快 AI 时代，把 Mole 做成一款「慢产品」",
      "author": "Tw93",
      "publishedAt": "2026-11-13T03:35:48.000Z",
      "popularity": null,
      "excerpt": "距离写完上一篇在少数派发的《从开源清理工具到付费Mac应用，用户教会了我如何做产品》已经过去两个多月。这段时间里，Mole从1.13一路发到了1.19，加上了AI工具清理和系统数据清理，Windows ... 查看全文",
      "excerptZh": "",
      "reason": "作者用 agent + computer use 装了 500 多款软件来补卸载规则，是「AI 干脏活」的好例子。",
      "tags": [
        "产品",
        "案例"
      ],
      "cover": "./data/covers/thumbs/929393cb626a.jpg",
      "lang": "zh",
      "duration": null,
      "keyPoints": [
        "Mole 从 1.13 迭代到 1.19，GitHub Star 到 73.9K",
        "作者让 agent 用 computer use 批量安装/卸载 500 多款软件，补齐清理规则",
        "观点：代码越来越便宜，差距在只有亲手做过才知道的细节"
      ],
      "uses": [
        "方法：用 agent 做大规模重复测试",
        "内容选题：AI 时代「慢产品」怎么活"
      ],
      "gap": "",
      "batchId": 2,
      "state": {
        "saved": false,
        "read": false,
        "hidden": false
      },
      "id": 12
    },
    {
      "key": "https://usediorama.com/rick-and-morty",
      "url": "https://usediorama.com/rick-and-morty",
      "lane": "discussion",
      "source": "Hacker News",
      "title": "Show HN: I built a Rick and Morty explainer video generator",
      "titleZh": "用 Rick and Morty 风格把网站解释成视频",
      "author": "dixitbavu",
      "publishedAt": "2026-11-13T03:47:15.000Z",
      "popularity": {
        "label": "points",
        "value": 11
      },
      "excerpt": "> paste any site or article or a script > we turn it into a Rick and Morty sketch with dialogues, scenes, action and Rick and Morty of course > click generate to turn the script into a storyboard you can review > click generate to get a final video (this part is paid as it uses AI video under the…",
      "excerptZh": "",
      "reason": "输入网址直接出讲解视频，是「内容再包装」的新形态。",
      "tags": [
        "AI应用",
        "视频"
      ],
      "cover": "./data/covers/thumbs/b32c40dfd473.jpg",
      "lang": "en",
      "duration": null,
      "keyPoints": [
        "输入网址即可生成 Rick and Morty 风格的讲解视频",
        "提供三个完整示例",
        "属于「把已有内容再包装」的工具"
      ],
      "uses": [
        "内容选题：AI 视频的模板化生产",
        "自用：把文章转成视频试试"
      ],
      "gap": "",
      "batchId": 2,
      "state": {
        "saved": false,
        "read": false,
        "hidden": false
      },
      "id": 13
    },
    {
      "key": "https://github.com/sid732/loose-ends",
      "url": "https://github.com/sid732/loose-ends",
      "lane": "discussion",
      "source": "Hacker News",
      "title": "Loose Ends: A check for unused code AI wrote or forgot to remove",
      "titleZh": "Loose Ends：检查 AI 写了但没用的代码",
      "author": "sid732",
      "publishedAt": "2026-11-13T02:56:13.000Z",
      "popularity": {
        "label": "points",
        "value": 1
      },
      "excerpt": "",
      "excerptZh": "",
      "reason": "agent 写得快、留得多，这个工具在合并前查可达性。",
      "tags": [
        "工具",
        "AI编程"
      ],
      "cover": "./data/covers/thumbs/a38d758574f2.jpg",
      "lang": "en",
      "duration": null,
      "keyPoints": [
        "检查 agent 改动后留下的死代码：没被调用的 helper、被替代的旧服务",
        "从真实入口点做可达性分析，不靠 LLM 猜",
        "合并前运行，给出证据"
      ],
      "uses": [
        "自用：接入 CI 查 AI 留下的垃圾",
        "内容选题：agent 写码的隐性成本"
      ],
      "gap": "",
      "batchId": 2,
      "state": {
        "saved": false,
        "read": false,
        "hidden": false
      },
      "id": 14
    },
    {
      "key": "https://github.com/getzipzi/zipzi-2d",
      "url": "https://github.com/getzipzi/zipzi-2d",
      "lane": "discussion",
      "source": "Hacker News",
      "title": "Show HN: Zipzi – Open-source Live2D Editor alternative with AI-assisted editing",
      "titleZh": "Zipzi：开源的 Live2D 替代品，带 AI 协作编辑",
      "author": "pakholeung37",
      "publishedAt": "2026-11-13T02:54:37.000Z",
      "popularity": {
        "label": "points",
        "value": 1
      },
      "excerpt": "",
      "excerptZh": "",
      "reason": "人和 agent 共享同一个模型和撤销历史，协作方式有意思。",
      "tags": [
        "工具",
        "开源"
      ],
      "cover": "./data/covers/thumbs/171324575b4c.jpg",
      "lang": "en",
      "duration": null,
      "keyPoints": [
        "开源的 2D 建模与动画工具，对标 Live2D Cubism",
        "人和 AI agent 共用同一个模型、撤销历史",
        "Rust + GPUI，早期阶段，无稳定版"
      ],
      "uses": [
        "关注：AI 协作式创作工具的形态",
        "内容选题：人和 agent 共享编辑状态"
      ],
      "gap": "",
      "batchId": 2,
      "state": {
        "saved": false,
        "read": false,
        "hidden": false
      },
      "id": 15
    },
    {
      "key": "https://news.ycombinator.com/item?id=50477517",
      "url": "https://news.ycombinator.com/item?id=50477517",
      "lane": "discussion",
      "source": "Hacker News",
      "title": "Ask HN: Do you distrust OSS projects with Claude commits?",
      "titleZh": "HN 讨论：你会不信任有 Claude 提交记录的开源项目吗",
      "author": "rathboma",
      "publishedAt": "2026-11-13T02:53:35.000Z",
      "popularity": {
        "label": "points",
        "value": 4
      },
      "excerpt": "Does any amount of AI contribution to a project turn you off? What's the limit?",
      "excerptZh": "",
      "reason": "「代码是谁写的」正在变成选型时的信任问题。",
      "tags": [
        "讨论",
        "AI编程"
      ],
      "cover": "",
      "lang": "en",
      "duration": null,
      "keyPoints": [
        "讨论是否会因为项目里有 Claude 的提交记录而降低信任",
        "反映「代码作者是谁」正在影响选型"
      ],
      "uses": [
        "判断输入：开源项目信任的新维度",
        "内容选题：AI 署名与信任"
      ],
      "gap": "讨论帖正文未抓到，以上据标题整理。",
      "batchId": 2,
      "state": {
        "saved": false,
        "read": false,
        "hidden": false
      },
      "id": 16
    },
    {
      "key": "https://www.notion.com/en-gb/security/advisories/security-incident-involving-a-third-party-ai-vendor",
      "url": "https://www.notion.com/en-gb/security/advisories/security-incident-involving-a-third-party-ai-vendor",
      "lane": "discussion",
      "source": "Hacker News",
      "title": "Notion AI chat transcripts exposed in Fireworks AI breach",
      "titleZh": "Notion AI 聊天记录在 Fireworks AI 泄露事件中暴露",
      "author": "fourfire",
      "publishedAt": "2026-11-13T02:49:47.000Z",
      "popularity": {
        "label": "points",
        "value": 3
      },
      "excerpt": "",
      "excerptZh": "",
      "reason": "第三方 AI 供应商出事，用户数据跟着走——采购时要问的问题。",
      "tags": [
        "安全",
        "AI应用"
      ],
      "cover": "./data/covers/thumbs/02eedf01eb35.jpg",
      "lang": "en",
      "duration": null,
      "keyPoints": [
        "Fireworks AI 泄露事件波及不到 1% 的 Notion 工作区",
        "暴露内容包括用户消息里的第三方 API key",
        "Notion 已撤销相关 key 并通知供应商"
      ],
      "uses": [
        "采购参考：第三方 AI 供应商要问的安全问题",
        "内容选题：AI 中间商的数据风险"
      ],
      "gap": "",
      "batchId": 2,
      "state": {
        "saved": false,
        "read": false,
        "hidden": false
      },
      "id": 17
    },
    {
      "key": "https://grow-bonsai.app/",
      "url": "https://grow-bonsai.app/",
      "lane": "discussion",
      "source": "Hacker News",
      "title": "Show HN: Grow any hobby (skills for humans not AI)",
      "titleZh": "Grow any hobby：给人类练技能，不是给 AI 练",
      "author": "ag_rin",
      "publishedAt": "2026-11-13T02:40:39.000Z",
      "popularity": {
        "label": "points",
        "value": 3
      },
      "excerpt": "\"Skills for humans\" is what originally sparked me to create this app. Everyone was so focused on AI skills that it was kinda sad. I wanted to create an app focused on people and to help people grow. Let me know what you think! Developing this helped me stay sane.",
      "excerptZh": "",
      "reason": "把技能成长做成盆景，反效率叙事的产品化尝试。",
      "tags": [
        "产品",
        "学习"
      ],
      "cover": "./data/covers/thumbs/360b502b5fd1.jpg",
      "lang": "en",
      "duration": null,
      "keyPoints": [
        "把每项技能做成盆景，按练习时长生长",
        "技能拆成小步骤，完成一步解锁下一步",
        "明确面向「人类练技能」，不是给 AI 用"
      ],
      "uses": [
        "产品参考：反效率叙事怎么落地",
        "自用：试试它的技能拆解方式"
      ],
      "gap": "",
      "batchId": 2,
      "state": {
        "saved": false,
        "read": false,
        "hidden": false
      },
      "id": 18
    },
    {
      "key": "https://www.wired.com/story/nvidia-employees-petition-for-jensen-huangs-return/",
      "url": "https://www.wired.com/story/nvidia-employees-petition-for-jensen-huangs-return/",
      "lane": "discussion",
      "source": "Hacker News",
      "title": "Nvidia employees petition to bring back Jensen Huang",
      "titleZh": "英伟达员工请愿让黄仁勋回来",
      "author": "lavendermon",
      "publishedAt": "2026-11-13T02:16:24.000Z",
      "popularity": {
        "label": "points",
        "value": 595
      },
      "excerpt": "",
      "excerptZh": "",
      "reason": "内部情绪和董事会决策的拉扯，比公告更真实。",
      "tags": [
        "行业",
        "公司"
      ],
      "cover": "./data/covers/thumbs/33783a15d7ad.jpg",
      "lang": "en",
      "duration": null,
      "keyPoints": [
        "部分英伟达员工在内部请愿让黄仁勋回归",
        "内部建议箱的帖子已积累 1600 多条评论",
        "背景是其多起婚外情报道与突然辞职"
      ],
      "uses": [
        "行业观察：创始人依赖症",
        "内容选题：公司治理与个人崇拜"
      ],
      "gap": "",
      "batchId": 2,
      "state": {
        "saved": false,
        "read": false,
        "hidden": false
      },
      "id": 19
    },
    {
      "key": "https://latent.space/p/artcraft/",
      "url": "https://latent.space/p/artcraft/",
      "lane": "discussion",
      "source": "Hacker News",
      "title": "AI Ambition: ArtCraft Cloned Photoshop and Now Wants to \"Rebuild Everything\"",
      "titleZh": "ArtCraft 用 AI 重写了 Photoshop，现在想「重建一切」",
      "author": "adunk",
      "publishedAt": "2026-11-13T07:26:03.000Z",
      "popularity": {
        "label": "points",
        "value": 3
      },
      "excerpt": "",
      "excerptZh": "",
      "reason": "一个极端的 AI 原生案例：不是加个 AI 功能，而是用 AI 把整个软件重写一遍。",
      "tags": [
        "AI应用",
        "开源"
      ],
      "cover": "./data/covers/thumbs/16f585da039c.jpg",
      "lang": "en",
      "duration": null,
      "keyPoints": [
        "ArtCraft 用 AI 把 Photoshop 重写为开源软件",
        "CEO Brandon Thomas 的目标更大：把互联网「拿回来」",
        "目前已发布 17 个开源项目（原文节选）"
      ],
      "uses": [
        "案例参考：AI 原生重写成熟软件的可行性",
        "内容选题：AI 让「重写一遍」重新变得划算",
        "判断输入：开源替代商业软件的新一轮机会"
      ],
      "gap": "",
      "batchId": 1,
      "state": {
        "saved": false,
        "read": false,
        "hidden": false
      },
      "id": 20
    },
    {
      "key": "https://cloud.google.com/blog/products/ai-machine-learning/gemini-for-healthcare",
      "url": "https://cloud.google.com/blog/products/ai-machine-learning/gemini-for-healthcare",
      "lane": "discussion",
      "source": "Hacker News",
      "title": "Gemini for Healthcare",
      "titleZh": "Gemini for Healthcare：谷歌把 Gemini 推进医疗场景",
      "author": "gmays",
      "publishedAt": "2026-11-13T05:37:54.000Z",
      "popularity": {
        "label": "points",
        "value": 2
      },
      "excerpt": "",
      "excerptZh": "",
      "reason": "大厂把通用模型往垂直行业落地的样本，重点看它怎么处理合规和数据边界。",
      "tags": [
        "医疗",
        "大厂"
      ],
      "cover": "./data/covers/thumbs/3ed97e4f134d.jpg",
      "lang": "en",
      "duration": null,
      "keyPoints": [
        "谷歌云发布面向医疗场景的 Gemini 能力",
        "落地重点通常在病历、影像、临床文档这类文本密集环节",
        "医疗是合规门槛最高的 AI 应用场景之一"
      ],
      "uses": [
        "行业参考：通用模型进垂直行业时的包装方式",
        "内容选题：AI 医疗到底卡在技术还是合规",
        "判断输入：大厂在医疗赛道的实际进度"
      ],
      "gap": "原文抓取失败，以上据标题与公开定位整理。",
      "batchId": 1,
      "state": {
        "saved": false,
        "read": false,
        "hidden": false
      },
      "id": 21
    },
    {
      "key": "https://aircraftdefects.com/",
      "url": "https://aircraftdefects.com/",
      "lane": "discussion",
      "source": "Hacker News",
      "title": "Aircraft Defects",
      "titleZh": "Aircraft Defects：176 万份飞机缺陷报告，用大白话读给你听",
      "author": "marklit",
      "publishedAt": "2026-11-13T05:34:52.000Z",
      "popularity": {
        "label": "points",
        "value": 2
      },
      "excerpt": "",
      "excerptZh": "",
      "reason": "把只有内行看得懂的公开数据，用 AI 翻译成普通人能查的东西——很典型的「AI 做界面」。",
      "tags": [
        "AI应用",
        "数据"
      ],
      "cover": "./data/covers/thumbs/fdac8000024f.jpg",
      "lang": "en",
      "duration": null,
      "keyPoints": [
        "收录 1995 年以来提交给美国 FAA 的 176 万份飞机缺陷报告",
        "原报告用行业缩写和代码，站点把它转成平实语言",
        "能自动找模式：同一部件在多架飞机上重复出问题"
      ],
      "uses": [
        "产品灵感：把「只有专家能读的公开数据」做成消费级产品",
        "内容选题：AI 最被低估的用途是翻译行话",
        "自用：查航班或机型时可以拿它当参考"
      ],
      "gap": "",
      "batchId": 1,
      "state": {
        "saved": false,
        "read": false,
        "hidden": false
      },
      "id": 22
    },
    {
      "key": "https://thingspool.net/shards-of-sanity/page-5.html",
      "url": "https://thingspool.net/shards-of-sanity/page-5.html",
      "lane": "discussion",
      "source": "Hacker News",
      "title": "Post-AI Computer Science – Volume 5",
      "titleZh": "后 AI 时代的计算机科学（卷五）",
      "author": "architsch",
      "publishedAt": "2026-11-13T05:30:24.000Z",
      "popularity": {
        "label": "points",
        "value": 1
      },
      "excerpt": "",
      "excerptZh": "",
      "reason": "少见的从软件设计哲学角度谈 AI 的系列，不是工具评测。",
      "tags": [
        "观点",
        "软件设计"
      ],
      "cover": "./data/covers/thumbs/7136c5af0366.jpg",
      "lang": "en",
      "duration": null,
      "keyPoints": [
        "系列文章讨论软件产品为什么需要「目的感」",
        "作者认为系统内部需要一个最高目标来赋予语义深度",
        "卷五转向：这个目标应该长什么样"
      ],
      "uses": [
        "思考素材：给产品定「目标函数」时的哲学视角",
        "内容选题：AI 时代还需要软件哲学吗"
      ],
      "gap": "原文为长文，仅取开头部分。",
      "batchId": 1,
      "state": {
        "saved": false,
        "read": false,
        "hidden": false
      },
      "id": 23
    },
    {
      "key": "https://floxolab.com/ai-crawler-checker",
      "url": "https://floxolab.com/ai-crawler-checker",
      "lane": "discussion",
      "source": "Hacker News",
      "title": "Show HN: I built a tool to check website access for 14 AI crawlers",
      "titleZh": "一个检查 14 种 AI 爬虫能否访问你网站的工具",
      "author": "floxolab",
      "publishedAt": "2026-11-13T05:27:55.000Z",
      "popularity": {
        "label": "points",
        "value": 1
      },
      "excerpt": "",
      "excerptZh": "",
      "reason": "内容站现在都要面对「被不被 AI 抓」的问题，这工具把 robots.txt 和 CDN 的实际行为对比出来。",
      "tags": [
        "工具",
        "AI爬虫"
      ],
      "cover": "./data/covers/thumbs/3a4ffb0e1083.jpg",
      "lang": "en",
      "duration": null,
      "keyPoints": [
        "输入网址，读取 robots.txt，再用 14 种 AI 爬虫的 UA 实际请求一遍",
        "把每个爬虫的结果和普通浏览器对比，给出放行或拦截判定",
        "关键洞察：robots.txt 说可以，CDN 未必真的放行"
      ],
      "uses": [
        "自用：检查自己的站有没有被 CDN 挡住 AI 爬虫",
        "内容选题：AI 时代的「访客」到底是谁",
        "技术：给自己的站加一份爬虫访问清单"
      ],
      "gap": "",
      "batchId": 1,
      "state": {
        "saved": false,
        "read": false,
        "hidden": false
      },
      "id": 24
    },
    {
      "key": "https://www.theatlantic.com/international/2026/11/nvidia-china-ai-regulation/689387/",
      "url": "https://www.theatlantic.com/international/2026/11/nvidia-china-ai-regulation/689387/",
      "lane": "discussion",
      "source": "Hacker News",
      "title": "The Scandal Is Bigger Than Jensen Huang",
      "titleZh": "这场风波比黄仁勋本人更大",
      "author": "paulpauper",
      "publishedAt": "2026-11-13T04:37:55.000Z",
      "popularity": {
        "label": "points",
        "value": 5
      },
      "excerpt": "",
      "excerptZh": "",
      "reason": "把英伟达人事变动放进中美 AI 监管的大背景里看，比单条新闻有信息量。",
      "tags": [
        "行业",
        "监管"
      ],
      "cover": "./data/covers/thumbs/7b492902f518.jpg",
      "lang": "en",
      "duration": null,
      "keyPoints": [
        "大西洋月刊认为事件影响超出个人，牵涉英伟达与中国的 AI 监管",
        "属于政策与产业交叉的分析，不是公司公告",
        "原文抓取失败，以上据标题与栏目整理"
      ],
      "uses": [
        "判断输入：AI 芯片供应链的政策风险",
        "内容选题：一家公司如何被地缘政治定价"
      ],
      "gap": "原文抓取失败，以上据标题整理。",
      "batchId": 1,
      "state": {
        "saved": false,
        "read": false,
        "hidden": false
      },
      "id": 25
    },
    {
      "key": "https://www.seangoedecke.com/glue-work-is-still-harmful-in-the-age-of-ai/",
      "url": "https://www.seangoedecke.com/glue-work-is-still-harmful-in-the-age-of-ai/",
      "lane": "discussion",
      "source": "Hacker News",
      "title": "Glue work is still harmful in the age of AI",
      "titleZh": "AI 时代，胶水工作依然有害",
      "author": "gpi",
      "publishedAt": "2026-11-13T04:13:29.000Z",
      "popularity": {
        "label": "points",
        "value": 2
      },
      "excerpt": "",
      "excerptZh": "",
      "reason": "反直觉：大家以为 AI 接管写代码后工程师该多干协调活，作者说正相反。",
      "tags": [
        "职场",
        "观点"
      ],
      "cover": "./data/covers/thumbs/c65597f93eb9.jpg",
      "lang": "en",
      "duration": null,
      "keyPoints": [
        "作者一贯反对靠个人牺牲维持的「胶水工作」",
        "观点：LLM 写掉大部分代码后，胶水工作反而更不重要",
        "理由之一：AI 让单个工程师能承担过去需要小团队的项目，协调需求下降"
      ],
      "uses": [
        "职业判断：AI 时代该积累什么能力",
        "内容选题：AI 没有消灭的岗位，可能先被重组",
        "管理参考：团队规模与协调成本的重新计算"
      ],
      "gap": "",
      "batchId": 1,
      "state": {
        "saved": false,
        "read": false,
        "hidden": false
      },
      "id": 26
    },
    {
      "key": "https://www.theregister.com/ai-and-ml/2026/11/13/alibabas-qwen38-re-educated-with-a-more-western-worldview/5309555",
      "url": "https://www.theregister.com/ai-and-ml/2026/11/13/alibabas-qwen38-re-educated-with-a-more-western-worldview/5309555",
      "lane": "discussion",
      "source": "Hacker News",
      "title": "Qwen3.8 re-educated with a more Western worldview",
      "titleZh": "Qwen3.8 被「再教育」成更西方的世界观",
      "author": "NordStreamYacht",
      "publishedAt": "2026-11-13T03:57:39.000Z",
      "popularity": {
        "label": "points",
        "value": 1
      },
      "excerpt": "",
      "excerptZh": "",
      "reason": "模型对齐不只是技术问题，也是价值观问题；这条提供了一个具体案例。",
      "tags": [
        "模型",
        "对齐"
      ],
      "cover": "./data/covers/thumbs/c96e3ca670b5.jpg",
      "lang": "en",
      "duration": null,
      "keyPoints": [
        "报道称阿里 Qwen3.8 经过再训练，世界观更偏西方",
        "涉及模型价值观对齐与地域差异",
        "原文正文抓取失败，以上据标题整理"
      ],
      "uses": [
        "判断输入：模型价值观差异对产品出海的影响",
        "内容选题：一个模型能有几种世界观"
      ],
      "gap": "原文正文抓取失败，以上据标题整理。",
      "batchId": 1,
      "state": {
        "saved": false,
        "read": true,
        "hidden": false
      },
      "id": 27
    },
    {
      "key": "https://www.theverge.com/ai-artificial-intelligence/1032125/ai-agents-maya-site-archeology-discovery",
      "url": "https://www.theverge.com/ai-artificial-intelligence/1032125/ai-agents-maya-site-archeology-discovery",
      "lane": "discussion",
      "source": "Hacker News",
      "title": "No, AI agents did not discover a previously unknown Maya site",
      "titleZh": "不，AI 智能体并没有发现一处未知的玛雅遗址",
      "author": "latexr",
      "publishedAt": "2026-11-13T02:28:29.000Z",
      "popularity": {
        "label": "points",
        "value": 4
      },
      "excerpt": "",
      "excerptZh": "",
      "reason": "一次典型的「AI 发现」叙事翻车：媒体把智能体的检索结果说成了考古发现。看它怎么拆这条传播链，对判断 AI 新闻的可信度很有用。",
      "tags": [
        "AI叙事",
        "事实核查"
      ],
      "cover": "./data/covers/thumbs/3b869b1138e3.jpg",
      "lang": "en",
      "duration": null,
      "keyPoints": [
        "科学家对业余爱好者用 AI 宣称考古发现越来越不满",
        "这类「发现」通常跳过田野验证就直接对外发布",
        "争议核心是专业门槛与传播速度的错配"
      ],
      "uses": [
        "内容选题：做一期「AI 发现」类新闻的核查流程拆解",
        "自用规则：看到 AI 宣称的发现，先找原始论文或田野报告",
        "谈资素材：AI 叙事与专业权威冲突的典型案例"
      ],
      "gap": "",
      "batchId": 0,
      "state": {
        "saved": false,
        "read": false,
        "hidden": false
      },
      "id": 28
    },
    {
      "key": "https://latent.space/p/jev-revolution/",
      "url": "https://latent.space/p/jev-revolution/",
      "lane": "blog",
      "source": "Latent Space",
      "title": "The Jev Revolution: What Engineers Are Already Building with System One Models",
      "titleZh": "Jev 革命：工程师已经在用 System One 模型做什么",
      "author": "Richard MacManus",
      "publishedAt": "2026-11-12T05:08:20.000Z",
      "popularity": null,
      "excerpt": "At AI Engineer Code Summit, lead Jev creator Diogo Almeida called on developers to automate everything. Also, Glean and others showed how they’re using Jev.",
      "excerptZh": "在 AI Engineer Code Summit 上，Jev 的主要创作者 Diogo Almeida 呼吁「把一切自动化」。Glean 等公司也展示了他们在怎么用 Jev。",
      "reason": "一线工程师的用法清单，不是能力评测。「已经在用」比「即将改变」更有参考价值。",
      "tags": [
        "实践",
        "案例"
      ],
      "cover": "./data/covers/thumbs/eb6d3e48fcec.jpg",
      "lang": "en",
      "duration": null,
      "keyPoints": [
        "Jev 创作者在 AI Engineer Code Summit 上主张「把一切自动化」",
        "Glean 等公司展示了已经在用的具体做法",
        "重点是一线实践，不是能力评测"
      ],
      "uses": [
        "方法借鉴：看别人怎么把 agent 接进日常工作流",
        "内容选题：「已经在用」的案例盘点",
        "自用：挑一个场景照抄"
      ],
      "gap": "",
      "batchId": 0,
      "state": {
        "saved": false,
        "read": false,
        "hidden": false
      },
      "id": 29
    },
    {
      "key": "https://arxiv.org/abs/2611.15023v1",
      "url": "https://arxiv.org/abs/2611.15023v1",
      "lane": "paper",
      "source": "arXiv",
      "title": "SkinAdvisor: An AI-Driven Decision Framework for Skin Production Planning via Multi-Modal Transformer Sales Forecasting",
      "titleZh": "SkinAdvisor：用多模态 Transformer 做游戏皮肤的生产决策",
      "author": "Ge Fan",
      "publishedAt": "2026-11-11T04:36:07.000Z",
      "popularity": null,
      "excerpt": "Skins, cosmetic in-game items, are a primary revenue stream for modern online games, yet production decisions (which skins to make, when to release, how to price) remain driven by intuition and retrospective analytics. We present SkinAdvisor, an AI-driven decision framework for skin production planning, powered by SkinCast, a deployed multi-modal Transformer forecasting…",
      "excerptZh": "皮肤（游戏内外观道具）是现代网游的主要收入来源，但生产决策——做哪些皮肤、什么时候发、定多少钱——仍靠直觉和事后分析。我们提出 SkinAdvisor，一个 AI 驱动的皮肤生产决策框架……",
      "reason": "一个很具体的 AI 应用样本：不生成内容，而是帮人决定「做哪个、什么时候发、定多少钱」。",
      "tags": [
        "应用案例",
        "游戏"
      ],
      "cover": "./data/covers/thumbs/4e84ae9c6cf2.jpg",
      "lang": "en",
      "duration": null,
      "keyPoints": [
        "解决游戏皮肤的生产决策：做哪些、何时发、定多少钱",
        "用多模态 Transformer 做销量预测",
        "替代的是直觉和事后分析"
      ],
      "uses": [
        "案例参考：AI 做决策而不是做内容",
        "内容选题：游戏行业的 AI 应用长什么样",
        "方法：把大决策拆成可预测的子问题"
      ],
      "gap": "",
      "batchId": 0,
      "state": {
        "saved": false,
        "read": false,
        "hidden": false
      },
      "id": 30
    },
    {
      "key": "https://github.com/janestreet/agent_skills",
      "url": "https://github.com/janestreet/agent_skills",
      "lane": "repo",
      "source": "GitHub",
      "title": "janestreet/agent_skills",
      "titleZh": "Jane Street 的 agent skills",
      "author": "janestreet",
      "publishedAt": "2026-11-03T16:50:21.000Z",
      "popularity": {
        "label": "stars",
        "value": 7997
      },
      "excerpt": "Agent skills",
      "excerptZh": "智能体技能。",
      "reason": "一家量化机构怎么把内部技能写成 agent 能执行的模块。skills 正在变成一种新的分发格式。",
      "tags": [
        "skills",
        "工程"
      ],
      "cover": "./data/covers/thumbs/e22dd6f96618.jpg",
      "lang": "en",
      "duration": null,
      "keyPoints": [
        "Jane Street 开源的 agent skills 集合",
        "7.8 千 stars，以文档和配置为主，没有主语言",
        "金融机构把内部技能写成 agent 可执行的模块"
      ],
      "uses": [
        "参考：skills 的目录怎么组织",
        "内容选题：skills 正在变成一种分发格式",
        "自用：抄一份它的目录结构"
      ],
      "gap": "",
      "batchId": 0,
      "state": {
        "saved": false,
        "read": false,
        "hidden": false
      },
      "id": 31
    },
    {
      "key": "https://www.bilibili.com/video/BV19JfKY8Eev",
      "url": "https://www.bilibili.com/video/BV19JfKY8Eev",
      "lane": "video",
      "source": "B站",
      "title": "华为智慧屏 S6 Pro新品开箱：鸿蒙AI电视完全体？",
      "titleZh": "华为智慧屏 S6 Pro新品开箱：鸿蒙AI电视完全体？",
      "author": "花生説",
      "publishedAt": "2025-04-02T11:02:34.000Z",
      "popularity": {
        "label": "play",
        "value": 611691
      },
      "excerpt": "华为的产品咱们已经做过不少视频了，好像就电视聊的不多。华为前几天刚发布了全新的华为智慧屏 S6 Pro，咱们就借这个机会好好聊一聊，这台鸿蒙AI电视，到底有哪些升级。",
      "excerptZh": "",
      "reason": "少见的「AI 进入家庭硬件」完整评测，能补上纯软件视角看不到的一面。",
      "tags": [],
      "cover": "./data/covers/thumbs/vid-03feeac469fa.jpg",
      "lang": "zh",
      "duration": 765,
      "keyPoints": [
        "华为智慧屏 S6 Pro 的开箱评测，重点是「鸿蒙 AI」能力",
        "时长约 13 分钟，是完整评测而非短演示",
        "关注点是 AI 在电视这类家庭设备上的落地形态"
      ],
      "uses": [
        "判断输入：AI 进家电的真实体验边界",
        "内容选题：电视上的 AI 到底能干什么",
        "消费决策：要买的话直接看实测段落"
      ],
      "gap": "未获取字幕（B 站字幕接口需登录），要点依据标题、简介与时长整理。",
      "batchId": 0,
      "state": {
        "saved": false,
        "read": false,
        "hidden": false
      },
      "id": 32
    },
    {
      "key": "https://sspai.com/post/118966",
      "url": "https://sspai.com/post/118966",
      "lane": "zh",
      "source": "少数派",
      "title": "派早报：英伟达 CEO 黄仁勋宣布辞职等",
      "titleZh": "派早报：英伟达 CEO 黄仁勋宣布辞职等",
      "author": "少数派编辑部",
      "publishedAt": "2026-11-13T00:48:17.000Z",
      "popularity": null,
      "excerpt": "2026 年金摇杆奖获奖名单公布，Apex Compute 推出跨平台 AI 帧生成技术 ANR 等。 查看全文",
      "excerptZh": "2026 年金摇杆奖获奖名单公布，Apex Compute 推出跨平台 AI 帧生成技术 ANR 等。",
      "reason": "中文科技早报里少见的「高密度」信源。一条扫完当天的行业变动，补上只看英文源会漏掉的国内视角。",
      "tags": [
        "中文",
        "行业"
      ],
      "cover": "./data/covers/thumbs/dadb69349454.jpg",
      "lang": "zh",
      "duration": null,
      "keyPoints": [
        "黄仁勋辞去英伟达总裁、CEO 及董事职务，即刻生效",
        "CFO Colette Kress 出任临时 CEO，Harvey Jones 任首任董事长",
        "董事会已启动正式遴选，财报发布日程不变"
      ],
      "uses": [
        "判断输入：AI 算力供应链的稳定性",
        "内容选题：一个时代的交接",
        "自用：关注继任者的对华与产品策略"
      ],
      "gap": "",
      "batchId": 0,
      "state": {
        "saved": false,
        "read": false,
        "hidden": false
      },
      "id": 33
    },
    {
      "key": "https://schelling-atlas.com/",
      "url": "https://schelling-atlas.com/",
      "lane": "discussion",
      "source": "Hacker News",
      "title": "Schelling Atlas: AI agents know where to find each other on the web",
      "titleZh": "谢林地图：AI 智能体知道在网络上哪里能找到彼此",
      "author": "bpierre",
      "publishedAt": "2026-11-13T01:41:48.000Z",
      "popularity": {
        "label": "points",
        "value": 1
      },
      "excerpt": "",
      "excerptZh": "",
      "reason": "给智能体用的「黄页」。如果 agent 之间需要一个公开的会合点，这是一种极简方案，属于 agent 基础设施里的新想法。",
      "tags": [
        "agent",
        "协议"
      ],
      "cover": "./data/covers/thumbs/1402ec1ff9b0.jpg",
      "lang": "en",
      "duration": null,
      "keyPoints": [
        "让两个互不知情的 agent 在开放网络上自行会合、交换口令",
        "40 对里有 21 对成功（53%），而且全部选在同一个服务 ntfy.sh",
        "封掉 ntfy.sh 后成功率掉到 20%，说明会合点高度集中"
      ],
      "uses": [
        "架构参考：给多 agent 设计公共信箱或会合点时看它",
        "风险意识：agent 在公网自发串通的早期信号",
        "内容选题：「谢林点」概念在 AI 时代的复现"
      ],
      "gap": "",
      "batchId": 0,
      "state": {
        "saved": false,
        "read": false,
        "hidden": false
      },
      "id": 34
    },
    {
      "key": "https://latent.space/p/codex-work/",
      "url": "https://latent.space/p/codex-work/",
      "lane": "blog",
      "source": "Latent Space",
      "title": "AI Engineer Code Summit: OpenAI on New Ways of Working With Codex",
      "titleZh": "AI Engineer Code Summit：OpenAI 谈与 Codex 协作的新方式",
      "author": "Richard MacManus",
      "publishedAt": "2026-11-11T04:49:48.000Z",
      "popularity": null,
      "excerpt": "On the first day of AIE Code Summit, OpenAI showed how developers can steer Codex by voice, hand off work to the cloud, and make use of dots.",
      "excerptZh": "在 AIE Code Summit 第一天，OpenAI 展示了开发者如何用语音指挥 Codex、把工作移交到云端，以及使用 dots。",
      "reason": "一家公司在重新定义「人和 coding agent 的分工」。语音、云端交接、dots 这三个细节都值得琢磨。",
      "tags": [
        "AI编程",
        "工作流"
      ],
      "cover": "./data/covers/thumbs/6a8ddd1b4cd9.jpg",
      "lang": "en",
      "duration": null,
      "keyPoints": [
        "OpenAI 展示三种与 Codex 协作的方式：语音指挥、任务移交云端、dots",
        "指向的是「人和 coding agent 怎么分工」",
        "不是新模型发布，是工作方式的变化"
      ],
      "uses": [
        "工作流：试试语音下指令，减少打字",
        "内容选题：coding agent 的交互形态在怎么变",
        "判断输入：哪些任务该留在本地，哪些交给云"
      ],
      "gap": "",
      "batchId": 0,
      "state": {
        "saved": false,
        "read": false,
        "hidden": false
      },
      "id": 35
    },
    {
      "key": "https://arxiv.org/abs/2611.15006v1",
      "url": "https://arxiv.org/abs/2611.15006v1",
      "lane": "paper",
      "source": "arXiv",
      "title": "EvoX: Rethinking the Agent Harness as a Runtime Policy",
      "titleZh": "EvoX：把智能体的 harness 当成运行时策略",
      "author": "Haoyang Zhang",
      "publishedAt": "2026-11-11T04:05:54.000Z",
      "popularity": null,
      "excerpt": "Large language model (LLM) agents increasingly interact with tools and environments, yet plausible model decisions do not always translate into successful execution due to tool-call mismatches, interrupted workflows, and unsupported completion claims. We present EvoX, a Rust-based, multi-model agent runtime guided by The Second Policy, which views the harness as an Operational…",
      "excerptZh": "大模型智能体越来越多地与工具和环境交互，但看似合理的模型决策并不总能转化为成功执行——工具调用不匹配、工作流被打断、以及不成立的完成声明。我们提出 EvoX，一个基于 Rust 的多模型 agent……",
      "reason": "大多数 agent 失败不是模型不会，而是工具调用对不上、流程被打断。这篇把「执行层」单独拎出来优化，思路可迁移。",
      "tags": [
        "agent",
        "论文"
      ],
      "cover": "./data/covers/thumbs/329842762f67.jpg",
      "lang": "en",
      "duration": null,
      "keyPoints": [
        "把 agent harness 当作运行时策略来优化，而不是只改提示词",
        "针对三类失败：工具调用不匹配、工作流中断、虚假完成声明",
        "Rust 实现，支持多模型"
      ],
      "uses": [
        "工程参考：agent 执行层怎么设计",
        "内容选题：agent 为什么「看起来对但跑不通」",
        "选型：和自己的 harness 做对比"
      ],
      "gap": "",
      "batchId": 0,
      "state": {
        "saved": false,
        "read": false,
        "hidden": false
      },
      "id": 36
    },
    {
      "key": "https://github.com/deepseek-ai/dsh-superagent-prototype",
      "url": "https://github.com/deepseek-ai/dsh-superagent-prototype",
      "lane": "repo",
      "source": "GitHub",
      "title": "deepseek-ai/dsh-superagent-prototype",
      "titleZh": "dsh-superagent 原型：走向更自主的智能体系统",
      "author": "deepseek-ai",
      "publishedAt": "2026-10-31T09:32:46.000Z",
      "popularity": {
        "label": "stars",
        "value": 22920
      },
      "excerpt": "Towards a More Autonomous Agent System",
      "excerptZh": "走向更自主的智能体系统。",
      "reason": "和你现在用的环境直接相关——官方在探索「更自主」的 agent 长什么样。看它的取舍，比看功能列表有意思。",
      "tags": [
        "agent",
        "dsh"
      ],
      "cover": "./data/covers/thumbs/76e502c4ebad.jpg",
      "lang": "en",
      "duration": null,
      "keyPoints": [
        "DeepSeek 官方的「更自主 agent」原型",
        "TypeScript，2.2 万 stars",
        "和当前使用的环境同源，可直接对照"
      ],
      "uses": [
        "参考：官方对「自主性」的取舍",
        "内容选题：agent 自主性的边界在哪",
        "自用：对照自己现在的工作流"
      ],
      "gap": "",
      "batchId": 0,
      "state": {
        "saved": false,
        "read": false,
        "hidden": false
      },
      "id": 37
    },
    {
      "key": "https://www.bilibili.com/video/BV1W5fAYTEMk",
      "url": "https://www.bilibili.com/video/BV1W5fAYTEMk",
      "lane": "video",
      "source": "B站",
      "title": "苏妈杀疯，AMD笔记本跑爆236B大模型！",
      "titleZh": "苏妈杀疯，AMD笔记本跑爆236B大模型！",
      "author": "Jack-Cui",
      "publishedAt": "2025-04-02T09:45:00.000Z",
      "popularity": {
        "label": "play",
        "value": 557699
      },
      "excerpt": "",
      "excerptZh": "",
      "reason": "150 秒就能看出「本地跑大模型」现在到了哪一步，信息密度高。",
      "tags": [],
      "cover": "./data/covers/thumbs/vid-4dc82bb77882.jpg",
      "lang": "zh",
      "duration": 150,
      "keyPoints": [
        "宣称在 AMD 笔记本上跑通 236B 参数的大模型",
        "时长 150 秒，是性能演示，不是部署教程",
        "核心看点是本地、端侧推理的可行性"
      ],
      "uses": [
        "判断输入：本地跑大模型离普通人还有多远",
        "内容选题：端侧推理的真实水位",
        "自用：考虑本地部署前先看它的配置"
      ],
      "gap": "未获取字幕（B 站字幕接口需登录），要点依据标题与时长整理。",
      "batchId": 0,
      "state": {
        "saved": false,
        "read": false,
        "hidden": false
      },
      "id": 38
    },
    {
      "key": "https://sspai.com/post/85735",
      "url": "https://sspai.com/post/85735",
      "lane": "zh",
      "source": "少数派",
      "title": "Mac 选购指南 2026 冬季版",
      "titleZh": "Mac 选购指南 2026 冬季版",
      "author": "Kostya",
      "publishedAt": "2026-11-12T06:42:04.000Z",
      "popularity": null,
      "excerpt": "内存、存储涨价但又得换 Mac？记得收下这份选购指南。 查看全文",
      "excerptZh": "内存、存储涨价但又得换 Mac？记得收下这份选购指南。",
      "reason": "和 AI 应用不直接相关，但本地跑模型的硬件选择绕不开它。故意留一条「非 AI」内容在流里，测试探索配额——刷不该只有一种东西。",
      "tags": [
        "中文",
        "硬件",
        "探索"
      ],
      "cover": "./data/covers/thumbs/82c7456d0059.jpg",
      "lang": "zh",
      "duration": null,
      "keyPoints": [
        "2026 冬季 Mac 选购指南，按预算和需求分类",
        "产品线跨度从 5000 元级 MacBook Neo 到 23 万元的 Mac Studio",
        "闪存涨价带动整体涨价，Neo 4499→5499，Air 7999→9999"
      ],
      "uses": [
        "消费决策：买 Mac 前直接看这篇",
        "内容选题：涨价周期下的选购逻辑",
        "探索位：故意保留的非 AI 内容样本"
      ],
      "gap": "",
      "batchId": 0,
      "state": {
        "saved": false,
        "read": false,
        "hidden": false
      },
      "id": 39
    },
    {
      "key": "https://www.techspot.com/news/114532-chicago-schools-tell-google-they-can-live-without.html",
      "url": "https://www.techspot.com/news/114532-chicago-schools-tell-google-they-can-live-without.html",
      "lane": "discussion",
      "source": "Hacker News",
      "title": "Chicago schools to Google – we'd rather lose Search than be forced to accept AI",
      "titleZh": "芝加哥学校致谷歌：宁可不用搜索，也不接受被强推 AI",
      "author": "thunderbong",
      "publishedAt": "2026-11-13T00:38:41.000Z",
      "popularity": {
        "label": "points",
        "value": 68
      },
      "excerpt": "",
      "excerptZh": "",
      "reason": "AI 进校园遇到的第一波真实阻力。做教育类 AI 应用的人该看：采购决策里，「被迫」比「不好用」更致命。",
      "tags": [
        "教育",
        "采用阻力"
      ],
      "cover": "./data/covers/thumbs/13fa5d8f12c7.jpg",
      "lang": "en",
      "duration": null,
      "keyPoints": [
        "芝加哥学区宁可放弃谷歌搜索，也不接受被强制使用 AI 功能",
        "这条反映的是采购方的选择权诉求，不是产品好坏",
        "原文有反爬，以上仅据标题整理"
      ],
      "uses": [
        "内容选题：AI 进校园遇到的第一波真实阻力",
        "产品决策：To B 教育产品要留「可选退出」的开关"
      ],
      "gap": "原文返回 403，未能提取正文。",
      "batchId": 0,
      "state": {
        "saved": false,
        "read": false,
        "hidden": false
      },
      "id": 40
    },
    {
      "key": "https://latent.space/p/resend/",
      "url": "https://latent.space/p/resend/",
      "lane": "blog",
      "source": "Latent Space",
      "title": "Designing for Agents — Zeno Rocha, Resend",
      "titleZh": "为智能体做设计——Resend 的 Zeno Rocha",
      "author": "swyx .ai",
      "publishedAt": "2026-11-10T20:05:17.000Z",
      "popularity": null,
      "excerpt": "Where does answer engine optimization (AEO) end and agent experience begin? Inside Resend, from the docs that help Claude Code pick an email API to the tools it uses to send.",
      "excerptZh": "答案引擎优化（AEO）的边界在哪，agent 体验又从哪开始？走进 Resend：从帮助 Claude Code 选中邮件 API 的文档，到它实际发信用的工具。",
      "reason": "AEO 之后的新问题：你的产品文档和 API 是写给人看的，还是写给 agent 看的？做工具类产品必看。",
      "tags": [
        "产品设计",
        "agent"
      ],
      "cover": "./data/covers/thumbs/1b9619ecc4ba.jpg",
      "lang": "en",
      "duration": null,
      "keyPoints": [
        "讨论 AEO（答案引擎优化）之后的新问题：agent 体验",
        "Resend 把文档写成 agent 能直接选中 API 的形式",
        "产品设计的对象从「人」变成「人和 agent」"
      ],
      "uses": [
        "产品决策：给自己的文档加一层 agent 可读结构",
        "内容选题：「为 agent 做设计」到底改什么",
        "自用：检查自家 API 文档能不能被 agent 用起来"
      ],
      "gap": "",
      "batchId": 0,
      "state": {
        "saved": false,
        "read": false,
        "hidden": false
      },
      "id": 41
    },
    {
      "key": "https://arxiv.org/abs/2611.14997v1",
      "url": "https://arxiv.org/abs/2611.14997v1",
      "lane": "paper",
      "source": "arXiv",
      "title": "Same Task, Different Statement: When and How Reformulation Helps LLM Problem Solving",
      "titleZh": "同一道题换个说法：改写题面什么时候帮得上大模型",
      "author": "Wentao Zhang",
      "publishedAt": "2026-11-11T03:55:59.000Z",
      "popularity": null,
      "excerpt": "When people face a hard problem, they often restate it in a clearer way before solving it. We study whether the same habit helps large language models by rewriting the statement of a problem. A legal rewrite must keep the meaning, the constraints, and the correct answer unchanged. We test three kinds of rewrites. Decomposition makes hidden subgoals explicit. Typed…",
      "excerptZh": "人遇到难题时，常会先把题目换一种更清楚的说法再解。我们研究同一个习惯是否也帮得上大模型：改写题面。合法的改写必须保持含义、约束和正确答案不变。我们测试了三类……",
      "reason": "几乎零成本的提升手段。如果你在搭 prompt 流程，这类「改输入」的技巧比换模型便宜得多。",
      "tags": [
        "提示词",
        "论文"
      ],
      "cover": "./data/covers/thumbs/7c1d4b988f16.jpg",
      "lang": "en",
      "duration": null,
      "keyPoints": [
        "研究改写题面能否帮大模型解题",
        "合法改写必须保持含义、约束和答案不变",
        "测试了三类改写方式"
      ],
      "uses": [
        "提示词：几乎零成本的提升手段",
        "内容选题：换个问法为什么有用",
        "自用：难题先让模型重述一遍"
      ],
      "gap": "",
      "batchId": 0,
      "state": {
        "saved": false,
        "read": false,
        "hidden": false
      },
      "id": 42
    },
    {
      "key": "https://github.com/heydamir/unslop",
      "url": "https://github.com/heydamir/unslop",
      "lane": "repo",
      "source": "GitHub",
      "title": "heydamir/unslop",
      "titleZh": "unslop：把 AI 味的界面改成设计过的界面",
      "author": "heydamir",
      "publishedAt": "2026-10-29T15:41:21.000Z",
      "popularity": {
        "label": "stars",
        "value": 15390
      },
      "excerpt": "A Claude skill that turns vibecoded, AI-looking UI into a designed interface",
      "excerptZh": "一个 Claude 技能，把 vibe coding 出来的、一眼 AI 的界面，变成有设计感的界面。",
      "reason": "解决一个很具体的美学问题：vibe coding 出来的 UI 一眼假。这类「反向工具」会越来越多。",
      "tags": [
        "设计",
        "工具"
      ],
      "cover": "./data/covers/thumbs/9aab5ec37539.jpg",
      "lang": "en",
      "duration": null,
      "keyPoints": [
        "一个 Claude skill：把 vibe coding 出的界面改成有设计感的界面",
        "1.5 万 stars，JavaScript",
        "解决的是 AI 生成 UI「一眼假」的问题"
      ],
      "uses": [
        "自用：快速美化 AI 生成的页面",
        "内容选题：AI 美学同质化",
        "产品：给生成类工具加一层「设计后处理」"
      ],
      "gap": "",
      "batchId": 0,
      "state": {
        "saved": false,
        "read": false,
        "hidden": false
      },
      "id": 43
    },
    {
      "key": "https://www.bilibili.com/video/BV1AXZ4YvEXY",
      "url": "https://www.bilibili.com/video/BV1AXZ4YvEXY",
      "lane": "video",
      "source": "B站",
      "title": "影石超旗舰 AI 全景相机，限时发售！",
      "titleZh": "影石超旗舰 AI 全景相机，限时发售！",
      "author": "影石Insta360",
      "publishedAt": "2025-04-01T03:37:08.000Z",
      "popularity": {
        "label": "play",
        "value": 155697
      },
      "excerpt": "双开门式镜头盖、人工风力发电、语音助手Shiri…… 影石XvX上线，不买后悔一整年。",
      "excerptZh": "",
      "reason": "把它当「AI 营销话术」的样本看，比当评测看更有价值。",
      "tags": [],
      "cover": "./data/covers/thumbs/vid-d71d3dd4a7eb.jpg",
      "lang": "zh",
      "duration": 304,
      "keyPoints": [
        "影石（Insta360）新品的官方宣传片",
        "主打 AI 功能加硬件形态创新",
        "本质是广告，不是独立评测"
      ],
      "uses": [
        "观察：厂商怎么讲「AI」这个故事",
        "内容选题：硬件厂商的 AI 话术套路"
      ],
      "gap": "未获取字幕（B 站字幕接口需登录），要点依据标题、简介与时长整理。",
      "batchId": 0,
      "state": {
        "saved": false,
        "read": false,
        "hidden": false
      },
      "id": 44
    },
    {
      "key": "https://sspai.com/post/118935",
      "url": "https://sspai.com/post/118935",
      "lane": "zh",
      "source": "少数派",
      "title": "派早报：Apple 公布 Swift Student Challenge 安排、微软发布 Auto SR 等",
      "titleZh": "派早报：Apple 公布 Swift Student Challenge 安排、微软发布 Auto SR 等",
      "author": "少数派编辑部",
      "publishedAt": "2026-11-12T00:22:09.000Z",
      "popularity": null,
      "excerpt": "Arm 发布 Cortex-M42 处理器、任天堂宣布「轻松登入」功能将下线等。 查看全文",
      "excerptZh": "Arm 发布 Cortex-M42 处理器、任天堂宣布「轻松登入」功能将下线等。",
      "reason": "平台和硬件侧的更新，会决定 AI 应用能调用什么。扫一眼即可，不用深读。",
      "tags": [
        "中文",
        "平台"
      ],
      "cover": "./data/covers/thumbs/7343f9e1ff56.jpg",
      "lang": "zh",
      "duration": null,
      "keyPoints": [
        "Swift Student Challenge 2027 提交期为 2 月 8 日至 28 日，首次覆盖全部 Apple 平台",
        "新增线上活动：在 Xcode 中使用智能体编程",
        "微软 Auto SR 正式面向 Xbox Ally 与部分 Copilot+ PC 推出"
      ],
      "uses": [
        "机会：适合学生参加的 AI 编程比赛",
        "内容选题：平台侧 AI 功能的更新节奏",
        "自用：了解 Xcode 里的 agent 编程"
      ],
      "gap": "",
      "batchId": 0,
      "state": {
        "saved": false,
        "read": false,
        "hidden": false
      },
      "id": 45
    },
    {
      "key": "https://lars.yencken.org/have-ai-timelines-moved/",
      "url": "https://lars.yencken.org/have-ai-timelines-moved/",
      "lane": "discussion",
      "source": "Hacker News",
      "title": "Have AI timelines suddenly moved?",
      "titleZh": "AI 时间线突然提前了吗？",
      "author": "lars512",
      "publishedAt": "2026-11-13T00:23:12.000Z",
      "popularity": {
        "label": "points",
        "value": 1
      },
      "excerpt": "",
      "excerptZh": "",
      "reason": "对「能力进展速度」的一次冷静复盘。它决定你该按 6 个月还是 3 年去做产品假设。",
      "tags": [
        "行业判断"
      ],
      "cover": "./data/covers/thumbs/eb3307963f5d.jpg",
      "lang": "en",
      "duration": null,
      "keyPoints": [
        "METR 报告称 Anthropic 的 AI 研发能力自 2025 年底起在加速",
        "多篇后续分析把「AI 能超级化做 AI 研究」的预测从 2028–29 提前到 2027",
        "主要归因是「AI 造 AI」带来的复利效应"
      ],
      "uses": [
        "决策输入：做长周期产品假设时参考这条时间线",
        "内容选题：AI 时间线为什么突然提前",
        "风险预案：评估 2027 年前后能力跃迁的影响"
      ],
      "gap": "",
      "batchId": 0,
      "state": {
        "saved": false,
        "read": false,
        "hidden": false
      },
      "id": 46
    },
    {
      "key": "https://latent.space/p/naiveai/",
      "url": "https://latent.space/p/naiveai/",
      "lane": "blog",
      "source": "Latent Space",
      "title": "NaiveAI Promises 2,100 Tokens per Second. How Well Does It Code?",
      "titleZh": "NaiveAI 号称每秒 2100 token，写代码到底行不行？",
      "author": "Gabriele Beltramo",
      "publishedAt": "2026-11-10T18:56:32.000Z",
      "popularity": null,
      "excerpt": "NaiveAI could potentially top Artificial Analysis’s speed rankings. Our hands-on test suggests its coding quality holds up against DeepSeek.",
      "excerptZh": "NaiveAI 有可能登顶 Artificial Analysis 的速度榜。我们的实测显示，它的代码质量能和 DeepSeek 掰手腕。",
      "reason": "速度榜第一不等于好用。这是少数把「快」和「代码质量」分开测的评测。",
      "tags": [
        "评测",
        "模型"
      ],
      "cover": "./data/covers/thumbs/8f42811d9e21.jpg",
      "lang": "en",
      "duration": null,
      "keyPoints": [
        "NaiveAI 号称 2100 tokens/s，可能登顶速度榜",
        "实测代码质量与 DeepSeek 相当",
        "结论是速度和代码质量要分开评估"
      ],
      "uses": [
        "选型：高频低难度任务可以换快模型省钱",
        "内容选题：速度榜为什么容易误导",
        "自用：把批量任务切给快模型"
      ],
      "gap": "",
      "batchId": 0,
      "state": {
        "saved": false,
        "read": false,
        "hidden": false
      },
      "id": 47
    },
    {
      "key": "https://arxiv.org/abs/2611.14980v1",
      "url": "https://arxiv.org/abs/2611.14980v1",
      "lane": "paper",
      "source": "arXiv",
      "title": "CoLFA: Collaboration-Guided Lightweight Failure Attribution for LLM-Based Multi-Agent Systems",
      "titleZh": "CoLFA：多智能体系统的轻量级故障归因",
      "author": "Yufei Luo",
      "publishedAt": "2026-11-11T03:38:54.000Z",
      "popularity": null,
      "excerpt": "Failure attribution in multi-agent systems requires tracing error formation to identify the decisive error step and the responsible agent. However, agents' division of work and information exchange lead to Interleaved Steps and Cluttered Content, requiring models to link executions and check details in lengthy records. This makes it difficult to balance localization accuracy…",
      "excerptZh": "多智能体系统的故障归因需要把错误形成过程追溯到决定性的错误步骤和负责的 agent。然而 agent 之间的分工与信息交换导致步骤交错、内容杂乱……",
      "reason": "多 agent 出错时，到底是哪个环节、哪个 agent 的锅？这是多 agent 落地最实际的问题之一。",
      "tags": [
        "多agent",
        "调试"
      ],
      "cover": "./data/covers/thumbs/438c75a36990.jpg",
      "lang": "en",
      "duration": null,
      "keyPoints": [
        "多 agent 故障归因：找出决定性的错误步骤和负责的 agent",
        "难点是步骤交错、上下文杂乱",
        "提出一种轻量级的归因方法"
      ],
      "uses": [
        "调试方法：多 agent 出错时怎么定位",
        "内容选题：多 agent 的「甩锅」问题",
        "工程：给日志补上归因需要的字段"
      ],
      "gap": "",
      "batchId": 0,
      "state": {
        "saved": false,
        "read": false,
        "hidden": false
      },
      "id": 48
    },
    {
      "key": "https://github.com/Ebony-Vinyl/dsh-our-free-model",
      "url": "https://github.com/Ebony-Vinyl/dsh-our-free-model",
      "lane": "repo",
      "source": "GitHub",
      "title": "Ebony-Vinyl/dsh-our-free-model",
      "titleZh": "dsh 免费模型插件（7.1 万 star）",
      "author": "Ebony-Vinyl",
      "publishedAt": "2026-09-24T16:17:19.000Z",
      "popularity": {
        "label": "stars",
        "value": 72080
      },
      "excerpt": "在 dsh 里装上这个插件即可，无需登录、注册或填 API Key，就能使用包括 DeepSeek V4.1 Flash、Kimi K3 在内的前沿模型——完全免费，不限量。 All you do is install this plugin in dsh: no login, no sign-up, no API key — the frontier models are just there, DeepSeek V4.1 Flash and Kimi K3 among them. Completely free, with no usage cap.",
      "excerptZh": "在 dsh 里装上这个插件即可，无需登录、注册或填 API Key，就能使用包括 DeepSeek V4.1 Flash、Kimi K3 在内的前沿模型——完全免费，不限量。",
      "reason": "在本机 dsh 里装个插件就能用前沿模型。它把个人 AI 工作流的试错成本压到接近零——同时也值得想想这种「免费」的可持续性。",
      "tags": [
        "工具",
        "dsh"
      ],
      "cover": "./data/covers/thumbs/f2155f2e5494.jpg",
      "lang": "en",
      "duration": null,
      "keyPoints": [
        "dsh 插件，装上即可用前沿模型，无需登录或 API Key",
        "7.1 万 stars，增长极快",
        "完全免费不限量，可持续性存疑"
      ],
      "uses": [
        "自用：零成本试用前沿模型",
        "内容选题：免费模型的商业模式能撑多久",
        "风险：把工作流绑在单一插件上的风险"
      ],
      "gap": "",
      "batchId": 0,
      "state": {
        "saved": false,
        "read": false,
        "hidden": false
      },
      "id": 49
    },
    {
      "key": "https://www.bilibili.com/video/BV1cUoDYaEdb",
      "url": "https://www.bilibili.com/video/BV1cUoDYaEdb",
      "lane": "video",
      "source": "B站",
      "title": "语音、画图、PPT、联动全网，我这个完美版的DeepSeek，你们都没有用过！",
      "titleZh": "语音、画图、PPT、联动全网，我这个完美版的DeepSeek，你们都没有用过！",
      "author": "玄离199",
      "publishedAt": "2025-03-31T09:00:00.000Z",
      "popularity": {
        "label": "play",
        "value": 391827
      },
      "excerpt": "视频里搭的智能体已经上线了，扣子搜“GitHub查询器”、“暴打弱智吧”就可以体验",
      "excerptZh": "",
      "reason": "有可复现的成品（扣子上能直接搜到），不是纯概念演示。",
      "tags": [],
      "cover": "./data/covers/thumbs/vid-07b7ee086897.jpg",
      "lang": "zh",
      "duration": 394,
      "keyPoints": [
        "用扣子（Coze）搭了一个多模态智能体：语音、画图、PPT、联网",
        "简介给出了两个可以直接体验的智能体名称",
        "时长约 6 分钟，偏搭建思路"
      ],
      "uses": [
        "自用：照着搭一个自己的助手",
        "内容选题：零代码搭智能体的能力边界",
        "判断：扣子这类平台适合做到什么程度"
      ],
      "gap": "未获取字幕（B 站字幕接口需登录），要点依据标题、简介与时长整理。",
      "batchId": 0,
      "state": {
        "saved": false,
        "read": false,
        "hidden": false
      },
      "id": 50
    },
    {
      "key": "https://medium.com/young-coder/7-habits-of-highly-ineffective-ai-programmers-f40febb3b6e7",
      "url": "https://medium.com/young-coder/7-habits-of-highly-ineffective-ai-programmers-f40febb3b6e7",
      "lane": "discussion",
      "source": "Hacker News",
      "title": "Habits of Highly Ineffective AI Programmers",
      "titleZh": "低效 AI 程序员的七个习惯",
      "author": "4mpm3",
      "publishedAt": "2026-11-12T23:51:16.000Z",
      "popularity": {
        "label": "points",
        "value": 1
      },
      "excerpt": "",
      "excerptZh": "",
      "reason": "反向清单往往比最佳实践好用。适合对照自己：哪些习惯正在让 AI 编程变慢，而不是变快。",
      "tags": [
        "AI编程",
        "反模式"
      ],
      "cover": "./data/covers/thumbs/757be233ec99.jpg",
      "lang": "en",
      "duration": null,
      "keyPoints": [
        "列了 7 个让 AI 编程变慢而不是变快的习惯",
        "反向清单，适合对照自查",
        "原文有反爬，以上仅据标题整理"
      ],
      "uses": [
        "自用：对照自己，挑一个最像的改掉",
        "内容选题：AI 编程的反模式清单"
      ],
      "gap": "原文无法抓取，未能提取正文。",
      "batchId": 0,
      "state": {
        "saved": false,
        "read": false,
        "hidden": false
      },
      "id": 51
    },
    {
      "key": "https://simonwillison.net/2026/Nov/10/muse-ember/",
      "url": "https://simonwillison.net/2026/Nov/10/muse-ember/",
      "lane": "blog",
      "source": "Simon Willison",
      "title": "Introducing Our Smallest, Most Efficient Model: Muse Ember",
      "titleZh": "Meta 发布最小、最高效的模型 Muse Ember",
      "author": "Simon Willison",
      "publishedAt": "2026-11-10T07:28:21.000Z",
      "popularity": null,
      "excerpt": "Introducing Our Smallest, Most Efficient Model: Muse Ember Meta AI just launched their entry in the Claude Haiku/GPT Luna category: Muse Ember, which they describe as: [...] our smallest and most efficient model designed for complex reasoning execution and the work agents repeat all day: tool calls, coding subtasks, routing, extraction, and long document parsing. For shorter…",
      "excerptZh": "Meta 发布了他们在 Claude Haiku / GPT Luna 这一档的产品：Muse Ember。官方说法是「我们最小、最高效的模型，为复杂推理执行和 agent 每天重复的工作（工具调用……）而设计」。",
      "reason": "各家都在补「便宜、够用、专门跑 agent 重复劳动」这一档。这类模型才是大多数应用真实的成本基础。",
      "tags": [
        "模型",
        "成本"
      ],
      "cover": "./data/covers/thumbs/fabe838d73f5.jpg",
      "lang": "en",
      "duration": null,
      "keyPoints": [
        "Meta 发布小模型 Muse Ember，对标 Claude Haiku 与 GPT Luna",
        "定位是 agent 日常重复劳动，比如工具调用",
        "小模型这波竞争集中在「够用且便宜」"
      ],
      "uses": [
        "成本优化：agent 流水线里用便宜模型跑重复步骤",
        "内容选题：小模型竞争对应用层的意义",
        "选型：按任务难度分层用模型"
      ],
      "gap": "",
      "batchId": 0,
      "state": {
        "saved": false,
        "read": false,
        "hidden": false
      },
      "id": 52
    },
    {
      "key": "https://arxiv.org/abs/2611.14975v1",
      "url": "https://arxiv.org/abs/2611.14975v1",
      "lane": "paper",
      "source": "arXiv",
      "title": "Aggregate Accuracy Hides Diagnosis-Specific Failure in Medical Vision-Language Models",
      "titleZh": "总体准确率掩盖了医学视觉语言模型的单病种失败",
      "author": "Shreya Ajay Kale",
      "publishedAt": "2026-11-11T03:35:25.000Z",
      "popularity": null,
      "excerpt": "Medical vision-language models (VLMs) are compared mainly by accuracy averaged across findings, a summary that can hide complete failure on a single diagnosis. We audit five open medical VLMs (MedGemma-4B, Lingshu-7B, HuatuoGPT-Vision-7B, Qwen2.5-VL-7B, and MedVLM-R1) on 6,048 ChestX-ray14 questions balanced by sex, age, finding, and label. On the 432 pneumothorax-positive…",
      "excerptZh": "医学视觉语言模型（VLM）主要通过跨发现的平均准确率来比较，而这种汇总会掩盖对单一诊断的完全失败。我们审计了五个开源医学 VLM……在 6048 道 ChestX-ray14 问题上……",
      "reason": "评测方法论的坑：平均分好看，可能意味着某个诊断完全失效。做垂直 AI 的人都该看。",
      "tags": [
        "评测",
        "医疗"
      ],
      "cover": "./data/covers/thumbs/76d647479658.jpg",
      "lang": "en",
      "duration": null,
      "keyPoints": [
        "医学 VLM 通常用平均准确率比较，会掩盖单一病种的完全失败",
        "审计了 5 个开源医学 VLM、6048 道胸片题",
        "是评测方法论问题，不是模型能力问题"
      ],
      "uses": [
        "评测方法：别只看平均分，要分层看",
        "内容选题：AI 医疗评测里的统计陷阱",
        "自用：给自建评测加分层指标"
      ],
      "gap": "",
      "batchId": 0,
      "state": {
        "saved": false,
        "read": false,
        "hidden": false
      },
      "id": 53
    },
    {
      "key": "https://github.com/yetone/magpie",
      "url": "https://github.com/yetone/magpie",
      "lane": "repo",
      "source": "GitHub",
      "title": "yetone/magpie",
      "titleZh": "magpie：所有 agent 的模型，放在一个地方",
      "author": "yetone",
      "publishedAt": "2026-09-23T16:22:35.000Z",
      "popularity": {
        "label": "stars",
        "value": 35873
      },
      "excerpt": "Every agent's model. One place. Codex on DeepSeek, Claude Code on Kimi, from the menu bar.",
      "excerptZh": "每个 agent 的模型，都在一个地方。在菜单栏里让 Codex 跑 DeepSeek、让 Claude Code 跑 Kimi。",
      "reason": "菜单栏切换模型，是「个人多模型工作流」的典型形态。成本敏感的人会需要它。",
      "tags": [
        "工具",
        "多模型"
      ],
      "cover": "./data/covers/thumbs/0365ec89c7e5.jpg",
      "lang": "en",
      "duration": null,
      "keyPoints": [
        "菜单栏切换模型：Codex 接 DeepSeek、Claude Code 接 Kimi",
        "Go 编写，3.5 万 stars",
        "解决多模型并行时的切换成本"
      ],
      "uses": [
        "自用：多模型并行时快速换后端",
        "内容选题：个人多模型工作流的形态",
        "选型：和同类切换工具对比"
      ],
      "gap": "",
      "batchId": 0,
      "state": {
        "saved": false,
        "read": false,
        "hidden": false
      },
      "id": 54
    },
    {
      "key": "https://www.bilibili.com/video/BV1hsZCYZEMh",
      "url": "https://www.bilibili.com/video/BV1hsZCYZEMh",
      "lane": "video",
      "source": "B站",
      "title": "GPT4o!全方位评测！人人都是设计师的时代来临，对比comfyui",
      "titleZh": "GPT4o!全方位评测！人人都是设计师的时代来临，对比comfyui",
      "author": "CG迷李辰",
      "publishedAt": "2025-03-31T02:35:56.000Z",
      "popularity": {
        "label": "play",
        "value": 58945
      },
      "excerpt": "银河录像局CG迷8折优惠注册链接，https://nf.video/zp5gG 优惠券用完后购买任何产品都可以输入优惠码cgmi享受额外优惠 GPT4o官方网址 https://chatgpt.com",
      "excerptZh": "",
      "reason": "21 分钟的对比评测，比短视频更适合判断工具边界。",
      "tags": [],
      "cover": "./data/covers/thumbs/vid-dd07bd787fb4.jpg",
      "lang": "zh",
      "duration": 1271,
      "keyPoints": [
        "GPT-4o 图像能力的全方位评测，并与 ComfyUI 对比",
        "时长约 21 分钟，属于深度评测",
        "关注点是「人人都是设计师」这个说法是否成立"
      ],
      "uses": [
        "判断输入：GPT-4o 生图能不能替代现有工作流",
        "内容选题：自然语言生图与专业工作流的边界",
        "自用：决定要不要继续投入 ComfyUI"
      ],
      "gap": "未获取字幕（B 站字幕接口需登录），要点依据标题、简介与时长整理。",
      "batchId": 0,
      "state": {
        "saved": false,
        "read": false,
        "hidden": false
      },
      "id": 55
    },
    {
      "key": "https://arstechnica.com/gaming/2026/11/big-walk-used-ai-to-fix-a-bug-now-the-indie-gaming-world-is-having-a-reckoning/",
      "url": "https://arstechnica.com/gaming/2026/11/big-walk-used-ai-to-fix-a-bug-now-the-indie-gaming-world-is-having-a-reckoning/",
      "lane": "discussion",
      "source": "Hacker News",
      "title": "Big Walk used AI to fix a bug. Now the indie gaming world is having a reckoning",
      "titleZh": "《Big Walk》用 AI 修了个 bug，独立游戏圈炸了",
      "author": "vintagedave",
      "publishedAt": "2026-11-12T23:36:00.000Z",
      "popularity": {
        "label": "points",
        "value": 4
      },
      "excerpt": "",
      "excerptZh": "",
      "reason": "AI 参与创作后的「署名与信任」争议，比技术问题更难解。做内容、游戏类 AI 工具的人绕不开。",
      "tags": [
        "游戏",
        "创作伦理"
      ],
      "cover": "./data/covers/thumbs/9e2e1c68cf1b.jpg",
      "lang": "en",
      "duration": null,
      "keyPoints": [
        "独立游戏《Big Walk》用 AI 修了一个 bug，引发行业争论",
        "争议焦点与其说是技术，不如说是署名与信任",
        "原文有人机验证，以上仅据标题整理"
      ],
      "uses": [
        "内容选题：AI 参与创作后的署名与信任问题",
        "产品决策：做创作类 AI 工具要考虑「要不要披露」"
      ],
      "gap": "原文有人机验证，未能提取正文。",
      "batchId": 0,
      "state": {
        "saved": false,
        "read": false,
        "hidden": false
      },
      "id": 56
    },
    {
      "key": "https://simonwillison.net/2026/Nov/9/mysterious-beeps/",
      "url": "https://simonwillison.net/2026/Nov/9/mysterious-beeps/",
      "lane": "blog",
      "source": "Simon Willison",
      "title": "Locating the source of a mysterious beep with Claude",
      "titleZh": "用 Claude 定位一个神秘蜂鸣声的来源",
      "author": "Simon Willison",
      "publishedAt": "2026-11-09T23:57:21.000Z",
      "popularity": null,
      "excerpt": "Our house has a box room, full of boxes that we still haven't unpacked from our last move. A couple of weeks ago something in that room started intermittently beeping . The beeps were far enough apart that standing in the room and trying to determine the source of the noise was frustrating, and I really didn't want to dig through every one of those boxes. So I had Claude Code…",
      "excerptZh": "我家有个储物间，堆满了搬家还没拆的箱子。几周前，里面有个东西开始间歇性滴滴响。响声间隔太久，站在屋里找来源非常折磨，我开始……",
      "reason": "一个特别好的「AI 当侦探」案例：没有代码、没有产品，就是拿模型做现实里的排查。看完能把方法借走。",
      "tags": [
        "案例",
        "生活应用"
      ],
      "cover": "./data/covers/thumbs/d363b026f0d9.jpg",
      "lang": "en",
      "duration": null,
      "keyPoints": [
        "用 Claude 定位家里间歇性蜂鸣声的来源",
        "没有代码、没有产品，纯粹是现实排查",
        "展示了把模型当推理工具而不是写作工具"
      ],
      "uses": [
        "方法借鉴：现实排查问题可以照这个思路走一遍",
        "内容选题：AI 当侦探的小案例",
        "自用：家里类似的疑难问题试一次"
      ],
      "gap": "",
      "batchId": 0,
      "state": {
        "saved": false,
        "read": false,
        "hidden": false
      },
      "id": 57
    },
    {
      "key": "https://arxiv.org/abs/2611.14960v1",
      "url": "https://arxiv.org/abs/2611.14960v1",
      "lane": "paper",
      "source": "arXiv",
      "title": "Termination Lag: Coding Agents Solve Early but Stop Late",
      "titleZh": "终止滞后：编程智能体早就解决了，却停不下来",
      "author": "Musa Cim",
      "publishedAt": "2026-11-11T03:11:00.000Z",
      "popularity": null,
      "excerpt": "Coding agents can solve a task well before they stop working on it. We characterize \\emph{termination lag}--the number of steps between an agent's first correct patch and the end of its run--across five models, two agent frameworks, and three SWE-bench datasets by recording and testing every distinct repository patch generated during execution. Our analysis reveals that…",
      "excerptZh": "编程智能体常常在任务已经解决之后很久才停手。我们刻画了「终止滞后」——从智能体第一次给出正确补丁，到本次运行结束之间的步数——覆盖五个模型、两个 agent 框架、三个 SWE-bench 数据集……",
      "reason": "一个反直觉的发现：agent 解题不慢，慢在「知道自己该停了」。做 agent 产品会直接撞上这个问题。",
      "tags": [
        "agent",
        "行为"
      ],
      "cover": "./data/covers/thumbs/0025642f63ab.jpg",
      "lang": "en",
      "duration": null,
      "keyPoints": [
        "编程 agent 经常在任务已经解决之后继续跑",
        "定义「终止滞后」：从首次正确补丁到运行结束之间的步数",
        "覆盖 5 个模型、2 个 agent 框架、3 个 SWE-bench 数据集"
      ],
      "uses": [
        "成本优化：给 agent 加一个「该停了」的判定",
        "内容选题：agent 的钱都浪费在哪",
        "产品设计：怎么做进度与结束提示"
      ],
      "gap": "",
      "batchId": 0,
      "state": {
        "saved": false,
        "read": false,
        "hidden": false
      },
      "id": 58
    },
    {
      "key": "https://github.com/browser-use/jev-ultrafast",
      "url": "https://github.com/browser-use/jev-ultrafast",
      "lane": "repo",
      "source": "GitHub",
      "title": "browser-use/jev-ultrafast",
      "titleZh": "jev-ultrafast：最快、最便宜的网页 agent",
      "author": "browser-use",
      "publishedAt": "2026-09-16T21:30:12.000Z",
      "popularity": {
        "label": "stars",
        "value": 24472
      },
      "excerpt": "Fastest and cheapest web agent",
      "excerptZh": "最快、最便宜的网页 agent。",
      "reason": "web agent 的成本曲线在快速下移。做浏览器自动化类应用，先看它的定价逻辑。",
      "tags": [
        "web agent",
        "工具"
      ],
      "cover": "./data/covers/thumbs/1aaf19b7744c.jpg",
      "lang": "en",
      "duration": null,
      "keyPoints": [
        "browser-use 出的最快、最便宜的 web agent",
        "2.4 万 stars，Python",
        "说明 web agent 的成本曲线在快速下移"
      ],
      "uses": [
        "选型：做浏览器自动化先看它",
        "内容选题：web agent 的价格战",
        "自用：批量网页任务先拿它试"
      ],
      "gap": "",
      "batchId": 0,
      "state": {
        "saved": false,
        "read": false,
        "hidden": false
      },
      "id": 59
    },
    {
      "key": "https://www.bilibili.com/video/BV1igSdY7EFE",
      "url": "https://www.bilibili.com/video/BV1igSdY7EFE",
      "lane": "video",
      "source": "B站",
      "title": "AI时代，英语学习已经变的无比简单！【闪电飞船】",
      "titleZh": "AI时代，英语学习已经变的无比简单！【闪电飞船】",
      "author": "闪电飞船",
      "publishedAt": "2024-11-04T11:30:00.000Z",
      "popularity": {
        "label": "play",
        "value": 2660833
      },
      "excerpt": "Microsoft Edge 浏览器安装「豆包插件」教程https://bytedance.larkoffice.com/wiki/Ik5UwSJAoiUH3xk1QkOcMU1cnVh Safari 浏览器安装「豆包插件」教程 https://bytedance.larkoffice.com/wiki/Degvw67zziZdORki30PcatFenGf Chrome 浏览器豆包插件的安装教程https://bytedance.larkoffice.com/wiki/QifswqwtriGVVVkTmWOcv6XXnjf",
      "excerptZh": "",
      "reason": "短平快，能直接看到「AI 插件怎么介入日常学习」的具体操作，适合当工具试用入口。",
      "tags": [],
      "cover": "./data/covers/thumbs/vid-664c34d515f4.jpg",
      "lang": "zh",
      "duration": 175,
      "keyPoints": [
        "演示用豆包浏览器插件辅助英语学习",
        "简介里直接给了 Edge、Safari、Chrome 三个浏览器的安装教程链接",
        "时长不到 3 分钟，是操作演示而不是方法论"
      ],
      "uses": [
        "自用：想试 AI 辅助阅读或翻译时，按它给的链接装插件",
        "内容选题：AI 学英语到底是工具还是噱头",
        "判断：这是产品推广向内容，结论要打折"
      ],
      "gap": "未获取字幕（B 站字幕接口需登录），要点依据标题、简介与时长整理。",
      "batchId": 0,
      "state": {
        "saved": false,
        "read": false,
        "hidden": false
      },
      "id": 60
    },
    {
      "key": "https://birdyfoot.com/research/ai-tool-vulnerabilities",
      "url": "https://birdyfoot.com/research/ai-tool-vulnerabilities",
      "lane": "discussion",
      "source": "Hacker News",
      "title": "Security flaws in popular AI tools have nearly tripled",
      "titleZh": "主流 AI 工具的安全漏洞数量接近三倍增长",
      "author": "joshfischer1108",
      "publishedAt": "2026-11-12T23:30:18.000Z",
      "popularity": {
        "label": "points",
        "value": 4
      },
      "excerpt": "",
      "excerptZh": "",
      "reason": "AI 应用的安全债开始到期。如果你要接第三方 AI 工具或自己搭 agent，这是风险清单的输入。",
      "tags": [
        "安全",
        "风险"
      ],
      "cover": "./data/covers/thumbs/977a595685aa.jpg",
      "lang": "en",
      "duration": null,
      "keyPoints": [
        "统计了 17 个主流开源 AI 工具：Open WebUI、Flowise、vLLM、LangChain 等",
        "漏洞数从 2025 全年 156 个涨到 2026 年 10 月底的 423 个",
        "2023 年以来 133 个严重漏洞里，72 个可让攻击者执行任意代码"
      ],
      "uses": [
        "决策输入：自建 AI 工具前先查漏洞记录和补丁节奏",
        "内容选题：「AI 工具的安全债」数据稿",
        "自用：给团队定一份 AI 工具准入清单"
      ],
      "gap": "",
      "batchId": 0,
      "state": {
        "saved": false,
        "read": false,
        "hidden": false
      },
      "id": 61
    },
    {
      "key": "https://simonwillison.net/2026/Nov/9/details-summary/",
      "url": "https://simonwillison.net/2026/Nov/9/details-summary/",
      "lane": "blog",
      "source": "Simon Willison",
      "title": "Hide your slop PR descriptions behind <details><summary>",
      "titleZh": "把 AI 味的 PR 描述折叠进 details 标签",
      "author": "Simon Willison",
      "publishedAt": "2026-11-09T04:25:05.000Z",
      "popularity": null,
      "excerpt": "Most of the changes I make to my projects these days come in the form of PRs opened for me by Claude Code or Codex. The PR is my unit of work - I use them to bundle commits together, iterating on them until a feature is complete, document decisions and then merge the finished result. Today's coding agents are great at writing PR descriptions. They're too good at describing the…",
      "excerptZh": "现在我项目里的大部分改动，都是 Claude Code 或 Codex 帮我开的 PR。PR 是我的工作单元——我用它打包提交、反复迭代直到功能完成、记录决策，然后合并。今天这个 coding……",
      "reason": "很小的技巧，解决的是真问题：AI 生成的 PR 描述太长太整齐，反而干扰 review。",
      "tags": [
        "AI编程",
        "技巧"
      ],
      "cover": "./data/covers/thumbs/a92667754bb1.jpg",
      "lang": "en",
      "duration": null,
      "keyPoints": [
        "把 AI 生成的冗长 PR 描述折叠进 details 标签",
        "作者的 PR 是工作单元：打包提交、迭代、记录决策",
        "解决的是 review 被噪音淹没的问题"
      ],
      "uses": [
        "工作流：给 AI 生成的 PR 加折叠摘要",
        "内容选题：AI 协作里那些不起眼的小摩擦",
        "自用：改一版自己的 PR 模板"
      ],
      "gap": "",
      "batchId": 0,
      "state": {
        "saved": false,
        "read": false,
        "hidden": false
      },
      "id": 62
    },
    {
      "key": "https://arxiv.org/abs/2611.14935v1",
      "url": "https://arxiv.org/abs/2611.14935v1",
      "lane": "paper",
      "source": "arXiv",
      "title": "Do Large Language Models Show Racial and Sex Bias in Pain Management? A Counterfactual Audit of GPT, Claude, Gemini, Llama, DeepSeek and Qwen",
      "titleZh": "大模型在疼痛管理上有种族与性别偏见吗？六个模型的反事实审计",
      "author": "Richard J. Young",
      "publishedAt": "2026-11-11T02:35:53.000Z",
      "popularity": null,
      "excerpt": "Racial and ethnic minority patients receive less pain treatment than non-Hispanic White patients, and large language models (LLMs) used as medical AI could reproduce that bias. Prior audits tested a few proprietary models, stated race explicitly and rarely measured the models' own response instability. In exploratory, non-preregistered analyses, Study 1 had four open-weight…",
      "excerptZh": "少数族裔患者获得的疼痛治疗少于非西班牙裔白人患者，而用作医疗 AI 的大模型可能复制这种偏见。此前的审计只测了少数闭源模型，明确告知种族，且很少测量模型自身回答的不稳定性……",
      "reason": "把「公平性」做成可测量的审计，而不是口号。这套方法可以迁移到任何高风险决策场景。",
      "tags": [
        "评测",
        "公平性"
      ],
      "cover": "./data/covers/thumbs/4106f958f9af.jpg",
      "lang": "en",
      "duration": null,
      "keyPoints": [
        "审计六个模型在疼痛管理上的种族与性别偏见",
        "用反事实方法，并测量模型自身回答的不稳定性",
        "背景是现实医疗中少数族裔获得更少疼痛治疗"
      ],
      "uses": [
        "合规参考：高风险场景怎么做偏见审计",
        "内容选题：模型偏见可以怎么被测量",
        "方法：反事实测试可以迁移到别的领域"
      ],
      "gap": "",
      "batchId": 0,
      "state": {
        "saved": false,
        "read": false,
        "hidden": false
      },
      "id": 63
    },
    {
      "key": "https://www.psypost.org/ai-written-peer-reviews-outscored-top-human-experts-in-blind-comparisons-harvard-working-paper-finds/",
      "url": "https://www.psypost.org/ai-written-peer-reviews-outscored-top-human-experts-in-blind-comparisons-harvard-working-paper-finds/",
      "lane": "discussion",
      "source": "Hacker News",
      "title": "AI-written peer reviews outscored top human experts",
      "titleZh": "AI 撰写的同行评审，在盲评中得分超过顶尖人类专家",
      "author": "geox",
      "publishedAt": "2026-11-12T23:28:21.000Z",
      "popularity": {
        "label": "points",
        "value": 1
      },
      "excerpt": "",
      "excerptZh": "",
      "reason": "一个可复用的结论：在「结构化、有明确标准」的评价任务上，AI 已经能赢。想想你行业里哪些评审属于这一类。",
      "tags": [
        "评测",
        "应用场景"
      ],
      "cover": "./data/covers/thumbs/b68eb04b0acb.jpg",
      "lang": "en",
      "duration": null,
      "keyPoints": [
        "哈佛工作论文：AI 写的同行评审在盲评中得分超过人类专家",
        "盲评设计降低了「知道是 AI 就打分低」的偏见",
        "原文有反爬，以上仅据标题整理"
      ],
      "uses": [
        "内容选题：哪些评价类工作已经可以被 AI 接管",
        "方法借鉴：用盲评设计来测试 AI 的真实水平"
      ],
      "gap": "原文返回 403，未能提取正文。",
      "batchId": 0,
      "state": {
        "saved": false,
        "read": false,
        "hidden": false
      },
      "id": 64
    },
    {
      "key": "https://latent.space/p/cs146s/",
      "url": "https://latent.space/p/cs146s/",
      "lane": "blog",
      "source": "Latent Space",
      "title": "How Stanford Teaches AI-Native Engineering — Mihail Eric, Monaco",
      "titleZh": "斯坦福怎么教 AI 原生工程——CS146S",
      "author": "swyx .ai",
      "publishedAt": "2026-11-08T21:41:44.000Z",
      "popularity": null,
      "excerpt": "What happens when students can one-shot last year’s homework? Inside CS146S and the engineering team at Monaco.",
      "excerptZh": "当学生能一键做完去年的作业，会发生什么？走进 CS146S 和 Monaco 的工程团队。",
      "reason": "当作业可以被一键完成，课程只能改。这是教育侧对「AI 到底改变了什么」最诚实的回答。",
      "tags": [
        "教育",
        "课程"
      ],
      "cover": "./data/covers/thumbs/b831b808d1a4.jpg",
      "lang": "en",
      "duration": null,
      "keyPoints": [
        "斯坦福 CS146S 课程：9 个作业加一个 capstone",
        "学生用 AI 代码审查器去评估仓库",
        "核心问题：学生能一键做完去年作业后，课该怎么上"
      ],
      "uses": [
        "教育参考：AI 原生课程怎么设计作业",
        "内容选题：当作业可以被一键完成",
        "自用：把练习从「写」改成「评审」"
      ],
      "gap": "",
      "batchId": 0,
      "state": {
        "saved": false,
        "read": false,
        "hidden": false
      },
      "id": 65
    },
    {
      "key": "https://www.economist.com/leaders/2026/11/12/why-you-should-expect-an-ai-crash",
      "url": "https://www.economist.com/leaders/2026/11/12/why-you-should-expect-an-ai-crash",
      "lane": "discussion",
      "source": "Hacker News",
      "title": "Why You Should Expect an AI Crash",
      "titleZh": "为什么你应该预期一场 AI 崩盘",
      "author": "toomuchtodo",
      "publishedAt": "2026-11-12T23:08:31.000Z",
      "popularity": {
        "label": "points",
        "value": 82
      },
      "excerpt": "",
      "excerptZh": "",
      "reason": "《经济学人》的看空论证。不一定对，但你应该知道反方最强的论据长什么样——做长期投入决策时需要。",
      "tags": [
        "行业周期",
        "风险"
      ],
      "cover": "./data/covers/thumbs/85fb0dda3eed.jpg",
      "lang": "en",
      "duration": null,
      "keyPoints": [
        "《经济学人》社论：应该预期一场 AI 崩盘",
        "属于看空方的代表性论证",
        "原文无法抓取，以上仅据标题整理"
      ],
      "uses": [
        "决策输入：了解反方最强论据，避免只听多头",
        "内容选题：AI 泡沫论的正反方对照"
      ],
      "gap": "原文无法抓取，未能提取正文。",
      "batchId": 0,
      "state": {
        "saved": false,
        "read": false,
        "hidden": false
      },
      "id": 66
    },
    {
      "key": "https://latent.space/p/ainews-inkling-2-small-17a-594b-trained-in-68-hours-on-12t-tokens-beating-muse-spark/",
      "url": "https://latent.space/p/ainews-inkling-2-small-17a-594b-trained-in-68-hours-on-12t-tokens-beating-muse-spark/",
      "lane": "blog",
      "source": "Latent Space",
      "title": "[AINews] Inkling 2 Small: 17A-594B trained in 68 hours on 12T tokens, beating Muse Spark",
      "titleZh": "Inkling 2 Small：17A-594B，68 小时、12T token 训完",
      "author": "swyx .ai",
      "publishedAt": "2026-11-06T10:35:21.000Z",
      "popularity": null,
      "excerpt": "November 5, 2026 — Inside Inkling 2 Small’s training run and METR’s study of AI research at Anthropic.",
      "excerptZh": "2026 年 11 月 5 日——深入 Inkling 2 Small 的训练过程，以及 METR 对 Anthropic AI 研究的分析。",
      "reason": "训练效率的进展会直接压低推理价格。看参数和成本的对比，比看榜单有用。",
      "tags": [
        "模型",
        "训练"
      ],
      "cover": "./data/covers/thumbs/1601aee821be.jpg",
      "lang": "en",
      "duration": null,
      "keyPoints": [
        "Inkling 2 Small：17A-594B，68 小时、12T token 训完",
        "训练效率提升会直接压低后续推理价格",
        "同一篇还提到 METR 对 Anthropic 的研究"
      ],
      "uses": [
        "判断输入：模型价格的下降节奏",
        "内容选题：训练效率竞赛意味着什么",
        "选型：现在用还是等降价"
      ],
      "gap": "",
      "batchId": 0,
      "state": {
        "saved": false,
        "read": false,
        "hidden": false
      },
      "id": 67
    },
    {
      "key": "https://edge0.ai/blog/introducing-edge0-145b-frontier-ai-capabilities-on-your-own-computer",
      "url": "https://edge0.ai/blog/introducing-edge0-145b-frontier-ai-capabilities-on-your-own-computer",
      "lane": "discussion",
      "source": "Hacker News",
      "title": "Edge0-145B: Frontier AI Capabilities on Your Own Computer",
      "titleZh": "Edge0-145B：把前沿能力装进你自己的电脑",
      "author": "sroussey",
      "publishedAt": "2026-11-12T23:06:17.000Z",
      "popularity": {
        "label": "points",
        "value": 253
      },
      "excerpt": "",
      "excerptZh": "",
      "reason": "本地跑前沿模型的产品化尝试。这决定了「个人 AI 应用」里哪些可以完全不依赖云。",
      "tags": [
        "本地部署",
        "端侧"
      ],
      "cover": "./data/covers/thumbs/f980cc1f1e21.jpg",
      "lang": "en",
      "duration": null,
      "keyPoints": [
        "开源 Edge0-145B 与 Edge0-120B，附统一推理框架和部署工具",
        "宣称是首个 145B 级别的开源端侧模型，能力对标云端前沿",
        "卖点是本地跑：省调用费、数据不出本机"
      ],
      "uses": [
        "产品判断：本地优先的 AI 应用是否已经可行",
        "内容选题：端侧模型现在能到什么程度",
        "自用：拿它跑隐私敏感的任务"
      ],
      "gap": "",
      "batchId": 0,
      "state": {
        "saved": false,
        "read": false,
        "hidden": false
      },
      "id": 68
    },
    {
      "key": "https://github.com/Parcha-ai/agentrun/blob/main/README.md",
      "url": "https://github.com/Parcha-ai/agentrun/blob/main/README.md",
      "lane": "discussion",
      "source": "Hacker News",
      "title": "Show HN: AgentRun – open-source, Self-improving Managed Agents",
      "titleZh": "AgentRun：开源的、可自我改进的托管智能体",
      "author": "miguelrios",
      "publishedAt": "2026-11-12T18:15:48.000Z",
      "popularity": {
        "label": "points",
        "value": 108
      },
      "excerpt": "We (GREP.AI, YC F26) are open-sourcing AgentRun and turning it into a full managed agents platform. Read more about it in this post: https://agentrun.ai/blog/introducing-agentrun-run-smarter-ag... . It includes what we originally built for our own agent harness: - Self-improving…",
      "excerptZh": "我们（GREP.AI，YC F26）把 AgentRun 开源，并把它做成一个完整的托管智能体平台。它包含我们为自己的 agent harness 构建的那套东西：自我改进……",
      "reason": "YC 团队把自用的 agent harness 开源了。重点看「自我改进」具体指什么，而不是看宣传语。",
      "tags": [
        "agent框架",
        "开源"
      ],
      "cover": "./data/covers/thumbs/ca1478ab4f6d.jpg",
      "lang": "en",
      "duration": null,
      "keyPoints": [
        "YC F26 团队 GREP.AI 开源的托管 agent 平台",
        "包含他们自用的 agent harness，主打「自我改进」",
        "628 stars，JavaScript，属于早期项目"
      ],
      "uses": [
        "架构参考：agent 平台的模块怎么切",
        "内容选题：「自我改进」具体改的是什么",
        "自用：要搭 agent 平台先看它的取舍"
      ],
      "gap": "",
      "batchId": 0,
      "state": {
        "saved": false,
        "read": false,
        "hidden": false
      },
      "id": 69
    },
    {
      "key": "https://github.com/hyperionaidev/smolmaxxing/",
      "url": "https://github.com/hyperionaidev/smolmaxxing/",
      "lane": "discussion",
      "source": "Hacker News",
      "title": "I'm making LLMs work on small and old devices",
      "titleZh": "我在让大模型跑在小而旧的设备上",
      "author": "mrashad74",
      "publishedAt": "2026-11-12T15:23:10.000Z",
      "popularity": {
        "label": "points",
        "value": 370
      },
      "excerpt": "",
      "excerptZh": "",
      "reason": "端侧推理的工程实践。和上一条 Edge0 一起看，能拼出「个人设备上的 AI」现在的真实水位。",
      "tags": [
        "端侧",
        "工程"
      ],
      "cover": "./data/covers/thumbs/6edaf29caa3e.jpg",
      "lang": "en",
      "duration": null,
      "keyPoints": [
        "用 C 写的端侧推理尝试，目标是小内存和旧设备",
        "325 stars，非常早期",
        "和 Edge0 那类「大模型上端侧」的路线形成对照"
      ],
      "uses": [
        "技术选型：旧设备上跑模型是否可行",
        "内容选题：端侧的两条路线之争"
      ],
      "gap": "",
      "batchId": 0,
      "state": {
        "saved": false,
        "read": false,
        "hidden": false
      },
      "id": 70
    },
    {
      "key": "https://ipo.anthropic.com/us/",
      "url": "https://ipo.anthropic.com/us/",
      "lane": "discussion",
      "source": "Hacker News",
      "title": "Anthropic IPO",
      "titleZh": "Anthropic 上市",
      "author": "josephljohnston",
      "publishedAt": "2026-11-12T11:46:41.000Z",
      "popularity": {
        "label": "points",
        "value": 936
      },
      "excerpt": "",
      "excerptZh": "",
      "reason": "行业标志性事件。招股书通常是理解一家 AI 公司真实收入结构最好的材料，比新闻稿有信息量得多。",
      "tags": [
        "行业",
        "IPO"
      ],
      "cover": "./data/covers/thumbs/56c83c766ce1.jpg",
      "lang": "en",
      "duration": null,
      "keyPoints": [
        "Anthropic 启动 IPO，招股书公开",
        "因估值上升，净亏损里含 219 亿美元非现金费用（可转债、衍生品、SAFE 公允价值变动）",
        "公司定位是公益公司（PBC），强调风险治理"
      ],
      "uses": [
        "判断输入：AI 公司真实的收入与成本结构",
        "内容选题：招股书里最值得看的几个数字",
        "职业参考：行业周期处在什么位置"
      ],
      "gap": "",
      "batchId": 0,
      "state": {
        "saved": false,
        "read": false,
        "hidden": false
      },
      "id": 71
    }
  ]
};
