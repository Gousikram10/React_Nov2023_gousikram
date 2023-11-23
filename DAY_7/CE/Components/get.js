import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Get() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/posts");
      setData(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {data && data.map((obj) => (
        <ul key={obj.id}>
          <li>{obj.title}</li>
          {/* Assuming there's an 'author' property in your data */}
          <li>{obj.author}</li>
        </ul>
      ))}
    </div>
  );
}
