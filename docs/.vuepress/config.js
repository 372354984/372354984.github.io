module.exports = {
  title: "个人笔记",
  description: "好记性不如烂笔头",
  markdown: {
    // markdown-it-anchor 的选项
    anchor: { permalink: true },
    // markdown-it-toc 的选项
    toc: { includeLevel: [1, 2, 3, 4, 5, 6] },
    extendMarkdown: md => {
      // 使用更多的 markdown-it 插件!
      md.use(require("markdown-it-xxx"));
    },
  },
};
