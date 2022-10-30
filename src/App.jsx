import InputForm from "./Components/Input/InputForm";

import styles from './App.module.css'
import Display from "./Components/Output/Display";
import { useState } from "react";

function App() {
    const [submitions,setSubmitions] = useState([]);

    return(
        <div className={styles.app}>
            <InputForm onNewSubmition={submition => setSubmitions((prev) => [...prev,submition])} />
            <Display submitions={submitions} />
        </div>
    );
}

export default App;