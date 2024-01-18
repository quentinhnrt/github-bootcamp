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