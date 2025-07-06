import React from 'react';
import Layout from '../layout/Layout';
import TaskManager from '../components/TaskManager';

function Tasks() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
      <TaskManager />
    </Layout>
  );
}

export default Tasks;
