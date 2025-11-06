# Git blame report

This repository is meant to test how git blame behaves on different types of changes.
These changes include renames, code movements, code changes and replacements.
his is being tested to get a more thorough understanding of git blame, in order to properly implement the right behaviour in [gitinspectorgui](https://github.com/boost-edu-tools/gitinspectorgui).

# Results

| Commit hash | action | result | Works as expected? |
|-------------|--------|--------|---------------------|
|[233f31a](https://github.com/impaex/Git-Blame-Testing/commit/233f31a30efbce600640f170f0ea245ced13d438)      |Base    |This commit contains the full repository as made by Copilot        | ✓ |
|[40306f2](https://github.com/impaex/Git-Blame-Testing/commit/40306f2ac38e573af10c307161e010c728887840)      |Rename docs file only        |This commit renames the docs file, made by Copilot. When inspecting git blame through Github, it shows Copilot as author of all lines.       | ✓ |
|[11865c9](https://github.com/impaex/Git-Blame-Testing/commit/11865c93cdc828848b5251ad55b6a87e4e08c761)    | Move docs file to folder        |This commit moves the docs file from the repository root to a subfolder called "docs". This still lists Copilot as author of all lines in the file.        | ✓ |
|[a150b8a](https://github.com/impaex/Git-Blame-Testing/commit/a150b8a787499f28bacb4eab1a0b24b9498e83f3)      |Copy lines from Copilot to bottom of file (docs)        |This leaves Copilot as original author, marks me as author of the copied lines        | ? |
|[a2c115c](https://github.com/impaex/Git-Blame-Testing/commit/a2c115c3928ba5b6a02af67283781b1bd4ea2e1b)      |Copy lines from Copilot to top of file (docs)        |This leaves Copilot as original author, marks me as author of the copied lines        | ? |
|[6f14d3f](https://github.com/impaex/Git-Blame-Testing/commit/6f14d3f91adeb2d57a2cd5ccf97445f4dcf79d00) |Moves lines from Copilot to the bottom of file |Moved lines are now authored by me instead of Copilot. | ✗ |
|[1783122](https://github.com/impaex/Git-Blame-Testing/commit/1783122f9ef3bd67dd15bac589e67d91ceaf85c8) |Reverting 6f14d3f |Reverting these lines (moving back the original lines), also puts my name on the lines instead of Copilot's. | ✓ | 
|[dec5bf3](https://github.com/impaex/Git-Blame-Testing/commit/dec5bf3afed4afd50a584edb97f54b7910081f7f) |Move lines from Copilot to top of file |Moved lines are now authored by me instead of Copilot. | ✗ | 
|[7d0003c](https://github.com/impaex/Git-Blame-Testing/commit/7d0003c8b4c243180fa926b9e3149203323174ec)|Reverting 7d0003c  |Reverting these lines (moving back the original lines), also puts my name on the lines instead of Copilot's | ✓ | 
|[2cd56ce](https://github.com/impaex/Git-Blame-Testing/commit/2cd56ceff90d91123cc668e746473e5228807d87) |Adding comment to line of code |Puts my name on the line | ? |
|[099738b](https://github.com/impaex/Git-Blame-Testing/commit/099738bcf1029ad16c8ef2911c3a8fb78cf1494f) |Reverting 2cd56ce |Reverting these lines (removing the comment), also puts my name on the line instead of Copilot's. | ✓ |