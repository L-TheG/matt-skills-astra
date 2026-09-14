# Logic prototype

Make the uncertain state model observable. State the question visibly, keep model logic separate from presentation, and expose meaningful actions, current state, and resettable scenarios.

For a shareable demonstration without dependencies, a single HTML/CSS/JavaScript file is often enough. In an existing app, use its established tooling when that makes the question easier to test.

Include relevant awkward transitions, not just the happy path. Show domain labels rather than raw implementation names. Keep side effects simulated unless real integration is explicitly part of the question and authorized.

Verify the question's important cases, manually or with focused tests as appropriate. Record the result and limitations. Preserve the prototype as requested; promote logic into production only under an implementation request with normal validation. Do not create throwaway branches or delete artifacts automatically.
