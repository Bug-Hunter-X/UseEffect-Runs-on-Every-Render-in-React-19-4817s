# useEffect Runs on Every Render in React 19

This repository demonstrates a subtle bug in React 19 where a `useEffect` hook runs on every render even when a dependency array is provided.  This can lead to performance issues and unexpected behavior if not handled correctly. The `bug.js` file shows the problem, and the `bugSolution.js` file shows a solution using techniques like `useRef` to control execution and prevent unnecessary re-renders.

## Problem

The issue stems from a misunderstanding of how `useEffect` works with complex state updates or when side effects are triggered indirectly.

## Solution

The solution involves careful analysis of state changes and using techniques like `useRef` to manage values that don't trigger re-renders directly, or using `useCallback` to memoize functions if the update logic is computationally expensive or causes unwanted side effects.