const Table = ({ data }) => {
  console.log(data.length);
  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Income</th>
          <th>City</th>
          <th>Car</th>
          <th>Quote</th>
          <th>Phone Price</th>
          <th>ID</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((item) => (
            <tr key={item._id}>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
              <td>{item.gender}</td>
              <td>{item.income}</td>
              <td>{item.city}</td>
              <td>{item.car}</td>
              <td>{item.quote}</td>
              <td>{item.phone_price}</td>
              <td>{item.id}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
