const User = ({ user }) => {
  return (
    <>
      <ul>
        <li>Name : {user.name}</li>
        <li>Email : {user.email}</li>
      </ul>
    </>
  );
};

export default User
