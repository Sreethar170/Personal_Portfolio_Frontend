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
  const [newUserRole, setNewUserRole] = useState("user");
  const [folderAccess, setFolderAccess] = useState("public");
  const [soleUser, setSoleUser] = useState(false);
  const [users, setUsers] = useState([]);
  const [showUsersList, setShowUsersList] = useState(false);
  const [loadingUsers, setLoadingUsers] = useState(false);
  const [userError, setUserError] = useState("");
  const [activeFolder, setActiveFolder] = useState("public");
  const [access, setAccess] = useState({});

  const typingTimeout = useRef(null);

  const soleMessages = [
  "Hello di en heartbeat 😌 En heart ‘lub-dub’ nu adikkaradhu kooda un name solli dhan. Nee siricha podhum, en world full HD color-a maarudhu. Indha page full-ah unakaga dhan… lifetime subscription oda. En kooda old-age varaikum tea kudikka ready-ah? ☕❤️",
  "Hey loosu ponnu 💕 En life-la Google irundhalum, answer ellam nee dhan. Nee illama future imagine panna try panninen… system hang aagiduchu 😵 So simple question: En kooda forever iruka ready-ah illa repeat la miss aaga poriya? 😏",
  "Hello chellam 🫶 En phone battery vida nee important. Nee smile panna, en stress ellam ‘delete’ aagudhu. Indha secret page-um, en secret happiness-um nee dhan. Kai pidichu life full-ah nadakka varuviya… escape button illa 💍😉",
  "Ei madam ❤️ En heart-ku OTP vandhudhu… adhu un name dhan. Nee pesuna podhum, en bad day-um Sunday-a maarudhu. Indha page unakaga, en life-um unakaga. Forever nu option choose pannalama? No cancel policy 😌",
  "Hello di queen 👑 En life-la problem irundha solution nee. Sandai potalum, 5 nimisham kooda un mela kovam irukka maatengudhu 😅 Indha secret page oru reason-ku… That reason is YOU. Forever en partner-a irupa? 💖",
  "Heyyy heartbeat 🥹 En heart speedometer-la one level extra irundha, adhu unakaga dhan. Nee siricha podhum, en future full bright-a theriyudhu. Indha page unakaga create panninen… But en whole life-ah unakaga reserve panniten. Deal confirm ah? 😍",
  "Hello di cutie 😏 En life movie-la heroine nee dhan. Background music-um, climax-um ellame nee irundha perfect. Indha page oru small gift… Aana en love unlimited offer. Accept pannuviya illa thinking mode-la irukiya? 😜",
  "Ei ❤️ En heart enna pannudhu nu ketta… ‘Un kooda future plan pannudhu’ nu sollum. Indha page secret-ah irundhalum, En feelings romba open-ah irukku. En kai pidichu lifetime update-a irupa? 💍😌",
  "Hello en world 🌍 Nee vandha appuram, en life-la dark mode off. Smile-um peace-um free-ah kedachiduchu. Indha page-um, en heart-um password protected… Password nee dhan. Forever unlock pannalama? 😎❤️",
  "Heyyy love 😌 En life-la risk edutha ore decision nee… Aana adhu dhan best decision. Indha page small-ah irukkalam, But en love romba perusu. So simple-ah ketkaren… En kooda forever irupa illa miss pannuva? 😏💖"
];
const sole = [
  "“Indha page unakaga panna special ah… password-um illa, permission-um illa — en heart-la already nee dhaan owner.” 💖",
  "“Indha page unakaga… en life-oda best decision nee nu solla oru chinna try.” ❤️✨",
];
const adminMessages = [
  "Admin sir vandhutaru 😎 Careful-ah handle pannunga!",
  "Power irukku nu over scene podaadha boss 😂",
  "Admin access granted. System unna paakudhu 👀",
  "Wrong move pannina… log irukku da 😏"
];

const guestMessages = [
  "Idhu secret page da 🤫 Loose talk venam",
  "Username password yaar kitayum sollaadha 😤",
  "Ulla vandhutta, scene podaama irunga 😌",
  "Private page la public behaviour venam 😎"
];

const Welcome = [
  "Romba private area da 😎 Access irundha dhan ulla varalam.",
  "Private gallery. Permission irundha paaru. Illa na poidu",
 "This is a private gallery. Content is personal. Viewer discretion advised",
 "You are entering a personal space. Respect it or exit",
 "This page is locked. Curiosity unlocked it",
 "Private memories ahead. No sharing. No nonsense",
];
const logout = [
  "Logout pannita. Ippo nadandhathu ellam marandhudu 😌",
  "Ithu varaikkum porumai irundhadhuku nandri",
 "Ellam paathuta. Ippo po",
 "Logout done. Screenshot eduthirukka maata nu namburen",
 "You’ve logged out. Thanks for respecting the space",
];

  const getRandomMessage = (messages) =>
    messages[Math.floor(Math.random() * messages.length)];

  const fetchFiles = async (scriptUrl) => {
    if (!scriptUrl) return;

    try {
      const res = await fetch(
        `${backendUrl}/api/list-files?scriptUrl=${encodeURIComponent(scriptUrl)}`
      );
      const data = await res.json();
      if (data.success) {
        setFiles(data.files);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const typeText = (text, setter, callback) => {
    let i = 0;
    setter("");

    const typeNext = () => {
      if (i < text.length) {
        setter(text.slice(0, i + 1));
        i++;
        typingTimeout.current = setTimeout(typeNext, 40);
      } else if (callback) {
        typingTimeout.current = setTimeout(callback, 2000);
      }
    };

    typeNext();
  };

  useEffect(() => {
    typeText(getRandomMessage(welcome), setPreLoginMsg, () =>
      setShowLogin(true)
    );

    return () => clearTimeout(typingTimeout.current);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch(`${backendUrl}/api/secret-login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setLoggedIn(true);
        setIsAdmin(data.isAdmin || false);
        setSoleUser(data.sole || false);
        setAccess(data.access || {});

        if (data.access?.publicUrl) {
          fetchFiles(data.access.publicUrl);
          setActiveFolder("public");
        } else if (data.access?.privateUrl) {
          fetchFiles(data.access.privateUrl);
          setActiveFolder("private");
        }

        let message = "";

        if (data.sole) {
          message =
            getRandomMessage(sole) + " " + getRandomMessage(soleMessages);
        } else if (data.isAdmin) {
          message = getRandomMessage(adminMessages);
        } else {
          message = getRandomMessage(guestMessages);
        }

        typeText(message, setPostLoginMsg, () => setShowGallery(true));
      } else {
        const invalidMsg =
          "Indha page unakku illa nu system solludhu 🤭";

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
    setFiles([]);
    setUsers([]);

    typeText(getRandomMessage(logout), setPreLoginMsg, () =>
      setShowLogin(true)
    );
  };

  const handleToggleUsers = async () => {
    if (showUsersList) {
      setShowUsersList(false);
      return;
    }

    setLoadingUsers(true);

    try {
      const res = await fetch(
        `${backendUrl}/api/admin/users?adminUsername=${username}&adminPassword=${password}`
      );

      const data = await res.json();

      if (data.success) {
        setUsers(data.users);
        setShowUsersList(true);
      }
    } catch (err) {
      setUserError(err.message);
    } finally {
      setLoadingUsers(false);
    }
  };

  const filtered =
    filter === "images"
      ? files.filter((f) => f.mimeType.startsWith("image/"))
      : filter === "videos"
      ? files.filter((f) => f.mimeType.startsWith("video/"))
      : files;

  return (
    <div className="secret-gallery-container">
      {!loggedIn ? (
        <div className="secret-login-container">
          {!showLogin ? (
            <h2>{preLoginMsg}</h2>
          ) : (
            <form className="secret-login-form" onSubmit={handleLogin}>
              <h2>Secret Login</h2>

              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className="login-buttons">
                <button type="submit">Login</button>
                <button type="button" onClick={() => window.close()}>
                  Close
                </button>
              </div>

              {error && <p className="error">{error}</p>}
            </form>
          )}
        </div>
      ) : (
        <>
          {!showGallery ? (
            <div className="secret-login-container">
              <h2>{postLoginMsg}</h2>
            </div>
          ) : (
            <>
              <div className="header">
                <h2>
                  Welcome, {username}
                  {soleUser && (
                    <span className="sole-tag">(My Sole 💖)</span>
                  )}
                </h2>

                <div className="header-buttons">
                  {isAdmin && (
                    <button
                      className="list-users-btn"
                      onClick={handleToggleUsers}
                    >
                      {loadingUsers ? "Loading..." : "List Users"}
                    </button>
                  )}

                  <button className="logout-btn" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              </div>

              {showUsersList && (
                <div className="users-list">
                  <table>
                    <thead>
                      <tr>
                        <th>Username</th>
                        <th>Admin</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user, i) => (
                        <tr key={i}>
                          <td>{user.username}</td>
                          <td>{user.isAdmin ? "Yes" : "No"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              <div className="secret-page">
                <h2>Secret Gallery</h2>

                <div className="filter-buttons">
                  <button onClick={() => setFilter("all")}>All</button>
                  <button onClick={() => setFilter("images")}>Images</button>
                  <button onClick={() => setFilter("videos")}>Videos</button>
                </div>

                <div className="gallery-grid">
                  {filtered.map((file) =>
                    file.mimeType.startsWith("image/") ? (
                      <div key={file.id} className="gallery-item">
                        <img
                          src={`${backendUrl}/api/files?url=${encodeURIComponent(
                            file.url
                          )}`}
                          alt={file.name}
                          onClick={() =>
                            setZoomedImg(
                              `${backendUrl}/api/files?url=${encodeURIComponent(
                                file.url
                              )}`
                            )
                          }
                        />
                      </div>
                    ) : (
                      <div key={file.id} className="gallery-item video-item">
                        <video controls>
                          <source
                            src={`${backendUrl}/api/files?url=${encodeURIComponent(
                              file.url
                            )}`}
                          />
                        </video>
                      </div>
                    )
                  )}
                </div>
              </div>

              {zoomedImg && (
                <div className="zoom-overlay" onClick={() => setZoomedImg(null)}>
                  <img src={zoomedImg} alt="Zoomed" className="zoomed-image" />
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