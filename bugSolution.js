```javascript
import { useState, useEffect, useRef } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(0);

  useEffect(() => {
    if (prevCountRef.current !== count) {
      console.log('Count changed:', count);
      prevCountRef.current = count; // Update the ref after logging
    }
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default MyComponent;
```