# > React를 이용한 Movie Web <

## Start 조건
- 1. node.js install
- 2. npx install
    npm install npx -g

## Fetch Data from an API 
- npm i axios     (data fetch (API) )

## API used
- Move API 
    https://yts-proxy.now.sh/list_movies.json?sort_by=rating

## GitHub Page
- 1. npm i gh-pages     : 깃 허브 업로드 권한을 허가해주는 모듈
- 2. package.json
    - format) "homepage" : "https://{Your GitHub ID}.github.io/{Repository Name}"
    - "homepage" : "https://nsns0101.github.io/react_project_movie" 추가
- 3. package.json
    - scripts안에 추가
        - "deploy": "gh-pages -d build",
        - "predeploy": "npm run build" 

- 4. npm run deploy
    - https://nsns0101.github.io/react_project_movie 에서 확인


- 5. react router
    - npm install react-router-dom


