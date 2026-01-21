import React, { useState, useEffect, useMemo } from 'react';
import { BookOpen, Trophy, Gamepad2, FileText, BarChart3, ArrowLeft, ChevronRight, ChevronLeft, Copy, Check, RotateCcw } from 'lucide-react';
import { getStudyContentForClass, setSelectedClassInStorage, restartAppForClass, DEFAULT_CLASS } from './data/studyContent';
import { beginnerTestQuestions, tfQuestions } from './data/testQuestions';

const StudyPlannerApp = () => {
  const [showLogo, setShowLogo] = useState(true);
  const [setupComplete, setSetupComplete] = useState(false);
  const [userName, setUserName] = useState('');
  const [userClass, setUserClass] = useState(() => {
    try {
      const stored = localStorage.getItem('selectedClass');
      const parsed = stored ? Number(stored) : null;
      return parsed === 9 || parsed === 10 ? parsed : null;
    } catch {
      return null;
    }
  });
  const [focusSubject, setFocusSubject] = useState(null);
  const [beginnerTestComplete, setBeginnerTestComplete] = useState(false);
  const [currentTab, setCurrentTab] = useState('progress');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [testAnswers, setTestAnswers] = useState({});
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [currentCard, setCurrentCard] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [progress, setProgress] = useState({});
  const [notes, setNotes] = useState({});
  const [selectedNoteSubject, setSelectedNoteSubject] = useState(null);
  const [copied, setCopied] = useState(false);
  const [studiedChapters, setStudiedChapters] = useState({});
  const [gameState, setGameState] = useState({ type: null, score: 0, level: 1 });
  const [mathQuestion, setMathQuestion] = useState(null);
  const [memorySequence, setMemorySequence] = useState([]);
  const [userMemoryInput, setUserMemoryInput] = useState([]);
  const [showingSequence, setShowingSequence] = useState(false);
  const [tfQuestion, setTFQuestion] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [practiceQuestions, setPracticeQuestions] = useState([]);

  const subjects = {
    9: ['Computer Science', 'Maths', 'English', 'Physics', 'Chemistry', 'Biology', 'Urdu'],
    10: ['Computer Science', 'Maths', 'English', 'Physics', 'Chemistry', 'Biology', 'Pakistan Studies', 'Urdu']
  };

  const activeStudyContent = useMemo(() => {
    return getStudyContentForClass(userClass ?? DEFAULT_CLASS);
  }, [userClass]);

  // FIX: Define getBeginnerTestSubjects INSIDE component
  const getBeginnerTestSubjects = () => {
    const allSubjects = subjects[userClass] || [];
    return allSubjects.filter(s => 
      s !== focusSubject && 
      !(focusSubject === 'Computer Science' && s === 'Biology') &&
      !(focusSubject === 'Biology' && s === 'Computer Science')
    );
  };

  // FIX: Build practice test with 2 questions per subject
  const buildPracticeQuestions = () => {
    const testSubjects = getBeginnerTestSubjects();

    const pickN = (arr, n) => {
      const copy = Array.isArray(arr) ? [...arr] : [];
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy.slice(0, Math.min(n, copy.length));
    };

    let all = [];
    testSubjects.forEach((subject) => {
      const bank = beginnerTestQuestions[subject] || [];
      const chosen = pickN(bank, 2);
      all = all.concat(chosen.map(q => ({ ...q, subject })));
    });

    return all;
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowLogo(false), 3000);
    const saved = localStorage.getItem('studyPlannerData');
    if (saved) {
      const data = JSON.parse(saved);
      setUserName(data.userName || '');
      setUserClass(data.userClass || null);
      if (data.userClass === 9 || data.userClass === 10) setSelectedClassInStorage(data.userClass);
      setSetupComplete(data.setupComplete || false);
      setBeginnerTestComplete(data.beginnerTestComplete || false);
      
      // FIX: Only restore progress if setup is complete, otherwise start fresh at 0
      if (data.setupComplete && data.beginnerTestComplete) {
        setProgress(data.progress || {});
      } else {
        setProgress({});
      }
      
      setNotes(data.notes || {});
      setFocusSubject(data.focusSubject || null);
      setStudiedChapters(data.studiedChapters || {});
      setPracticeQuestions(data.practiceQuestions || []);
    }
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (setupComplete) {
      localStorage.setItem('studyPlannerData', JSON.stringify({
        userName,
        userClass,
        setupComplete,
        beginnerTestComplete,
        progress,
        notes,
        focusSubject,
        studiedChapters,
        practiceQuestions,
      }));
    }
  }, [userName, userClass, setupComplete, beginnerTestComplete, progress, notes, focusSubject, studiedChapters, practiceQuestions]);

  const handleSetupComplete = () => {
    if (userName && userClass && focusSubject) {
      setSelectedClassInStorage(userClass);
      setBeginnerTestComplete(false);
      setCurrentQuestion(0);
      setTestAnswers({});
      setPracticeQuestions(buildPracticeQuestions());
      setProgress({}); // Reset to 0
      setSetupComplete(true);
    }
  };

  const getAllTestQuestions = () => {
    return practiceQuestions;
  };

  const handleAnswerSelect = (ansIndex) => {
    const questions = getAllTestQuestions();
    const updatedAnswers = { ...testAnswers, [currentQuestion]: ansIndex };
    setTestAnswers(updatedAnswers);

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300);
    } else {
      setTimeout(() => {
        calculateProgress(updatedAnswers, questions);
        setBeginnerTestComplete(true);
        setCurrentTab('progress');
      }, 500);
    }
  };

  // UPDATE: Filter subjects for study section (exclude Biology+Maths if CS, exclude CS+Maths if Bio)
  const getStudySubjects = () => {
    const allSubjects = subjects[userClass] || [];
    return allSubjects.filter(s => {
      // If CS focus: exclude Biology and Maths
      if (focusSubject === 'Computer Science') {
        return s !== 'Biology' && s !== 'Maths';
      }
      // If Bio focus: exclude CS and Maths
      if (focusSubject === 'Biology') {
        return s !== 'Computer Science' && s !== 'Maths';
      }
      // For any other focus subject (shouldn't happen but safe fallback)
      return true;
    });
  };

  // ADD: Get subjects for progress bar (includes focus subject, excludes Maths for Bio)
  const getProgressSubjects = () => {
    const allSubjects = subjects[userClass] || [];
    
    // If Biology focus: exclude CS and Maths from progress
    if (focusSubject === 'Biology') {
      return allSubjects.filter(s => s !== 'Computer Science' && s !== 'Maths');
    }
    
    // If CS focus: exclude Biology from progress
    if (focusSubject === 'Computer Science') {
      return allSubjects.filter(s => s !== 'Biology');
    }
    
    // Default: show all subjects
    return allSubjects;
  };

  const calculateProgress = (answers, questions) => {
    const newProgress = {};

    (questions || []).forEach((q, idx) => {
      if (!newProgress[q.subject]) newProgress[q.subject] = { correct: 0, total: 0 };
      newProgress[q.subject].total++;
      if (answers?.[idx] === q.ans) newProgress[q.subject].correct++;
    });

    const finalProgress = {};
    Object.keys(newProgress).forEach(subj => {
      finalProgress[subj] = Math.round((newProgress[subj].correct / newProgress[subj].total) * 100);
    });

    // FIX: Ensure all subjects from getBeginnerTestSubjects() start at calculated value
    // and focus subject is not in progress (it's excluded from test)
    setProgress(finalProgress);
  };

  // GAME FUNCTIONS - Add after calculateProgress()

  const generateMathQuestion = (level) => {
    const questionTypes = ['basic', 'equation', 'percentage', 'ratio'];
    const type = questionTypes[Math.floor(Math.random() * questionTypes.length)];
    
    if (type === 'equation') {
      const a = Math.floor(Math.random() * 5) + 2;
      const b = Math.floor(Math.random() * 10) + 1;
      const x = Math.floor(Math.random() * 10) + 1;
      const c = a * x + b;
      return {
        question: `Solve for x: ${a}x + ${b} = ${c}`,
        answer: x,
        type: 'equation'
      };
    } else if (type === 'percentage') {
      const number = Math.floor(Math.random() * 100) + 50;
      const percent = [10, 20, 25, 50, 75][Math.floor(Math.random() * 5)];
      const answer = Math.round((number * percent) / 100);
      return {
        question: `What is ${percent}% of ${number}?`,
        answer: answer,
        type: 'percentage'
      };
    } else if (type === 'ratio') {
      const a = Math.floor(Math.random() * 5) + 2;
      const b = Math.floor(Math.random() * 5) + 2;
      const multiplier = Math.floor(Math.random() * 5) + 2;
      return {
        question: `If ratio is ${a}:${b}, and first term is ${a * multiplier}, find second term`,
        answer: b * multiplier,
        type: 'ratio'
      };
    } else {
      const ops = ['+', '-', '×', '÷'];
      const op = ops[Math.floor(Math.random() * ops.length)];
      const max = 10 + (level * 10);
      let a = Math.floor(Math.random() * max) + 1;
      let b = Math.floor(Math.random() * max) + 1;
      
      if (op === '÷') {
        a = a * b;
      }
      
      let answer;
      switch(op) {
        case '+': answer = a + b; break;
        case '-': answer = a - b; break;
        case '×': answer = a * b; break;
        case '÷': answer = a / b; break;
      }
      
      return { question: `${a} ${op} ${b} = ?`, answer, type: 'basic' };
    }
  };

  const startMathGame = () => {
    setGameState({ type: 'math', score: 0, level: 1 });
    setMathQuestion(generateMathQuestion(1));
    setFeedback(null);
    setGameOver(false);
  };

  const handleMathAnswer = (userAnswer) => {
    if (parseInt(userAnswer) === mathQuestion.answer) {
      setFeedback({ type: 'correct', msg: '🎉 Correct!' });
      setTimeout(() => {
        const newLevel = gameState.level + 1;
        setGameState({ ...gameState, score: gameState.score + 10, level: newLevel });
        setMathQuestion(generateMathQuestion(newLevel));
        setFeedback(null);
      }, 1000);
    } else {
      const newScore = Math.max(0, gameState.score - 5);
      
      if (newScore <= 0 && gameState.score > 0) {
        setFeedback({ type: 'wrong', msg: `😂 You're a Noob! You Can't Win! Better luck next time! 🤣` });
        setGameOver(true);
      } else {
        setFeedback({ type: 'wrong', msg: `❌ Wrong! Answer was ${mathQuestion.answer}. -5 points!` });
        setGameState({ ...gameState, score: newScore });
        setTimeout(() => {
          setMathQuestion(generateMathQuestion(gameState.level));
          setFeedback(null);
        }, 1500);
      }
    }
  };

  const startMemoryGame = () => {
    setGameState({ type: 'memory', score: 0, level: 1 });
    setUserMemoryInput([]);
    setGameOver(false);
    setFeedback(null);
    playMemorySequence(1);
  };

  const playMemorySequence = (level) => {
    const sequence = [];
    for (let i = 0; i < level + 2; i++) {
      sequence.push(Math.floor(Math.random() * 9));
    }
    setMemorySequence(sequence);
    setShowingSequence(true);
    setUserMemoryInput([]);
    
    sequence.forEach((cell, idx) => {
      setTimeout(() => {
        document.getElementById(`cell-${cell}`)?.classList.add('flash');
        setTimeout(() => {
          document.getElementById(`cell-${cell}`)?.classList.remove('flash');
        }, 400);
      }, idx * 600);
    });
    
    setTimeout(() => setShowingSequence(false), sequence.length * 600 + 500);
  };

  const handleMemoryClick = (cellIndex) => {
    if (showingSequence || gameOver) return;
    
    const newInput = [...userMemoryInput, cellIndex];
    setUserMemoryInput(newInput);
    
    if (newInput[newInput.length - 1] !== memorySequence[newInput.length - 1]) {
      setFeedback({ type: 'wrong', msg: '❌ Wrong sequence!' });
      setGameOver(true);
    } else if (newInput.length === memorySequence.length) {
      setFeedback({ type: 'correct', msg: '🎉 Perfect! Next level!' });
      setTimeout(() => {
        const newLevel = gameState.level + 1;
        setGameState({ ...gameState, score: gameState.score + 20, level: newLevel });
        playMemorySequence(newLevel);
        setFeedback(null);
      }, 1500);
    }
  };

  const startTFGame = () => {
    setGameState({ type: 'tf', score: 0, level: 1 });
    setGameOver(false);
    setFeedback(null);
    generateTFQuestion();
  };

  const generateTFQuestion = () => {
    const randomQ = tfQuestions[Math.floor(Math.random() * tfQuestions.length)];
    setTFQuestion(randomQ);
  };

  const handleTFAnswer = (userAnswer) => {
    if (gameOver) return;
    
    if (userAnswer === tfQuestion.answer) {
      setFeedback({ type: 'correct', msg: '✅ Correct!' });
      setTimeout(() => {
        setGameState({ ...gameState, score: gameState.score + 10 });
        generateTFQuestion();
        setFeedback(null);
      }, 1000);
    } else {
      setFeedback({ type: 'wrong', msg: '❌ Wrong!' });
      setGameOver(true);
    }
  };



  // RENDER FUNCTIONS - Add after game functions

  const renderStudyTab = () => {
    if (selectedChapter && selectedSubject) {
      const content = activeStudyContent[selectedSubject]?.content[selectedChapter];
      const chapterKey = `${selectedSubject}_${selectedChapter}`;
      const isStudied = studiedChapters[chapterKey] || false;

      const markAsStudied = () => {
        const newStudied = { ...studiedChapters, [chapterKey]: true };
        setStudiedChapters(newStudied);

        const allChapters = activeStudyContent[selectedSubject]?.chapters || [];
        const studiedCount = allChapters.filter(ch =>
          newStudied[`${selectedSubject}_${ch}`]
        ).length;
        const percentage = Math.round((studiedCount / allChapters.length) * 100);
        setProgress({ ...progress, [selectedSubject]: percentage });
      };

      return (
        <div className="animate-fadeIn">
          <button
            onClick={() => setSelectedChapter(null)}
            className="mb-6 flex items-center gap-2 text-purple-600 hover:text-purple-800 font-semibold transition-all"
          >
            <ArrowLeft size={20} /> Back to Chapters
          </button>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-3xl font-bold text-purple-600">{selectedChapter}</h2>
              <button
                onClick={markAsStudied}
                disabled={isStudied}
                className={`px-6 py-3 rounded-lg font-bold transition-all ${
                  isStudied
                    ? 'bg-green-500 text-white cursor-default'
                    : 'bg-purple-500 text-white hover:bg-purple-600 hover:scale-105'
                }`}
              >
                {isStudied ? '✓ Studied' : 'Mark as Studied'}
              </button>
            </div>

            <div className="space-y-8">
              <div className="transform hover:scale-[1.02] transition-transform">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  📌 Main Points
                </h3>
                <ul className="space-y-3">
                  {(content?.points || []).map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <span className="text-purple-600 font-bold text-lg">{idx + 1}.</span>
                      <span className="text-gray-700 leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="transform hover:scale-[1.02] transition-transform">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  📖 Definitions
                </h3>
                <div className="space-y-3">
                  {(content?.definitions || []).map((def, idx) => (
                    <div key={idx} className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border-l-4 border-blue-500 shadow-sm hover:shadow-md transition-shadow">
                      <p className="font-semibold text-gray-800 leading-relaxed">{def}</p>
                    </div>
                  ))}
                </div>
              </div>

              {content?.examples && (
                <div className="transform hover:scale-[1.02] transition-transform">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    💡 Examples
                  </h3>
                  <div className="space-y-3">
                    {(content?.examples || []).map((example, idx) => (
                      <div key={idx} className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border-l-4 border-green-500 shadow-sm hover:shadow-md transition-shadow">
                        <p className="text-gray-700 leading-relaxed">{example}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }

    if (selectedSubject) {
      const chapters = activeStudyContent[selectedSubject]?.chapters || [];
      
      return (
        <div className="animate-fadeIn">
          <button
            onClick={() => setSelectedSubject(null)}
            className="mb-6 flex items-center gap-2 text-purple-600 hover:text-purple-800 font-semibold"
          >
            <ArrowLeft size={20} /> Back to Subjects
          </button>

          <h2 className="text-3xl font-bold text-purple-600 mb-6">{selectedSubject} - Chapters</h2>

          <div className="grid gap-4">
            {chapters.map((chapter, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedChapter(chapter)}
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all text-left"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl mr-3">📚</span>
                    <span className="font-bold text-lg">{chapter}</span>
                  </div>
                  <ChevronRight className="text-purple-600" size={24} />
                </div>
              </button>
            ))}
          </div>
        </div>
      );
    }

    // FIX: Use filtered subjects that exclude CS/Bio conflict
    return (
      <div className="animate-fadeIn">
        <h2 className="text-3xl font-bold text-purple-600 mb-6">Select a Subject</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          {getStudySubjects().map((subject, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedSubject(subject)}
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all text-left"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-lg">{subject}</span>
                <ChevronRight className="text-purple-600" size={24} />
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  };

  const renderFlashcards = () => {
    if (!selectedSubject) {
      // FIX: Use filtered subjects
      return (
        <div className="max-w-4xl mx-auto animate-fadeIn">
          <h2 className="text-3xl font-bold text-purple-600 mb-6">Select Subject for Flashcards</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {getStudySubjects().map((subject, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSelectedSubject(subject);
                  setCurrentCard(0);
                  setFlipped(false);
                }}
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all text-left"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-lg">{subject}</span>
                  <span className="text-3xl">🎴</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      );
    }

    const content = activeStudyContent[selectedSubject]?.content;
    const firstChapter = Object.keys(content || {})[0];
    const cards = content?.[firstChapter]?.definitions || [];

    return (
      <div className="max-w-2xl mx-auto animate-fadeIn">
        <button
          onClick={() => {
            setSelectedSubject(null);
            setFlipped(false);
            setCurrentCard(0);
          }}
          className="mb-6 flex items-center gap-2 text-purple-600 hover:text-purple-800 font-semibold"
        >
          <ArrowLeft size={20} /> Back to Subjects
        </button>

        <h2 className="text-3xl font-bold text-purple-600 mb-6">{selectedSubject} - Flashcards</h2>
        
        <div className="relative perspective-1000" style={{ height: '400px' }}>
          <div
            className="relative w-full h-full cursor-pointer transition-transform duration-700"
            style={{ 
              transformStyle: 'preserve-3d',
              transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
            }}
            onClick={() => setFlipped(!flipped)}
          >
            <div 
              className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-500 rounded-3xl shadow-2xl p-12 flex flex-col items-center justify-center text-center"
              style={{ 
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden'
              }}
            >
              <p className="text-3xl font-bold text-white mb-6">{cards[currentCard]?.split(':')[0]}</p>
              <p className="text-sm text-white/80 mt-8">👆 Click to see definition</p>
            </div>
            
            <div 
              className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl shadow-2xl p-12 flex flex-col items-center justify-center text-center"
              style={{ 
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)'
              }}
            >
              <p className="text-3xl font-bold text-white leading-relaxed mb-6 drop-shadow-lg">{cards[currentCard]?.split(':')[1] || cards[currentCard]}</p>
              <p className="text-sm text-white/80 mt-8">👆 Click to flip back</p>
            </div>
          </div>

          <div className="flex justify-between items-center mt-8">
            <button
              onClick={(e) => { 
                e.stopPropagation();
                setCurrentCard(Math.max(0, currentCard - 1)); 
                setFlipped(false); 
              }}
              disabled={currentCard === 0}
              className="flex items-center gap-2 px-6 py-3 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transform hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg"
            >
              <ChevronLeft size={20} /> Previous
            </button>
            
            <div className="text-center">
              <span className="text-gray-600 font-semibold text-lg">
                Card {currentCard + 1} / {cards.length}
              </span>
            </div>
            
            <button
              onClick={(e) => { 
                e.stopPropagation();
                setCurrentCard(Math.min(cards.length - 1, currentCard + 1)); 
                setFlipped(false); 
              }}
              disabled={currentCard === cards.length - 1}
              className="flex items-center gap-2 px-6 py-3 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transform hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg"
            >
              Next <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderProgress = () => {
    // FIX: Use filtered subjects that exclude Maths for Bio students
    const displaySubjects = getProgressSubjects();
    
    return (
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-purple-600">Your Progress 📊</h2>
          <button
            onClick={() => setProgress({})}
            className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transform hover:scale-105 transition-all shadow-lg"
          >
            <RotateCcw size={18} />
            Reset
          </button>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="space-y-6">
            {displaySubjects.map((subject) => {
              const percentage = progress[subject] || 0;
              
              return (
                <div key={subject} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-gray-800">{subject}</span>
                    <span className="text-purple-600 font-bold">{percentage}%</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-6 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-6 rounded-full transition-all duration-1000 flex items-center justify-end pr-2"
                      style={{ width: `${percentage}%` }}
                    >
                      {percentage > 0 && (
                        <span className="text-white text-xs font-bold">{percentage}%</span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  const renderNotes = () => {
    if (!selectedNoteSubject) {
      // FIX: Use filtered subjects
      return (
        <div className="max-w-4xl mx-auto animate-fadeIn">
          <h2 className="text-3xl font-bold text-purple-600 mb-6">Select Subject for Notes 📝</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {getStudySubjects().map((subject, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedNoteSubject(subject)}
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all text-left"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-bold text-lg block">{subject}</span>
                    <span className="text-sm text-gray-500">
                      {notes[`${subject}_${userClass}`] ? 'Has notes ✓' : 'No notes yet'}
                    </span>
                  </div>
                  <span className="text-3xl">📝</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      );
    }

    const noteKey = `${selectedNoteSubject}_${userClass}`;
    const currentNoteText = notes[noteKey] || '';

    const handleNoteSave = (text) => {
      setNotes({ ...notes, [noteKey]: text });
    };

    const handleCopy = () => {
      navigator.clipboard.writeText(currentNoteText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };

    return (
      <div className="max-w-4xl mx-auto animate-fadeIn">
        <button
          onClick={() => setSelectedNoteSubject(null)}
          className="mb-6 flex items-center gap-2 text-purple-600 hover:text-purple-800 font-semibold"
        >
          <ArrowLeft size={20} /> Back to Subjects
        </button>

        <h2 className="text-3xl font-bold text-purple-600 mb-6">{selectedNoteSubject} - Notes</h2>
        
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="mb-4 flex justify-between items-center">
            <p className="text-gray-600 font-semibold">Class {userClass} - {selectedNoteSubject}</p>
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transform hover:scale-105 transition-all shadow-md"
            >
              {copied ? <Check size={18} /> : <Copy size={18} />}
              {copied ? 'Copied!' : 'Copy Notes'}
            </button>
          </div>

          <textarea
            value={currentNoteText}
            onChange={(e) => handleNoteSave(e.target.value)}
            className="w-full h-96 p-6 border-2 border-purple-300 rounded-xl focus:border-purple-500 outline-none resize-none bg-gradient-to-br from-purple-50 to-pink-50 text-gray-800 leading-relaxed"
            placeholder={`Start typing your ${selectedNoteSubject} notes here...`}
          />

          <p className="text-sm text-green-600 mt-3 flex items-center gap-2">
            <Check size={16} /> Auto-saved locally
          </p>
        </div>
      </div>
    );
  };



  // GAMES RENDER - Add after renderNotes()

  const renderGames = () => {
    if (!gameState.type) {
      return (
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-purple-600 mb-6">Educational Games 🎮</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <button
              onClick={startMathGame}
              className="p-8 bg-gradient-to-br from-blue-400 to-blue-600 text-white rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all"
            >
              <div className="text-5xl mb-4">🔢</div>
              <h3 className="text-2xl font-bold mb-2">Quick Math Duel</h3>
              <p className="text-sm opacity-90">Test your calculation speed!</p>
            </button>

            <button
              onClick={startMemoryGame}
              className="p-8 bg-gradient-to-br from-purple-400 to-purple-600 text-white rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all"
            >
              <div className="text-5xl mb-4">🧠</div>
              <h3 className="text-2xl font-bold mb-2">Memory Grid</h3>
              <p className="text-sm opacity-90">Remember the sequence!</p>
            </button>

            <button
              onClick={startTFGame}
              className="p-8 bg-gradient-to-br from-green-400 to-green-600 text-white rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all"
            >
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-2xl font-bold mb-2">True / False</h3>
              <p className="text-sm opacity-90">Test your knowledge!</p>
            </button>
          </div>
        </div>
      );
    }

    // MATH GAME RENDER
    if (gameState.type === 'math' && mathQuestion) {
      return (
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={() => {
                setGameState({ type: null, score: 0, level: 1 });
                setGameOver(false);
                setFeedback(null);
              }}
              className="flex items-center gap-2 px-4 py-2 bg-white text-purple-600 rounded-lg hover:bg-purple-50 font-semibold shadow-lg transition-all"
            >
              ← Back to Games
            </button>
            <div className="text-right">
              <p className="text-2xl font-bold text-purple-600">Score: {gameState.score}</p>
              <p className="text-sm text-gray-600">Level {gameState.level}</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-12">
            <h3 className="text-4xl font-bold text-center text-gray-800 mb-8">
              {mathQuestion.question}
            </h3>

            {!gameOver ? (
              <input
                type="number"
                className="w-full p-4 text-2xl text-center border-4 border-purple-300 rounded-lg focus:border-purple-500 outline-none"
                placeholder="Your answer"
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && e.target.value) {
                    handleMathAnswer(e.target.value);
                    e.target.value = '';
                  }
                }}
              />
            ) : null}

            {feedback && (
              <div className={`mt-6 p-4 rounded-lg text-center font-bold text-lg ${
                feedback.type === 'correct' ? 'bg-green-100 text-green-700 animate-bounce' : 'bg-red-100 text-red-700'
              }`}>
                {feedback.msg}
                {gameOver && (
                  <div className="mt-4 flex gap-4 justify-center">
                    <button
                      onClick={() => startMathGame()}
                      className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 font-semibold shadow-lg transition-all"
                    >
                      🔄 Restart Game
                    </button>
                    <button
                      onClick={() => {
                        setGameState({ type: null, score: 0, level: 1 });
                        setGameOver(false);
                        setFeedback(null);
                      }}
                      className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 font-semibold shadow-lg transition-all"
                    >
                      ← Go Back
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      );
    }

    // MEMORY GAME RENDER
    if (gameState.type === 'memory') {
      return (
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={() => {
                setGameState({ type: null, score: 0, level: 1 });
                setFeedback(null);
                setGameOver(false);
              }}
              className="flex items-center gap-2 px-4 py-2 bg-white text-purple-600 rounded-lg hover:bg-purple-50 font-semibold shadow-lg transition-all"
            >
              ← Back to Games
            </button>
            <div className="text-right">
              <p className="text-2xl font-bold text-purple-600">Score: {gameState.score}</p>
              <p className="text-sm text-gray-600">Level {gameState.level}</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">
              {showingSequence ? 'Watch the sequence carefully! 👀' : 'Now click the cells in order! 👆'}
            </h3>

            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
              {[...Array(9)].map((_, idx) => (
                <button
                  key={idx}
                  id={`cell-${idx}`}
                  onClick={() => handleMemoryClick(idx)}
                  disabled={showingSequence || gameOver}
                  className="aspect-square bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl hover:scale-105 active:scale-95 transition-all shadow-lg disabled:cursor-not-allowed"
                  style={{ fontSize: '0' }}
                >
                  {idx + 1}
                </button>
              ))}
            </div>

            {feedback && (
              <div className={`mt-6 p-4 rounded-lg text-center font-bold text-xl ${
                feedback.type === 'correct' ? 'bg-green-100 text-green-700 animate-pulse' : 'bg-red-100 text-red-700'
              }`}>
                {feedback.msg}
                {gameOver && (
                  <div>
                    <p className="text-lg mt-2">💔 You Lost! Final Score: {gameState.score}</p>
                    <div className="mt-4 flex gap-4 justify-center">
                      <button
                        onClick={() => startMemoryGame()}
                        className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 font-semibold shadow-lg transition-all"
                      >
                        🔄 Restart Game
                      </button>
                      <button
                        onClick={() => {
                          setGameState({ type: null, score: 0, level: 1 });
                          setFeedback(null);
                          setGameOver(false);
                        }}
                        className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 font-semibold shadow-lg transition-all"
                      >
                        ← Go Back
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      );
    }

    // TRUE/FALSE GAME RENDER
    if (gameState.type === 'tf' && tfQuestion) {
      return (
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={() => {
                setGameState({ type: null, score: 0, level: 1 });
                setGameOver(false);
                setFeedback(null);
              }}
              className="flex items-center gap-2 px-4 py-2 bg-white text-purple-600 rounded-lg hover:bg-purple-50 font-semibold shadow-lg transition-all"
            >
              ← Back to Games
            </button>
            <p className="text-2xl font-bold text-purple-600">Score: {gameState.score}</p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-12">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8 leading-relaxed">
              {tfQuestion.statement}
            </h3>

            {!gameOver && (
              <div className="flex gap-6 justify-center">
                <button
                  onClick={() => handleTFAnswer(true)}
                  className="px-12 py-6 bg-green-500 text-white text-2xl font-bold rounded-xl hover:bg-green-600 transform hover:scale-110 active:scale-95 transition-all shadow-lg"
                >
                  ✓ TRUE
                </button>
                <button
                  onClick={() => handleTFAnswer(false)}
                  className="px-12 py-6 bg-red-500 text-white text-2xl font-bold rounded-xl hover:bg-red-600 transform hover:scale-110 active:scale-95 transition-all shadow-lg"
                >
                  ✗ FALSE
                </button>
              </div>
            )}

            {feedback && (
              <div className={`mt-6 p-4 rounded-lg text-center font-bold text-xl ${
                feedback.type === 'correct' ? 'bg-green-100 text-green-700 animate-bounce' : 'bg-red-100 text-red-700'
              }`}>
                {feedback.msg}
                {gameOver && (
                  <div>
                    <p className="text-lg mt-2">💔 You Lost! Final Score: {gameState.score}</p>
                    <div className="mt-4 flex gap-4 justify-center">
                      <button
                        onClick={() => startTFGame()}
                        className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 font-semibold shadow-lg transition-all"
                      >
                        🔄 Restart Game
                      </button>
                      <button
                        onClick={() => {
                          setGameState({ type: null, score: 0, level: 1 });
                          setGameOver(false);
                          setFeedback(null);
                        }}
                        className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 font-semibold shadow-lg transition-all"
                      >
                        ← Go Back
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      );
    }
  };

  // MAIN RENDER
  if (showLogo) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 flex items-center justify-center overflow-hidden relative">
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white opacity-20 animate-pulse"
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        {/* FIX: Center everything and ensure responsive sizing */}
        <div className="flex flex-col items-center justify-center text-center z-10 px-4">
          <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white drop-shadow-2xl animate-scale-pop mb-4">
            📚
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white animate-fade-in">
            Study Planner
          </h1>
        </div>
      </div>
    );
  }

  if (!setupComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-500 p-8 flex items-center justify-center">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full transform hover:scale-105 transition-transform">
          <h2 className="text-3xl font-bold text-purple-600 mb-6 text-center">Welcome! 🎓</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Your Name:</label>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full p-3 border-2 border-purple-300 rounded-lg focus:border-purple-500 outline-none"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Your Class:</label>
              <div className="flex gap-4">
                <button
                  onClick={() => { setUserClass(9); setSelectedClassInStorage(9); }}
                  className={`flex-1 p-4 rounded-lg font-bold transition-all ${
                    userClass === 9 ? 'bg-purple-500 text-white scale-105' : 'bg-gray-200 hover:bg-purple-200'
                  }`}
                >
                  Class 9
                </button>
                <button
                  onClick={() => { setUserClass(10); setSelectedClassInStorage(10); }}
                  className={`flex-1 p-4 rounded-lg font-bold transition-all ${
                    userClass === 10 ? 'bg-purple-500 text-white scale-105' : 'bg-gray-200 hover:bg-purple-200'
                  }`}
                >
                  Class 10
                </button>
              </div>
            </div>

            {userClass && (
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Focus Subject:</label>
                <div className="flex gap-4">
                  <button
                    onClick={() => setFocusSubject('Computer Science')}
                    className={`flex-1 p-4 rounded-lg font-bold transition-all ${
                      focusSubject === 'Computer Science' ? 'bg-blue-500 text-white scale-105' : 'bg-gray-200 hover:bg-blue-200'
                    }`}
                  >
                    💻 CS
                  </button>
                  <button
                    onClick={() => setFocusSubject('Biology')}
                    className={`flex-1 p-4 rounded-lg font-bold transition-all ${
                      focusSubject === 'Biology' ? 'bg-green-500 text-white scale-105' : 'bg-gray-200 hover:bg-green-200'
                    }`}
                  >
                    🧬 Bio
                  </button>
                </div>
              </div>
            )}

            <button
              onClick={handleSetupComplete}
              disabled={!userName || !userClass || !focusSubject}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Start Practice Test 🚀
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!beginnerTestComplete) {
    const questions = getAllTestQuestions();
    const currentQ = questions[currentQuestion];

    return (
      <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-500 p-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Practice Test</h2>
              <span className="text-lg font-semibold text-purple-600">
                Question {currentQuestion + 1} / {questions.length}
              </span>
            </div>

            <div className="mb-4 bg-gray-200 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>

            <div className="mb-6">
              <p className="text-sm text-gray-600 mb-2">Subject: {currentQ.subject}</p>
              <h3 className="text-xl font-bold text-gray-800 mb-6">{currentQ.q}</h3>

              <div className="space-y-3">
                {currentQ.opts.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswerSelect(idx)}
                    className="w-full p-4 text-left rounded-lg border-2 border-gray-300 hover:border-purple-500 hover:bg-purple-50 transition-all transform hover:scale-105"
                  >
                    <span className="font-semibold text-purple-600 mr-3">{String.fromCharCode(65 + idx)}.</span>
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-purple-600">Welcome, {userName}! 👋</h1>
            <p className="text-gray-600 mt-1">Let's make learning fun!</p>
          </div>
          
          <button
            onClick={() => {
              const newClass = userClass === 9 ? 10 : 9;
              restartAppForClass(newClass, { wipeAll: true });
            }}
            className="px-6 py-3 bg-white rounded-lg shadow-lg font-bold text-purple-600 hover:scale-105 transition-transform"
          >
            Class {userClass} ⇄ Switch
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-2 mb-8">
          <div className="flex gap-2 flex-wrap">
            {[
              { id: 'study', icon: BookOpen, label: 'Study' },
              { id: 'flashcards', icon: Trophy, label: 'Flashcards' },
              { id: 'games', icon: Gamepad2, label: 'Games' },
              { id: 'notes', icon: FileText, label: 'Notes' },
              { id: 'progress', icon: BarChart3, label: 'Progress' }
            ].map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setCurrentTab(tab.id);
                    setSelectedSubject(null);
                    setSelectedChapter(null);
                    setGameState({ type: null, score: 0, level: 1 });
                    setGameOver(false);
                    setFeedback(null);
                  }}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all ${
                    currentTab === tab.id
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white scale-105'
                      : 'hover:bg-purple-100 text-gray-700'
                  }`}
                >
                  <Icon size={20} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="animate-fadeIn">
          {currentTab === 'study' && renderStudyTab()}
          {currentTab === 'flashcards' && renderFlashcards()}
          {currentTab === 'games' && renderGames()}
          {currentTab === 'notes' && renderNotes()}
          {currentTab === 'progress' && renderProgress()}
        </div>
      </div>
    </div>
  );
};

export default StudyPlannerApp;