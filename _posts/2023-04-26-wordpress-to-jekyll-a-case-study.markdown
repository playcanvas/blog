---
author: will
comments: false
date: 2023-06-07 14:27:00+00:00
layout: post
link: https://blog.playcanvas.com/wordpress-to-jekyll-a-case-study/
slug: wordpress-to-jekyll-a-case-study
title: Moving from WordPress to Jekyll - A Case Study
categories:
  - Announcement
  - News
tags:
  - jekyll
  - wordpress
  - github
---

Welcome to the new PlayCanvas blog! 😎

We have made to decision to move from WordPress to Jekyll and although it's early days, so far, we are very pleased with the results. Therefore, we thought it might be useful to explain the reasons for why we did this and cover the process to make it happen.

### Some History

We originally started our blog back in February 2012 with a very [low-key post](https://blog.playcanvas.com/hello-world/). We installed our own instance of WordPress and that functioned fine for a few years. However, in 2015, we decided that we didn't want to deal with managing a WordPress instance ourselves and so we signed up for [WPEngine](https://wpengine.com/), a WordPress hosting service. And there we stayed until today.

### A Better Way?

Over the years, some frustrations over WordPress did start to materialize. Customizing styling was tricky, bulk editing posts was not an option, managing media through the media library was quite inconvenient, and so on. On top of that, our blog was continuing to grow in popularity and WPEngine costs were rising. A team member suggested Jekyll as an alternative so we ran some tests to see what would be involved in a migration.

### Migrating from WordPress to Jekyll

First up, I should say that you should make use of ChatGPT when you attempt something like this. It made it a smooth and pleasant experience for me. But so you can see how straightforward it was, here are the key steps:

1. **Export Your WordPress Content.** On your WordPress Dashboard, navigate to Tools > Export and select 'All Content'. Click 'Download Export File'. You should receive an XML file that contains all of your site’s content.
2. **Convert WordPress Export to Jekyll Format.** To convert your WordPress export file to a Jekyll-friendly format, you can use a tool called `exitwp`. Here are the steps:
  - Clone or download `exitwp` from its [GitHub repository](https://github.com/thomasf/exitwp).
  - Put your WordPress XML file in the `wordpress-xml` directory in the `exitwp` directory.
  - Run `exitwp` (requires Python and some libraries, see the repo's `README` for details).
  - This will generate a `_posts` directory containing all your blog posts converted into markdown format that Jekyll understands.
3. **Setting Up Jekyll.**
  - Install Ruby and Jekyll. For installation guide refer to Jekyll's official site (https://jekyllrb.com/docs/installation/).
  - Create a new Jekyll site by typing `jekyll new my-awesome-site` in the command line.
  - Replace the `_posts` directory in your new Jekyll site with the `_posts` directory that `exitwp` generated.
  - You can run your site locally to see how it looks by using the command `bundle exec jekyll serve`.
  - Then, open your browser to http://localhost:4000.

Once I had our blog post content successfully exported to a basic Jekyll site, I checked everything into to a new [GitHub repository](https://github.com/playcanvas/blog). From this point, I wanted any changed I made to the content to be tracked via Git version control - I mean, why wouldn't you?

The initial migration to Markdown worked OK but it wasn't perfect. The was a lot of superfluous whitespace in the generated Markdown and syntax was broken in places. So I took the opportunity to do a wholesale spring clean of the Markdown content.

#### Prettier

[Prettier](https://prettier.io/) is a great code formatter but you may not have known that it has built-in support for Markdown formatting too. I installed Prettier via NPM and ran it over all Markdown files:

```shell
prettier --write _posts
```

All formatting was now beautifully consistent.

#### Linkinator

[Linkinator](https://github.com/JustinBeckwith/linkinator) is a tool for reporting broken hyperlinks in both Markdown and HTML. I scanned the locally generated Jekyll site with it using the following command:

```shell
linkinator . --server-root _site --recurse --verbosity error
```

I fixed well over 100 dead links. The older the post, the more dead links there tended to be (as you might expect). While I was always able to use Linkinator on the published Wordpress site, it was never convenient to skip from post to post and edit hyperlinks in the WordPress UI. So I never made the time for it. Now I was able to quickly search and replace links in Visual Studio Code and it was a breeze.

Aside from giving your readers a better experience, here's what ChatGPT has to say about dead links:

> While Google's algorithms are complex and multifaceted, it is generally understood that having too many broken or dead links on your site can negatively affect your website's SEO ranking, albeit indirectly.

So this step was definitely worth doing!

#### Media Library

Every WordPress blog has a Media Library that contains all of the images and videos referenced by your posts. The PlayCanvas Media Library had over 1GB of content. However, I noticed that a large amount of content was not actually referenced by any post. I wanted to ensure that I exported on the _used_ media (since I didn't want to bloat the GitHub repository).

- **Step 1:** Install WordPress plugin [Media Cleaner](https://wordpress.org/plugins/media-cleaner/) and use it to delete unused media files.
- **Step 2:** Install WordPress plugin [Export Media Library](https://wordpress.org/plugins/export-media-library/) to download all remaining media files in a ZIP.

I simply extracted the zip contents to `assets/media` (relative to the root folder of my Jekyll site) and then did a search and replace of all media embed links to use the new file location. Easy!

### Hosting on GitHub Pages

I now had a fully exported and functional Jekyll blog. But where to host it. One option was to throw the static site onto a file server and put it behind a CDN. But wait, the file-set of the Jekyll blog now sits in GitHub, so why not use [GitHub Pages](https://pages.github.com/) to host the site? There are some great benefits:

- Deployment is a breeze to set up.
- It's a managed platform so you just don't need to worry about maintenance and security as you would with your own infra.
- And, oh yeah, **it's free!**

### The Pros and Cons

So now that we're migrated over, let's quickly summarize the key benefits:

- Costs for our blog are now a big, fat $0.
- We have eliminated a potential security vulnerability associated with our public WordPress instance.
- We can run automation tools over our Markdown to format it, correct spelling mistakes, fix links and so on.
- We can easily manipulate Markdown with a modern editing environment such as Visual Studio Code.
- We can take contributions to the blog via GitHub's pull request mechanism.
- We have fine-grain control over the HTML and styling of posts using Jekyll themes.
- Now that the posts are stored in generic Markdown, we can easily migrate to other blogging platforms in the future (should we wish to do so).

OK, but what about the cons? I have to tell you - I genuinely can't think of any! Seriously, feel free to ping me on Twitter if you think I'm missing something here. But I wish we had taken this step years ago.

### Open Source and Open to Contributions

As mentioned, the blog is now on [GitHub](https://github.com/playcanvas/blog). Take a moment to go check out the repository and hit that Star button if you like what we've done here. ⭐ We've taken the step to open source the blog's content under an [Attribution-NonCommercial 4.0 International](https://github.com/playcanvas/blog/blob/main/LICENSE.md) license. This is part of our continuing drive to open source most of what we do.

Ultimately, we want **you** to get involved and help us make the blog better and better over time. Consider submitting issues and pull requests yourself.

- Submit spelling and grammar fixes.
- Submit design tweaks and improvements.
- Submit your own posts showcasing your PlayCanvas projects.

It's your blog! 😊

That's all from me. Looking forward to many-a-future blogs posts on this new platform. 👋


