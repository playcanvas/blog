---
authors: kris
slug: introducing-playcanvas-editor-testing-suite
title: "Introducing PlayCanvas Editor Testing Suite"
tags:
  - editor
  - testing
  - automation
  - playwright
  - open-source
---

Following our recent [open sourcing of the PlayCanvas Editor Frontend](./playcanvas-editor-frontend-is-now-open-source), we're excited to share another significant milestone in our commitment to transparency and community collaboration: the **PlayCanvas Editor Testing Suite**.

Developing a complex application like an editor is like building a magnificent sandcastle – you pour hours into crafting intricate details, but a rogue wave (or an unexpected code change) can bring it all crashing down. With our Editor Frontend now open source and community contributions accelerating development, ensuring stability becomes even more critical. That's why we embarked on an iterative journey to create a robust automated testing suite that ensures every new feature, bug fix, and underlying change leaves our core functionality intact and operational. 

![Playwright](https://raw.githubusercontent.com/playcanvas/editor-test/refs/heads/main/images/playwright.png)

:::note Open Source

The PlayCanvas Editor Testing Suite is [open-sourced under an MIT license on GitHub](https://github.com/playcanvas/editor-test)

:::

<!-- truncate -->

---

### 🤖 Why an Automated Testing Suite?

Before diving into the "how," let's briefly touch on the "why." Imagine making a seemingly small change that inadvertently breaks project creation, or prevents users from publishing their applications. Without automated tests, these critical issues might only surface much later, leading to frustration and delays.

Our aims for this testing suite were clear:

* **Automated and Efficient:** Run a collection of robust tests with minimal user input.
* **Maintainable and Extensible:** Easy to update and expand as the Editor evolves.
* **Comprehensive Baseline:** Automate testing of essential operations like creating/deleting projects, navigating pages, and publishing/downloading.

---

### 📜 The Evolution of Our Testing Suite: A Version History

#### 👣 Version 1: The First Footsteps with Puppeteer

Our initial foray into automated testing leveraged **Puppeteer**, a tool we were already familiar with from our engine examples screenshot automation. The idea was simple: visit key Editor pages, check for errors, and grab screenshots for manual review.

<table>
  <thead>
    <tr>
      <th>Aspect</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Frameworks Used</strong></td>
      <td>Puppeteer for browser automation, Mocha and Chai for testing</td>
    </tr>
    <tr>
      <td rowspan="3"><strong>Testing Mechanism</strong></td>
      <td>• An account preloaded with a collection of projects</td>
    </tr>
    <tr>
      <td>• Visits editor, code editor, and launch pages, checking for page and request errors</td>
    </tr>
    <tr>
      <td>• Captured screenshots of each main page after load</td>
    </tr>
    <tr>
      <td rowspan="2"><strong>The Good</strong></td>
      <td>• Simple tests so very reliable</td>
    </tr>
    <tr>
      <td>• Built on existing code</td>
    </tr>
    <tr>
      <td rowspan="4"><strong>The Not-So-Good</strong></td>
      <td>• Integration with Puppeteer and Mocha was complex, requiring more maintenance</td>
    </tr>
    <tr>
      <td>• Login was manual (username/password every time!) as cookies/tokens weren't stored</td>
    </tr>
    <tr>
      <td>• Relying on preloaded projects meant constant maintenance as the Engine and Editor updated, leading to stale projects</td>
    </tr>
    <tr>
      <td>• Crucially, we weren't <em>testing operations</em>, just navigation</td>
    </tr>
  </tbody>
</table>

#### 🔐 Version 2: Embracing Playwright and Tackling Authentication 

The limitations of Version 1 quickly became apparent. We needed a more integrated solution for browser automation and testing, and a better way to handle user sessions. Enter **Playwright** - Microsoft's offering that combined these functionalities, boasting improved UI-specific helpers for tolerances in UI loading and visibility. Playwright also supported local caching of session storage, allowing us to continue sessions without re-signing in.

At this point, the Editor was also undergoing significant data migrations for Engine V2, meaning our preloaded projects would have varying migrations applied.

<table>
  <thead>
    <tr>
      <th>Aspect</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Frameworks Used</strong></td>
      <td>Playwright for browser automation and testing, Google login flow with session caching</td>
    </tr>
    <tr>
      <td rowspan="3"><strong>Testing Mechanism</strong></td>
      <td>• An account preloaded with projects</td>
    </tr>
    <tr>
      <td>• Visits editor, code editor, and launch pages, checking for page/request errors and data migrations</td>
    </tr>
    <tr>
      <td>• Tested basic operations in a blank project using a custom "Web Interface" (wrapping REST API calls) for tasks like creating/deleting projects, and publishing/downloading apps</td>
    </tr>
    <tr>
      <td rowspan="2"><strong>The Good</strong></td>
      <td>• Playwright enabled more involved UI tests on blank projects for basic operations with similar reliability</td>
    </tr>
    <tr>
      <td>• Subsequent logins could reuse cached tokens</td>
    </tr>
    <tr>
      <td rowspan="3"><strong>The Not-So-Good</strong></td>
      <td>• Preloaded sample projects were now modified by tests (due to migration tests) and required manual resetting</td>
    </tr>
    <tr>
      <td>• The initial login still required manual intervention as Google detected browser automation</td>
    </tr>
    <tr>
      <td>• Basic operations occurring too rapidly triggered rate limiting failures</td>
    </tr>
  </tbody>
</table>

#### ⚡ Version 3: The Project State Dilemma and Rate Limit Redemption 

The constantly changing state of our preloaded sample projects was a major headache. We needed deterministic test environments. Our solution? Switching to **loading projects from archives** instead of preloading them into the account. This ensured a pristine, deterministic state every time, and projects were deleted once tests concluded.

We also tackled the frustrating rate limiting issues by implementing **middleware throttling**, copying functionality from the PlayCanvas Sync package. This cleverly exploited Playwright's middleware hook to delay requests, respecting our API's rate limits. Furthermore, after some clever workarounds, **fully automated Google OAuth** became possible using flags and context properties, bringing us closer to a "cold start" testing environment.

<table>
  <thead>
    <tr>
      <th>Aspect</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Frameworks Used</strong></td>
      <td>Playwright, middleware throttling for rate limiting, fully automated Google login flow with session caching</td>
    </tr>
    <tr>
      <td rowspan="4"><strong>Testing Mechanism</strong></td>
      <td>• Imported projects to test using a custom "Web Interface" (wrapping REST API calls), then deleted them once finished</td>
    </tr>
    <tr>
      <td>• Visits editor, code editor, and launch pages, checking for page/request errors and data migrations</td>
    </tr>
    <tr>
      <td>• Tested forking/deleting projects and publishing/downloading apps on imported projects</td>
    </tr>
    <tr>
      <td>• Tested basic operations in blank projects using the custom "Web Interface" (creating/forking/deleting projects, publishing/downloading apps)</td>
    </tr>
    <tr>
      <td rowspan="3"><strong>The Good</strong></td>
      <td>• Project testing scope was larger with deterministic project states before each test run</td>
    </tr>
    <tr>
      <td>• The full testing suite became more reliable with rate limiting throttling</td>
    </tr>
    <tr>
      <td>• Closer to full cold start testing, only requiring account creation through Google</td>
    </tr>
    <tr>
      <td rowspan="3"><strong>The Not-So-Good</strong></td>
      <td>• Imported project archive tests had complex setups, making it laborious to manually re-import and amend them (particularly for migrations that modify data on load)</td>
    </tr>
    <tr>
      <td>• Tests still relied heavily on the custom "Web Interface" which reimplemented a large portion of the Editor API, rather than directly using the UI itself</td>
    </tr>
    <tr>
      <td>• Google OAuth updates sometimes broke stealth login, requiring verification</td>
    </tr>
  </tbody>
</table>

#### 🏆 Version 4: The Pinnacle of Editor Testing – UI & API Driven 

Our final, most sophisticated iteration addressed the remaining pain points. Imported project archives were distilled down to just **skeletons** that included assets, procedurally created for each specific test scenario (e.g., migration tests are configured to test all migrated values).

Tests on projects were significantly expanded to include all launcher options, importing/exporting of project archives, and version control (checkpoints/diffs/merges/conflicts). As described, these are now procedurally created and then tested.

Crucially, all tests now run in **two modes: UI and API**. The UI tests navigate the interface to perform the required action, mimicking real user behavior. API tests directly use the Editor API to drive Editor behavior. The use of the Editor API deprecates the need for our custom "Web Interface."

Finally, authentication shifted to the **native PlayCanvas implementation**, eliminating account verification and stealth requirements, making the login flow more reliable and and faster.

<table>
  <thead>
    <tr>
      <th>Aspect</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Frameworks Used</strong></td>
      <td>Playwright, middleware throttling, fully automated PlayCanvas native login flow with session caching</td>
    </tr>
    <tr>
      <td rowspan="3"><strong>Testing Mechanism</strong></td>
      <td>• Tests projects by driving both the UI and the Editor API</td>
    </tr>
    <tr>
      <td>• Performs basic operations on blank projects (visiting editor/code editor/launch pages with all launch options, creating/forking/deleting projects, importing/exporting projects, publishing/downloading apps)</td>
    </tr>
    <tr>
      <td>• Performs more specific tests on skeleton project archives (importing with assets, setting up for migrations, reloading to test them)</td>
    </tr>
    <tr>
      <td rowspan="4"><strong>The Good</strong></td>
      <td>• Test creation is offloaded almost entirely to the testing suite – no more preset complex archives</td>
    </tr>
    <tr>
      <td>• Tests cover both API and UI for comprehensive validation</td>
    </tr>
    <tr>
      <td>• Test scope coverage is extended for all basic and advanced operations</td>
    </tr>
    <tr>
      <td>• The login flow is more reliable and faster with native authentication</td>
    </tr>
    <tr>
      <td rowspan="2"><strong>The Not-So-Good</strong></td>
      <td>• Increased number of tests cause the testing suite to run for a while</td>
    </tr>
    <tr>
      <td>• Repeated cold starts can trigger Captcha requiring manual login to acquire a session token</td>
    </tr>
  </tbody>
</table>

---

### 🌱 Conclusion: A Foundation for Future Growth

The journey to build our Editor testing suite has been an enlightening one, marked by continuous learning and adaptation. This final version provides us with a robust, maintainable, and extensible foundation for ensuring the integrity of our Editor's core features. We now have simple, reliable tests that can be expanded without the constant burden of having to constantly maintain or update the testing suite as the Editor evolves.

We're always looking to improve, and future explorations include:

* Improve test speed by allocating each worker to a separate account (would still be rate-limited by IP however).
* Evaluate if access token more reliable than cookie cached sign-in.
* Convert pre-throttled rate limits to be handled dynamically based on 429 response.

Building a testing suite isn't just about finding bugs; it's about building confidence, accelerating development, and ultimately, delivering a more stable and reliable product to our users.

---

### 🛠️ Local Development & Contributing

We've made it easier than ever to get started with local development and contribute to the Editor Testing Suite. For detailed setup instructions, please refer to the [README](https://github.com/playcanvas/editor-test/blob/main/README.md) in the repository.

#### Built on Open Source Foundations

The PlayCanvas Editor Testing Suite is built upon a foundation of powerful open-source libraries:

| Library                                                       | Details                                     |
| :------------------------------------------------------------ | :------------------------------------------ |
| [Observer](https://github.com/playcanvas/playcanvas-observer) | Data binding and history                    |
| [Editor API](https://github.com/playcanvas/editor-api)        | Public API for Editor automation            |

---

### 👨‍💻 Join Our Open Source Mission

We proudly provide the PlayCanvas Editor Testing Suite as an open-source project. This is just the beginning of a new chapter for the Editor, and we invite you to be a part of it. The PlayCanvas community has always been at the forefront of innovation, and we believe that this open-source initiative will further accelerate our collective progress.

Join us in shaping the future of the PlayCanvas Editor Testing Suite by submitting issues, creating pull requests, or simply starring [our GitHub repo](https://github.com/playcanvas/editor-test)! ⭐

---

### 👂 Your Feedback Matters

We're incredibly excited about the release of the PlayCanvas Editor Testing Suite. Your feedback is invaluable as we continue this open-source journey. What features are you most excited to contribute to, or what would you love to see next? Share your thoughts on our [Forum](https://forum.playcanvas.com) or [ping us on X](https://twitter.com/playcanvas)!
