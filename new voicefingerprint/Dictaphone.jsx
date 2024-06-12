const Dictaphone = () => {
  const { transcript, resetTranscript, browserSupportsSpeechRecognition, startListening, stopListening } = useSpeechRecognition();

  const startRecording = () => {
    startListening();
  };

  const stopRecording = () => {
    stopListening();
  };

  const resetRecording = () => {
    resetTranscript();
  };

  if (!browserSupportsSpeechRecognition) {
    return <div>This browser does not support speech recognition.</div>;
  }

  return (
    <div>
      <button onClick={startRecording}>Start</button>
      <button onClick={stopRecording}>Stop</button>
      <button onClick={resetRecording}>Reset</button>
      <p>{transcript}</p>
    </div>
  );
};
