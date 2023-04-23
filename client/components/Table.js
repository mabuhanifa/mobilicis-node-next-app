const Table = ({ data }) => {
  if (data.length <= 11) {
    return (
      <div className="flex justify-center">
        <table>
          <thead>
            <tr className="border-b bg-indigo-700 text-white">
              <th>Country</th>
              <th>Total Count</th>
              <th>Average Income</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((d) => (
                <tr className="border">
                  <th>{d._id}</th>
                  <th className="text-center">{d.count}</th>
                  <th className="text-center">{d.average_income.toFixed(2)}</th>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
  return (
    <div className="flex justify-center">
      <table className="t-b">
        <thead>
          <tr className="border-b bg-indigo-700 text-white">
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
              <tr key={item._id} className="border">
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
