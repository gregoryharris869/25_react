import { useEffect, useState, useRef } from "react";

export default function AutoCompleteSearch() {
  const reRender = useRef(false);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useState("");

  useEffect(() => {
    if (reRender.current === false) {
      const fetchListOfUsers = async () => {
        try {
          setLoading(true);
          const response = await fetch("https://dummyjson.com/users");
          const data = await response.json();
          console.log(data);
          if (data && data.users && data.users.length) {
            setUsers(data.users.map((userItem) => userItem.firstName));
            setLoading(false);
            setError(null);
          }
        } catch (error) {
          setLoading(false);
          console.log(error);
          setError(error);
        }
      };
      fetchListOfUsers();
      reRender.current = true;
    }
  }, []);
  // console.log(users);
  return (
    <div className="search-autocomplete-container">
      <input
        value={searchParams}
        name="search-users"
        placeholder="Search Users here"
      />
    </div>
  );
}
