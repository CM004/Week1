# MERGE POSTMORTEM
## Summary
- Used `git bisect` to find a buggy commit (commit `ca9419b`) that replaced `+` with `-` in the addition logic.
- Fixed the bug and used `git revert` to record the undo (created the revert commit).
- Demonstrated stash workflow: `git stash`, `git pull`, `git stash apply` and reapplied local edits to `app.js`.
- Commit graph preserves both the original buggy commit and the revert commit (no history rewriting).
- **Scenario:** repo-A and repo-B edited same line in README.md.
  - **Conflict:** Git showed conflict markers.
  - **Resolution:** Kept both lines:
  - this line is added by beta repo
  - this line is added by alpha repo
  - **Commands used:** git add README.md; git commit -m "merge: keep both Alpha and Beta edits in readme.md"; git push


<img width="1067" height="363" alt="Screenshot from 2025-11-07 04-58-20" src="https://github.com/user-attachments/assets/9f7930e0-b90d-4391-8399-7a3df5c9cf81" />

<img width="1143" height="333" alt="Screenshot from 2025-11-07 05-00-10" src="https://github.com/user-attachments/assets/2a801d47-8b69-4d1a-9835-2208789f0ebe" />

<img width="1144" height="999" alt="Screenshot from 2025-11-07 04-31-13" src="https://github.com/user-attachments/assets/dd753665-8456-409c-90f1-eb5f17a25836" />
