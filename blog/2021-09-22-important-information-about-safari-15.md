---
authors: steven
slug: important-information-about-safari-15
title: Important Information about macOS Safari 15
---

We have been made aware of a critical issue regarding WebGL content and the release of macOS Safari 15 earlier this week where previously published content could fail to load.

<!-- truncate -->

Apple are aware of this and have a [fix in place on WebKit](https://bugs.webkit.org/show_bug.cgi?id=230525). However, we don't know when this fix will be included in an update release.

PlayCanvas have released [v1.46.5](https://github.com/playcanvas/engine/releases/tag/v1.46.5) of the engine to workaround this issue.

### Actions to take

If you have a PlayCanvas application that was published between Feb 2020 and 21st Sep 2021, the application will fail to load on Safari 15 until Apple releases an update and users update their devices.

Please republish the application so that it uses the latest engine release or update the engine version to v1.46.5 if you are using NPM.

If you need to stay on particular version of the PlayCanvas engine, it is possible modify the engine or build a custom version and include the following [code change from this PR](https://github.com/playcanvas/engine/pull/3503).

If you have any issues or questions, please [message us on the forum](https://forum.playcanvas.com/) where we will provide support.
