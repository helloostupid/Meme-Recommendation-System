"use client"

import { useState } from 'react';
import './home.css';

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<File | null>(null);

  const handleUploadClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setDescription('');
    setImage(null);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImage(event.target.files[0]);
    }
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  return (
    <div className="container">
      {/* Top Section */}
      <div className="topSection">
        <div className="centerText">
          <h1>Meme Recommendation System</h1>
        </div>
        <div className="uploadButtonWrapper">
          <button className="uploadButton" onClick={handleUploadClick}>
            Upload a meme
          </button>
        </div>
      </div>

      {/* Chat Container - Centering content horizontally and vertically */}
      <div className="chatContainer">
        <div className="inputWrapper">
          <input className="input" placeholder="Type a meme description..." />
          <button className="sendButton">Get memes</button>
        </div>
      </div>

      {isModalOpen && (
        <div className="modalOverlay" onClick={handleCloseModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Upload a meme</h2>
            <input type="file" onChange={handleImageUpload} />
            <textarea
              className="textArea"
              placeholder="Description"
              value={description}
              onChange={handleDescriptionChange}
            />
            <button className="submitButton" onClick={handleCloseModal}>
              Get recommendations
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
