linux + docker + k8s
- 文件系统readme.md  输出到 命令行
  cat -n（行号）
- git bash 是一个小型的Linux
- seq 序列

- 基于996 这个文件 找到以996开头的这行内容。。。
  正则 + linux  grep
  - | 管道
  - 匹配到 icu icuuuuu
  - 要匹配 ^ 字符本身，请使用 \^
  - \^    [^0-9]不是以什么开始，而是 否定 不要匹配^[\^0-9]
  -v 是否定