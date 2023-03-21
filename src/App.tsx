import { useState } from 'react'
import Tic_tac_toe from './assets/script/Tic_tac_toe'
import "./assets/style/index.css"

function App() {

    return (
        <div className='main'>
            <Tic_tac_toe/>
            <footer>
                <div className="center">
                    <span>Created in React, by Paulo Junior</span>
                    <div className='centralize'>
                        <a href="https://github.com/pauloJ34"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="" /></a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default App
