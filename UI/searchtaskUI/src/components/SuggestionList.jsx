import React from 'react';

export default function SuggestionList({ suggestions, active, onSelect, setActive }) {
  return (
    <ul style={styles.list}>
      {suggestions.map((item, index) => (
        <li
          key={index}
          style={{
            ...styles.item,
            backgroundColor: index === active ? '#f0f8ff' : 'white',
            color: index === active ? '#007bff' : '#333',
          }}
          onMouseEnter={() => setActive(index)}
          onMouseDown={(e) => {
            e.preventDefault();
            onSelect(item);
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

const styles = {
  list: {
    position: 'absolute',
    top: '45px',
    left: 0,
    right: 0,
    backgroundColor: 'white',
    border: '1px solid #ddd',
    borderRadius: '8px',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    maxHeight: '220px',
    overflowY: 'auto',
    boxShadow: '0 3px 10px rgba(0,0,0,0.08)',
    zIndex: 1000,
  },
  item: {
    padding: '10px 14px',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
  },
};
