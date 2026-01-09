'use client';

import { useSpeech } from '@/hooks/use-speech';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useState, useEffect } from 'react';

export default function SpeechTestPage() {
  const { speak, isSpeaking, stopSpeaking } = useSpeech();
  const [testText, setTestText] = useState('');
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [synthStatus, setSynthStatus] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      const loadVoices = () => {
        const availableVoices = window.speechSynthesis.getVoices();
        console.log('Loaded voices:', availableVoices);
        setVoices(availableVoices);
        setSynthStatus(`Loaded ${availableVoices.length} voices`);
      };

      loadVoices();
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = loadVoices;
      }
    } else {
      setSynthStatus('Speech Synthesis NOT supported');
    }
  }, []);

  const testBrowserAPI = () => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      console.log('Testing browser SpeechSynthesis API directly...');
      const utterance = new SpeechSynthesisUtterance('Testing browser speech API');
      utterance.onstart = () => console.log('✅ Direct API: Speech started');
      utterance.onend = () => console.log('✅ Direct API: Speech ended');
      utterance.onerror = (e) => console.error('❌ Direct API Error:', e);
      window.speechSynthesis.speak(utterance);
    }
  };

  const testSamples = [
    { text: 'Hello', label: 'Hello' },
    { text: 'A', label: 'Letter A' },
    { text: 'Apple', label: 'Apple' },
    { text: 'The quick brown fox jumps over the lazy dog', label: 'Long sentence' },
  ];

  return (
    <div className="container mx-auto p-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Speech Synthesis Test Page</h1>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>System Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p><strong>Speech Synthesis Available:</strong> {typeof window !== 'undefined' && window.speechSynthesis ? '✅ Yes' : '❌ No'}</p>
            <p><strong>Voices Status:</strong> {synthStatus}</p>
            <p><strong>Currently Speaking:</strong> {isSpeaking ? '🗣️ Yes' : '🔇 No'}</p>
            <p><strong>Number of Voices:</strong> {voices.length}</p>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Available Voices</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="max-h-48 overflow-y-auto">
            {voices.length === 0 ? (
              <p className="text-muted-foreground">No voices loaded yet...</p>
            ) : (
              <ul className="space-y-1">
                {voices.map((voice, index) => (
                  <li key={index} className="text-sm">
                    {voice.name} ({voice.lang}) {voice.default ? '⭐' : ''}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Quick Tests</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            {testSamples.map((sample) => (
              <Button
                key={sample.text}
                onClick={() => {
                  console.log(`Testing: "${sample.text}"`);
                  speak(sample.text, undefined, true);
                }}
                disabled={isSpeaking}
                variant="outline"
              >
                {sample.label}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Direct Browser API Test</CardTitle>
        </CardHeader>
        <CardContent>
          <Button onClick={testBrowserAPI} variant="secondary">
            Test Browser API Directly
          </Button>
          <p className="text-sm text-muted-foreground mt-2">
            This bypasses our custom hook and tests the browser API directly
          </p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Custom Text Test</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <input
              type="text"
              value={testText}
              onChange={(e) => setTestText(e.target.value)}
              placeholder="Enter text to speak..."
              className="flex-1 px-3 py-2 border rounded"
            />
            <Button
              onClick={() => {
                console.log(`Speaking custom text: "${testText}"`);
                speak(testText, undefined, true);
              }}
              disabled={isSpeaking || !testText}
            >
              Speak
            </Button>
            <Button
              onClick={stopSpeaking}
              disabled={!isSpeaking}
              variant="destructive"
            >
              Stop
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Console Logs</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Open the browser console (F12) to see detailed logs about voice loading,
            speech synthesis calls, and any errors.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
