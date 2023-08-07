# Git

## 1. 设置git commit的默认编辑器为vim

```
git config --global core.editor vim
```

## 2. git仓构建时获取当前分支信息

获取分支信息
```
branch=$(git symbolic-ref --short -q HEAD)
```

获取git commit id
```
commit=$(git rev-parse --short HEAD)
```

获取git commit id, 如果有修改则加上-dirty
```
commit=$(git rev-parse --short HEAD)
if [[ -n $(git status --porcelain) ]]; then
    commit=${commit}-dirty
fi
```

## 3. 打包git仓库

```
git archive --format=zip --prefix=${out_dir}/ HEAD > ${pack_name}.zip
```

## 4. 常用指令

查看某个commit的修改内容
```
git show ${commit_id}
```

同步远端仓库, 删除远端不存在的分支
```
git remote prune origin
git remote prune ${remote name}
```

## 5. git-repo

[git-repo](https://gerrit.googlesource.com/git-repo)  
[repo manifest文件格式说明](https://www.jianshu.com/p/d40444267e8d)  
[Repo 命令参考资料](https://source.android.com/source/using-repo?hl=zh-cn)  
