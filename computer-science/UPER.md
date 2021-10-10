UPER: 

```
Understand
Plan
Execute
Reflect
```


## Understand

```
Before doing anything else, make sure you understand precisely what the problem is asking. A helpful starting point could be transcribing the technical description of the problem into your own words.
```
Questions
```
Here is a list of starter questions that might come up during this step:

What are the inputs your code receives?
What is the range of the input?
How big can the input be (how much data)?
What are the outputs your code produces?
What is the range of the output?
How big can the output be (how much data)?
How performant must the code be?
Is there anything missing from the task description that needs to be clarified?
What assumptions are you making?
Does anyone else on the team need to validate these assumptions?
```
Actions
```
The most important thing you can do during this stage of the process is to ask questions! Be as specific as you can when you ask questions. Be clear and concise with your questions by using unambiguous language and only including necessary details.
```
```
Don't be afraid of this part of the process—enjoy it! Look at the problem as a curiosity to be explored, not just something there to torment you. Feeling frustrated and afraid won’t help you at work or in an interview. Remember, problem-solving is the fun part, so enjoy it!
```
```
One approach is to identify the smaller components that make up the larger problem. If you get stuck in understanding, break the larger problem into smaller sub-problems. Then, apply this framework against each of the smaller sub-problems until you solve the larger problem.
```
```
Try to digest the problem and comprehend it by rewriting the problem in your own words. If you had to describe it to someone else, how would you do it?
```
```
Diagram how the data flows through the problem. Think about each stage of the journey for the data. What will happen to it as it travels from one step to another?
```
```
Think like a villain. What inputs would break your program?
```
```
Where is the description of the problem incomplete? If you cannot get answers on something that the specifications leave unclear, make an educated guess, and document your assumptions and decision.
```
```
You are done with this step when you can explain this problem to someone who has never seen it. Your explanation should be thorough enough for the person to skip the "Understand" step and start planning right away.
```
## Plan
```
This step is where you will ask, "what steps will I take to solve the problem?" You will take your description of the problem and transform it into a complete, actionable plan to solve that problem. If you realize you still don't truly understand the problem while planning, return to Understand until you resolve the ambiguity. If you have not yet completed Understand, you will end up planning to solve the wrong problem! When interviewing, you must do this step aloud!
```
```
Remember, you aren’t coding during this step unless it’s a small piece of throwaway code to test a hypothesis. It would be best if you wrote pseudocode during this step, however.
```

Questions
```
Do you know the answer to a similar problem that has comparable inputs and outputs?
Does this problem remind you an anything else?
Can you bring that knowledge to bear here?
Does my plan meet the performance requirements?
What’s the time complexity?
What’s the space complexity?
How big can my input data be?
Can sorting the input data ahead of time lead to any improvements in time complexity?
Does recursion help?
Is the problem made up of identical subproblems?
Can you state the problem with itself in its definition?
Think like a villain. Does your plan cover the edge cases?
```
Actions
```
Solve the problem like a human. If you’re sorting something, imagine your task as a pile of blocks that you need to sort by hand. Break down the steps you take into small enough pieces for a computer to understand. Approach the problem from many angles.
```
```
Get a brute-force solution as quickly as possible. Even if it’s not performant enough, it can lead you toward better solutions.
```
```
Come up with as many plans of attack as you can. Choose the best one that satisfies performance needs.
```
```
Try to solve a simpler version of the problem. If the input is a 2D array, can you solve it for a 1D array? If you need to count the number of ways to eat cookies 1, 2, or 3 at a time, first try to solve it for the number of ways you could eat two at a time, or even one at a time. The solution to the more straightforward problem can lead to insights on the more complex problem.
```
```
List the nouns and verbs in the problem description. Map each one to an algorithm, process, data structure, object, method, function, etc.
```
```
"Perfect" can be the enemy of "good." Even if your initial workable solution isn’t performant enough, you can iterate later. “Premature optimization is the root of all evil.”
```
```
You know that you completed this step when you have pseudocode that’s detailed enough to convert to real code. It would be best if you also were convinced the pseudocode represents a legitimate working solution.
```

## Execute
```
This step is where you take your plan and convert it to actual working code. This step isn’t easy, but it’s much easier if you've done an excellent job with the "Understand" and "Plan" steps above. If you find shortcomings in your plan while implementing the solution, return to the "Plan" phase until you resolve the ambiguity. If you have not yet completed the "Plan" step, you will spend far longer on the "Execute" step than you have to.
```
Questions
```
Think like a villain. Does your implementation handle all inputs?
What is the best way to split this code into separate functions or classes?
Does this functionality already exist?
Are there built-in libraries I can leverage?
Are there third-party libraries I can leverage?
```

Actions
```
Convert your pseudocode and outlines into actual code. Don’t Repeat Yourself (DRY): Remove redundant code as you write it.
```
```
Document code as you write it. Header blocks should contain information on how someone should use the code. Comment only when necessary; where possible, write code clearly enough that comments aren’t needed. If comments help clarify or summarize a piece of code to a reader, definitely add comments.
```
```
If you write code that’s hackish or kludgy, fix it. If you don’t have time to fix it, comment it, explain why you couldn’t do it "the right way" (time constraints, etc.), and what you need to do to make it right.
```
```
You know this step is complete when your solution works on good data, it doesn't fail on flawed data or edge cases, and the program passes all of the tests.
```


## Reflect

```
The primary question you are dealing with during this step is — "is this implementation as good as I can make it?" Would I be proud to show my code to another programmer?
```
Questions
```
Does your solution work in all cases?
Main case?
Edge cases?
Is the solution performant enough?
Is the code documented?
In retrospect, what would you do differently? What will you do differently next time?
What went right?
What went wrong?
```
Actions
```
Adding documentation is a necessary action during this step. It would be best if you documented any future changes you plan on making. You should document any code sections that you will need to make more performant if the data size increases.
```
```
Another critical action to take during this step is to remove any redundant or unnecessary code. Also, depending on your time constraints, it's likely that you might have some hackish code that you'd like to improve in the future when time allows. Make sure to document any ideas or plans on how you might do so.
```
```
You know that this step is complete when your code is adequately refactored and exhaustively documented.
```