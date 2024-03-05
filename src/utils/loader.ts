export const loader = `
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  display: block;
  overflow-y: hidden;
  overflow-x: hidden;
}

#globalLoader {
  position: fixed;
  z-index: 100;
  background-color: #0d1117;
  left: 0;
  top: 0;
  width: 100dvw;
  height: 100dvh;
  transition: 300ms;
  backdrop-filter: blur(5px);
  overflow: hidden;
}

.loader {
  position: absolute;
  top: calc(50% - 50px);
  left: calc(50% - 50px);
  animation: spin 2s linear infinite;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-image: linear-gradient(90deg, #b721ff44 0%, #6625ff44 50%, #257cff44 100%);
}

.loader .loader-inside {
  position: absolute;
  top: 7px;
  left: 7px;
  width: 86px;
  height: 86px;
  border-radius: 45px;
  background-image: linear-gradient(90deg, #b721ff88 0%, #6625ff88 50%, #257cff88 100%);
}

@keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`
