import { useState } from 'react';
import './App.css';

function App() {
  const [isSidebarExpanded, setSidebarExpanded] = useState(true);

  const toggleSidebar = () => {
    setSidebarExpanded((prevState) => !prevState);
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar */}
      <aside
        className={`sidebar ${
          isSidebarExpanded ? 'expanded' : 'collapsed'
        }`}
      >
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          {isSidebarExpanded ? 'X' : '='}
        </button>
        <h2>Balli Bisi</h2>
        <ul>
          <li>
            <i className="icon">⚙️</i>
            <span> Yetkiləndirmə</span>
          </li>
          <li>
            <i className="icon">👤</i>
            <span> İstifadəçilər</span>
          </li>
          <li>
            <i className="icon">📦</i>
            <span> Məhsullar</span>
          </li>
          <li>
            <i className="icon">🏬</i>
            <span> Mağaza</span>
          </li>
          <li>
            <i className="icon">📝</i>
            <span> Yeni Sifariş</span>
          </li>
          <li>
            <i className="icon">🏭</i>
            <span> İstehsalat</span>
          </li>
          <li>
            <i className="icon">🛍️</i>
            <span> Vitrin Sifarişləri</span>
          </li>
          <li>
            <i className="icon">📥</i>
            <span> Anbar</span>
          </li>
          <li>
            <i className="icon">💰</i>
            <span> Kassa</span>
          </li>
          <li>
            <i className="icon">🚚</i>
            <span> Ekspeditor</span>
          </li>
          <li>
            <i className="icon">📩</i>
            <span> MMS</span>
          </li>
          <li>
            <i className="icon">🚪</i>
            <span> Çıxış</span>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main">
        <h1>Rol haqqında məlumatı daxil edin</h1>
        <form className="form-container">
          <div>
            <label htmlFor="roleName">Rolun adı*</label>
            <input
              id="roleName"
              type="text"
              placeholder="Rolun adını daxil edin"
            />
          </div>
          <div>
            <label htmlFor="roleDescription">Rol haqqında qeyd*</label>
            <input
              id="roleDescription"
              type="text"
              placeholder="Rol haqqında məlumat daxil edin"
            />
          </div>
          <div>
            <label>
              <input type="checkbox" defaultChecked />
              Admin*
            </label>
          </div>
          <div>
            <button className="save-button" type="button">Yadda saxla</button>
            <button className="cancel-button" type="button">Ləğv et</button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default App;