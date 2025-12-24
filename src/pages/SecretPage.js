
import React, { useState, useEffect, useRef } from "react";
import "./SecretPage.css";
const backendUrl = "https://personal-portfolio-backend-1vh9.onrender.com";
const SecretPage = () => {
  const [preLoginMsg, setPreLoginMsg] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState("");
  const [postLoginMsg, setPostLoginMsg] = useState("");
  const [showGallery, setShowGallery] = useState(false);
  const [zoomedImg, setZoomedImg] = useState(null);
  const [files, setFiles] = useState([]);
  const [filter, setFilter] = useState("all");
  const [isAdmin, setIsAdmin] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newUserEmail, setNewUserEmail] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [newUserRole, setNewUserRole] = useState("user"); // "admin" or "user"
  const [folderAccess, setFolderAccess] = useState("public"); // "public" or "private"
  const [soleUser, setSoleUser] = useState(false);
  const typingTimeout = useRef(null);
  const [users, setUsers] = useState([]);
  const [showUsersList, setShowUsersList] = useState(false);
  const [loadingUsers, setLoadingUsers] = useState(false);
  const [userError, setUserError] = useState("");
const [activeFolder, setActiveFolder] = useState("public");


  const handleToggleUsers = async () => {
    if (showUsersList) {
      setShowUsersList(false);
      return;
    }
    setLoadingUsers(true);
    setUserError("");
    try {
      const res = await fetch(
        `${backendUrl}/api/admin/users?adminUsername=${username}&adminPassword=${password}`
      );
      const data = await res.json();
      if (res.ok && data.success) {
        setUsers(data.users);
        setShowUsersList(true);
      } else {
        setUserError(data.message || "Failed to fetch users");
      }
    } catch (err) {
      setUserError("Server error: " + err.message);
    } finally {
      setLoadingUsers(false);
    }
  };
  const fetchFiles = async (type) => {
    try {
      const res = await fetch(
        `${backendUrl}/api/list-files?username=${username}&password=${password}&type=${type}`
      );
      const data = await res.json();
      if (data.success) {
        setFiles(data.files);
        setActiveFolder(type);
      }
    } catch {
      console.error("Failed to load files");
    }
  };

 useEffect(() => {
    fetchFiles();
  }, []);
  

  const filtered =
    filter === "images"
      ? files.filter((f) => f.mimeType.startsWith("image/"))
      : filter === "videos"
      ? files.filter((f) => f.mimeType.startsWith("video/"))
      : files;
  const typeText = (text, setter, callback) => {
    let i = 0;
    setter("");
    const typeNext = () => {
      if (i < text.length) {
        setter(text.slice(0, i + 1));
        i++;
        const delay =
          [".", ",", "!", "?"].includes(text[i - 1])
            ? Math.random() * 150 + 80
            : Math.random() * 70 + 30;
        typingTimeout.current = setTimeout(typeNext, delay);
      } else if (callback) {
        typingTimeout.current = setTimeout(callback, 5000);
      }
    };
    typeNext();
  };

  useEffect(() => {
    const message =
      "This secret webpage is very private. Only a few people have access here.";
    typeText(message, setPreLoginMsg, () => setShowLogin(true));
    return () => clearTimeout(typingTimeout.current);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch(`${backendUrl}/api/secret-login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setLoggedIn(true);
        setIsAdmin(data.isAdmin || false);
         setSoleUser(data.sole || false);
        let message;
        if (data.sole) {
          message = "Hello my love, every heartbeat reminds me of you, every smile you give lights up my world. I made this just for you, to tell you that my life is infinitely better with you in it—and I can’t imagine a future without holding your hand through it all. Will you be mine, forever and always? 💖";
        } else if (data.isAdmin) {
          message = "Admin access granted. Handle this portal carefully.";
        } else {
          message = "Welcome to your secret webpage. Keep your credentials private.";
        }
        typeText(message, setPostLoginMsg, () => setShowGallery(true));
        fetchFiles();
      } else {
        const invalidMsg =
          "Credentials invalid. Locking session immediately—don’t come back without permission.";
        setShowLogin(false);
        typeText(invalidMsg, setPreLoginMsg, () => setShowLogin(true));
      }
    } catch (err) {
      setError("Server error: " + err.message);
    }
  };
  const handleLogout = () => {
    setLoggedIn(false);
    setIsAdmin(false);
    setShowCreateForm(false);
    setPostLoginMsg("");
    setShowGallery(false);
    setUsername("");
    setPassword("");
    setError("");
    setSuccessMsg("");
    const logoutMessage =
      "Thanks for leaving—don’t worry, we’ll try to manage without your expert opinions.";
    setShowLogin(false);
    typeText(logoutMessage, setPreLoginMsg, () => setShowLogin(true));
  };
  const toggleCreateForm = () => {
    setShowCreateForm(!showCreateForm);
    setSuccessMsg("");
  };

 const handleCreateUser = async (e) => {
  e.preventDefault();
  if (!newUsername || !newPassword || !newUserEmail) return;
  setSuccessMsg("Creating user...");

  try {
    const res = await fetch(`${backendUrl}/api/admin/create-user`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        adminUsername: username,
        adminPassword: password,
        username: newUsername,
        password: newPassword,
        email: newUserEmail,
        role: newUserRole,
        access: folderAccess,
      }),
    });

    const data = await res.json();

    if (res.ok && data.success) {
      setSuccessMsg("Account created successfully!");
      setShowCreateForm(false);
      setNewUsername("");
      setNewPassword("");
      setNewUserEmail("");
      setNewUserRole("user");
      setFolderAccess("public");
      setTimeout(() => setSuccessMsg(""), 5000);
    } else {
      setSuccessMsg(data.message || "Error creating user");
    }
  } catch (err) {
    setSuccessMsg("Server error: " + err.message);
  }
};
const handleDeleteUser = async (usernameToDelete) => {
  if (!window.confirm(`Are you sure you want to delete user "${usernameToDelete}"?`)) return;

  try {
    const res = await fetch(`${backendUrl}/api/admin/delete-user`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        adminUsername: username,
        adminPassword: password,
        username: usernameToDelete,
      }),
    });

    const data = await res.json();
    if (res.ok && data.success) {
      setUsers(users.filter((u) => u.username !== usernameToDelete));
      setSuccessMsg(`User "${usernameToDelete}" deleted successfully`);
       setTimeout(() => setSuccessMsg(""), 5000);
    } else {
      alert(data.message || "Failed to delete user");
    }
  } catch (err) {
    alert("Server error: " + err.message);
  }
};
  const openZoom = (img) => setZoomedImg(img);
  const closeZoom = () => setZoomedImg(null);

  return (
    <div className="secret-gallery-container">
      {!loggedIn ? (
        <>
          {!showLogin && preLoginMsg && (
            <div className="secret-login-container">
              <h2 style={{ fontSize: "1.4rem", textAlign: "center" }}>
                {preLoginMsg}
              </h2>
            </div>
          )}
          {showLogin && (
            <div className="secret-login-container">
              <h2>Secret Login</h2>
              <form className="secret-login-form" onSubmit={handleLogin}>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <div className="login-buttons">
                  <button type="submit">Login</button>
                  <button type="button" onClick={() => window.close()}>
                    Close
                  </button>
                </div>
                {error && <p className="error">{error}</p>}
              </form>
            </div>
          )}
        </>
      ) : (
        <>
          {!showGallery && postLoginMsg && (
            <div className="secret-login-container">
              <h2 style={{ fontSize: "1.4rem", textAlign: "center" }}>
                {postLoginMsg}
              </h2>
            </div>
          )}
          {showGallery && (
            <>
              <div className="header">
                <h2>Welcome, {username}{""}
                   {soleUser && <span className="sole-tag">(My Sole 💖)</span>}
                </h2>
                <div className="header-buttons">
                  {isAdmin && (
                    <>
                      <button className="show-create-btn" onClick={toggleCreateForm}>
                        Create User
                      </button>
                      <button
                        className="list-users-btn"
                        onClick={handleToggleUsers}
                      >
                        {loadingUsers
                          ? "Loading..."
                          : showUsersList
                          ? "Hide Users"
                          : "List Users"}
                      </button>
                    </>
                  )}
                  <button className="logout-btn" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              </div>

             {showCreateForm && isAdmin && (
  <form className="create-user-form" onSubmit={handleCreateUser}>
    <input
      type="text"
      placeholder="New Username"
      value={newUsername}
      onChange={(e) => setNewUsername(e.target.value)}
      required
    />
    <input
      type="password"
      placeholder="New Password"
      value={newPassword}
      onChange={(e) => setNewPassword(e.target.value)}
      required
    />
    <input
      type="email"
      placeholder="User Email"
      value={newUserEmail}
      onChange={(e) => setNewUserEmail(e.target.value)}
      required
    />

    <div className="form-group">
      <label>Role:</label>
      <select value={newUserRole} onChange={(e) => setNewUserRole(e.target.value)}>
        <option value="user">Normal User</option>
        <option value="admin">Admin</option>
      </select>
    </div>

    <div className="form-group">
      <label>Folder Access:</label>
      <select value={folderAccess} onChange={(e) => setFolderAccess(e.target.value)}>
        <option value="public">Public Only</option>
        <option value="private">Private Only</option>
      </select>
    </div>

    <button type="submit">Create User</button>
    <button
      type="button"
      className="cancel"
      onClick={toggleCreateForm}
    >
      Cancel
    </button>
  </form>
)}
              {successMsg && <p className="message">{successMsg}</p>}

              {showUsersList && users.length > 0 && (
  <div className="users-list">
    <h3>Registered Users</h3>
    <table>
      <thead>
        <tr>
          <th>Username</th>
          <th>Admin</th>
          <th>Created At</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, idx) => (
          <tr key={idx}>
            <td>{user.username}</td>
            <td>{user.isAdmin ? "Yes" : "No"}</td>
            <td>{new Date(user.createdAt).toLocaleString()}</td>
            <td>
              <button
                className="delete-btn"
                onClick={() => handleDeleteUser(user.username)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}

              {userError && <p className="error">{userError}</p>}

             <div className="secret-page">
  <h2>Secret Gallery</h2>

  {isAdmin && (
    <div className="folder-buttons">
    <button
      onClick={() => { fetchFiles("public"); setActiveFolder("public"); }}
      className={activeFolder === "public" ? "active" : ""}
    >
      Public
    </button>

    <button
      onClick={() => { fetchFiles("private"); setActiveFolder("private"); }}
      className={activeFolder === "private" ? "active" : ""}
    >
      Private
    </button>
  </div>
  )}

  {!isAdmin && (
    <div className="folder-buttons">
      <button onClick={() => fetchFiles("public")}>Public</button>
    </div>
  )}

  <div className="filter-buttons">
    <button onClick={() => setFilter("all")} className={filter === "all" ? "active" : ""}>All</button>
    <button onClick={() => setFilter("images")} className={filter === "images" ? "active" : ""}>Images</button>
    <button onClick={() => setFilter("videos")} className={filter === "videos" ? "active" : ""}>Videos</button>
  </div>

  <div className="gallery-grid">
    {filtered.map((file) =>
      file.mimeType.startsWith("image/") ? (
        <div key={file.id} className="gallery-item">
          <img
            src={`${backendUrl}/api/files?url=${encodeURIComponent(file.url)}`}
            alt={file.name}
            loading="lazy"
            onClick={() =>setZoomedImg(`${backendUrl}/api/files?url=${encodeURIComponent(file.url)}`)}
          />
        </div>
      ) : (
        <div key={file.id} className="gallery-item video-item">
          <video controls preload="metadata">
           <source
            src={`${backendUrl}/api/files?url=${encodeURIComponent(file.url)}`}type={file.mimeType}/>
          </video>
        </div>
      )
    )}
  </div>
</div>
              {zoomedImg && (
                <div className="zoom-overlay" onClick={closeZoom}>
                  <img src={zoomedImg} alt="Zoomed" className="zoomed-image" />
                  <span className="close-btn" onClick={closeZoom}>
                    &times;
                  </span>
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default SecretPage; 