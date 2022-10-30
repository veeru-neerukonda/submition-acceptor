import InputForm from "./Components/Input/InputForm";

import styles from './App.module.css'

function App() {
    return(
        <div className={styles.app}>
            <InputForm onNewSubmition={submition => console.log(submition.id,submition.name,submition.age)} />
        </div>
    );
}

export default App;