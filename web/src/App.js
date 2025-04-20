import './styles/App.css';
import './styles/reset.css';
import {useState} from 'react';
import {makeRequest} from './api/api';  
import {SideMenu} from './components/SideMenu/SideMenu';
import {ChatMessage} from './components/ChatMessage/ChatMessage';

function App() {
  const [input, setInput] = useState("")
  const [chatLog, setChatLog] = useState([{
    user:"gpt",
    message: ""
  }])
  const [isCentered, setIsCentered] = useState(true);
  
  async function handleSubmit(e) {
    e.preventDefault()
    
    // Após o primeiro input, muda o formulário para a posição inferior
    setIsCentered(false);
    
    let response = await makeRequest({prompt: input})
    response = response.data.split('\n').map(line => <p>{line}</p>)
    
    setChatLog([...chatLog, {
      user: 'me',
      message: `${input}`
    },{
      user: 'gpt',
      message: response
    }])
    
    setInput("")
  }
  
  return (
    <div className='App'>
      <SideMenu></SideMenu>
      <section className={`chatbox ${isCentered ? 'centered-chatbox' : ''}`}>
          <div className='chat-log'>
            <h1>ChatGPT</h1>
          </div>
          
          {!isCentered && (
            <div className="messages-container">
              {chatLog.map((message, index) => (
                <ChatMessage key={index} message={message} />
              ))}
            </div>
          )}
          
          <div className={`chat-input-holder ${isCentered ? 'centered-input' : ''}`}>
            {isCentered ? (
              <div className='welcome'>
                Como posso ajudar?
              </div>
            ):(
              <div>
                
              </div>
            )}
            
            {isCentered ? (
              <div>
                {/* Nada a mostrar aqui quando centralizado */}
              </div>
            ) : (
              <div>
                {/* Exibe mensagens quando não está centralizado */}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <textarea
                className='chat-input-textarea'
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                  // Ajusta a altura automaticamente
                  e.target.style.height = 'auto';
                  e.target.style.height = `${e.target.scrollHeight}px`;
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit(e);
                  }
                }}
                placeholder='Pergunte alguma coisa'
              />
            </form>
          </div>
      </section>
    </div>
  );
}

export default App;