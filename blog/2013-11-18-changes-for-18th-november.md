---
authors: dave
comments: true
date: 2013-11-18 23:38:29+00:00
layout: post
link: https://blog.playcanvas.com/changes-for-18th-november/
slug: changes-for-18th-november
title: Changes for 18th November
categories:
  - Announcement
  - News
---

A summary of the last few weeks changes.

It's always hard to make sure that we communicate enough about the changes we're making and what we're working on. So I'm going to try and post weekly or bi-weekly change lists to keep you up to date on what's going on.

## PlayCanvas Designer

- [FIX] Fix bug where scale/rotate/translate property editor sometimes stops working.
- Various improvements to Designer Camera including Touch device support.
- Filtering camera attributes 'fov' and 'orthoHeight' based on projection value.

## PlayCanvas Engine

- Added context.touch if the browser has touch controls enabled
- [FIX] Setting linear and angular velocity values on a kinematic rigidbody works properly
- [FIX] Moving a trigger (collision component) works
- [FIX] Touch co-ordinates now match MouseEvent co-ordinates. i.e. top-left to bottom-right and match the CSS size of the element
- [FIX] Issues with collision mesh scaling

As you can see a round of improvements and bug fixes this last couple of weeks. Of particular note: Touch support in the Designer so you can tweak things on the go from your tablet or phone. Plus some important fixes, trigger volumes can now be moved and they position updates correctly plus a niggling problem we've been having with the scale property not working in the Designer is now fixed.
