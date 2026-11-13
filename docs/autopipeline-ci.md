# Portfolio CI powered by AutoPipeline

AutoPipeline is an open-source CLI developed at [SaranyaSkumar/autopipeline](https://github.com/SaranyaSkumar/autopipeline). This portfolio uses it as an actual independent project to generate and verify GitHub Actions workflows.

## Files

- `autopipeline.json`: Source-of-truth project configuration.
- `.github/workflows/autopipeline.yml`: Generated CI definition; do not edit manually.
- `.github/workflows/autopipeline-verify.yml`: Checks out a pinned AutoPipeline source commit and runs `doctor` and `check`.

The pipeline is CI-only. Production deployments remain under the existing Vercel setup.

## Re-generating the workflow

Checkout the AutoPipeline repository and use the same pinned revision as the verification workflow:

```sh
git clone https://github.com/SaranyaSkumar/autopipeline.git /tmp/autopipeline
git -C /tmp/autopipeline checkout 70169d0d2b1145e8351a6d14d32e61b8ccee7bef
node /tmp/autopipeline/bin/autopipeline.mjs generate --force
node /tmp/autopipeline/bin/autopipeline.mjs check
```

Commit both `autopipeline.json` and the regenerated workflow. The same pinned revision is used by GitHub Actions, so workflow drift is a failed check.

## First pilot findings

- Dependency installation: existing `react-day-picker@8.10.1` expects date-fns v2/v3 while the repository uses date-fns v4. The CI config explicitly uses `npm ci --legacy-peer-deps` as a temporary compatibility measure. Fixing the upstream dependencies is preferable.
- Lint: `npm run lint` invokes `next lint` but asks interactively for an ESLint setup; no ESLint config is present. `ci.lint` is disabled until linting is configured. It must not be reported as passing.
- No `test` script is defined; AutoPipeline does not invent tests. Unit and E2E are disabled.
- TypeScript check (`npx tsc --noEmit`) and production build succeeded in the pilot.
- Security: `npm audit --audit-level=high` found 13 vulnerabilities (1 critical, 10 high, 2 moderate) in the lockfile on 13 November 2026. The security gate remains failing, not hidden. Review and upgrade affected dependencies carefully, prioritizing Next.js. Do not run `npm audit fix --force` blindly.

AutoPipeline's install-override support was added after this pilot exposed the dependency issue. That enhancement is under review in the AutoPipeline repository.

## Future changes

After the npm package is published and independently tested, the pinned source checkout can be replaced by an install of a version-pinned official npm package. Keep the drift check in CI.
