import React, { useState } from 'react';
import { Calendar, AlertCircle, CheckCircle, Activity, Heart, ArrowLeft, ChevronRight, Home } from 'lucide-react';

const BurnoutPredictionApp = () => {
  const [currentStep, setCurrentStep] = useState('home');
  const [currentQuestionSection, setCurrentQuestionSection] = useState('A');
  const [answers, setAnswers] = useState({});
  const [duration, setDuration] = useState(null);
  const [result, setResult] = useState(null);

  const questions = {
    A: {
      title: 'A. 정서적·신체적 소진',
      items: [
        '최근 몇 주간, 알람이 울린 후 30분 이상 침대에 머무는 날이 늘었다.',
        '최근 몇 주간, 1시간 이상 집중해서 일(혹은 공부)을 지속하기 어렵다.',
        '최근 몇 주간, 좋아하는 걸 먹거나 보러 갈 힘도 들지 않는다.',
        '최근 몇 주간, 가만히 앉아있을 때도 심장이 빠르게 뛰거나 숨이 가빠지는 일이 잦다.',
        '최근 몇 주간, 해야 할 일의 첫 단계를 시작하는 데 1시간 이상 걸린다.',
        '최근 몇 주간, 설거지나 빨래 같은 일상적인 집안일을 미루는 일이 잦다.',
        '최근 몇 주간, 10분 전에 읽은 문장이나 지시 사항을 다시 확인해야 한다.',
        '최근 몇 주간, 잠들기까지 30분 이상 걸리거나, 새벽에 깨서 다시 잠들지 못하는 날이 주 3회 이상이다.',
        '최근 몇 주간, 진통제를 복용하는 횟수가 평소보다 늘었다.'
      ]
    },
    B: {
      title: 'B. 냉소·탈동기화',
      items: [
        '일(혹은 공부)을 할 때, 이것이 1년 뒤에도 가치가 있을지 의문이 든다.',
        '동료(혹은 타인)가 어려움을 이야기할 때, 그들의 감정에 반응하지 않고 사무적으로 대한다.',
        '일(혹은 공부)과 관련 없는 새로운 지식이나 정보를 찾아보는 행동을 멈췄다.',
        '마감 기한을 넘기거나 실수를 했을 때, 이전처럼 마음이 불편하지 않다.',
        '회의에서 의견을 제시하거나 새로운 업무를 자원하는 일을 피한다.',
        '누군가 나에게 말을 걸 때, 대화가 빨리 끝나기를 바란다.',
        '이 일을 계속해야 할 이유를 스스로에게 설명하기 어렵다.'
      ]
    },
    C: {
      title: 'C. 효능감 저하·무력감',
      items: [
        '예전에 1시간 걸리던 일을 지금은 2시간 이상 붙잡고 있다.',
        '중요한 결정이나 결과 발표를 앞두고 다른 사람의 의견에 전적으로 의존한다.',
        '작은 실수를 했을 때, \'나는 이것밖에 안 되는 사람\'이라고 생각한다.',
        '문제가 발생했을 때, 해결책을 찾기보다 상황을 피하는 방법을 먼저 생각한다.'
      ]
    },
    D: {
      title: 'D. 회복·수면·행동 지표 (역문항)',
      items: [
        '아침에 눈을 떴을 때, 바로 물 한 잔을 마시거나 스트레칭을 할 수 있다.',
        '일(혹은 공부)이 끝난 후, 휴대폰이나 TV를 보지 않고 30분 이상 다른 활동을 한다.',
        '주 1회 이상, 일(혹은 공부)과 관련 없는 활동에 2시간 이상 시간을 쓴다.',
        '최근 일주일 동안, 나의 속마음을 털어놓을 수 있는 사람과 30분 이상 대화했다.'
      ]
    }
  };

  const scaleLabels = ['전혀 그렇지 않다', '가끔 그렇다', '자주 그렇다', '매우 자주 그렇다'];

  const durationOptions = [
    { label: '최근 몇 주 (1~4주)', value: 1.0, days: '7-28일' },
    { label: '1~3개월', value: 1.5, days: '30-90일' },
    { label: '3~6개월', value: 2.0, days: '90-180일' },
    { label: '6개월 이상', value: 2.5, days: '180일 이상' }
  ];

  const solutions = {
    philosophical: [
      { title: '나의 가치 재정립', detail: '공부를 점수가 아닌 호기심으로 접근합니다. 현재 공부 중인 내용에서 가장 흥미로운 주제 1가지를 찾아 5분간 관련 영상이나 기사를 검색해보세요.', areas: 'C', principle: '내적 동기 부여(Intrinsic Motivation) - 학업의 목적을 외부 평가에서 나의 흥미로 전환하여 냉소를 해소합니다.' },
      { title: '자율성 회복', detail: '지금 학교나 학원에 다니지 않아도 된다면 하루가 어떻게 달라질지 생각해보고, 그 중 가장 쉬운 것 1가지를 오늘 30분 실행해보세요.', areas: 'C', principle: '대안적 현실 탐색(Alternative Reality) - 통제권을 가진 상황을 상상하여 무기력을 해체하고 자율성을 회복합니다.' },
      { title: '자기 가치 재정의', detail: '성적이 아닌 나라는 사람을 설명하는 단어 3가지를 찾아 적고, 눈에 잘 띄는 곳에 붙여두세요.', areas: 'L', principle: '자기 가치 분리(Self-Worth Decoupling) - 나의 가치=성적 공식을 깨고 성적과 무관한 존재 가치를 재확인합니다.' }
    ],
    structural: [
      { title: '시간 블록 명확화', detail: '이번 주 계획 중 가장 중요하지 않은 과제 1가지를 하지 않기로 결정하고, 그 시간에 휴식을 넣으세요.', areas: 'L', principle: '경계 설정(Boundary Setting) - 모든 것을 다 해야 한다는 강박에서 벗어나 하지 않을 권리를 행사합니다.' },
      { title: '공부 환경 재설계', detail: '공부 장소에서 가장 거슬리는 물건 1가지를 치우거나, 가장 좋아하는 물건 1가지를 배치하여 환경 통제감을 회복하세요.', areas: 'L', principle: '환경 통제감 회복(Environmental Control) - 작은 영역을 통제하여 무기력을 해체하고 주체성을 회복합니다.' },
      { title: '경쟁자 재정의', detail: '다른 사람과의 비교 대신 어제의 나와 비교하여, 단 1%라도 나아진 점을 찾아 기록하세요.', areas: 'C', principle: '사회적 비교 최소화(Social Comparison Reduction) - 타인과의 비교를 중단하고 자기 성장에 집중하여 냉소를 줄입니다.' },
      { title: '성공 기준 분할', detail: '큰 목표 대신 오늘 1시간 집중하기나 문제 3개 풀기 같은 작은 성공 기준을 설정하고 달성 시 1분간 자신에게 보상을 주세요.', areas: 'L', principle: '행동 활성화(Behavioral Activation) - 작은 성공을 통해 행동→긍정적 결과의 선순환을 재가동합니다.' }
    ],
    recovery: [
      { title: '비생산적 15분 의무화', detail: '매일 저녁 9시, 책상에서 떨어진 곳에서 학업과 무관한 활동(음악 듣기, 하늘 보기 등)을 15분간 실행하세요. 절대 공부로 대체하지 마세요.', areas: 'E, R', principle: '회복의 의무화(Mandatory Recovery) - 휴식을 의무적 활동으로 규정하여 죄책감을 제거하고 에너지를 재충전합니다.' },
      { title: '감정적 지지 요청', detail: '주 1회 가족이나 친구에게 나 지금 너무 힘들어. 그냥 들어만 줘라고 말하고, 조언 없이 3분간 감정만 이야기하세요.', areas: 'R, C', principle: '사회적 지지 활성화(Social Support Activation) - 감정적 연결을 통해 고립감을 해소하고 소속감을 회복합니다.' },
      { title: '진로 탐색 최소화', detail: '어떤 직업을 가질까 대신 내가 싫어하는 직업 3가지를 적어보세요. 싫어하는 것을 명확히 하는 것이 더 쉽고 통제감을 줍니다.', areas: 'C', principle: '부정적 명확화(Negative Clarity) - 선택의 부담을 줄이고 통제감을 증진하여 진로 스트레스를 완화합니다.' }
    ]
  };

  const sectionOrder = ['A', 'B', 'C', 'D'];

  const getCurrentSectionIndex = () => sectionOrder.indexOf(currentQuestionSection);
  const getTotalProgress = () => {
    const totalQuestions = Object.values(questions).reduce((sum, section) => sum + section.items.length, 0);
    const answeredQuestions = Object.keys(answers).length;
    return Math.round((answeredQuestions / totalQuestions) * 100);
  };

  const handleAnswerChange = (section, index, value) => {
    setAnswers(prev => ({
      ...prev,
      [`${section}-${index}`]: parseInt(value)
    }));
  };

  const goToNextSection = () => {
    const currentIndex = getCurrentSectionIndex();
    if (currentIndex < sectionOrder.length - 1) {
      setCurrentQuestionSection(sectionOrder[currentIndex + 1]);
    } else {
      setCurrentStep('duration');
    }
  };

  const goToPrevSection = () => {
    const currentIndex = getCurrentSectionIndex();
    if (currentIndex > 0) {
      setCurrentQuestionSection(sectionOrder[currentIndex - 1]);
    } else {
      setCurrentStep('home');
    }
  };

  const calculateResults = () => {
    if (!duration) {
      alert('증상 지속 기간을 선택해주세요.');
      return;
    }

    // 영역별 점수 계산
    const E_score = Object.keys(answers)
      .filter(key => key.startsWith('A-'))
      .reduce((sum, key) => sum + answers[key], 0);
    
    const C_score = Object.keys(answers)
      .filter(key => key.startsWith('B-'))
      .reduce((sum, key) => sum + answers[key], 0);
    
    const L_score = Object.keys(answers)
      .filter(key => key.startsWith('C-'))
      .reduce((sum, key) => sum + answers[key], 0);
    
    const R_score = Object.keys(answers)
      .filter(key => key.startsWith('D-'))
      .reduce((sum, key) => sum + answers[key], 0);

    // BRI 계산
    const BRI = (0.4 * E_score) + (0.3 * C_score) + (0.3 * L_score) - (0.2 * R_score);
    
    // BRI_weighted 계산
    const BRI_weighted = BRI * duration;

    // 상태 분류 (BRI_weighted 기준)
    let status, statusColor, description, recommendations;
    
    if (BRI_weighted <= 10.0) {
      status = '양호합니다';
      statusColor = 'bg-green-100 border-green-500 text-green-800';
      description = '현재 상태는 안정적입니다. 회복 활동을 유지하고, 증상이 1개월 이상 지속되지 않도록 주의하십시오.';
      recommendations = [
        ...solutions.philosophical.slice(0, 2),
        ...solutions.recovery.slice(0, 2)
      ];
    } else if (BRI_weighted <= 20.0) {
      status = '번아웃 예정입니다';
      statusColor = 'bg-yellow-100 border-yellow-500 text-yellow-800';
      description = '소진 지표가 증가하고 있습니다. 특히 증상이 3개월 이상 지속되었다면, 의식적으로 휴식과 회복 활동을 늘려야 합니다.';
      recommendations = [
        ...solutions.philosophical,
        ...solutions.structural.slice(0, 2),
        ...solutions.recovery.slice(0, 2)
      ];
    } else if (BRI_weighted <= 35.0) {
      status = '이미 번아웃입니다';
      statusColor = 'bg-orange-100 border-orange-500 text-orange-800';
      description = '소진 수준이 심각한 단계에 도달했습니다. 업무량 조절, 충분한 휴식, 전문가와의 상담 등 적극적인 개입이 필요합니다.';
      recommendations = [
        ...solutions.structural,
        ...solutions.philosophical,
        ...solutions.recovery
      ];
    } else {
      status = '우울증이 의심됩니다';
      statusColor = 'bg-red-100 border-red-500 text-red-800';
      description = '번아웃의 심각한 단계이며, 우울증 증상과 겹칠 가능성이 높습니다. 즉시 전문가(정신건강의학과, 심리상담센터)의 진단과 도움을 받아야 합니다.';
      recommendations = [
        ...solutions.recovery,
        ...solutions.structural,
        ...solutions.philosophical
      ];
    }

    // D_net 계산
    const D_net = ((E_score + C_score + L_score) / 3) / (R_score + 1) * 0.5;
    
    // D-day 계산 (임계치 20.0 사용) + 30일 추가 (번아웃은 쉽게 오지 않음)
    const dday = Math.round((20.0 - BRI_weighted) / D_net) + 30;
    const ddayMin = dday;
    const ddayMax = dday + 7;

    // 캘린더 날짜 계산
    const today = new Date();
    const burnoutDate = new Date(today);
    if (dday > 0) {
      burnoutDate.setDate(today.getDate() + dday);
    }

    // 솔루션 적용 날짜들 (번아웃 예상일 전에 고르게 분산)
    const solutionDates = [];
    if (dday > 0) {
      const interval = Math.max(1, Math.floor(dday / recommendations.length));
      recommendations.forEach((_, idx) => {
        const date = new Date(today);
        date.setDate(today.getDate() + (idx + 1) * interval);
        if (date < burnoutDate) {
          solutionDates.push(date);
        } else {
          solutionDates.push(new Date(burnoutDate.getTime() - 86400000)); // 하루 전
        }
      });
    }

    setResult({
      E_score,
      C_score,
      L_score,
      R_score,
      BRI: BRI.toFixed(2),
      BRI_weighted: BRI_weighted.toFixed(2),
      duration,
      status,
      statusColor,
      description,
      recommendations,
      dday,
      ddayMin,
      ddayMax,
      burnoutDate,
      solutionDates,
      today
    });

    setCurrentStep('result');
  };

  const isCurrentSectionComplete = () => {
    const currentQuestions = questions[currentQuestionSection].items;
    return currentQuestions.every((_, idx) => 
      answers[`${currentQuestionSection}-${idx}`] !== undefined
    );
  };

  const isAllAnswered = () => {
    const totalQuestions = 
      questions.A.items.length + 
      questions.B.items.length + 
      questions.C.items.length + 
      questions.D.items.length;
    return Object.keys(answers).length === totalQuestions;
  };

  const generateCalendar = () => {
    if (!result) return null;

    const today = new Date(result.today);
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    
    // 현재월과 다음월 생성 (모바일에서는 2개월만)
    const months = [];
    for (let i = 0; i < 2; i++) {
      const date = new Date(currentYear, currentMonth + i, 1);
      months.push(date);
    }

    return months.map((monthStart, monthIdx) => {
      const year = monthStart.getFullYear();
      const month = monthStart.getMonth();
      const firstDay = new Date(year, month, 1).getDay();
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      
      const monthName = monthStart.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long' });
      
      const days = [];
      for (let i = 0; i < firstDay; i++) {
        days.push(<div key={`empty-${i}`} className="h-12 sm:h-16 border border-gray-200"></div>);
      }
      
      for (let day = 1; day <= daysInMonth; day++) {
        const currentDate = new Date(year, month, day);
        const isToday = currentDate.toDateString() === result.today.toDateString();
        const isBurnoutDay = result.status !== '양호합니다' && result.dday > 0 && currentDate.toDateString() === result.burnoutDate.toDateString();
        
        const solutionIndex = result.solutionDates.findIndex(
          d => d.toDateString() === currentDate.toDateString()
        );
        const hasSolution = solutionIndex !== -1;
        
        days.push(
          <div 
            key={day} 
            className={`h-12 sm:h-16 border border-gray-200 p-1 ${
              isToday ? 'bg-blue-50 border-blue-500' : ''
            } ${isBurnoutDay ? 'bg-red-100 border-red-500' : ''} ${
              hasSolution ? 'bg-green-50' : ''
            }`}
          >
            <div className="text-xs sm:text-sm font-semibold">{day}</div>
            {isToday && <div className="text-xs text-blue-600 font-bold">오늘</div>}
            {isBurnoutDay && result.dday > 0 && (
              <div className="text-xs text-red-600 font-bold">
                D-{result.ddayMin}~{result.ddayMax}
              </div>
            )}
            {hasSolution && (
              <div className="text-xs text-green-600">
                ✓{solutionIndex + 1}
              </div>
            )}
          </div>
        );
      }
      
      return (
        <div key={monthIdx} className="mb-6">
          <h3 className="text-lg font-bold mb-2">{monthName}</h3>
          <div className="grid grid-cols-7 gap-0 border border-gray-300 text-xs sm:text-sm">
            {['일', '월', '화', '수', '목', '금', '토'].map(day => (
              <div key={day} className="bg-gray-100 p-1 sm:p-2 text-center font-semibold border border-gray-200">
                {day}
              </div>
            ))}
            {days}
          </div>
        </div>
      );
    });
  };

  // 홈 화면
  if (currentStep === 'home') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-8">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Activity className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">번아웃 예측</h1>
            <p className="text-gray-600 text-sm">모바일 진단 시스템</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
            <h2 className="text-lg font-bold mb-4 text-gray-800">📋 진단 절차</h2>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                <span className="text-sm text-gray-700">설문 답변 (약 5분)</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                <span className="text-sm text-gray-700">번아웃 위험도 계산</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                <span className="text-sm text-gray-700">맞춤 솔루션 제공</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                <span className="text-sm text-gray-700">관리 캘린더 생성</span>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4 mb-6">
            <div className="flex items-start space-x-2">
              <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
              <div>
                <p className="text-sm text-yellow-800">
                  <strong>참고사항:</strong> 이 진단은 의학적 진단을 대체할 수 없습니다. 
                  심각한 증상이 지속되면 전문가의 도움을 받으세요.
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={() => setCurrentStep('survey')}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-6 rounded-2xl text-lg shadow-lg transition-colors"
          >
            진단 시작하기
          </button>
        </div>
      </div>
    );
  }

  // 설문 화면
  if (currentStep === 'survey') {
    const currentSection = questions[currentQuestionSection];
    const progress = getTotalProgress();

    return (
      <div className="min-h-screen bg-gray-50">
        {/* 헤더 */}
        <div className="bg-white shadow-sm sticky top-0 z-10">
          <div className="flex items-center justify-between p-4">
            <button onClick={goToPrevSection} className="p-2">
              <ArrowLeft className="w-6 h-6 text-gray-700" />
            </button>
            <div className="flex-1 mx-4">
              <div className="text-sm text-gray-600 text-center mb-1">
                진행률 {progress}%
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
            <div className="text-sm text-gray-600">
              {getCurrentSectionIndex() + 1}/4
            </div>
          </div>
        </div>

        <div className="p-4 pb-20">
          <div className="max-w-md mx-auto">
            <h2 className="text-xl font-bold mb-6 text-gray-800 text-center">
              {currentSection.title}
            </h2>

            <div className="space-y-6">
              {currentSection.items.map((question, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow-sm p-4">
                  <p className="mb-4 text-gray-700 text-sm leading-relaxed">
                    {question}
                  </p>
                  <div className="space-y-2">
                    {[0, 1, 2, 3].map(value => (
                      <label 
                        key={value} 
                        className={`flex items-center p-3 border-2 rounded-xl cursor-pointer transition-all ${
                          answers[`${currentQuestionSection}-${idx}`] === value 
                            ? 'border-blue-500 bg-blue-50 shadow-sm' 
                            : 'border-gray-200 hover:border-blue-300 bg-white'
                        }`}
                      >
                        <input
                          type="radio"
                          name={`${currentQuestionSection}-${idx}`}
                          value={value}
                          onChange={(e) => handleAnswerChange(currentQuestionSection, idx, e.target.value)}
                          className="sr-only"
                        />
                        <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
                          answers[`${currentQuestionSection}-${idx}`] === value
                            ? 'border-blue-500 bg-blue-500'
                            : 'border-gray-300'
                        }`}>
                          {answers[`${currentQuestionSection}-${idx}`] === value && (
                            <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                          )}
                        </div>
                        <span className="text-sm text-gray-700 flex-1">{scaleLabels[value]}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 하단 고정 버튼 */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
          <div className="max-w-md mx-auto">
            <button
              onClick={goToNextSection}
              disabled={!isCurrentSectionComplete()}
              className={`w-full font-bold py-3 px-6 rounded-xl transition-colors ${
                isCurrentSectionComplete()
                  ? 'bg-blue-500 hover:bg-blue-600 text-white shadow-lg' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {getCurrentSectionIndex() === sectionOrder.length - 1 ? '다음 단계' : '다음 섹션'}
              <ChevronRight className="w-5 h-5 inline ml-1" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 지속 기간 선택 화면
  if (currentStep === 'duration') {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm sticky top-0 z-10">
          <div className="flex items-center p-4">
            <button onClick={() => setCurrentStep('survey')} className="p-2">
              <ArrowLeft className="w-6 h-6 text-gray-700" />
            </button>
            <h1 className="text-lg font-bold ml-4">증상 지속 기간</h1>
          </div>
        </div>

        <div className="p-4 pb-20">
          <div className="max-w-md mx-auto">
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 mb-6">
              <p className="text-sm text-blue-800">
                현재 느끼는 소진, 냉소, 무력감 등의 증상이 시작되거나 심해진 것은 대략 언제부터입니까?
              </p>
            </div>

            <div className="space-y-3">
              {durationOptions.map((option, idx) => (
                <label 
                  key={idx}
                  className={`block p-4 border-2 rounded-2xl cursor-pointer transition-all ${
                    duration === option.value 
                      ? 'border-blue-500 bg-blue-50 shadow-sm' 
                      : 'border-gray-200 hover:border-blue-300 bg-white'
                  }`}
                >
                  <input
                    type="radio"
                    name="duration"
                    value={option.value}
                    onChange={(e) => setDuration(parseFloat(e.target.value))}
                    className="sr-only"
                  />
                  <div className="flex items-center">
                    <div className={`w-5 h-5 rounded-full border-2 mr-3 ${
                      duration === option.value
                        ? 'border-blue-500 bg-blue-500'
                        : 'border-gray-300'
                    }`}>
                      {duration === option.value && (
                        <div className="w-3 h-3 bg-white rounded-full mx-auto mt-0.5"></div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-800">{option.label}</div>
                      <div className="text-sm text-gray-600">{option.days}</div>
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
          <div className="max-w-md mx-auto">
            <button
              onClick={calculateResults}
              disabled={!duration || !isAllAnswered()}
              className={`w-full font-bold py-3 px-6 rounded-xl transition-colors ${
                duration && isAllAnswered()
                  ? 'bg-blue-500 hover:bg-blue-600 text-white shadow-lg' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              결과 확인하기
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 결과 화면
  if (currentStep === 'result') {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm sticky top-0 z-10">
          <div className="flex items-center justify-between p-4">
            <h1 className="text-lg font-bold">진단 결과</h1>
            <button
              onClick={() => {
                setCurrentStep('home');
                setCurrentQuestionSection('A');
                setAnswers({});
                setDuration(null);
                setResult(null);
              }}
              className="p-2"
            >
              <Home className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>

        <div className="p-4 pb-8">
          <div className="max-w-md mx-auto space-y-6">
            {/* 상태 결과 */}
            <div className={`border-l-4 p-4 rounded-2xl ${result.statusColor}`}>
              <div className="flex items-center mb-3">
                {result.status === '양호합니다' && <CheckCircle className="w-8 h-8 mr-3" />}
                {result.status === '번아웃 예정입니다' && <AlertCircle className="w-8 h-8 mr-3" />}
                {result.status === '이미 번아웃입니다' && <Activity className="w-8 h-8 mr-3" />}
                {result.status === '우울증이 의심됩니다' && <Heart className="w-8 h-8 mr-3" />}
                <h2 className="text-xl font-bold">{result.status}</h2>
              </div>
              <p className="text-sm leading-relaxed mb-4">{result.description}</p>
              
              {/* 점수 정보 */}
              <div className="bg-white bg-opacity-70 rounded-xl p-3 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>BRI 점수:</span>
                  <span className="font-semibold">{result.BRI}</span>
                </div>
                <div className="flex justify-between">
                  <span>지속 기간 가중치:</span>
                  <span className="font-semibold">{result.duration}×</span>
                </div>
                {result.status !== '양호합니다' && result.dday > 0 && (
                  <div className="flex justify-between text-red-600">
                    <span>번아웃 D-day:</span>
                    <span className="font-bold">{result.ddayMin}일~{result.ddayMax}일 후</span>
                  </div>
                )}
                {result.status !== '양호합니다' && result.dday <= 0 && (
                  <div className="flex justify-between text-red-600">
                    <span>상태:</span>
                    <span className="font-bold">이미 임계치 초과</span>
                  </div>
                )}
              </div>
            </div>

            {/* 맞춤 솔루션 */}
            <div className="bg-white rounded-2xl shadow-sm p-4">
              <h3 className="text-lg font-bold mb-4 flex items-center text-gray-800">
                <Activity className="w-5 h-5 mr-2" />
                솔루션
              </h3>
              <div className="space-y-3">
                {result.recommendations.map((rec, idx) => (
                  <div key={idx} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-3 border-l-4 border-blue-500">
                    <div className="flex items-start">
                      <span className="font-bold text-blue-600 text-lg mr-3 mt-1">{idx + 1}</span>
                    <div className="flex-1">
                      <div className="flex items-center flex-wrap mb-2">
                        <span className="font-bold text-gray-800 mr-2">{rec.title}</span>
                        <span className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded">
                          {rec.areas}
                        </span>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed mb-2">{rec.detail}</p>
                      {rec.principle && (
                        <div className="bg-gray-50 p-2 rounded text-xs text-gray-600">
                          <strong>원리:</strong> {rec.principle}
                        </div>
                      )}
                        {result.solutionDates[idx] && result.dday > 0 && (
                          <div className="text-sm text-gray-600 mt-2">
                            📅 시작일: {result.solutionDates[idx].toLocaleDateString('ko-KR', { month: 'short', day: 'numeric' })}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-gray-100 rounded-xl">
                <p className="text-xs text-gray-700">
                  <strong>영역:</strong> E=정서적·신체적 소진, C=냉소·탈동기화, L=효능감 저하·무력감, R=회복·수면·행동
                </p>
              </div>
            </div>

            {/* 관리 캘린더 */}
            <div className="bg-white rounded-2xl shadow-sm p-4">
              <h3 className="text-lg font-bold mb-4 flex items-center text-gray-800">
                <Calendar className="w-5 h-5 mr-2" />
                번아웃 관리 캘린더
              </h3>
              <div className="mb-4 text-xs space-y-1 text-gray-700">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-blue-50 border-2 border-blue-500 mr-2"></div>
                  <span>오늘</span>
                </div>
                {result.status !== '양호합니다' && result.dday > 0 && (
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-red-100 border-2 border-red-500 mr-2"></div>
                    <span>번아웃 예상일</span>
                  </div>
                )}
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-50 mr-2"></div>
                  <span>솔루션 시작일</span>
                </div>
              </div>
              {generateCalendar()}
            </div>

            <button
              onClick={() => {
                setCurrentStep('home');
                setCurrentQuestionSection('A');
                setAnswers({});
                setDuration(null);
                setResult(null);
              }}
              className="w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-2xl transition-colors shadow-lg"
            >
              다시 진단하기
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default BurnoutPredictionApp;