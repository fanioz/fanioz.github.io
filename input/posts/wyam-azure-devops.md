---
Title: Wyam, Azure DevOps and GitHub Pages
Published: 3/10/2019
Tags: [C#, Wyam, Continuous Integration, GitHub Pages, Azure DevOps]
author: Johan Vergeer
---
Publishing a static site with a static content generator can be fully automated. In this case I'm using [Wyam](https://wyam.io/), a static site generator, [GitHub Pages](https://pages.github.com/) for hosting and [Azure DevOps](https://azure.microsoft.com/en-us/solutions/devops/) for build and deployment. Of course there are a ton of other ways to do this, but right now I'll show you the way that I chose to use.

This post will mainly focus on automated build and deployment, since there are a lot of great online resources on how to setup Wyam on your local machine.

# GitHub setup

As I said, I'm using GitHub Pages to host my site. You can use it for free for any static website. By default GitHub Pages supports [Jelyll](https://jekyllrb.com/) with some out of the box themes and plugins. I used Jekyll in the past, but I found Wyam easier to work with.

To create a personal blog on GitHub Pages, you should create a Git repository named `yourusername.github.io`. When you do this, GitHub will automatically create the site for you, and use the `master` branch for the site content. So once you created the repository, don't use the master branch, but create a new branch that will contain your working files. I named my working branch `source`.

Perform the following commands after you created the repository on GitHub to setup the branches.

<?# Tip ?>
Make sure you __don't__ include README and .gitignore when creating the repository on GitHub
<?#/ Tip ?>

```bash
git clone git@github.com:yourusername/yourusername.github.io.git
cd yourusername.github.io
git branch source
git checkout source
git push -u origin source
```

These command will clone the repository from GitHub, create a new branch named `source`, push the new branch to GitHub and makes `source` the default branch. You can check whether you are on the source branch with this command: 

```powershell
PS > git status
On branch source
```

## .gitignore

In the next steps we'll start creating the site. In this process some files will be created that we don't want in our Git repository. To automate this you can create a file named `.gitignore` in your project root and add these contents:

```plaintext
output
config.wyam.*
tools
```

# Setup Wyam

First install Wyam if you haven't already done this. You can find how to install Wyam in the [Wyam Documentation](https://wyam.io/docs/usage/obtaining).

Now move into your working directory (`yourusername.github.io`) and create a new Wyam project. In this case I'll demonstrate how to create a blog since I think this is the most common use case.

```powershell
PS > wyam new -r blog
```

This will scaffold a new Wyam site with the blog recipe. More about Wyam recipes can be found [here](https://wyam.io/recipes/). Since this post is mostly about automated build and deployment, I won't go into any further detail on setting up a Wyam site.

You can preview the site with:

```powershell
PS > wyam --preview --watch
```

This will not only start up a lightweight server, but it will also keep track of your changes and automatically update them. This way you can keep your site running while writing and see the changes in real time.

You can build a site with:

```powershell
PS > wyam build
```

This will build the site. The site contents are located in the `output` directory.

<?# Note ?>
Since the `output` directory is in the `.gitignore` file, it won't be committed to your git repository.
This is intentionally. We'll build the output directory fully automated on Azure DevOps later on.
<?#/ Note ?>

Now that you've seen your site works it is time to deploy it.

# Azure DevOps Setup

If you haven't already created an account on Azure DevOps you should do so now.
It is completely free for small projects. Once you have an account you can create a new project. I've called mine `johanvergeer.github.io`. Creating an account and a new project is such a straight forward process I won't go into any detail on those.

## Azure Pipelines on GitHub Marketplace

For the easiest integration between Azure DevOps and GitHub you should get the [Azure Pipelines](https://github.com/marketplace/azure-pipelines) application on the GitHub Marketplace. Setup a plan and link your Azure DevOps project.

This will create a default yaml file named `azure-pipelines.yml`. We'll change this file later on to match our needs.

## Cake

Before we start working on the `azure-pipelines.yml` file, we will create a [Cake](https://cakebuild.net/) build script for our site. The advantage of using this Cake build script is that it can be reused on other locations.

Create a file named `build.cake` with the following contents:

```csharp
#tool nuget:?package=Wyam&version=2.2.4
#addin nuget:?package=Cake.Wyam&version=2.2.4

var target = Argument("target", "Build");

Task("Build")
    .Does(() =>
    {
        Wyam();
    });

Task("Preview")
    .Does(() =>
    {
        Wyam(new WyamSettings
        {
            Preview = true,
            Watch = true
        });
    });

RunTarget(target)
```

Now you should [install the bootstrapper](https://cakebuild.net/docs/tutorials/setting-up-a-new-project#install-the-bootstrapper) by running the following in PowerShell.

```powershell
PS > Invoke-WebRequest https://cakebuild.net/download/bootstrapper/windows -OutFile build.ps1
```

Once you created the build file and installed the bootstrapper you can build and preview.

To do a build:

```powershell
PS > .\build.ps1 -Target Build
Preparing to run build script...
Running build script...

========================================
Build
=======================================
...
```

And to preview

```powershell
PS > .\build.ps1 -target Preview
Preparing to run build script...
Running build script...

========================================
Preview
========================================
...
```

<?# Warning ?>
We'll use this Cake script to build the site on Azure DevOps, so make sure it works before you continue.
<?#/ Warning ?>

## azure-pipelines.yml

Now it's time to start creating our `azure-pipelines.yml` file so we can build our site on Azure DevOps. This is where the part comes in that might seem hard at first, but is very easy once you get the hang of it, so bear with me. I'll be going trough the `azure-pipelines.yml` file step by step and I'll show you the full file at the end.

### Agent

In the first part of our file we'll define the [Agent](https://docs.microsoft.com/en-us/azure/devops/pipelines/agents/hosted?view=azure-devops&tabs=yaml) that will be used. All possible agents are listed on the [Microsoft website](https://docs.microsoft.com/en-us/azure/devops/pipelines/agents/hosted?view=azure-devops&tabs=yaml#use-a-microsoft-hosted-agent).

```yaml
pool:
  vmImage: vs2017-win2016
```

### Triggers

Next we're going to describe when a build pipeline should be triggered. If you're interested you can read more about [Build Pipeline Triggers](https://docs.microsoft.com/en-us/azure/devops/pipelines/build/triggers?tabs=yaml&view=azure-devops#continuous-integration-ci) on the Microsoft website. For now we'll keep it fairly simple. 

```yaml
trigger:
  branches:
    include:
      - source
    exclude:
      - master
  paths:
    exclude:
      - .gitignore
      - README.md
```

In the snippet above we described that all changes in the `source` branch should trigger a build, except when only the `.gitignore` or `README.md` are changed.

### Variables

Later on we're going to create a PowerShell script that will take some input variables. But before we do that these variables have to be defined. 

```yaml
variables:
  COMMIT_MESSAGE: Automated Release $(Release.ReleaseId)
  DOC_PATH: $(System.DefaultWorkingDirectory)\output
  GITHUB_EMAIL: username@email.com
  GITHUB_USERNAME: yourusername
  REPOSITORY_NAME: yourusername.github.io
  BRANCH_NAME: master
```

| Variable       | Description                                                                             |
|:----------------|:-----------------------------------------------------------------------------------------|
| DOC_PATH | Path to the site that will be generated by Wyam |
| GITHUB_EMAIL | Your GitHub email address |
| REPOSITORY_NAME | The name of your GitHub repository
| BRANCH_NAME | Name of the branch the site will be published to. For you main site this should be `master`. For other sites this will be gh-pages. See [this GitHub help page](https://help.github.com/en/articles/configuring-a-publishing-source-for-github-pages) for more info. |


