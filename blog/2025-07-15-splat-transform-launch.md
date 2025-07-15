---
authors: will
slug: introducing-splat-transform-cli-tool
title: "Introducing SplatTransform: The Ultimate CLI Tool for 3D Gaussian Splats"
tags:
  - tools
  - gaussian-splats
  - splattransform
  - cli
  - open-source
---

**We're thrilled to announce the release of SplatTransform — a powerful CLI tool that makes working with 3D Gaussian Splats a breeze!**

:::note Open Source

SplatTransform is [open-sourced under an MIT license on GitHub](https://github.com/playcanvas/splat-transform)

:::

When 3D Gaussian Splats began to revolutionize real-time rendering and photorealistic 3D content creation, we built [SuperSplat](https://superspl.at/editor?load=https://d28zzqy0iyovbz.cloudfront.net/db6ab60b/scene.compressed.ply), a visual editor for splats. But developers have continued to ask for better tools to manage, convert, and optimize their splat datasets. Our solution is to bring some of SuperSplat's most powerful features to the command line, courtesy of a new tool called **SplatTransform**. It's fast, flexible, and designed specifically for developers who need precise control over their Gaussian splat workflows.

<!-- truncate -->

## Why use SplatTransform?

SplatTransform solves important problems developers face when working with Gaussian splats:

🔄 **Broad Format Support** — seamlessly convert between PLY, SPLAT, KSPLAT, SOGS and even CSV  
🛠️ **Powerful Transformations** — translate, rotate, and scale your splats with precision  
🧹 **Smart Filtering** — remove NaN values, filter by properties, and strip unnecessary data  
📦 **Scene Merging** — combine multiple splat files into a merged scene  
⚡ **Production Ready** — optimized for maximum performance  
🆓 **Open Source** — completely free and available on GitHub

## What it Looks Like

Instead of wrestling with format incompatibilities or writing custom scripts, you can now handle complex splat operations with simple, intuitive commands:

```bash
# Convert any format to any format
splat-transform input.ksplat converted.ply

# Apply transformations during conversion
splat-transform input.ply -s 0.5 -t 0,0,10 -r 0,90,0 transformed.ply

# Combine multiple files with different transforms
splat-transform inputA.ply -r 0,90,0 inputB.ply -s 2 merged.ply

# Filter and optimize for production
splat-transform input.ply --filterNaN -c opacity,gt,0.3 --filterBands 2 filtered.ply
```

The tool automatically handles the complexity of different splat formats while giving you granular control over every aspect of the transformation pipeline.

## Unlock Data Science Workflows with CSV Export

One of SplatTransform's most powerful features is its ability to export Gaussian splat data to CSV format, opening up entirely new possibilities for analysis and processing:

```bash
# Export your splat data for spreadsheet analysis
splat-transform scene.ply data.csv

# Pre-filter before analysis to focus on relevant data
splat-transform input.ply --filterNaN -c opacity,gt,0.1 analysis.csv
```

**Why CSV matters for splats:**

- **Spreadsheet Analysis** — Import directly into Excel, Google Sheets, or any data analysis tool
- **Statistical Insights** — Calculate distributions, correlations, and quality metrics across your splat dataset
- **Custom Filtering** — Use spreadsheet formulas to identify outliers, cluster data, or segment by properties
- **Visualization** — Create charts and graphs to understand your splat data patterns
- **Integration** — Feed splat data into machine learning pipelines or custom processing workflows

Whether you're optimizing splat quality, analyzing capture patterns, or preparing data for research, CSV export transforms your splats from opaque binary files into readable, analyzable datasets.

## SplatTransform ❤️ PlayCanvas

The open-source [PlayCanvas Engine](https://github.com/playcanvas/engine) has the most advanced 3D Gaussian Splat renderer on the market! First, we released our [Compressed PLY format](https://blog.playcanvas.com/compressing-gaussian-splats#compressed-ply-format). Then, we improved on it  by adding support for [SOGS](https://blog.playcanvas.com/playcanvas-adopts-sogs-for-20x-3dgs-compression), an even more optimal compressed format. SplatTransform can now target both formats with ease.

:::tip Migrating to PlayCanvas

Are you currently using another renderer that uses different formats such as `.splat` or `.ksplat`? Do you want to migrate to PlayCanvas for better visuals and performance? SplatTransform can help you make the switch!

:::

## Get Started Today

SplatTransform is [available right now on npm](https://www.npmjs.com/package/@playcanvas/splat-transform) and completely open source:

```bash
npm install -g @playcanvas/splat-transform
```

Check out the [GitHub repository](https://github.com/playcanvas/splat-transform) for full source, documentation and examples. If you find a bug of have a feature request, log and issue or better yet, submit a pull request! 🙌

We're excited to see what you build! 🚀
