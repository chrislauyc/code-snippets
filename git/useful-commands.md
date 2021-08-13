```bash
# Untrack files in local repository but keep at origin
git update-index --assume-unchanged library/*
# undo the change
git update-index --no-assume-unchanged library/*
```