import { createRoot } from 'react-dom/client'
import './index.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from './App';
import storepage from './Redux/store'
import {Provider} from "react-redux"


createRoot(document.getElementById('root')).render(
<Provider store={storepage}>
    <App />
    </Provider>

)
