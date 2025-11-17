# 번아웃 예측 모바일 웹사이트

번아웃 시기를 예측하고 관리 솔루션을 제공하는 모바일 전용 웹사이트입니다.

## 주요 기능

- 📱 **모바일 최적화**: 터치 친화적인 UI와 반응형 디자인
- 📊 **번아웃 진단**: MBI, BBI, OLBI, CBI 기반 과학적 측정
- 📅 **D-day 계산**: 번아웃 예상 시점 산출
- 🗓️ **관리 캘린더**: 솔루션 일정을 시각적으로 표시
- 💡 **맞춤 솔루션**: 개인 상태에 따른 회복 방법 제안

## 진단 결과 분류

- **양호합니다**: 적정한 수준으로 괜찮은 상태
- **번아웃 예정입니다**: 주의가 필요한 단계
- **이미 번아웃입니다**: 적극적인 관리가 필요한 상태
- **우울증이 의심됩니다**: 전문가 도움이 필요한 심각한 단계

## 기술 스택

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Mobile**: PWA 지원

## 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 프로덕션 서버 실행
npm run preview
```

## 프로젝트 구조

```
burnout/
├── public/              # 정적 파일
├── src/                 # 소스 코드
│   ├── BurnoutPredictionApp.jsx  # 메인 컴포넌트
│   ├── main.jsx         # 진입점
│   └── index.css        # 스타일시트
├── index.html           # HTML 템플릿
├── package.json         # 패키지 설정
├── vite.config.js       # Vite 설정
├── tailwind.config.js   # Tailwind 설정
└── postcss.config.js    # PostCSS 설정
```

## 기능 상세

### 1. 설문 조사
- 4개 영역 (A: 정서적·신체적 소진, B: 냉소·탈동기화, C: 효능감 저하·무력감, D: 회복·수면·행동)
- 모바일 친화적인 단계별 진행
- 실시간 진행률 표시

### 2. 번아웃 계산
- BRI (Burnout Risk Index) 산출
- 지속 기간 가중치 적용
- D-day 계산 알고리즘

### 3. 솔루션 제공
- 물리적 솔루션 (수면, 운동, 이완)
- 인지적 솔루션 (자기 연민, 가치 재정립)
- 행동적 솔루션 (작은 성공, 사회적 연결)

### 4. 캘린더 통합
- 번아웃 예상일 표시
- 솔루션 시작일 스케줄링
- 시각적 관리 도구

## 모바일 최적화 요소

- 터치 제스처 지원
- 뷰포트 최적화
- 로딩 성능 개선
- 오프라인 지원 (PWA)
- 터치 피드백
- 모바일 네비게이션

## 브라우저 지원

- iOS Safari 12+
- Chrome Mobile 80+
- Samsung Internet 12+
- Firefox Mobile 80+

## 라이선스

MIT License

## 연락처

문의사항이나 피드백은 이슈를 통해 남겨주세요.