# src/ Reorganization Plan

Goal: group files by concept (not by "kind of file"), make the relationship
between successive versions of the same example clear, and hoist anything
that's identical across versions into a shared folder so it isn't duplicated.

Naming convention: no numeric prefixes. Instead, mirror the naming style
already used in this repo (`ArrayOfClocks` / `ArrayOfClocksWithCustomHooks`)
consistently everywhere — a variant's name describes what's different about
it, and variants of the same concept sit next to each other alphabetically.

`old/` is left untouched.

## Shared/ (used by more than one example)

| New path | Comes from | Notes |
|---|---|---|
| `Shared/types.ts` | `types.ts` | |
| `Shared/Components/ClockDisplay.tsx` | `Components/ClockDisplay.tsx` | |
| `Shared/Components/CountingButton.tsx` | `Components/CountingButton.tsx` | |
| `Shared/Hooks/useClock.tsx` | `Hooks/useClock.tsx` | |
| `Shared/Hooks/useFirstRender.tsx` | `Hooks/useFirstRender.tsx` | |
| `Shared/Classes/SingletonClockFactory.ts` | `Classes/SingletonClockFactory.ts` | |
| `Shared/Classes/testClockCLI.ts` | `Classes/testClockCLI.ts` | |
| *(deleted)* | `Apps/ArrayOfClocksWithCustomHooks/ClockDisplay.tsx` | **delete** — near-identical fork of `Components/ClockDisplay.tsx` (same props, cosmetic diffs only); the custom-hooks version will import the shared one |
| *(deleted)* | `Apps/TwoCountingButtonsInAList/CountingButton.tsx` | **delete** — identical to `Components/CountingButton.tsx` except a stray unused `key` field in the props type |

## Examples/ (everything else, one flat folder)

| New path | Comes from | Notes |
|---|---|---|
| `Examples/HelloWorld.tsx` | `Components/HelloWorld.tsx` | |
| `Examples/HelloWorldWithName.tsx` | `Components/HelloWorldWithName.tsx` | |
| `Examples/HelloWorldAveryAndDave.tsx` | `Components/HelloWorldAveryAndDave.tsx` | imports `./HelloWorldWithName` |
| `Examples/SimplestState.tsx` | `Components/SimplestState.tsx` | |
| `Examples/SimplestStatePlus3.tsx` | `Components/SimplestStatePlus3.tsx` | |
| `Examples/SimpleClockDisplay.tsx` | `Components/SimpleClockDisplay.tsx` | |
| `Examples/SimpleClockDisplayWithUseClock.tsx` | `Components/SimpleClockDisplayWithUseClock.tsx` | |
| `Examples/TwoCountingButtons.tsx` | `Components/TwoCountingButtons.tsx` | imports `Shared/Components/CountingButton` |
| `Examples/TwoCountingButtonsInAList/App.tsx` | `Apps/TwoCountingButtonsInAList/Root.tsx` | **rename** `Root.tsx` → `App.tsx` for consistency; imports `Shared/Components/CountingButton` |
| `Examples/ThreeClocks/App.tsx` | `Apps/ThreeClocks/App.tsx` | |
| `Examples/ArrayOfClocks/App.tsx` | `Apps/ArrayOfClocks/App.tsx` | |
| `Examples/ArrayOfClocksWithCustomHooks/App.tsx` | `Apps/ArrayOfClocksWithCustomHooks/App.tsx` | **fix**: currently imports the hook from `./useClockDisplayList original` (a stray backup file) instead of the real `./useClockDisplayList` — the "original" file has an older, more buggy version of the initial-render logic. Repoint the import. |
| `Examples/ArrayOfClocksWithCustomHooks/DisplayHelpers.tsx` | `Apps/ArrayOfClocksWithCustomHooks/DisplayHelpers.tsx` | now imports `Shared/Components/ClockDisplay` |
| `Examples/ArrayOfClocksWithCustomHooks/useClockDisplayList.ts` | `Apps/ArrayOfClocksWithCustomHooks/useClockDisplayList.ts` | |
| *(deleted)* | `Apps/ArrayOfClocksWithCustomHooks/useClockDisplayList original.ts` | **delete** — stray earlier draft, not the file that's supposed to be used; git history keeps it if anyone wants to see it |
| `Examples/ToDoApp/App.tsx` | `Apps/ToDoApp/App.tsx` | |
| `Examples/ToDoApp/ToDoItemEntryForm.tsx` | `Apps/ToDoApp/ToDoItemEntryForm.tsx` | |
| `Examples/ToDoAppWithCustomHooks/App.tsx` | `Apps/ToDoAppWithCustomHooks/App.tsx` | |
| `Examples/ToDoAppWithCustomHooks/ToDoItemEntryForm.tsx` | `Apps/ToDoAppWithCustomHooks/ToDoItemEntryForm.tsx` | |
| `Examples/ToDoAppWithCustomHooks/useEntryForm.ts` | `Apps/ToDoAppWithCustomHooks/useEntryForm.ts` | |
| `Examples/ToDoAppWithCustomHooks/useToDoItemList.ts` | `Apps/ToDoAppWithCustomHooks/useToDoItemList.ts` | |
| `Examples/ToDoApp/Shared/ToDoListTypes.ts` | `Apps/ToDoApp/types.ts` | identical to `ToDoAppWithCustomHooks/ToDoListTypes.ts`; keeping the more descriptive name |
| `Examples/ToDoApp/Shared/ToDoItemDisplay.tsx` | `Apps/ToDoApp/ToDoItemDisplay.tsx` | identical to the `WithCustomHooks` copy |
| `Examples/ToDoApp/Shared/ToDoListDisplay.tsx` | `Apps/ToDoApp/ToDoListDisplay.tsx` | identical to the `WithCustomHooks` copy |
| `Examples/ToDoApp/Shared/ToDoListDisplayBad.tsx` | `Apps/ToDoApp/ToDoListDisplayBad.tsx` | identical to the `WithCustomHooks` copy; not imported by either `App.tsx` — kept as a standalone "bad example" reference |
| *(deleted, superseded by `ToDoApp/Shared/`)* | `Apps/ToDoAppWithCustomHooks/{ToDoItemDisplay,ToDoListDisplay,ToDoListDisplayBad}.tsx`, `ToDoListTypes.ts` | duplicates of the files now in `ToDoApp/Shared/` |
| `Examples/useEffect-demo.tsx` | `Apps/useEffect-demo.tsx` | |
| `Examples/useEffect-demoWithCleanUps.tsx` | `Apps/useEffect-demoWithCleanUps.tsx` | |

## Stays put

| Path | Notes |
|---|---|
| `main.tsx` | comments/import updated to new paths |
| `vite-env.d.ts` | unchanged |
| `old/` | untouched |

## Summary

40 original files map down to a smaller set once duplicates are removed:

- 4 identical ToDo files collapsed into `Examples/ToDoApp/Shared/`
- 2 near-identical component forks (`ClockDisplay`, `CountingButton`) collapsed into `Shared/Components/`
- 1 stray backup file (`useClockDisplayList original.ts`) deleted (git history retains it)

Two small correctness fixes ride along with the move:

1. `ArrayOfClocksWithCustomHooks/App.tsx` currently imports the hook from the stray backup file instead of the real one.
2. `CountingButton`'s prop type drops a meaningless, unused `key` field (React's `key` is never actually delivered as a prop).
