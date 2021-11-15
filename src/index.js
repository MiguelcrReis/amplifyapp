import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
//Adequando os arquivos do React para usar os recursos do Amplify
import Amplify from 'aws-amplify'
import config from './aws-exports'
//Adequando para o português
import { I18n } from 'aws-amplify'
import AmplifyI18n from 'amplify-i18n'

//Adequando os arquivos do React para usar os recursos do Amplify
Amplify.configure(config)

//Adequando para o português
const locales = ['en', 'fr', 'pt-BR']
AmplifyI18n.configure(locales)
I18n.setLanguage('pt-BR')

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
