import React from "react";
import styles from "./project.module.css";

const initialData = [
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "Jane", age: 30 },
  { id: 3, name: "Alex", age: 28 },
  // Add more data as needed
];

const Project: React.FC = () => {
  return (
    <div className={styles.Project}>
      <div className={styles.ProjectHeader}>
        <h1>Projects</h1>
        <button>Create</button>
      </div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {initialData.map((item) => (
            <tr key={item.id}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Project;
