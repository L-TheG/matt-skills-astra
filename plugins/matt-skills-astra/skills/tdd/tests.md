# Behavioral test guidance

Prefer tests of outcomes meaningful to callers that survive internal refactoring. Use existing coverage before adding another test. An independent known expected result is stronger than recomputing the implementation in the assertion.

Example: a checkout test can assert the resulting order and payment state, rather than the order of private helper calls. Call counts or ordering are valid assertions when they are themselves the contract, such as retry bounds or an exactly-once external side effect.

Use the narrowest stable surface that exercises the risk. Public API tests are often ideal, but a focused internal algorithm test or direct database assertion can be appropriate when it verifies a real requirement. Do not expose new production API only to satisfy a blanket testing rule.

Keep each test focused on one behavior; several assertions may be necessary to prove that behavior. Distinguish a test failing for the intended bug from a fixture or environment failure.
