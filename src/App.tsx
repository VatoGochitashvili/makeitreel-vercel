import { useState } from 'react'
import './App.css'

function App() {
  const [transcript, setTranscript] = useState('')
  const [result, setResult] = useState('')

  const handleSummarize = async () => {
    try {
      const response = await fetch('https://your-backend-url/api/summarize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ transcript }),
      })

      const data = await response.json()
      setResult(data.shorts || 'No response received.')
    } catch (error) {
      setResult('Error connecting to backend.')
    }
  }

  return (
    <div style={{ padding: 20, fontFamily: 'Arial' }}>
      <h1>MakeItReel – AI Shorts Generator</h1>
      <textarea
        value={transcript}
        onChange={(e) => setTranscript(e.target.value)}
        placeholder="Paste your YouTube transcript here..."
        rows={10}
        style={{ width: '100%', padding: 10 }}
      />
      <br />
      <button onClick={handleSummarize}>Generate Shorts</button>
      <div style={{ marginTop: 20, whiteSpace: 'pre-wrap' }}>{result}</div>
    </div>
  )
}

export default App
