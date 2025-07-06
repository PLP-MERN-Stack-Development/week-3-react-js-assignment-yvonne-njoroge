import React, { useEffect, useState } from 'react';
import Layout from '../layout/Layout';
import Card from '../components/Card';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const limit = 10;

  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`)
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setFiltered(data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch posts');
        setLoading(false);
      });
  }, [page]);

  useEffect(() => {
    const searchFiltered = posts.filter(post =>
      post.title.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(searchFiltered);
  }, [search, posts]);

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">API Posts</h1>

      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="border px-4 py-2 mb-4 w-full rounded"
      />

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filtered.map(post => (
            <Card key={post.id} title={post.title}>
              <p>{post.body}</p>
            </Card>
          ))}
        </div>
      )}

      <div className="flex justify-center gap-4 mt-6">
        <button
          disabled={page === 1}
          onClick={() => setPage(p => p - 1)}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Prev
        </button>
        <button
          onClick={() => setPage(p => p + 1)}
          className="px-4 py-2 bg-gray-300 rounded"
        >
          Next
        </button>
      </div>



      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
  {filtered.map(post => (
    <Card key={post.id} title={post.title}>
      <p>{post.body}</p>
    </Card>
  ))}
</div> */}

    </Layout>
  );
}

export default Posts;
