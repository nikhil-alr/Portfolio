import { useState } from 'react';

interface ContactItemProps {
  icon: string;
  text: string;
}

import userImage from "../assets/user.png";

function ContactItem({ icon, text }: ContactItemProps) {
  return (
    <div className="contact-item">
      <span className="material-symbols-outlined icon">{icon}</span>
      <span>{text}</span>
    </div>
  );
}

export default function Hero() {
  const [personalDetails, setPersonalDetails] = useState({
    name: "Nikhil Kamboj",
    title: "Lead Software Engineer",
    bio: "Seasoned software engineer with a focus on mobile and backend technologies. Expert in building high-performance applications across Java, Kotlin, and Swift ecosystems.",
    imageUrl: `url(${userImage})`,
    contactDetails: [
      { icon: "location_on", text: "San Francisco, CA" },
      { icon: "mail", text: "john.doe@example.com" },
      { icon: "link", text: "github.com/johndoe" }
    ]
  });

  const [editingField, setEditingField] = useState<string | null>(null);
  const [tempValues, setTempValues] = useState({
    name: personalDetails.name,
    title: personalDetails.title,
    bio: personalDetails.bio
  });

  const handleEdit = (field: string) => {
    setEditingField(field);
    setTempValues({
      name: personalDetails.name,
      title: personalDetails.title,
      bio: personalDetails.bio
    });
  };

  const handleSave = (field: string) => {
    setPersonalDetails(prev => ({
      ...prev,
      [field]: tempValues[field as keyof typeof tempValues]
    }));
    setEditingField(null);
  };

  const handleCancel = () => {
    setEditingField(null);
  };

  return (
    <section className="hero-section">
      <div className="hero-image-wrapper">
        <div className="hero-image-glow"></div>
        <div
          className="hero-image"
          aria-label={`Professional headshot of ${personalDetails.name}`}
          style={{ backgroundImage: `${personalDetails.imageUrl}` }}
        ></div>
      </div>
      <div className="hero-content">
        {editingField === 'name' ? (
          <div className="flex items-center gap-2 mb-2">
            <input
              type="text"
              value={tempValues.name}
              onChange={(e) => setTempValues(prev => ({ ...prev, name: e.target.value }))}
              className="text-2xl font-bold bg-transparent border border-gray-300 rounded px-2 py-1"
              autoFocus
            />
            <button onClick={() => handleSave('name')} className="px-2 py-1 text-xs bg-green-100 hover:bg-green-200 text-green-700 rounded transition-colors">
              Save
            </button>
            <button onClick={handleCancel} className="px-2 py-1 text-xs bg-red-100 hover:bg-red-200 text-red-700 rounded transition-colors">
              Cancel
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-2 mb-2">
            <h2 className="hero-name">{personalDetails.name}</h2>
            <button onClick={() => handleEdit('name')} className="px-2 py-1 text-xs bg-blue-100 hover:bg-blue-200 text-blue-700 rounded transition-colors">
              Edit
            </button>
          </div>
        )}

        {editingField === 'title' ? (
          <div className="flex items-center gap-2 mb-4">
            <input
              type="text"
              value={tempValues.title}
              onChange={(e) => setTempValues(prev => ({ ...prev, title: e.target.value }))}
              className="text-xl bg-transparent border border-gray-300 rounded px-2 py-1"
              autoFocus
            />
            <button onClick={() => handleSave('title')} className="px-2 py-1 text-xs bg-green-100 hover:bg-green-200 text-green-700 rounded transition-colors">
              Save
            </button>
            <button onClick={handleCancel} className="px-2 py-1 text-xs bg-red-100 hover:bg-red-200 text-red-700 rounded transition-colors">
              Cancel
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-2 mb-4">
            <p className="hero-title">{personalDetails.title}</p>
            <button onClick={() => handleEdit('title')} className="px-2 py-1 text-xs bg-blue-100 hover:bg-blue-200 text-blue-700 rounded transition-colors">
              Edit
            </button>
          </div>
        )}

        {editingField === 'bio' ? (
          <div className="flex items-start gap-2 mb-6">
            <textarea
              value={tempValues.bio}
              onChange={(e) => setTempValues(prev => ({ ...prev, bio: e.target.value }))}
              className="text-base bg-transparent border border-gray-300 rounded px-2 py-1 w-full"
              rows={3}
              autoFocus
            />
            <div className="flex flex-col gap-1">
              <button onClick={() => handleSave('bio')} className="px-2 py-1 text-xs bg-green-100 hover:bg-green-200 text-green-700 rounded transition-colors">
                Save
              </button>
              <button onClick={handleCancel} className="px-2 py-1 text-xs bg-red-100 hover:bg-red-200 text-red-700 rounded transition-colors">
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="flex items-start gap-2 mb-6">
            <p className="hero-bio">{personalDetails.bio}</p>
            <button onClick={() => handleEdit('bio')} className="px-2 py-1 text-xs bg-blue-100 hover:bg-blue-200 text-blue-700 rounded transition-colors mt-1">
              Edit
            </button>
          </div>
        )}
        
        <div className="hero-contact-info">
          {personalDetails.contactDetails.map((detail, index) => (
            <ContactItem key={index} {...detail} />
          ))}
        </div>
      </div>
    </section>
  );
}
