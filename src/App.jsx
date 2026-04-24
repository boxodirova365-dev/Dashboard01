

import './App.css'

const App = () => {
  const customers = [
    { name: "Jane Cooper", company: "Microsoft", phone: "(225) 555-0118", email: "jane@microsoft.com", country: "United States", status: "Active" },
    { name: "Floyd Miles", company: "Yahoo", phone: "(205) 555-0100", email: "floyd@yahoo.com", country: "Kiribati", status: "Inactive" },
    { name: "Ronald Richards", company: "Adobe", phone: "(302) 555-0107", email: "ronald@adobe.com", country: "Israel", status: "Inactive" },
    { name: "Marvin McKinney", company: "Tesla", phone: "(252) 555-0126", email: "marvin@tesla.com", country: "Iran", status: "Active" },
    { name: "Jerome Bell", company: "Google", phone: "(629) 555-0129", email: "jerome@google.com", country: "Réunion", status: "Active" },
    { name: "Kathryn Murphy", company: "Microsoft", phone: "(406) 555-0120", email: "kathryn@microsoft.com", country: "Curaçao", status: "Active" },
    { name: "Jacob Jones", company: "Yahoo", phone: "(208) 555-0112", email: "jacob@yahoo.com", country: "Brazil", status: "Active" },
    { name: "Kristin Watson", company: "Facebook", phone: "(704) 555-0127", email: "kristin@facebook.com", country: "Åland Islands", status: "Inactive" },
  ];

  return (
    <div className="dashboard-container">
      {/* Yon Menyu */}
      <aside className="sidebar">
        <div className="logo-section">
          <div className="logo-icon"></div>
          <div className="logo-text">
            <h1>Dashboard</h1>
            <p>v.01</p>
          </div>
        </div>
        <nav className="nav-menu">
          <ul>
            <li><span>Dashboard</span></li>
            <li><span>Product</span> <span className="arrow">›</span></li>
            <li className="active"><span>Customers</span> <span className="arrow">›</span></li>
            <li><span>Income</span> <span className="arrow">›</span></li>
            <li><span>Promote</span> <span className="arrow">›</span></li>
            <li><span>Help</span> <span className="arrow">›</span></li>
          </ul>
        </nav>
      </aside>

      {/* Asosiy qism */}
      <main className="main-content">
        <header className="top-header">
          <h1>Hello Evano 👋</h1>
          <div className="top-search">
            <span className="search-icon"></span>
            <input type="text" placeholder="Search" />
          </div>
        </header>

        <div className="content-card">
          <div className="table-header">
            <div className="table-title">
              <h2>All Customers</h2>
              <p className="active-members">Active Members</p>
            </div>
            
            <div className="table-actions">
              <div className="table-search">
                <span className="search-icon"></span>
                <input type="text" placeholder="Search" />
              </div>
              <div className="sort-container">
                <span className="sort-label">Short by :</span>
                <div className="sort-box">
                   <span className="sort-text">Newest</span>
                   <span className="sort-arrow">⌵</span>
                </div>
              </div>
            </div>
          </div>

          <table className="customers-table">
            <thead>
              <tr>
                <th>Customer Name</th>
                <th>Company</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Country</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((c, i) => (
                <tr key={i}>
                  <td>{c.name}</td>
                  <td>{c.company}</td>
                  <td>{c.phone}</td>
                  <td>{c.email}</td>
                  <td>{c.country}</td>
                  <td>
                    <span className={`status-pill ${c.status.toLowerCase()}`}>
                      {c.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <footer className="pagination-footer">
            <p>Showing data 1 to 8 of 256K entries</p>
            <div className="page-buttons">
              <button>&lt;</button>
              <button className="active">1</button>
              <button>2</button>
              <button>3</button>
              <button>4</button>
              <span>...</span>
              <button>40</button>
              <button>&gt;</button>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default App;
