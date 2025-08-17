import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [questionType, setQuestionType] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  // Truth questions database
  const truthQuestions = [
    "What's the most embarrassing thing that happened to you in school?",
    "What's your biggest fear?",
    "What's the worst lie you've ever told?",
    "What's your most embarrassing childhood memory?",
    "What's the most trouble you've ever been in?",
    "What's your biggest regret?",
    "What's the most embarrassing thing in your search history?",
    "What's your biggest insecurity?",
    "What's the most embarrassing thing you've done while drunk?",
    "What's your biggest pet peeve?",
    "What's the most embarrassing thing you've ever worn?",
    "What's your biggest guilty pleasure?",
    "What's the most embarrassing thing you've ever said to someone?",
    "What's your biggest fear about the future?",
    "What's the most embarrassing thing you've ever done in public?",
    "What's your biggest weakness?",
    "What's the most embarrassing thing you've ever posted on social media?",
    "What's your biggest secret?",
    "What's the most embarrassing thing you've ever done to impress someone?",
    "What's your biggest disappointment in life?"
  ];

  // Dare challenges database
  const dareChallenges = [
    "Let the group post something on your social media",
    "Call your mom and tell her you're getting married",
    "Let someone in the group text anyone in your contacts",
    "Dance for 30 seconds without music",
    "Let the group look through your photo gallery for 1 minute",
    "Call a random number and sing happy birthday",
    "Let someone in the group post a status on your social media",
    "Do your best impression of someone in the group",
    "Let the group send a text to your crush/ex",
    "Sing a song while holding your nose",
    "Let someone in the group check your browser history",
    "Do 20 push-ups right now",
    "Let the group look through your messages for 30 seconds",
    "Call your dad and tell him you're dropping out of school",
    "Let someone in the group check your recent calls",
    "Do your best animal impression",
    "Let the group post a selfie on your social media",
    "Call a friend and tell them you're moving to another country",
    "Let someone in the group check your emails",
    "Do a handstand against the wall for 10 seconds",
    "Let the group look through your apps for 1 minute"
  ];

  const generateQuestion = (type) => {
    setIsAnimating(true);
    setQuestionType(type);
    
    setTimeout(() => {
      let question = '';
      if (type === 'truth') {
        const randomIndex = Math.floor(Math.random() * truthQuestions.length);
        question = truthQuestions[randomIndex];
      } else if (type === 'dare') {
        const randomIndex = Math.floor(Math.random() * dareChallenges.length);
        question = dareChallenges[randomIndex];
      }
      
      setCurrentQuestion(question);
      setIsAnimating(false);
    }, 500);
  };

  const getQuestionColor = () => {
    if (questionType === 'truth') return '#4CAF50';
    if (questionType === 'dare') return '#F44336';
    return '#2196F3';
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">🎲 Dare or Truth Generator 🎲</h1>
        
        <div className="button-container">
          <button 
            className="btn btn-truth"
            onClick={() => generateQuestion('truth')}
            disabled={isAnimating}
          >
            💚 Truth
          </button>
          <button 
            className="btn btn-dare"
            onClick={() => generateQuestion('dare')}
            disabled={isAnimating}
          >
            🔥 Dare
          </button>
          <button 
            className="btn btn-random"
            onClick={() => generateQuestion(Math.random() > 0.5 ? 'truth' : 'dare')}
            disabled={isAnimating}
          >
            🎯 Random
          </button>
        </div>

        <div className="question-container">
          {currentQuestion && (
            <div 
              className={`question-card ${isAnimating ? 'animating' : ''}`}
              style={{ borderColor: getQuestionColor() }}
            >
              <div className="question-type" style={{ color: getQuestionColor() }}>
                {questionType === 'truth' ? '💚 TRUTH' : '🔥 DARE'}
              </div>
              <p className="question-text">{currentQuestion}</p>
            </div>
          )}
          
          {!currentQuestion && !isAnimating && (
            <div className="placeholder">
              <p>Click a button above to generate a question!</p>
            </div>
          )}
          
          {isAnimating && (
            <div className="loading">
              <div className="spinner"></div>
              <p>Generating...</p>
            </div>
          )}
        </div>

        <div className="instructions">
          <h3>How to Play:</h3>
          <ul>
            <li>Click "Truth" for a question you must answer honestly</li>
            <li>Click "Dare" for a challenge you must complete</li>
            <li>Click "Random" to get either a truth or dare</li>
            <li>Be honest and have fun! 🎉</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
