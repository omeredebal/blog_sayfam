import React, { useState } from "react";

const App = () => {
  const [projects, setProjects] = useState([
    { id: 1, name: "Proje 1", description: "Bu proje hakkında kısa bir açıklama." },
    { id: 2, name: "Proje 2", description: "Bu proje hakkında kısa bir açıklama." }
  ]);
  const [editingProject, setEditingProject] = useState(null);
  const [editName, setEditName] = useState("");
  const [editDescription, setEditDescription] = useState("");

  const addProject = () => {
    const newProject = {
      id: projects.length + 1,
      name: `Proje ${projects.length + 1}`,
      description: "Yeni eklenen proje açıklaması."
    };
    setProjects([...projects, newProject]);
  };

  const startEditing = (project) => {
    setEditingProject(project.id);
    setEditName(project.name);
    setEditDescription(project.description);
  };

  const saveEdit = (id) => {
    setProjects(projects.map(project => 
      project.id === id ? { ...project, name: editName, description: editDescription } : project
    ));
    setEditingProject(null);
  };

  const deleteProject = (id) => {
    setProjects(projects.filter(project => project.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Profil Alanı */}
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-md p-6 text-center">
        <img
          src="https://via.placeholder.com/150"
          alt="Profil Fotoğrafı"
          className="w-32 h-32 mx-auto rounded-full border-4 border-gray-300"
        />
        <h1 className="text-2xl font-bold mt-4">Ömer Edebalı</h1>
        <p className="text-gray-600">Full Stack Developer & Tech Enthusiast</p>
      </div>

      {/* Projeler Alanı */}
      <div className="max-w-4xl mx-auto mt-8">
        <h2 className="text-xl font-semibold mb-4">Projelerim</h2>
        <button 
          onClick={addProject} 
          className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
        >
          Yeni Proje Ekle
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map(project => (
            <div key={project.id} className="bg-white p-4 rounded-lg shadow-md">
              {editingProject === project.id ? (
                <div>
                  <input 
                    type="text" 
                    value={editName} 
                    onChange={(e) => setEditName(e.target.value)} 
                    className="border p-1 w-full mb-2"
                  />
                  <textarea 
                    value={editDescription} 
                    onChange={(e) => setEditDescription(e.target.value)} 
                    className="border p-1 w-full mb-2"
                  />
                  <button 
                    onClick={() => saveEdit(project.id)} 
                    className="px-3 py-1 bg-green-500 text-white rounded shadow-md hover:bg-green-600"
                  >
                    Kaydet
                  </button>
                </div>
              ) : (
                <div>
                  <h3 className="font-semibold">{project.name}</h3>
                  <p className="text-gray-600">{project.description}</p>
                  <button 
                    onClick={() => startEditing(project)}
                    className="mt-2 px-3 py-1 bg-yellow-500 text-white rounded shadow-md hover:bg-yellow-600"
                  >
                    Düzenle
                  </button>
                  <button 
                    onClick={() => deleteProject(project.id)}
                    className="mt-2 ml-2 px-3 py-1 bg-red-500 text-white rounded shadow-md hover:bg-red-600"
                  >
                    Sil
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
