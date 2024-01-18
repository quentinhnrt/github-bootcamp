--- { "layout" : "center" }
# GitHub Bootcamp

# Quentin Honnart

---

# How to initialise a new repository

Create local repository
```bash
git init
```

#### Optional : Create a remote repository

Add remote repository to local repository
```bash
gra <remote-name> <remote-url>
```
---

# How to review changes

Check modified files
```bash
gss
```

Add all files to staging
```bash
gaa
```

Verify if there's any file that you don't want to commit
```bash
gss
```

---

# How to commit changes

Commit your changes
```bash
gcmsg "Initial commit"
```

#### Optional : Push to remote repository

Push your changes to remote repository
```bash
gp
```

---

# Create a new branch

```bash
gb <branch-name>
gco <branch-name>
```

#### ShortHand

```bash
gcb <branch-name>
```

---

# Work on a branch

* Make changes
* Verify changes
* Add changes to staging
* Verify changes again to make sure you don't commit anything you don't want to
* Commit changes
* Push changes to remote repository ** (optional) **

---

# Merge branch to ***main***

* Via merge command

```bash
gco <branch-to-merge-into>
gm <branch-to-merge>
```

* Via pull request

```bash
gh pr create --base <branch-to-merge-into> --head <branch-to-merge> --title <title> --body <body>
```

---

# Delete a branch

```bash
gbd <branch-name>
```

---

# Pushing changes to remote

If not already done, add remote repository to local repository
```bash
gra <remote-name> <remote-url>
```

Push changes to remote repository
```bash
gp
```

---

# Pulling changes from remote

Pull changes from remote repository
```bash
gl
```

---

# SWAG

---

# Text

Some content

---

# Lists

* Item 1
* Item 2
* Item 3
* Item 4

---

# Images

![Image](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)

---

# Headers and quotes

> Some quote

# Header 1
## Header 2
### Header 3
#### Header 4

---

# Code

```bash
echo "Hello World"
```

```javascript
console.log("Hello World")
```

---

# Extras

* [GitHub Markdown](https://guides.github.com/features/mastering-markdown/)

| Header 1 | Header 2 | 
| -------- | -------- |
| Content 1 | Content 2 |
| Content 3 | Content 4 |

---