const Table = ({ data }) => {
  if (data.length <= 11) {
    return (
      <div className="flex justify-center">
        <table>
          <thead>
            <tr>
              <th>Country</th>
              <th>Total Count</th>
              <th>Average Income</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((d) => (
                <tr>
                  <th>{d._id}</th>
                  <th>{d.count}</th>
                  <th>{d.average_income}</th>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Income</th>
            <th>City</th>
            <th>Car</th>
            <th>Quote</th>
            <th>Phone Price</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item) => (
              <tr key={item._id}>
                <td>{item.id}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.gender}</td>
                <td>{item.income}</td>
                <td>{item.city}</td>
                <td>{item.car}</td>
                <td>{item.quote}</td>
                <td>{item.phone_price}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
