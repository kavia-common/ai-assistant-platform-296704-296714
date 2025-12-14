import React, { useState } from 'react';

export default function ActionItemsTab() {
  const [items, setItems] = useState([{ task: '' }]);

  const add = () => setItems([...items, { task: '' }]);
  const remove = (i) => setItems(items.filter((_, idx) => idx !== i));
  const update = (i, v) => setItems(items.map((it, idx) => idx === i ? { task: v } : it));

  return (
    <div className="vstack">
      <div className="section-title">Action Items</div>
      <div className="vstack" style={{ gap: 8 }}>
        {items.map((it, i) => (
          <div key={i} className="hstack" style={{ gap: 8 }}>
            <input className="input" placeholder="Task Description" value={it.task} onChange={e => update(i, e.target.value)} />
            <button className="btn ghost" onClick={() => remove(i)}>Remove</button>
          </div>
        ))}
        <div className="hstack" style={{ justifyContent: 'flex-end' }}>
          <button className="btn" onClick={add}>Add</button>
        </div>
      </div>
    </div>
  );
}
