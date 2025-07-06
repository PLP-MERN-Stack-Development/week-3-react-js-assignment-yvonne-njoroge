import React from 'react';
import Layout from '../layout/Layout';
import Card from '../components/Card';
import Button from '../components/Button';

function Home() {
  return (
    <Layout>
      <Card title="Welcome to TaskApp">
        <p>This is a simple task manager built with React and Tailwind CSS.</p>
        <Button variant="primary" onClick={() => alert('Clicked!')}>Get Started</Button>
      </Card>
    </Layout>
  );
}

export default Home;
