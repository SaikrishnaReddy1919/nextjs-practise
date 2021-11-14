import User from "../components/user";

const UsersList = ({ users }) => {
  return (
    <>
      <h1>Users List :</h1>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <User user={user} />
          </div>
        );
      })}
    </>
  );
};

export default UsersList;

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
