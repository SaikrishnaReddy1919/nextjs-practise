const Users = ({ users }) => {
  return (
    <>
      <h1>Users List :</h1>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <ul>
              <li>Name : {user.name}</li>
              <li>Email : {user.email}</li>
            </ul>
          </div>
        );
      })}
    </>
  );
};

export default Users;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
//   console.log(users);
  return {
    props: {
      users,
    },
  };
}
