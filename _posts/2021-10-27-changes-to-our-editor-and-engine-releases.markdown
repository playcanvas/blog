---
author: steven
comments: true
date: 2021-10-27 09:35:53+00:00
layout: post
link: https://blog.playcanvas.com/changes-to-our-editor-and-engine-releases/
slug: changes-to-our-editor-and-engine-releases
title: Changes to our Editor and Engine releases
wordpress_id: 2747
categories:
  - News
---

Up to now, our process for releasing new features and fixes to the PlayCanvas Engine and Editor has been rather simple.

As features and fixes are ready, we would plan a release and test against a comprehensive list of PlayCanvas projects and the Engine examples. Once testing is passed, it would be released to everyone that is using the playcanvas.com service and Editor.

This has served us well for many years and meant that users always had the latest features of the Engine.

However, as the features of the Engine are get bigger and more complex and users' projects grow in scale and size, this release process needs to change to match our users' needs for stability and transparency with releases.

Over the next month or so, we will be rolling out the following changes (finer details subject to change):

### Minor and patch versions updates

Minor releases (1.XX.0 where the XX is the minor version) are currently reserved for API additions/changes in the Engine and/or larger feature releases while patch releases (1.XX.YY where YY is the patch version) could be bug fixes and minor features.

Going forward, patch releases will strictly only be for bug fixes which will generally improve stability and user expectations.

New functionality will only be added in minor releases.

### Renaming Engine's GitHub 'master' branch to 'dev'

To better reflect our usage of the 'master' branch, we will be renaming it to 'dev' over the next few days as that is where our features and updates are merged prior being released.

As the branch is typically unstable, the naming of 'dev' is more descriptive of the branch's purpose.

This will have knock on effects to forks of the Engine repo on GitHub. If you have a fork of the Engine, please read the following [documentation from GitHub](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/renaming-a-branch#updating-a-local-clone-after-a-branch-name-changes) to see how this affects you.

The steps from the documentation will be:

```shell
git branch -m master dev
git fetch origin
git branch -u origin/dev dev
git remote set-head origin -a
```

Alternatively, creating a fresh clone from GitHub will work as well.

### Separate Engine releases from the Editor

The Editor will no longer be affected by the latest release of the Engine on the [GitHub repo](https://github.com/playcanvas/engine). The Engine version used in the Editor will only be updated via an Editor release.

While it means that Editor users will have to wait a little longer to get the latest features, it allows extra time for users to test their projects against the upcoming Engine release and report any issues.

However, users will still be able test early against the latest Engine releases using the [`use_local_engine` param on the Launch Tab](https://developer.playcanvas.com/en/user-manual/scripting/custom_engine/). We will also be looking at making this process easier to do via the Editor, such as an option in the Launch Tab settings.

Once this has been tested against the Editor and any reported issues are fixed, the Editor will be released with this version of the Engine.

### Feedback

This is currently the high level plan and we would love to hear your thoughts and suggestions on the [forums](https://forum.playcanvas.com/)!
