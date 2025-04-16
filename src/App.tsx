// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Provider } from 'react-redux'
import { Router } from './router'
import { store } from './store'

function App() {
  // const [count, setCount] = useState(0)

  return (
    // <StyleProvider hashPriority="high" transformers={[legacyLogicalPropertiesTransformer]}>
		<Provider store={store}>
			{/* <ConfigProvider locale={jaJP}> */}
				<Router />
			{/* </ConfigProvider> */}
		</Provider>
	// </StyleProvider> 
  )
}

export default App
