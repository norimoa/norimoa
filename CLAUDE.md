# 놀이모아 작업 규칙

- 웹사이트 본체는 `index.html` 한 파일이에요. 기능 수정은 여기서 하세요.
- `delete-account.html`(계정 삭제 안내), `sw.js`, `manifest.webmanifest`, 아이콘 PNG는 사이트에서 쓰는 파일이니 지우지 마세요.
- `index (1).html`, `index_15.html` 같은 복사본은 만들지 마세요.

## 배포
- 요청받은 기능 개발을 마치면 PR을 만들지 말고 바로 `main`에 반영해서 웹사이트에서 볼 수 있게 하세요.
  - 작업 브랜치에 커밋·푸시한 뒤 `origin/main`을 먼저 병합하고, `git push origin HEAD:main`으로 올리세요.
  - 강제 푸시(force push)로 `main` 기록을 덮어쓰지 마세요.
- 반영 전에 웹(데스크톱)과 모바일 화면 크기 둘 다에서 바뀐 부분을 확인하세요.
