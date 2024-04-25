// import Versions from './components/Versions'
// import electronLogo from './assets/electron.svg'


import Home from "@renderer/components/Home";

function App(): JSX.Element {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <div className="tw-h-screen tw-overflow-y-hidden tw-bg-zinc-900">
      <Home/>
    </div>
  )
}

export default App
