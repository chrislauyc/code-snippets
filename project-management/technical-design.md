## Purpose of a technical design document

Critical analysis of a problem and the proposed solution, while also communicating priority, effort, and impact with various stakeholders

A good design doc will preempt questions and queries that might arise during the code review process, identify edge-cases, and will allow people to suggest improvements before a lot of work has been done.

## Sections

1. Overview 

What problem are you trying to solve? 

2. Background

What are the motivations for the project or design? Is there any historical perspective that will help people understand the proposal? Has someone tried to solve the problem in the past? If so, why are those solutions no longer appropriate? Are there any other things going on that will affect the design?

3. Goals, non-goals, and future goals

- Goals

The best goals are simple, truthy sentences that describe a future state of the world.

Projects will often have 3-5 goals

- Non-Goals

Explicitly mention what the solution not address

- Future Goals

Things out of scope of the current project. This is where you keep some fancy goals you want but don't want to make the project too complicated.

3. Detailed Design

Often contain pseudo-code, schema definitions, or flow diagrams

- Examples
What are the user requirements?
What systems will be affected?
What new data structures are needed, what data structures will be changed?
What new APIs will be needed, what APIs will be changed?
What are the efficiency considerations (time/space)?
What are the expected access patterns (load/throughput)?
How will data be validated and what are the potential error states?
Are there any logging, monitoring, or observability needs?
Are there any security considerations?
Are there any privacy considerations?
Are there any mobile considerations?
Are there any web-specific considerations?
How will the changes be tested?
How does internationalization and localization — translations, time zones, unicode, etc. — affect your solution?


4. Third-party considerations

5. Work estimates

6. Roll-out plan

Discuss how changes to models and APIs will need to be staged. Incremental updates.

7. Alternative approaches

Explain why you rejected other approaches

8. Related work

Look at examples of related work

9. Future work

New features. Non-goals to address. Future goals. 

[Technical Design Reference](https://www.range.co/blog/better-tech-specs)