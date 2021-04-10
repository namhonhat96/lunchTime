import { useState } from 'react';
import { SendOutlined, PictureOutlined, FileImageOutlined } from '@ant-design/icons';
import { sendMessage, isTyping } from 'react-chat-engine';

const MessageForm = (props) => {
  const [value, setValue] = useState('');
  const { chatId, creds } = props;

  const handleChange = (event) => {
    setValue(event.target.value);
    isTyping(props, chatId);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const text = value.trim();

    if (text.length > 0) {
      sendMessage(creds, chatId, { text });
    }

    setValue('');
  };

  const uploadDoc = (event) => {
    sendMessage(creds, chatId, { files: event.target.files, text: '' });
  }

  const handleUpload = (event) => {
    sendMessage(creds, chatId, { files: event.target.files, text: '' });
  };

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <input
        className="message-input"
        placeholder="Send a message..."
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <label htmlFor="upload-doc">
        <span className="image-button">
          <FileImageOutlined className="picture-icon" />
        </span>
      </label>

      <label htmlFor="upload-button">
        <span className="doc-button">
          <PictureOutlined className="picture-icon" />
        </span>
      </label>
      <input id="upload-doc" type="file" multiple={true} style={{ display: 'none' }} onChange={uploadDoc.bind(this)} />
      <input
        type="file"
        multiple={true}
        id="upload-button"
        style={{ display: 'none' }}
        onChange={handleUpload.bind(this)}
      />
      <button type="submit" className="send-button">
        <SendOutlined className="send-icon" />
      </button>
    </form>
  );
};

export default MessageForm;
