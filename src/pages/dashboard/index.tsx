import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../libs/contexts/auth-context';
import axios from 'axios';

const themes = ['default', 'theme1', 'theme2'];

const Dashboard: React.FC = () => {
  const { authState }: any = useContext(AuthContext);
  const [selectedTheme, setSelectedTheme] = useState('default');
  const [content, setContent] = useState({ text: '', images: [], links: [] });

  useEffect(() => {
    if (authState.user) {
      setSelectedTheme(authState.user.theme);
    }
  }, [authState.user]);

  const handleThemeChange = async (event: any) => {
    const newTheme = event.target.value;
    setSelectedTheme(newTheme);
    try {
      await axios.put(
        'http://localhost:3000/users/theme',
        { theme: newTheme },
        {
          headers: {
            Authorization: `Bearer ${authState.token}`,
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleContentChange = (type: any, value: any) => {
    setContent({ ...content, [type]: value });
  };

  const addImage = (image: any) => {
    setContent({ ...content, images: [...content.images, image] });
  };

  const addLink = (link: any) => {
    setContent({ ...content, links: [...content.links, link] });
  };

  return (
    <div className="container">
      <h2>Dashboard</h2>
      <div>
        <label>Select Theme:</label>
        <select value={selectedTheme} onChange={handleThemeChange}>
          {themes.map((theme) => (
            <option key={theme} value={theme}>{theme}</option>
          ))}
        </select>
      </div>
      <div>
        <h3>Content</h3>
        <textarea
          value={content.text}
          onChange={(e) => handleContentChange('text', e.target.value)}
        />
        <div>
          <h4>Images</h4>
          {content.images.map((image, index) => (
            <img key={index} src={image} alt="user content" />
          ))}
          <button onClick={() => addImage(prompt('Enter image URL'))}>Add Image</button>
        </div>
        <div>
          <h4>Links</h4>
          {content.links.map((link, index) => (
            <a key={index} href={link}>{link}</a>
          ))}
          <button onClick={() => addLink(prompt('Enter link URL'))}>Add Link</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
